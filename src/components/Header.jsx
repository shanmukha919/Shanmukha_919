import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'

function Header({ theme, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Header background on scroll
            setIsScrolled(window.scrollY > 50)

            // Update active section
            const sections = ['home', 'about', 'skills', 'projects','achievements', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerContent}>
                    <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, 'home')}>
                        Welcome to my World🙂<span>...!</span>
                    </a>

                    <div
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        id="menu-toggle"
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>

                    <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
                        <a
                            href="#home"
                            className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'about')}
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className={`${styles.navLink} ${activeSection === 'skills' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'skills')}
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'projects')}
                        >
                            Projects
                        </a>
                        <a
                            href="#achievements"
                            className={`${styles.navLink} ${activeSection === 'achievements' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'achievements')}
                        >
                            Achievements
                        </a>
                        <a
                            href="#contact"
                            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Contact
                        </a>
                        
                    </nav>

                    <div className={styles.themeToggle} onClick={toggleTheme}>
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
