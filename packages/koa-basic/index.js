const Koa = require('koa');
const app = new Koa();

const logger = function () {
  return async function ( ctx, next ) {
    console.log("请求来了",ctx.request);
    await next()
  }
}

app.use(logger())

app.use(require('koa-static')("static", { maxage: 60 * 1000 }));

app.listen(3000, () => {
  console.log("正在监听 http://localhost:3000");
});