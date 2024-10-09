import React from 'react'; 
import { useParams } from 'react-router-dom';
import logementsData from '../data/logements.json';
import Slideshow from '../components/Slideshow'; // Importe le Slideshow
import '../styles/logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} /> {/* Utilise le Slideshow ici */}
      <h1 className="logement__title">{logement.title}</h1>
      <p className="logement__location">{logement.location}</p>
      {/* Ajoute ici d'autres détails comme la description, l'hôte, etc. */}
    </div>
  );
}

export default Logement;
