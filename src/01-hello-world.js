/**
 * @name 01-hello-world
 * @desc 这是我们的第一个 bot 程序，简单的登录账号，然后替换 Project:Sandbox 页面的内容
 */

// 导入依赖
require('dotenv').config()
const { env } = require('node:process')
const { MediaWikiApi } = require('wiki-saikou')

// Main
;(async () => {
  // 初始化实例
  // 注意，这里是为了方便直观展示创建bot实例并登录的过程
  // 后面的例子我们会使用 createBotInstance 函数来创建实例，它封装在 src/bot.js 中，这样就不用每次都登录了
  const bot = new MediaWikiApi(env.MW_API_ENDPOINT, {
    query: {
      bot: true,
    },
  })

  // 登录，并等待网络连接
  const { lgusername } = await bot
    .login(env.MW_BOT_USERNAME, env.MW_BOT_PASSWORD)
    .catch((e) => {
      console.error('登录失败', e)
      throw e
    })

  // 修改页面的内容
  bot
    .postWithEditToken({
      action: 'edit',
      title: `User:${lgusername}/sandbox/bot-test`,
      text: 'hello, wrold',
      summary: 'Node.js bot test',
    })
    // 打印 API 返回结果
    .then(console.log, console.error)
})()
