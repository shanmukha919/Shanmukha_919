import styles from '../styles/Projects.module.css'
import Particles from './Particles'

function Projects() {
    const projects = [
        {
            title: 'Hospital Management System',
            description: 'Comprehensive system for managing hospital operations and patient records.',
            image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop&crop=center',
            tags: ['React.js', 'Node.js', 'MongoDB'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Car Rental System',
            description: 'Online car rental platform for booking vehicles, managing rentals, and tracking availability with an admin dashboard.',
            image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop&crop=center',
            tags: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
            liveLink: '#',
            codeLink: '#'
    },
        {
            title: 'E-Commerce Platform',
            description: 'Full-featured online store with payment integration and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
            tags: ['React', 'Node.js', 'MongoDB'],
            liveLink: '#',
            codeLink: '#'
        },
    ]

    return (
        <section className={styles.projects} id="projects">
            <Particles />

            <div className="container">
                <h2 className="section-title">
                    Latest <span>Projects</span>
                </h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />

                                <div className={styles.projectOverlay}>
                                    <div className={styles.projectLinks}>
                                        <a
                                            href={project.liveLink}
                                            className={styles.projectLink}
                                            aria-label="View Project"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>

                                        <a
                                            href={project.codeLink}
                                            className={styles.projectLink}
                                            aria-label="View Code"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>

                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.projectTech}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.techTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
