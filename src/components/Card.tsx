import React from 'react';
import './Card.css';

interface CardProps {
    name: string;
    location: string;
    date: string;
  }

const Card: React.FC<CardProps> = ({ name, location, date}) =>
{
    return(
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{location}</p> 
                <p className="card-description">{date}</p>     
            </div>
        </div>
    );
};

export default Card;