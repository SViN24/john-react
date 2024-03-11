import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

interface BottomNavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const Navigation: React.FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    // routing hook 
    navigate(items[index].path);
  };

  return (
    <nav className="bottom-nav">
      {items.map((item: BottomNavItem, index: number) => (
        <button
          key={index}
          className={`bottom-nav-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

type Props = {
  items: BottomNavItem[];
};

export default Navigation;
