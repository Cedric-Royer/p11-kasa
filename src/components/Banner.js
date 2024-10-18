import React from 'react';
import '../styles/components/banner.scss';

const Banner = ({ imageSrc, title, overlayOpacity = 0.6 }) => {
  return (
    <div className="banner-container">
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div
        className="banner-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
};

export default Banner;

