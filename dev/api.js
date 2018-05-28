var express = require('express')
var app = express()
//bodyParser 임포트
var bodyParser = require('body-parser')

//앞에서 만든 blockchain 모듈 임포트 -> 코인객체 생성
var Blockchain = require('./blockchain');
var bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// 웹브라우저에 get 방식으로 /blockchain 주소를 입력했을 때 실행
app.get('/blockchain', function (req, res) {
  res.send(bitcoin)
})
 

// 웹브라우저에 post 방식으로 /transaction 주소를 입력했을 때 실행
app.post('/transaction', function (req, res) {

  const blockIndex = bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient)
  res.json({note : `트랜젝션은 ${blockIndex} 블락안으로 들어갈 예정입니다.`})

})


// 웹브라우저에 get 방식으로 /mine 주소를 입력했을 때 실행
app.get('/mine', function (req, res) {
  res.send('mine Start')
})



app.listen(3000,function(){
  console.log('listening on port 3000')
})