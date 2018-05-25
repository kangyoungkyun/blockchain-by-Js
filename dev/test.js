//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain')

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

//새로운 블락 만들기
bitcoin.createNewBlock(1111,"aaaaaaa","1a1a1a1a1a1a");

//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(100,'PACKadffaaf','HONGllalflks') 

//찍어보기
console.log(bitcoin)


//결과
/*
Blockchain {
    chain: 
     [ { index: 1,
         timestamp: 1527228481937,
         transactions: [],
         nonce: 1111,
         hash: '1a1a1a1a1a1a',
         previousBlockHash: 'aaaaaaa' } ],
    pendingTransaction: 
     [ { amount: 100, sender: 'PACKadffaaf', recipient: 'HONGllalflks' } ] }
*/







