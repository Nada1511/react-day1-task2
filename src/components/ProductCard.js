// src/components/ProductCard.js

// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Buy</button>
        </div>
    );
};

export default ProductCard;
