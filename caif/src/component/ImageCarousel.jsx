import React, { useState, useEffect } from 'react';
import '../css files/ImageCarousel.css';
import iiserBam from '../assets/iiserBam.jpg';
import research from '../assets/research.jpg';
import research2 from '../assets/research2.jpg';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: iiserBam,
      title: "IISER Campus",
      description: "Center of Excellence dedicated to teaching and research"
    },
    {
      id: 2,
      image: research,
      title: "Research Facilities",
      description: "State-of-the-art research laboratories"
    },
    {
      id: 3,
      image: research2,
      title: "Academic Excellence",
      description: "Nurturing curiosity and creativity"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} />
              {/* <div className="carousel-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div> */}
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;