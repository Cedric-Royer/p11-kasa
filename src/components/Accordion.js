import React, { useState } from 'react';
import '../styles/accordion.scss';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className="accordion__category"
        onClick={toggleAccordion}
      >
        {title}
        <button className={isOpen ? 'rotate' : ''}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
