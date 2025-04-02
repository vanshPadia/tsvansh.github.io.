import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, technologies, image, githubLink, liveLink }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <div className="project-links">
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub /> Code
                            </a>
                        )}
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaExternalLinkAlt /> Live
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;