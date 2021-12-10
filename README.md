# react-intl-umi for VSCode

一个使用 `ant-design-pro`、`react-intl` 创建的国际化项目的代码提示插件

## 前提条件

- 打开的 `vscode` 项目是根目录。比如：直接打开 `example` 项目。而不是打开 `react-intl-umi` 项目，然后 `example` 项目在 `react-intl-umi` 下面。
- 国际化配置语言下面的引用路径需要是相对路径。
- 注意 `react-intl-umi.regExp` 中的空格与代码是否一致。建议结合 `eslint` 一起使用。

## 特色

### 鼠标移动上去后，自动弹框提示

![](https://gitee.com/xiangming25/picture/raw/master/2021-12-5/1638714132577-image.png)

### 鼠标点击，直接定位到对应位置

![](https://mmbiz.qpic.cn/mmbiz_gif/kTnUXxRKH9wNia7PXDUjs4iaUNYEEoPxcm9UdHw1eHWp79ficX0PTBiaUD5tjCRHo2QHvrK2tnxeEuAplq2fPqqQlA/0?wx_fmt=gif)



### 国际化配置文件更新后，自动刷新提示内容


## 配置项

名字 | 描述 | 默认值
---|---|---
react-intl-umi.configPath | 国际化配置文件的地址 | src/locales
react-intl-umi.suffix | 国际化文件的后缀(排除当前文件夹下面其它类型文件 | .ts
react-intl-umi.regExp | 在代码中的匹配规则（$1为需要匹配的字符串内容） | id: '$1'
react-intl-umi.watchMode | 监听国际化文件的变化 | true

### 自定义提示模板

`"react-intl-umi.regExp": "id:? ?=?'$1'"`

同时支持

```
intl.formatMessage({
  id: 'pages.login.phoneLogin.getVerificationCode',
  defaultMessage: '获取验证码',
})
```

和

```
<FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />
```

## 注意

建议项目尽量统一，放宽匹配规则的限制（匹配规则更改为：`id:? ?=?'$1'`），有时候其它不是国际化的代码也会默认进入插件中来。比如：

```
<div id="root"></div>
```

## 参考链接

[react-intl-universal-i18n](https://github.com/Java-http/react-intl-universal-i18n)