import React from 'react';
import './CardMini.css';

export interface CardProps {
    id: number;
    name: string;
    time: string; // probably not a good idea to keep it a string
    date: string;
    location: string;
    iconURL: string; // this will probably be a URL
  }

const CardMini: React.FC<CardProps> = ({ name, time, date, location, iconURL}) =>
{
    return(
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{time}</p>
                <p className="card-description">{date}</p>
                <p className="card-description">{location}</p>
                <img src={iconURL} alt='Icon' className='card-icon'></img>
            </div>
        </div>
    );
};

export default CardMini;