import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionProps {
  id: number; 
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, children }) => { // Pass id prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id={`accordion-${id}`} className="accordion"> {/* Use id prop */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;