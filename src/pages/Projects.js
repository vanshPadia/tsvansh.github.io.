import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// Import project images
import ansibleImg from '../assets/projects/ansible.jpg';
import ecsImg from '../assets/projects/ecs.jpg';
import jenkinsImg from '../assets/projects/jenkins.jpg';
import rdsImg from '../assets/projects/rds.jpg';
import s3Img from '../assets/projects/s3.jpg';
import opensearchImg from '../assets/projects/opensearch.jpg';
import lambdaImg from '../assets/projects/lambda.jpg';
import vpnImg from '../assets/projects/vpn.jpg';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const projectsData = [
            {
                id: 1,
                title: 'Ansible Infrastructure Automation',
                description: 'Automated infrastructure setup using Ansible playbooks with Jenkins pipelines for deployment and management.',
                technologies: ['Ansible', 'Jenkins', 'Cloud Infrastructure'],
                image: ansibleImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/Ansible',
                liveLink: '',
                category: 'devops',
            },
            {
                id: 2,
                title: 'ECS-WordPress Deployment',
                description: 'Built and deployed WordPress using Amazon ECS and Docker with automated scaling and security configurations for production readiness.',
                technologies: ['AWS ECS', 'Docker', 'Terraform', 'WordPress'],
                image: ecsImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/ECS-Wordpress',
                liveLink: '',
                category: 'aws',
            },
            {
                id: 3,
                title: 'Jenkins on AWS',
                description: 'Provisioned complete Jenkins environment with networking setup and configured security groups and IAM roles for secure access.',
                technologies: ['AWS', 'CloudFormation', 'EC2', 'VPC', 'Jenkins'],
                image: jenkinsImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/Jenkins-setup',
                liveLink: '',
                category: 'devops',
            },
            {
                id: 4,
                title: 'RDS Infrastructure',
                description: 'Deployed RDS with private networking and a jump host for secure access. Automated database provisioning using infrastructure as code.',
                technologies: ['AWS RDS', 'CloudFormation', 'VPC', 'Security'],
                image: rdsImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/RDS-Jumphost',
                liveLink: '',
                category: 'aws',
            },
            {
                id: 5,
                title: 'S3 Static Web Hosting',
                description: 'Configured S3 for static site hosting with CloudFront CDN and automated DNS setup using Route 53.',
                technologies: ['AWS S3', 'CloudFront', 'Route 53', 'Web Hosting'],
                image: s3Img,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/STATIC_WEBHOST_AWS',
                liveLink: 'https://example.com',
                category: 'web',
            },
            {
                id: 6,
                title: 'AWS OpenSearch Setup',
                description: 'Deployed OpenSearch cluster for centralized logging and configured Tomcat on EC2 for log generation and analysis.',
                technologies: ['AWS OpenSearch', 'CloudFormation', 'EC2', 'Tomcat'],
                image: opensearchImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/aws%20opensearch',
                liveLink: '',
                category: 'aws',
            },
            {
                id: 7,
                title: 'Lambda OpenSearch Log Management',
                description: 'Designed serverless solution for efficient log management and optimized storage by implementing log retention policies.',
                technologies: ['AWS Lambda', 'OpenSearch', 'CloudFormation', 'Serverless'],
                image: lambdaImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/lambda',
                liveLink: '',
                category: 'aws',
            },
            {
                id: 8,
                title: 'OpenVPN Setup',
                description: 'Configured OpenVPN for secure remote access and implemented SSL/TLS encryption for data security.',
                technologies: ['OpenVPN', 'SSL/TLS', 'Linux', 'Network Security'],
                image: vpnImg,
                githubLink: 'https://github.com/vanshPadia/project/tree/master/openvpn',
                liveLink: '',
                category: 'security',
            },
        ];

        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);

    const handleFilterChange = (newFilter) => {
        setIsAnimating(true);
        setFilter(newFilter);

        setTimeout(() => {
            if (newFilter === 'all') {
                setFilteredProjects(projects);
            } else {
                const filtered = projects.filter(project => project.category === newFilter);
                setFilteredProjects(filtered);
            }
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="projects-page">
            <section className="projects-hero">
                <h1>My Projects</h1>
                <p>Explore my work in cloud infrastructure, automation, and web development</p>
            </section>

            <section className="projects-section">
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'aws' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('aws')}
                    >
                        AWS
                    </button>
                    <button
                        className={`filter-btn ${filter === 'devops' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('devops')}
                    >
                        DevOps
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('web')}
                    >
                        Web
                    </button>
                    <button
                        className={`filter-btn ${filter === 'security' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('security')}
                    >
                        Security
                    </button>
                </div>

                <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;