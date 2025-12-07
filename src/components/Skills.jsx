import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Skills.module.css'
import Particles from './Particles'

function Skills() {
    const scrollRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)

    const skills = [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Engineering Drawing', icon: 'fas fa-drafting-compass' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'C', icon: 'fas fa-c' },
        { name: 'Python', icon: 'fab fa-python' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isPaused) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
                if (scrollLeft >= scrollWidth - clientWidth) {
                    scrollRef.current.scrollLeft = 0
                } else {
                    scrollRef.current.scrollLeft += 1
                }
            }
        }, 50)
        return () => clearInterval(interval)
    }, [isPaused])

    return (
        <section className={styles.skills} id="skills">
            <Particles />
            <div className="container">
                <h2 className="section-title">My <span>Skillset</span></h2>

                <div className="scrolling-section-wrapper">
                    <div className={styles.skillsGrid} ref={scrollRef}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={styles.skillCard}

                            >
                                <div className={styles.skillIcon}>
                                    <i className={skill.icon}></i>
                                </div>
                                <h3 className={styles.skillName}>{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.codingActivity}>
                    <h3 className="section-subtitle"><i className="fab fa-codechef"></i> Coding Activity</h3>

                    <div className={styles.activityImage}>
                        {/* <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop" alt="Coding Activities" /> */}
                    </div>

                    <div className={styles.activityGrid}>
                        <div className={styles.activityCard}>
                            <div className={styles.activityIcon}>
                                <i className="fab fa-github"></i>
                            </div>
                            <h4>GitHub Contributions</h4>
                            <p>Showcasing open-source projects and collaborative coding efforts</p>
                            <div className={styles.heatmap}>
                                <img src="https://ghchart.rshah.org/shanmukha" alt="GitHub Contribution Heatmap" />
                            </div>
                            <a href="https://github.com/shanmukha919?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                                View GitHub Profile
                            </a>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.activityIcon}>
                                <i className="fab fa-codechef"></i>
                            </div>
                            <h4>CodeChef Activity</h4>
                            <p>Engaging in competitive programming contests and algorithmic challenges</p>
                            <a href="https://www.codechef.com/users/kl_2300039137" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                                View CodeChef Profile
                            </a>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.activityIcon}>
                                <i className="fab fa-hackerrank"></i>
                            </div>
                            <h4>HackerRank Progress</h4>
                            <p>Solving diverse coding problems to enhance problem-solving skills</p>
                            <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                                View HackerRank Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
