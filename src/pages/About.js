import React from 'react';
import { FaAws, FaDocker, FaCode, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiJenkins, SiAnsible } from 'react-icons/si';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/About.css';

const About = () => {
    const skills = [
        {
            title: 'Cloud & DevOps',
            icon: <FaAws />,
            skills: [
                'AWS (EC2, S3, RDS, Lambda, ECS)',
                'Terraform, CloudFormation',
                'Docker, Kubernetes',
                'Jenkins, GitHub Actions',
                'Ansible, CI/CD',
            ],
        },
        {
            title: 'Programming',
            icon: <FaCode />,
            skills: [
                'Python, JavaScript',
                'React.js, Node.js',
                'Flask, Django',
                'C, C++',
                'HTML, CSS',
            ],
        },
        {
            title: 'Infrastructure',
            icon: <FaServer />,
            skills: [
                'VPC, Subnets, Route Tables',
                'TCP/IP, DNS, HTTP',
                'Linux Administration',
                'Nginx, Apache',
                'Scalable Architecture',
            ],
        },
        {
            title: 'Databases & Security',
            icon: <FaDatabase />,
            skills: [
                'MySQL, PostgreSQL',
                'DynamoDB, Redshift',
                'OpenSearch',
                'JWT, OAuth2, Cognito',
                'SSL/TLS',
            ],
        },
    ];

    const experiences = [
        {
            position: 'Trainee Engineer (DevOps)',
            company: 'Impressico Business Solutions',
            duration: 'September 2024 – Present',
            location: 'Noida, India',
            responsibilities: [
                'Automated infrastructure deployment, reducing provisioning time by 40% using Terraform and Ansible',
                'Improved CI/CD pipeline efficiency, decreasing deployment time by 30% with Jenkins and GitHub Actions',
                'Optimized AWS resource utilization, reducing cloud expenses by 20% through cost monitoring strategies',
                'Managed Kubernetes clusters for scalable and high-availability applications',
            ],
        },
        {
            position: 'Intern (Development)',
            company: 'Impressico Business Solutions',
            duration: 'June 2024 – September 2024',
            location: 'Noida, India',
            responsibilities: [
                'Developed and maintained web applications using Python, Django, React, and Node.js, improving internal workflows',
                'Deployed and managed AWS infrastructure, automating processes and reducing manual workload by 50%',
                'Designed and implemented a multi-tier AWS architecture using EC2, S3, RDS, Lambda, reducing system downtime by 35%',
                'Designed and implemented RESTful APIs, improving system performance and reducing latency by 15%',
            ],
        },
    ];

    const education = [
        {
            degree: 'Bachelor of Commerce',
            institution: 'Ambaba Commerce College',
            duration: '2021 – 2024',
            location: 'Surat, Gujarat',
            details: [
                'Specialized in Financial Management and Business Information Systems',
                'Graduated with Second Class',
                'Participated actively in the college\'s Technical Club',
            ],
        },
        {
            degree: 'Diploma in Cyber Security',
            institution: 'IIHT Computer Education',
            duration: '2021 – 2023',
            location: 'Surat, Gujarat',
            details: [
                'Cybersecurity for physical and digital networks',
                'Expertise in routers, switches, and network security',
                'Programming: Python, JavaScript, HTML, C++',
            ],
        },
    ];

    const certifications = [
        {
            name: 'AWS Solutions Architect',
            issuer: 'Xmetric Solutions',
            year: '2024',
            description: 'Scalable and fault-tolerant system design on AWS',
        },
        {
            name: 'Beginning Bash Scripting',
            issuer: 'Udemy',
            year: '2024',
            description: 'Fundamentals of Bash scripting and automation',
        },
        {
            name: 'Computer Hardware Basics',
            issuer: 'Cisco',
            year: '2023',
            description: 'Understanding computer hardware components and architecture',
        },
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-intro">
                        I'm Vansh Padia, a DevOps Engineer and Full Stack Developer with a passion for cloud automation,
                        security, and scalable architectures. I specialize in building and optimizing cloud infrastructure
                        to deliver high-performance, cost-effective solutions.
                    </p>
                </div>
            </section>

            <section className="skills-section">
                <div className="section-title">
                    <h2>My Skills</h2>
                    <p>Technologies and tools I work with</p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            skills={skill.skills}
                        />
                    ))}
                </div>
            </section>

            <section className="experience-section">
                <div className="section-title">
                    <h2>Work Experience</h2>
                    <p>My professional journey</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            position={exp.position}
                            company={exp.company}
                            duration={exp.duration}
                            location={exp.location}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </div>
            </section>

            <section className="education-section">
                <div className="section-title">
                    <h2>Education & Certifications</h2>
                    <p>My academic background and professional development</p>
                </div>
                <div className="education-grid">
                    <div className="education-column">
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <h4>{edu.degree}</h4>
                                <p className="institution">{edu.institution}</p>
                                <p className="duration">{edu.duration} | {edu.location}</p>
                                <ul>
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="cert-column">
                        <h3>Certifications</h3>
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <h4>{cert.name}</h4>
                                <p className="issuer">{cert.issuer} | {cert.year}</p>
                                <p className="description">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="soft-skills-section">
                <div className="section-title">
                    <h2>Soft Skills</h2>
                    <p>Professional qualities that drive my work</p>
                </div>
                <div className="soft-skills-grid">
                    <div className="soft-skill">Problem-Solving</div>
                    <div className="soft-skill">Team Collaboration</div>
                    <div className="soft-skill">Communication</div>
                    <div className="soft-skill">Time Management</div>
                    <div className="soft-skill">Adaptability</div>
                    <div className="soft-skill">Critical Thinking</div>
                    <div className="soft-skill">Attention to Detail</div>
                    <div className="soft-skill">Flexibility</div>
                    <div className="soft-skill">Analytical Thinking</div>
                    <div className="soft-skill">Continuous Learning</div>
                    <div className="soft-skill">Initiative & Proactivity</div>
                    <div className="soft-skill">Presentation Skills</div>
                </div>
            </section>
        </div>
    );
};

export default About;
