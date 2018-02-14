const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
    constructor(index, timestamp, transactionData, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactionData = transactionData;
        this.hash = this.calculateHash();
        this.nonce = 0; //In cryptography, a nonce is an arbitrary number that can only be used once.
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactionData) + this.nonce).toString();
    }

    //Proof of work
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("A new Block has been mined: ",this.hash);
    }
}