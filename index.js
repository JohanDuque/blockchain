const Blockchain = require('./Blockchain');
const Block = require('./Block');

let myToken = new Blockchain();

console.log('Mining block 1...');
myToken.addBlock(new Block(1, new Date("04-01-1987"), { amount: 4 }));


console.log('Mining block 2...');
myToken.addBlock(new Block(2, new Date("19-01-2014"), { amount: 8 }));


console.log('is Blockchain valid?', myToken.isChainValid());

console.log('Changing a block...');
myToken.chain[1].data = { amount: 100 };
// myToken.chain[1].hash = myToken.chain[1].calculateHash();

console.log("is Blockchain valid? ",myToken.isChainValid());

// console.log(JSON.stringify(myToken, null, 4));
