import React from 'react';
import logementsData from '../data/logements.json'; 
import Card from '../components/Card'; 

function Home() {
  return (
    <div className="home">
      <h1>Chez vous partout et ailleurs</h1>
      <div className="card-container">
        {logementsData.map((logement) => (
          <Card 
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            location={logement.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
