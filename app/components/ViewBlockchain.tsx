"use client";
import { Blockchain } from "@/lib";
import React from "react";

type TViewBlockChain = {
    chain: Blockchain;
    viewChain: boolean;
    setViewChain: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewBlockchain = ({ chain, viewChain, setViewChain }: TViewBlockChain) => {
    return (
        <div className="flex flex-col items-center gap-2 w-full">
            <button className="btn btn-lg" onClick={() => setViewChain((prev) => !prev)}>
                View Blockchain
            </button>
            {viewChain ? (
                <div className="bg-neutral-800 p-10 w-4/5 rounded-lg overflow-y-auto max-h-[360px]">
                    <pre>{JSON.stringify(chain, null, 2)}</pre>
                </div>
            ) : null}
        </div>
    );
};

export default ViewBlockchain;
