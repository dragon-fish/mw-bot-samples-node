const { MediaWikiJS } = require('@lavgup/mediawiki.js')
const config = require('../config.json')
const bot = new MediaWikiJS(config)

module.exports = {
  bot,
}
