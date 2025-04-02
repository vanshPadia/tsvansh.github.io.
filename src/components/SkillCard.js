import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ title, skills, icon }) => {
    return (
        <div className="skill-card">
            <div className="skill-icon">{icon}</div>
            <h3 className="skill-title">{title}</h3>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
