// src/pages/About.js

import React from 'react';
import Collapse from '../components/Collapse';
import '../styles/about.scss';
import useWindowSize from '../hooks/useWindowSize';

const About = () => {
  const { width } = useWindowSize();
  const collapseSize = width > 768 ? 'large' : 'small';
  return (
    <div className="about">
      <h1>À propos de nous</h1>
      <Collapse
        size={collapseSize} 
        title="Fiabilité" 
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Collapse
        size={collapseSize}  
        title="Respect" 
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
      />
      <Collapse
        size={collapseSize}  
        title="Service" 
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
      />
      <Collapse
        size={collapseSize}  
        title="Sécurité" 
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
      />
    </div>
  );
};

export default About;
