var express = require('express')
var app = express()
 

// 웹브라우저에 get 방식으로 /blockchain 주소를 입력했을 때 실행
app.get('/blockchain', function (req, res) {
  res.send('blockchain Start')
})
 

// 웹브라우저에 post 방식으로 /transaction 주소를 입력했을 때 실행
app.post('/transaction', function (req, res) {
  res.send('transaction Start')
})


// 웹브라우저에 get 방식으로 /mine 주소를 입력했을 때 실행
app.get('/mine', function (req, res) {
  res.send('mine Start')
})



app.listen(3000,function(){
  console.log('listening on port 3000')
})