import { useState, useEffect } from "react";

import "./Carousel.css"; // Import your CSS file for styling

const Carousel = ({ id, row, size }) => {
    const [images, setImages] = useState(
        Array.from(Array(size)).map((elt, i) =>
            require(`../../assets/projects/project_${id}/carousel_${
                row + 1
            }/image_${i + 1}.png`)
        )
    );
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrent((current + 1) % images.length);
    };

    useEffect(() => {
        const carouselWidth = document.querySelector(
            `.carousel-${row + 1} .carousel`
        )?.offsetWidth;

        const carouselImages = document.querySelectorAll(
            `.carousel-${row + 1} .carousel img`
        );

        carouselImages.forEach((image, index) => {
            image.style.transform = `translateX(${carouselWidth * index}px)`;
        });
    }, [row]);

    useEffect(() => {
        const carouselWidth = document.querySelector(
            `.carousel-${row + 1} .carousel`
        )?.offsetWidth;

        const carouselImages = document.querySelectorAll(
            `.carousel-${row + 1} .carousel img`
        );

        carouselImages.forEach((image, index) => {
            image.style.transform = `translateX(${
                index < current
                    ? carouselWidth * (-current + index)
                    : index === current
                    ? 0
                    : -carouselWidth * (current - index)
            }px)`;
        });
    }, [current, row]);

    return (
        <div className={`carousel-container carousel-${row + 1}`}>
            <button className='prev' onClick={() => handlePrev()}>
                Previous
            </button>
            <div className='carousel'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${index}`}
                        className={`carousel-slide ${
                            index === current ? "active" : ""
                        }`}
                        style={{ transform: `translateX()` }}
                    />
                ))}
            </div>
            <button className='next' onClick={() => handleNext()}>
                Next
            </button>
        </div>
    );
};

export default Carousel;
