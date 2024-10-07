import React from 'react';
import '../styles/card.scss';

function Card({ title, cover}) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay"></div>
      <div className="card__content">
        <span className="card__title">{title}</span>
      </div>
    </div>
  );
}

export default Card;
