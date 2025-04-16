import { Block } from "@lib";

export default class Blockchain {
    public chain: Block[];

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    private createGenesisBlock(): Block {
        return new Block({ index: 0, timestamp: new Date(), data: "Genesis Block", previousHash: "_genesis_" });
    }

    public getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    public addNewBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLatestBlock()._hash;
        this.chain.push(newBlock);
    }
}
