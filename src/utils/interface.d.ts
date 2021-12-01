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
}

export type IObject = Record<string, any>