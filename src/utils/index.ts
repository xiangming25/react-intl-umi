import config from './config';
import { workspace, Uri, FileType, window, MarkdownString, Location, Position } from 'vscode';
import { ILocales, IObject } from './interface';

let localsData: ILocales | undefined;

// 检查是否包含国际化配置
export async function checkHasLocales() {
  const { workspaceFolders, fs } = workspace;
  if (!workspaceFolders?.length) {return;}

  console.log('获取国际化文件内容...');
  let result: ILocales | undefined;

  for (let i = 0; i< workspaceFolders?.length;i++) {
    const localesPath = `${workspaceFolders[i].uri.fsPath}/${config.configPath}`;
    let directory = await fs.readDirectory(Uri.file(localesPath));
    // 只读取后缀为 js, jsx, ts, tsx, json 类的文件的内容
    directory = directory.filter(item => /.js|.jsx|.ts|.tsx|.json$/.test(item[0]));
    result = await getContent(localesPath, directory); 
  }
  localsData = result;
  return result;
}

export { localsData };

async function getContent(localesPath: string, directory: [string, FileType][]) {
  if (!directory.length) {return;};

  const { fs } = workspace;
  const result: Record<string, any> = {};
  for (let i = 0; i<directory.length; i++) {
    try {
      const ele = directory[i][0];
      const elePath = `${localesPath}/${ele}`;
      const content = await fs.readFile(Uri.file(elePath));
      const fileName = ele.split('.')[0];
      const contentStr = content.toString();
      const contentReg = /(['"]?[\w-.]+['"]?:\s?['"].*?['"])/g;
      const valueReg = /^\s{0,}['"](.*?)['"]/;
      // 匹配国际化配置根文件下的配置内容
      const contentArr = contentStr.match(contentReg);
      let obj: IObject = {};
      contentArr?.forEach(item => {
        const itemArr = item.split(':');
        obj[itemArr[0].replace(/['"]/g, '')] = {
          value: itemArr[1].replace(valueReg, '$1'),
          path: elePath,
        };
      });
      // 匹配项目中的相对路径
      const importUrls = contentStr.match(/(?<=import.*?['"]\.).*(?=['"])/g);
      if (!importUrls?.length) {
        result[fileName] = obj;
        continue;
      }
      // 循环读取引入文件中的内容
      for (let j = 0; j<importUrls.length; j++) {
        const childPath = `${localesPath}${importUrls[j]}${config.suffix}`;
        const childContent = await fs.readFile(Uri.file(childPath));
        const childContentObj = formatChildDetail(childContent.toString(), childPath);
        obj = {
          ...obj,
          ...childContentObj
        };
      }
      result[fileName] = obj;
  
    } catch (error) {
      console.log('log:error-------------: ', error);
    }
  }
  return result;
}

/**
 * 格式化子内容为对象
 * @param str
 * @returns
 */
function formatChildDetail(str: string, childPath: string) {
  const contentReg = /(['"`]?[\w-.]+['"`]?:\s?['"`].*?['"`])/g;
  const valueReg = /^\s{0,}['"`](.*?)['"`]/;

  const newStr = str.replace(/(:\s{0,})[\n\r]\s{0,}(['"`])/g, '$1$2');
  const resultObj: IObject = {};
  const childContentArr = newStr.match(contentReg);
  childContentArr?.forEach(item => {
    const itemArr = item.split(':');
    resultObj[itemArr[0].replace(/['"]/g, '')] = {
      value: itemArr[1].replace(valueReg, '$1'),
      path: childPath,
    };
  });
  return resultObj;
}


/**
 * 根据自定义的正则匹配，返回对应的字符串
 */
export function getRangeText(str: string, character: number, regExp: string) {
  const result: {value: string, startIndex: number, endIndex: number}[] = [];
  const regExpObj = getRegExp(regExp);
  if(!regExpObj) {return;};
  const reg = new RegExp(regExpObj, 'g');
  str.replace(reg,($0:string,$1:string,$2:number) => {
    result.push({
      value:$1,
      startIndex: $2+$0.indexOf($1),
      endIndex:$2+$0.indexOf($1)+$1.length -1
    });
    return ''; 
  });

  if(!result.length){return;};
  const newResult = result.filter(({
    startIndex,
    endIndex
  })=>{
    return (character>=startIndex &&  character<=endIndex); 
  });

  if(newResult.length){
    return newResult[0];
  }
  return undefined;
}

/** 解析正则表达式 */
export function getRegExp(regExpStr:string){
  if(/\\/.test(regExpStr)){
    window.showInformationMessage("react-intl-universal-i18n插件RegExp设置不支持\\反斜线");
    return;
  }

  if(!/\$1/.test(regExpStr)){
    window.showInformationMessage("react-intl-universal-i18n插件RegExp设置必须存在$1");
    return;
  }

  // 转译.()$
  let str=regExpStr.replace(/([\.\(\)\$])/g,"\\$1");
  // 转译 '" 为 ['"]
  str=str.replace(/['"]/g,"['\"]");
  // 转译$1，支持字母、数字、下划线、中横线、点号的数据格式的模板字符串
  str=str.replace(/\\\$1/g,"([\\w-.]+)");
  // 转译)$
  str=str.replace(/(\))$/,"$1?");

  try {
    new RegExp(str);
  } catch (error) {
    return;
  }
  return str;
}

/**
 * 获取多语言提示
 * @param value 多语言key值
 * @param document 当前文档对象
 * @param dictionary 多语言字典
 */
export function getTips(value:string, dictionary:any){
  const re = new MarkdownString();

  let str='';
  for (const k of Object.keys(dictionary)) {
    if(dictionary[k][value]){
      str += `"${k}" : "${dictionary[k][value].value}"\n\n`;
    }
  }
  if(str==='') {str="没有找到该key值的多语言,请检查是否正确设置了?";};

  re.appendMarkdown(str);
  return re;
};

/**
 * 获取文件位置
 */
export async function getWordLocation(value: string) {
  const { workspaceFolders } = workspace;
  let re=[];
  if (!localsData || !workspaceFolders?.length || !value) {return;}
  // 只要有文件包含，就可以跳转
  const checkHasLocales = Object.keys(localsData).some(key => localsData?.[key]?.[value]);
  if (!checkHasLocales) {return;};

  try {
    const filePathArr = Object.keys(localsData).map(key => localsData?.[key]?.[value]?.path);
    for (let i = 0; i < filePathArr.length; i++) {
      const word = await wordLocation(value, Uri.file(filePathArr[i] as string));
      if(word){
        re.push(
          new Location(Uri.file(word.filePath), new Position(word.lineIndex, word.wordIndex))
        );
      }
    }
  } catch (error) {
    console.log('log:error-------------: ', error);
  }

  return re;
}

// 查看当前匹配内容位置
async function wordLocation(value:string, filePath:Uri) {
  const { fs } = workspace;
  const re = {
    filePath: '',
    lineIndex: 0,
    wordIndex: 0
  };

  try {
    const content= await fs.readFile(filePath);
    const contentArr = uint8ArrayToString(content).split("\n");
    for (let i = 0; i < contentArr.length; i++) {
      const element = contentArr[i];
      const regMatch = element.match(new RegExp(`${value}['"]?\\s*:\\s*['"]?`));
      if(regMatch){
        re.lineIndex = i;
        re.wordIndex = regMatch[0].length + (regMatch.index || 0) ;
        re.filePath = filePath.path;
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }

  if(re.filePath){
    return re;
  }
}

/** Uint8Array转字符串 */
export function uint8ArrayToString(array:Uint8Array) {
	var out, i, len, c;
	var char2, char3;

	out = "";
	len = array.length;
	i = 0;
	while(i < len) {
	c = array[i++];
	switch(c >> 4)
	{
		case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
			// 0xxxxxxx
			out += String.fromCharCode(c);
			break;
		case 12: case 13:
			// 110x xxxx   10xx xxxx
			char2 = array[i++];
			out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
			break;
		case 14:
			// 1110 xxxx  10xx xxxx  10xx xxxx
			char2 = array[i++];
			char3 = array[i++];
			out += String.fromCharCode(((c & 0x0F) << 12) |
										 ((char2 & 0x3F) << 6) |
										 ((char3 & 0x3F) << 0));
			break;
	}
	}

	return out;
}