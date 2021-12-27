/**
 * @name 01-hello-world
 * @desc 这是我们的第一个 bot 程序，简单的登录账号，然后替换 Project:Sandbox 页面的内容
 */

// 导入依赖
const { MediaWikiJS } = require('@lavgup/mediawiki.js')

// 初始化实例
// 注意：为了简化代码，后面的例子中，这个构造函数被统一放在了 utils 文件夹中
const bot = new MediaWikiJS({
  // wiki 的 api.php 的地址，对于萌娘百科来说是：
  url: 'https://zh.moegirl.org.cn/api.php',
  // 在“创建您的 bot 账号”步骤中最后一步您得到的账号与密码信息
  botUsername: '',
  botPassword: '',
})

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
