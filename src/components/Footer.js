import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <span>Vansh Padia</span>
                    <p>DevOps Engineer & Full Stack Developer</p>
                </div>
                <div className="footer-links">
                    <a href="https://linkedin.com/in/vansh-padia" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/vanshPadia" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:vansh.padia19@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Vansh Padia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
