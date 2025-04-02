import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import '../styles/HeroSection.css';

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 className="hero-heading">
                    <span className="greeting">Hello, I'm</span>
                    <span className="name">Vansh Padia</span>
                </h1>
                <div className="hero-typewriter">
                    <TypeAnimation
                        sequence={[
                            'DevOps Engineer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Cloud Architect',
                            1000,
                            'Automation Specialist',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="hero-description">
                    I build scalable cloud infrastructure and automate deployment processes.
                    Passionate about solving complex problems and optimizing performance.
                </p>
                <div className="hero-buttons">
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <FaArrowRight />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Get In Touch
                    </Link>
                </div>
            </div>
            <div className="hero-image">
                <div className="tech-stack">
                    <div className="tech-icon aws">AWS</div>
                    <div className="tech-icon terraform">Terraform</div>
                    <div className="tech-icon kubernetes">K8s</div>
                    <div className="tech-icon docker">Docker</div>
                    <div className="tech-icon jenkins">Jenkins</div>
                    <div className="tech-icon react">React</div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;