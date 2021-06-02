const express = require('express')
const app = express()
const port = 3001

app.use("/static", express.static('static', {
  setHeaders: function (res, path, stat) {
    console.log("正在请求图片", res.statusCode);
    res.set('cache-control', "max-age=10")
  }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})