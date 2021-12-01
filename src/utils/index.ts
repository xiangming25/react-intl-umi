import config from './config';
import { workspace, Uri, FileType } from 'vscode';
import { ILocales, IObject } from './interface';

// 检查是否包含国际化配置
export function checkHasLocales() {
  const { workspaceFolders } = workspace;
  if (!workspaceFolders?.length) {return;}
  
  console.log('获取国际化文件内容...');
  let result: ILocales = getLocalesContent();
  
  return true;
}

export function getLocalesContent(): ILocales {
  const { workspaceFolders, fs } = workspace;
  workspaceFolders?.forEach(async item => {
    const localesPath = `${item.uri.fsPath}/${config.configPath}`;
    let directory = await fs.readDirectory(Uri.file(localesPath));
    // 只读取后缀为 js, jsx, ts, tsx, json 类的文件的内容
    directory = directory.filter(item => /.js|.jsx|.ts|.tsx|.json$/.test(item[0]));
    const content: IObject | undefined = getContent(localesPath, directory);
  });
  return {};
}

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
      // 匹配国际化配置根文件下的配置内容
      const contentArr = content.toString().match(/(\w+:\s?['"].*?['"])/g);
      const obj: IObject = {};
      contentArr?.forEach(item => {
        const itemArr = item.split(':');
        obj[itemArr[0]] = itemArr[1].replace(/^\s{0,}['"](.*?)['"]/, '$1');
      });
      result[fileName] = obj;
  
    } catch (error) {
      console.log('log:error-------------: ', error);
    }
  }
  return result;
}
