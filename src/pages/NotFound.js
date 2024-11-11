import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/notFound.scss';

const NotFound = () => {
  return <div className="notFound-page-content">
    <span className="error-code">404</span>
    <span className="error-message">Oups! La page que vous demandez n'existe pas.</span>
    <Link to="/" className="back-link">Retourner sur la page d’accueil</Link>
    </div>;
    
}

export default NotFound;
