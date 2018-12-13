# koa-middleware-logger

## Install

```sh
npm i koa-middleware-logger

# or

yarn add koa-middleware-logger
```

## How to use

```js
const Koa = require('koa')
const logger = require('koa-middleware-logger')

const app = new Koa()

app.use(logger({ path: __dirname }))

app.use(async ctx => {
  ctx.logger.trace('Hello World')

  ctx.body = 'Hello World'
})

app.listen(3000)
```

## LICENSE

[MIT](./LICENSE)
