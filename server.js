const http = require('http')
const app = require('express')()
const port = Number(process.env.PORT) || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// express의 app.listen() 대신 http의 server.listen()을 쓰는 이유는
// socket.io와의 연동 때문입니다. socket io 객체는 http.Server 인스턴스를
// 인자로 받아 생성되기 때문입니다.
// 꼭 socket.io를 쓰지 않더라도 express 4에서는 이런 방식을 사용합니다.
// 출처: https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen#answer-17697134

const server = http.createServer(app)
server.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})