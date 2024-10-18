import React from 'react';
import logementsData from '../data/logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import homeBanner from '../images/home-banner.png';
import '../styles/pages/home.scss';

function Home() {
  const title = (
    <>
      <span className="title-part">Chez vous, </span>
      <span className="title-part">partout et ailleurs</span>
    </>
  );

  return (
    <div className="home">
      <Banner imageSrc={homeBanner} title={title} />

      <div className="card-container">
        {logementsData.map((logement) => (
          <Card 
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
