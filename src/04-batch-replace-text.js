/**
 * @name 03-batch-replace-text
 * @desc 在这个例子中，我们会将 “分类:水浒传” 下全部页面中的一些词汇替换为我们想要的其他内容
 */

const { bot } = require('./utils/bot')

bot
  .login()
  // 从分类页面中获取所有的页面标题
  .then(() => bot.getPagesInCategory('水浒传', true))
  // 首先获取页面内容
  .then(
    /** @param {string[]} pages */
    (pages) =>
      Promise.all(
        pages.map((page) =>
          bot.api.get({ action: 'parse', page, prop: 'wikitext' })
        )
      )
  )
  // 批量替换文字
  .then(
    /** @param {{ parse: { title: string; pageid: number; wikitext: string } }[]} pages */
    (pages) =>
      // 为每个页面创建一个编辑任务
      // 它会返回一组 Promise 对象，这些 Promise 对象会在所有的编辑任务完成后继续下一步
      Promise.all(
        pages.map(({ title, wikitext }) =>
          bot.edit({
            title,
            // 注意：此处用到了正则表达式
            // 供参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            content: wikitext.replace(/天王盖地虎/g, '宝塔镇河妖'),
            summary: '批量替换“天王盖地虎”为“宝塔镇河妖”',
          })
        )
      )
  )
  // 打印 API 返回结果
  .then(console.log, console.error)
