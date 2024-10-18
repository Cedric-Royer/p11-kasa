import React, { useState } from 'react';
import '../styles/components/slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 1) {
    return <img className="slideshow__picture" src={pictures[0]} alt="Photo du logement" />;
  }

  return (
    <div className="slideshow">
      <img className="slideshow__picture" src={pictures[currentIndex]} alt={`Photo du logement ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <>
          <button className="slideshow__button left" onClick={prevSlide}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
          </button>
          <button className="slideshow__button right" onClick={nextSlide}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
