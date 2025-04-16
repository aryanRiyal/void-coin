declare global {
    type TBlockInput = {
        index: number;
        timestamp: Date;
        data: {};
        previousHash: string;
    };

    type TBlock = TBlockInput & {
        hash: string;
    };
}

export {};
