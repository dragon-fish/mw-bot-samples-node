/**
 * @name 01-hello-world
 * @desc 这是我们的第一个 bot 程序，简单的登录账号，然后替换 Project:Sandbox 页面的内容
 */

// 导入依赖
const { MediaWikiJS } = require('@lavgup/mediawiki.js')
const config = require('./config.js')

// 初始化实例
const bot = new MediaWikiJS(config)

bot
  // 登录，并等待网络连接
  .login()
  // 修改页面的内容
  .then(() =>
    bot.edit({
      title: 'Project:Sandbox',
      content: 'hello, wrold',
      summary: 'Node.js bot test',
    })
  )
  // 打印 API 返回结果
  .then(console.log, console.error)
