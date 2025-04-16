"use client";
import React, { useMemo, useState } from "react";
import { AddNewBlock, GetLatestBlock, ViewBlockchain } from "@components";
import { Block, Blockchain } from "@/lib";

const BlockchainPage = () => {
    const [chain, setChain] = useState(new Blockchain());
    const [viewChain, setViewChain] = useState(false);
    const [latestBlock, setLatestBlock] = useState<Block>(chain.getLatestBlock());
    const [viewLatest, setViewLatest] = useState(false);

    const getLatest = () => {
        const latest: Block = chain.getLatestBlock();
        setLatestBlock(latest);
    };

    const addNewBlock = () => {
        const latest: Block = chain.getLatestBlock();
        const newBlock: Block = new Block({
            index: latest._index + 1,
            timestamp: new Date(),
            data: { message: "New Block" },
            previousHash: latest._hash
        });
        chain.addNewBlock(newBlock);
        console.log(newBlock);
        setChain(chain);
    };

    // const updatedChain = useMemo(() => ,[chain])

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-center text-5xl">Blockchain</h1>
            <ViewBlockchain chain={chain} viewChain={viewChain} setViewChain={setViewChain} />
            <AddNewBlock addNewBlock={addNewBlock} />
            <GetLatestBlock
                latestBlock={latestBlock}
                getLatest={getLatest}
                viewLatest={viewLatest}
                setViewLatest={setViewLatest}
            />
        </div>
    );
};

export default BlockchainPage;
