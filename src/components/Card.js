import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay"></div>
      <div className="card__content">
        <span className="card__title">{title}</span>
      </div>
    </Link>
  );
}

export default Card;
