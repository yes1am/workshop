# koa 基础开发环境

## 1. 如何运行

1. 在 workshop 根目录运行 `yarn bootstrap` 来安装依赖,
2. 在当前目录执行 `node index.js`
3. 访问 http://localhost:3000

## 2. 示例解释

### 2.1 session

```js
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
```
当第一次访问网站时，会初始化 session，后续访问会更新 session 中 count 的值。

**如何查看示例:**  
1. 访问: http://localhost:3000/, 刷新页面，查看控制台打印的结果

