const { MediaWikiJS } = require('@lavgup/mediawiki.js')

const bot = new MediaWikiJS({
  url: 'https://zh.moegirl.org.cn/api.php',
  botUsername: '',
  botPassword: '',
})

module.exports = {
  bot,
}
