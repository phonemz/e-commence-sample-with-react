import React from "react";
import Navbar from "./components/navbar";
import ImageSlider from "./components/imageSlider";
import Carousel from "./components/carousel";
import ProductInfo from "./components/ProductInfo";
import './App.css'

function App() {
        return (
                <>
                        <Navbar />
                        <div className="body-content">
                                <Carousel />
                                <ProductInfo />
                        </div>
                </>
        );
}

export default App