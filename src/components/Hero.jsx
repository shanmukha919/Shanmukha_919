import { useEffect, useRef } from 'react'
import styles from '../styles/Hero.module.css'
import profileImage from '../assets/images/Shanmukha.jpg'

function Hero() {
    const roleRef = useRef(null)

    useEffect(() => {
        // Simple typing animation with colored roles
     const roles = [
  { text: "💻 Frontend & Backend Developer", color: "#00d4ff" },
  { text: "🛡️ Cyber Security Enthusiast", color: "#ff4757" },
  { text: "🧑‍💻 Full Stack Developer", color: "#3742fa" },
  { text: "🔧 DevOps Enthusiast", color: "#2ed573" },
  { text: "🧠 Problem Solver", color: "#ff6b9d" }
];
    let roleIndex = 0
        let charIndex = 0
        let isDeleting = false
        let typingSpeed = 150

        const type = () => {
            const currentRole = roles[roleIndex]

            if (isDeleting) {
                charIndex--
                typingSpeed = 50
            } else {
                charIndex++
                typingSpeed = 150
            }

            if (roleRef.current) {
                roleRef.current.textContent = "I Am A " + currentRole.text.substring(0, charIndex)
                roleRef.current.style.color = currentRole.color
            }

            if (!isDeleting && charIndex === currentRole.text.length) {
                isDeleting = true
                typingSpeed = 2000
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                roleIndex = (roleIndex + 1) % roles.length
                typingSpeed = 500
            }

            setTimeout(type, typingSpeed)
        }

        type()
    }, [])

    return (
        <section className={styles.hero} id="home">
            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Hi, I'm <span className="highlight">Shanmukha Potturi</span>
                        </h1>
                        <div className={styles.textAnimate}>
                            <h3 ref={roleRef}>Frontend Developer</h3>
                        </div>
                        <p className={styles.heroDescription}>
                            A passionate developer specializing in modern web technologies.
                            I create efficient, scalable, and user-friendly solutions to solve real-world problems.
                        </p>

                        <div className={styles.heroButtons}>
                            <a href="#contact" className="btn btn-primary">Hire Me</a>
                            <a href="#about" className="btn btn-secondary">About Me</a>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="https://github.com/shanmukha919" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shanmukha-potturi" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/919705477919" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/shannu_potturi" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        {/* <div className="footerSocial">
    <a href="https://github.com/" className="socialLink github"><i className="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/feed/" className="socialLink linkedin"><i className="fab fa-linkedin-in"></i></a>
    <a href="https://wa.me/919705477919" className="socialLink whatsapp"><i className="fab fa-whatsapp"></i></a>
    <a href="https://www.instagram.com/shannu_potturi" className="socialLink instagram"><i className="fab fa-instagram"></i></a>
</div> */}

                    </div>

                        <div className={styles.heroImage}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={profileImage}
                                    alt="Shanmukha Potturi"
                                    className={styles.profileImage}
                                />
                            <div className={styles.floatingElements}>
                                <div className={`${styles.floatingElement} ${styles.element1}`}></div>
                                <div className={`${styles.floatingElement} ${styles.element2}`}></div>
                                <div className={`${styles.floatingElement} ${styles.element3}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
