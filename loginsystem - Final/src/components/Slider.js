import React, { useState, useEffect } from 'react';
import './style/slider.css';

const Slider = ({ slides, autoplayInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autoplayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length, autoplayInterval]);

  return (
    <div className="slider">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
