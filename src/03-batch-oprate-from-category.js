/**
 * @name 03-batch-oprate-from-category
 * @desc 在这个例子中，我们将会从分类中获取一批页面，然后删除它们
 */

const { createBotInstance } = require('./bot')

createBotInstance().then(async (bot) => {
  // 通过分类获取页面列表
  /** @type {{ pageid: number; ns: number; title: string }[]} */
  const {
    data: { query: categorymembers },
  } = await bot.get({
    action: 'query',
    list: 'categorymembers',
    cmtitle: '分类:即将删除',
    cmlimit: 'max',
  })

  // 批量创建删除任务
  // 注意：为了简化示例，这里并行执行了所有的批量任务
  //      在实际应用中，这可能会导致服务器拒绝服务
  //      一般情况下我们应该限制请求速率，例如使用 p-limit
  const res = await Promise.all(
    categorymembers.map(({ title }) =>
      bot.postWithEditToken({
        action: 'delete',
        title,
        reason: '批量删除[[分类:即将删除]]下的页面',
      })
    )
  )

  console.log('DONE', res)
})
