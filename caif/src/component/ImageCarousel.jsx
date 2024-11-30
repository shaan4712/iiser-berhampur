import React, { useState, useEffect } from 'react';
import '../css files/ImageCarousel.css';
import iiserBam from '../assets/iiserBam.jpg';
import research from '../assets/research.jpg';
import research2 from '../assets/research2.jpg';
import research3 from '../assets/research3.jpg';
import research4 from '../assets/research4.jpg';
import research5 from '../assets/research5.jpg';
import research6 from '../assets/research6.jpg';

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
    },
    {
      id: 4,
      image: research3,
      title: "Academic Excellence",
      description: "Nurturing curiosity and creativity"
    },
    {
      id: 5,
      image: research4,
      title: "Academic Excellence",
      description: "Nurturing curiosity and creativity"
    },
    {
      id: 6,
      image: research5,
      title: "Academic Excellence",
      description: "Nurturing curiosity and creativity"
    },
    {
      id: 7,
      image: research6,
      title: "Academic Excellence",
      description: "Nurturing curiosity and creativity"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

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