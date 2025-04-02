import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { FaServer, FaCode, FaCloud, FaShieldAlt } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />

            <section className="highlight-section">
                <div className="section-title">
                    <h2>What I Do</h2>
                    <p>Specializing in modern cloud infrastructure and automation</p>
                </div>
                <div className="highlight-grid">
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaCloud />
                        </div>
                        <h3>Cloud Architecture</h3>
                        <p>Design and implement robust, scalable AWS infrastructures that optimize performance and cost.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaServer />
                        </div>
                        <h3>Infrastructure as Code</h3>
                        <p>Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistency and repeatability.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaCode />
                        </div>
                        <h3>Full-Stack Development</h3>
                        <p>Build modern web applications using React, Node.js, and other cutting-edge technologies.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">
                            <FaShieldAlt />
                        </div>
                        <h3>Security & Compliance</h3>
                        <p>Implement security best practices and maintain compliance standards across infrastructure and applications.</p>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="stat-item">
                    <h3>40%</h3>
                    <p>Reduced Infrastructure Provisioning Time</p>
                </div>
                <div className="stat-item">
                    <h3>30%</h3>
                    <p>Faster Deployment Cycles</p>
                </div>
                <div className="stat-item">
                    <h3>20%</h3>
                    <p>Lower Cloud Costs</p>
                </div>
                <div className="stat-item">
                    <h3>35%</h3>
                    <p>Improved System Uptime</p>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to optimize your infrastructure?</h2>
                <p>Let's collaborate to build scalable, efficient, and secure cloud solutions.</p>
                <Link to="/contact" className="btn btn-primary">
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default Home;