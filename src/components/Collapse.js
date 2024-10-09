import React, { useState } from 'react';
import '../styles/collapse.scss';

const Collapse = ({ title, content, size = 'medium' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${size}`}>
      <div className="collapse__category">
        {title}
        <button 
          className={`${size} ${isOpen ? 'rotate' : ''}`}
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
