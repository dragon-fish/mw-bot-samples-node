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
    └── bot.js
├── .env.sample
└── package.json
```

- `node_modules`文件夹：这里是您在上一步中 npm 为您安装的依赖包，一般来说您不需要改动这个文件夹
- `src`文件夹：
  - `bot.js`文件：可复用的 bot 实例
  - 形如`[数字]-[名称].js`的一批文件：这些就是示例代码，您可以尝试按顺序阅读并理解它们，您也可以根据需要自行改动
- `.env.sample`文件：配置文件参考
- `package.json`文件：这个文件包含了项目的配置信息，包括依赖及其版本号，一般来说您不需要改动这个文件。如果您知道自己在干什么，也可以根据需要自行改动

## 如何运行示例代码

1. 首先，找到文件 [.env.sample](.env.sample)，复制该文件到当前目录，重命名为`.env`（简单来说，移除文件名中的`.sample`），并将其中的配置信息替换为您自己的
   1. 警告：不要直接修改 `.env.sample`
   2. 警告：不要将 `.env` 推送到远端或者分享给其他人
2. 从`src`文件夹找到你感兴趣的示例，按需求进行改动，然后使用`node`命令运行它
   - 举个例子：您可以通过`node src/01-hello-world.js`运行第一个示例。
