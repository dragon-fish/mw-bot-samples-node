const { MediaWikiJS } = require('@lavgup/mediawiki.js')
const config = require('../config.js')
const bot = new MediaWikiJS(config)

module.exports = {
  bot,
}
