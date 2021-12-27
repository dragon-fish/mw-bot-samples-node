# 使用 Node.js 编辑 MediaWiki

这个指南会简单介绍一下如何使用 Node.js 创建一个维护 wiki 的自动程序（bot），它可用于在 wiki 上面进行大量编辑或者删除等维护操作。使用它的好处在于，只要您编写过前端 JS 脚本，使用 Node.js 一定也不会感到陌生。（学习成本较低）

## 配置 Node.js

和 Python 非常类似，Node.js 也是一个脚本语言。您的程序是运行在 Node 容器中的基于 Google V8 引擎的 JavaScript 代码，您需要安装 Node.js 软件来解释并执行您的代码。

- 您可以在这里找到与您设备相匹配的安装方法: https://nodejs.org/zh-cn/download/
- 更多详细内容，可以参见文档: https://nodejs.org/zh-cn/docs/

注意：阅读以下内容，我们假定您拥有 JavaScript 的基本知识。

## 创建您的 bot 账号

1. 一般来说，我们不希望使用自己的主要账号运行自动程序，这不仅不合理，而且难以维护和监管，因此我们建议您另外注册一个账号作为 bot 账号。
2. 然后，您还可以为您的 bot 账号申请一个 bot 用户组，明确表示这是一个由他人操作自动程序的子账号，并且可以在最近更改中隐藏批量操作防止扰乱社区巡查工作。您可以在 [[Help:Bots]] 了解相关信息。
3. **最后，这一点相当关键**：前往您 wiki 的 [[Special:BotPasswords]] 页面，为您的 bot 账号创建一个机器人密码，按提示操作，并保存最后得到的密钥，您之后会用到它。

## 挑选您喜欢的包

Node.js 最引以为傲且最为方便的地方在于它拥有强大且完善的包管理程序——Node Packages Manager，使用 npm 您可以轻松地为项目添加依赖项和工具库。

这里我们推荐几个比较好用的包，两者对登录和 API 操作的封装大同小异，均兼容 {{SITENAME}} 现有的 MediaWiki 版本，他们之间的区别无非在于回调风格之类。您可以根据自己的代码偏好进行选择。

- [nodemw](https://www.npmjs.com/package/nodemw): 使用 node 风格的回调函数（方法的最后一个参数传入回调函数，其中返回值的第一个参数一定为`error`）

- [mwbot](https://www.npmjs.com/package/mwbot): 返回异步`Promise`，可以使用`.then().catch()`或者`async await`方法

- [@lavgup/mediawiki.js](https://www.npmjs.com/package/@lavgup/mediawiki.js): 返回异步`Promise`，值得一提的是它使用 TypeScript 编写，这意味着基于它开发您的 bot 时，在现代 IDE 中可以获得直观的代码提示

注意：为了方便讲解，以下内容将以 **@lavgup/mediawiki.js** 包为例。其他几个大同小异。

## 初始化工程

简单概括：在您喜欢的地方新建文件夹、初始化工程、安装依赖、新建入口文件。

```bash
# 新建文件夹
mkdir my-bot
cd my-bot
# 初始化工程
npm init
# 安装依赖
npm install @lavgup/mediawiki.js
# 新建入口文件
touch index.js
```

您的文件夹结构大概是这样的：

```
my-bot
├── index.js
├── node_modules/*
└── package.json
```
