"use strict"
const koa = require('koa')
const app = new koa()
const staticCache = require('koa-static-cache')
const router = require('./config/routes')
const path = require('path')

const port = 7002

//静态资源文件
app.use(staticCache(path.join(__dirname, 'public'), {
  maxAge: 0
}))

//路由
app.use(router.routes())

app.use(async (ctx, next) => {
  await next()
  if (404 !== ctx.status) return
  ctx.status = 404
  ctx.body = {
    msg: 'not found'
  }
})

app.listen(port, (err) => {
	if(err){
		console.log(err)
		return false
	}
	console.log(`> listen at: http://127.0.0.1:${port}`)
})
