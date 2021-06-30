const Koa = require('koa');
const app = new Koa();

// const CSRF = require('./koa-csrf');

const session = require('./koa-generic-session');
app.keys = ['keys', 'keykeys'];
app.use(session());

const logger = function () {
  return async function ( ctx, next ) {
    const session = ctx.session;
    session.count = session.count || 0;
    session.count++;
    console.log("当前 session 中的 count:", session.count);
    // console.log("请求来了",ctx.request);
    await next()
  }
}

app.use(logger())

app.use(require('koa-static')("static", { maxage: 60 * 1000 }));

app.listen(3000, () => {
  console.log("正在监听 http://localhost:3000");
});