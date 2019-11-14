const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, amount, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.amount = amount;
        this.previousHash = previousHash;
        this.hash = generateHash();
    }

    generateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.amount)).toString();
    }
}

class blockChain{
    constructor(){
        this.chain = [this.createOriginalBlock()];
    }
    createOriginalBlock(){
        return new Block(0, new Date(), 0, "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.chain.push(newBlock);
    }
    findID(index){
        return this.chain[index];
    }
    findDates(date1, date2){
        
    }
    isChainValid(){
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.generateHash()){
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

