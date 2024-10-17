import React from 'react';
import '../styles/banner.scss';

const Banner = ({ imageSrc, title }) => {
  return (
    <div className="banner-container">
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="banner-overlay"></div>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
};

export default Banner;
