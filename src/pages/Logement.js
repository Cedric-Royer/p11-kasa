import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow'; 
import useWindowSize from '../hooks/useWindowSize';
import StarRating from '../components/StarRating';
import '../styles/pages/logement.scss';
import TagList from '../components/TagList';

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);
  const { width } = useWindowSize();
  const collapseSize = width > 768 ? 'medium' : 'small';
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate('/NotFound'); 
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  const equipmentList = (
    <ul className="logement__equipments-list">
      {logement.equipments.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} /> 

      <div className="logement__description">

        <div className="logement__description__main">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <TagList tags={logement.tags} />
        </div>
        
        <div className="logement__description__details">
          <div className="logement__host">
            <p className="logement__host__name">{logement.host.name}</p>
            <img className="logement__host__picture" src={logement.host.picture} alt="photo de profil de l'hôte"></img>
          </div>

          <StarRating rating={logement.rating} />

      </div>

      </div>
     
      <div className="logement__collapse-container">
        <Collapse
          size={collapseSize}  
          title="Description" 
          content={logement.description}
        />
        <Collapse
          size={collapseSize} 
          title="Équipements" 
          content={equipmentList}
        />
      </div>
    </div>
  );
}

export default Logement;
