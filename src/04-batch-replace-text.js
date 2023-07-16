/**
 * @name 03-batch-replace-text
 * @desc 在这个例子中，我们会将 “分类:水浒传” 下全部页面中的一些词汇替换为我们想要的其他内容
 */

const { createBotInstance } = require('./bot')

createBotInstance().then(async (bot) => {
  // 获取分类下的页面列表
  /** @type {{ pageid: number; ns: number; title: string }[]} */
  const {
    data: { query: categorymembers },
  } = await bot.get({
    action: 'query',
    list: 'categorymembers',
    cmtitle: '分类:水浒传',
    cmlimit: 'max',
  })

  // 通过页面列表获取页面内容
  const {
    data: { query: pages },
  } = await bot.get({
    action: 'qeury',
    pageids: categorymembers.map(({ pageid }) => pageid),
    prop: 'revisions',
    rvprop: 'content',
    rvlimit: 1,
  })

  // 为每个页面创建一个编辑任务
  // 注意：为了简化示例，这里并行执行了所有的批量任务
  //      在实际应用中，这可能会导致服务器拒绝服务
  //      一般情况下我们应该限制请求速率，例如使用 p-limit
  const res = await Promise.all(
    pages.map(({ title, revisions }) => {
      const text = revisions[0].content
      return bot.postWithEditToken({
        action: 'edit',
        title,
        // 注意：此处用到了正则表达式
        // 供参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
        text: text.replace(/宋江/g, '宋公明'),
        summary: '批量替换“天王盖地虎”为“宋公明”',
      })
    })
  )

  console.log('DONE', res)
})
