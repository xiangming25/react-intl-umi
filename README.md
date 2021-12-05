# react-intl-umi README

一个提供 `react-intl`，`umi-locale` 的代码提示插件

## 前提条件

- 打开的 `vscode` 项目是根目录。比如：直接打开 `example` 项目。而不是打开 `react-intl-umi` 项目，然后 `example` 项目在 `react-intl-umi` 下面。
- 国际化配置语言下面的引用路径需要是相对路径。
- 注意 `react-intl-umi.regExp` 中的空格与代码是否一致。建议结合 `eslint` 一起使用。

## 特色

### 鼠标移动上去后，自动弹框提示


### 国际化配置文件更新后，自动刷新提示内容


### 自定义提示模板

`intl.formatMessage({ id: '$1' })`

```
{intl.formatMessage({ id: 'pages.getCaptchaSecondText' }
```

`id: '$1'`

```
intl.formatMessage({
  id: 'pages.login.phoneLogin.getVerificationCode',
  defaultMessage: '获取验证码',
})
```


### 鼠标点击，直接定位到对应位置



## 自定义设置

* `react-intl-umi.configPath`: 当前国际化文本内容的位置
* `react-intl-umi.suffix`: 国际化文件的后缀
* `react-intl-umi.regExp`: 在代码中的匹配规则
* `react-intl-umi.watchMode`: 国际化语言发生改变时，是否监听变化


## 发版日志

### 0.0.5

优化多语言查询内容性能

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
- 添加 `defaultMessage`

## 参考链接

[react-intl-universal-i18n](https://github.com/Java-http/react-intl-universal-i18n)