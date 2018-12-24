# koaman-logger

## Install

```sh
npm i koaman-logger

# or

yarn add koaman-logger
```

## How to use

```js
const Koa = require('koa')
const logger = require('koaman-logger')

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
