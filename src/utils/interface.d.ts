export interface ILocale {
  value: string;
  path: string;
}

// 国际化配置内容格式
export interface ILocales {
  [index: string]: {
    [key: string]: ILocale
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
  // 国际化语言发生改变时，是否监听变化
  watchMode: boolean;
}

export type IObject = Record<string, any>
