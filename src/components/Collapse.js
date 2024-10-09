import React, { useState } from 'react';
import '../styles/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        className="collapse__category"
      >
        {title}
        <button 
          className={isOpen ? 'rotate' : ''} 
          onClick={toggleCollapse}> 
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
