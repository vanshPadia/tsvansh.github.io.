import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Get In Touch</h1>
                <p>Let's discuss how I can help with your infrastructure needs</p>
            </section>

            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Feel free to reach out through any of these channels:</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <h3>Location</h3>
                                    <p>Noida, India</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <p>+91 63-534-000-80</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <p>vansh.padia19@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/vansh-padia" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="https://github.com/vanshPadia" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send Me a Message</h2>
                        <p>I'll get back to you as soon as possible</p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;