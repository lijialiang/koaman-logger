const path = require('path')
const fs = require('fs')
const log4js = require('log4js')

let isInit = false

const init = ({ path: logsPath }) => {
  !fs.existsSync(logsPath) && fs.mkdirSync(logsPath)

  log4js.configure({
    appenders: {
      default: { type: 'console' },
      file: {
        type: 'dateFile',
        filename: path.resolve(logsPath, './'),
        pattern: '/yyyy-MM-dd.log',
        alwaysIncludePattern: true
      }
    },
    categories: {
      default: { appenders: ['default', 'file'], level: 'all' }
    }
  })

  const ProcessLogger = log4js.getLogger('[PROCESS]')

  process.on('uncaughtException', error => ProcessLogger.error(error))
  process.on('unhandledRejection', (reason, p) => ProcessLogger.error(reason, p))
}

module.exports = function (options) {
  const { name } = options

  !isInit && (isInit = true) && init(options)

  if (name) {
    return log4js.getLogger(name)
  } else {
    return async (ctx, next) => {
      ctx.logger = log4js.getLogger()

      await next()
    }
  }
}
