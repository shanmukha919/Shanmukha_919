import styles from '../styles/Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerText}>
                        <p><span className="copyright-text">&copy; {currentYear}</span> <span className="name-highlight">Shanmukha Potturi</span> <span className="copyright-text">. All rights reserved.</span></p>
                    </div>

                    <div className={styles.footerLinks}>
                        <a href="#home" className={styles.footerLink}>Home</a>
                        <a href="#about" className={styles.footerLink}>About</a>
                        <a href="#projects" className={styles.footerLink}>Projects</a>
                        <a href="#contact" className={styles.footerLink}>Contact</a>
                    </div>

                    <div className={styles.footerSocial}>
                        <a href="https://github.com/shanmukha919" className={styles.socialLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://wa.me/919705477919" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shanmukha-potturi" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/shannu_potturi" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>Made with <i className="fas fa-heart"></i> by <span className="highlight">Shanmukha Potturi</span></p>
            </div>
        </footer>
    )
}

export default Footer
