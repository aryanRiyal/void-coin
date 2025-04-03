import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
    return (
        <div className="flex gap-4 items-center">
            <h1>ProductCard: </h1>
            <AddToCart />
        </div>
    );
};

export default ProductCard;
