import crypto from "crypto";

export default class Block {
    public _index: number;
    public _timestamp: Date;
    public _data: {};
    public _hash: string;
    public _previousHash: string;

    public constructor({ index, timestamp, data, previousHash = "" }: TBlockInput) {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._hash = this.calculateHash();
        this._previousHash = previousHash;
    }

    private calculateHash(): string {
        return crypto
            .createHash("sha256")
            .update(this._previousHash + this._timestamp.toISOString() + JSON.stringify(this._data))
            .digest("hex");
    }

    public set previousHash(value: string) {
        this._previousHash = value;
        this._hash = this.calculateHash();
    }
}
