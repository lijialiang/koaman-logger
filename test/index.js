const Koa = require('koa')

const logger = require('../index')

const app = new Koa()

app.use(logger({ path: __dirname }))

app.use(async ctx => {
  ctx.logger.trace('Hello World')

  ctx.body = 'Hello World'
})

app.listen(3000)
