import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ position, company, duration, location, responsibilities }) => {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <div className="experience-title">
                    <h3>{position}</h3>
                    <p className="company">{company}</p>
                </div>
                <div className="experience-meta">
                    <p className="duration">{duration}</p>
                    <p className="location">{location}</p>
                </div>
            </div>
            <ul className="responsibility-list">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
