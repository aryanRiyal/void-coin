"use client";
import React from "react";

type TAddNewBlock = {
    addNewBlock: () => void;
};

const AddNewBlock = ({ addNewBlock }: TAddNewBlock) => {
    return (
        <button className="btn btn-md w-1/5" onClick={addNewBlock}>
            Add new Block
        </button>
    );
};

export default AddNewBlock;
