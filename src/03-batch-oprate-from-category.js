/**
 * @name 03-batch-oprate-from-category
 * @desc 在这个例子中，我们将会从分类中获取一批页面，然后删除它们
 */

const { bot } = require('./utils/bot')

bot
  .login()
  .then(() => bot.getPagesInCategory('分类:即将删除', true))
  .then(
    /** @param {string[]} pages */
    (pages) =>
      Promise.all(
        pages.map((title) =>
          bot.delete({ title, reason: '批量删除[[分类:即将删除]]下的页面' })
        )
      )
  )
  .then(console.log, console.error)
