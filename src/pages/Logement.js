import React from 'react'; 
import { useParams } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow'; 
import useWindowSize from '../hooks/useWindowSize';
import '../styles/logement.scss';


function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);
  const { width } = useWindowSize();
  const collapseSize = width > 768 ? 'medium' : 'small';

  if (!logement) {
    return <h2>Logement non trouvé</h2>;
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
      <h1 className="logement__title">{logement.title}</h1>
      <p className="logement__location">{logement.location}</p>
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
