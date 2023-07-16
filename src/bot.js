require('dotenv').config()
const { env } = require('node:process')
const { MediaWikiApi } = require('wiki-saikou')

/** @type {MediaWikiApi|null} */
let _cachedInstance = null
let _cachedLogin = null

async function createBotInstance(noCache = false) {
  if (_cachedInstance && !noCache) {
    return _cachedInstance
  }
  if (!_cachedLogin || noCache) {
    const api = new MediaWikiApi(env.MW_API_ENDPOINT, {
      query: {
        bot: true,
      },
    })
    _cachedLogin = api
      .login(env.MW_BOT_USERNAME, env.MW_BOT_PASSWORD)
      .catch((e) => {
        _cachedInstance = null
        throw e
      })
  }
  await _cachedLogin
  return _cachedInstance
}

module.exports = { createBotInstance }
