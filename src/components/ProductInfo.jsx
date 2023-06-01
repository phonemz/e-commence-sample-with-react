import React, { useState } from "react";
import './productInfo.css'


function ProductInfo() {
        
        const [price, setPrice] = useState("$125.00");

        return (
                <div className="product-info">
                        <p className="header">Sneaker Company</p>
                        <p className="title">Fall Limited Edition Sneaker</p>
                        <p className="description">
                                These low profile sneakers are your perfect
                                casual wear companion. Featuring a durable
                                rubber outer sole, they will withstand
                                everything.
                        </p>
                        <div className="price-section">
                                <p className="price">{price}</p>
                                <p className="discount">-50%</p>
                        </div>
                        <div className="amount-and-button">
                                <div className="item-amount">
                                        <p className="minus">-</p>
                                        <p className="amount">0</p>
                                        <p className="plus">+</p>
                                </div>
                                <button className="add-to-cart">
                                        Add to Cart
                                </button>
                        </div>
                </div>
        );
}

export default ProductInfo