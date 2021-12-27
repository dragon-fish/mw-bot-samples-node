# 使用 Node.js 编辑 MediaWiki

这个仓库包含了一些使用 Node.js 维护 wiki 的自动程序（bot）的示例代码。

建议搭配此说明使用：https://zh.moegirl.org.cn/index.php?curid=492649

## 初始化工程

```bash
# 首先，克隆本仓库到本地
git clone git@github.com:Dragon-Fish/mw-bot-samples-node
# 进入文件夹
cd mw-bot-samples-node
# 安装依赖
npm install

# 我们推荐使用 pnpm 管理依赖，参见：https://pnpm.io/
# 若使用 pnpm，请使用该指令安装依赖：
pnpm install
```

## 文件结构说明

初始化工程后，文件结构应该看起来像是这样的：

```
mw-bot-samples-node
├── node_modules/*
└── src
    ├── utils/*
    ├── 00-*.js
    └── config.sample.js
└── package.json
```

- `node_modules`文件夹：这里是您在上一步中 npm 为您安装的依赖包，一般来说您不需要改动这个文件夹。
- `src`文件夹：
  - `utils`文件夹：为了简化项目而提取出来的一些可复用的函数。
  - `config.sample.js`文件：bot 配置样板，请参考 https://www.npmjs.com/package/@lavgup/mediawiki.js 将内容修改为您自己的。
  - 形如`[数字]-[名称].js`的一批文件：这些就是示例代码，您可以尝试按顺序阅读并理解它们，您也可以根据需要自行改动。
- `package.json`文件：这个文件包含了项目的配置信息，包括依赖及其版本号，一般来说您不需要改动这个文件。如果您知道自己在干什么，也可以根据需要自行改动。

## 如何运行示例代码

1. 首先，找到文件 [src/config.sample.js](src/config.sample.js)，将其重命名为`config.js`（简单来说，移除文件名中的`.sample`），并将其中的配置信息替换为您自己的。
   - 注：文件`src/config.js`已经被添加到`.gitignore`，因此它不会被同步到源端。您应当了解，您不应该将其暴露到公开位置。
2. 从`src`文件夹找到你感兴趣的示例，按需求进行改动，然后使用`node`命令运行它
   - 举个例子：您可以通过`node src/01-hello-world.js`运行第一个示例。
