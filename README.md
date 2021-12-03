# react-intl-umi README

一个提供 `react-intl`，`umi-locale` 的代码提示插件

## Features

支持使用 `umi` + `umi/locale` 创建的项目的国际化提示

## Requirements

- `react-intl-umi.configPath` 下面的文件的引用位置为相对路径

## Extension Settings

* `react-intl-umi.configPath`: 当前国际化文本内容的位置
* `react-intl-umi.suffix`: 国际化文件的后缀
* `react-intl-umi.regExp`: 在代码中的匹配规则
* `react-intl-umi.watchMode`: 国际化语言发生改变时，是否监听变化


## Release Notes

### 0.0.4

添加 `intl.formatMessage({ id: '$1' })` 代码片段

### 0.0.3

添加按住 `ctrl`+ `intl.formatMessage({ id: $1 })` 中的内容的跳转
### 0.0.2

添加 `watchMode` 功能，当在配置的国际化文件中修改了内容后，会自动刷新

### 0.0.1

添加鼠标移动上去后的国际化文案提示

## TODO

- 优化性能
- 添加 `example` 项目

## 参考链接

[react-intl-universal-i18n](https://github.com/Java-http/react-intl-universal-i18n)