import React, { useState } from 'react';
import './Tabs.css'; 

interface Tab {
  id: number;
  label: string;
  child: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].child}
      </div>
    </div>
  );
};

export default Tabs;