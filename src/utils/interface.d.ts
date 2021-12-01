// 国际化配置内容格式
export interface ILocales {
  [index: string]: {
    [key: string]: string | number | boolean
  }
}

// vscode 配置格式
export interface IConfig {
  // 国际化配置文件路径
  configPath: string;
  // 国际化配置文件后缀
  suffix: string;
  // 匹配格式
  regExp: string;
}

export type IObject = Record<string, any>
