/**
 * @name 02-mark-for-deletion
 * @desc 在这个例子中，我们会为一批页面顶部插入即将删除的标记
 */

const { createBotInstance } = require('./bot')

// 一个数组，包含即将挂删页面的标题
const pageList = [
  '愚蠢的小鱼君',
  '兽耳萝莉赛高',
  '这菜都齐了怎么还不吃啊',
  'TNND你删我页面是吧',
]

createBotInstance()
  .then((bot) =>
    Promise.all(
      pageList.map((title) =>
        bot.postWithEditToken({
          action: 'edit',
          title,
          prependtext: '{{即将删除|不符合规定的页面}}\n\n',
          summary: '挂删：不符合规定的页面',
        })
      )
    )
  )
  // 打印 API 结果
  .then(console.log, console.error)
