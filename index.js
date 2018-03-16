const Websocket = require('ws')
const debug = require('debug')('wso')

class WssOrigin extends Websocket.Server {
  constructor(opts, origins = [], cb = () => {}) {
    if (!opts.verifyClient && origins.length > 0) {
      opts.verifyClient = ({ origin }, cb) => {
        debug(origin)
        if (origins.includes(origin)) {
          return cb(true)
        }
        cb(false, 403, '403 forbidden')
      }
    }
    super(opts, cb)
  }
}

module.exports = WssOrigin
