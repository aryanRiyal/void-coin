"use client";
import { Block } from "@/lib";
import React, { useState } from "react";

type TGetLatestBlock = {
    latestBlock: Block;
    viewLatest: boolean;
    getLatest: () => void;
    setViewLatest: React.Dispatch<React.SetStateAction<boolean>>;
};

const GetLatestBlock = ({ latestBlock, viewLatest, setViewLatest, getLatest }: TGetLatestBlock) => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <button
                className="btn btn-md w-1/5 mx-auto"
                onClick={() => {
                    setViewLatest((prev) => !prev);
                    getLatest();
                }}
            >
                Get Latest Block
            </button>
            {viewLatest ? (
                <div className="bg-neutral-800 p-4 rounded-lg w-3/5 mx-auto">
                    <pre className="">{JSON.stringify(latestBlock, null, 2)}</pre>
                </div>
            ) : null}
        </div>
    );
};

export default GetLatestBlock;
