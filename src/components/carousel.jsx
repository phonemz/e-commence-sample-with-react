import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

import React, { useState } from "react";
import './carousel.css'

const Carousel = () => {
        const [activeIndex, setActiveIndex] = useState(0);

        const handleThumbnailClick = (index) => {
                setActiveIndex(index);
        };

        const images = [image1, image2, image3, image4];

        const thumbnails = images.map((image, index) => (
                <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={activeIndex === index ? "active" : ""}
                        onClick={() => handleThumbnailClick(index)}
                />
        ));

        return (
                <div className="carousel">
                        <div className="main-image">
                                <img
                                        src={images[activeIndex]}
                                        alt="Main Image"
                                />
                        </div>
                        <div className="thumbnails">{thumbnails}</div>
                </div>
        );
};

export default Carousel;
