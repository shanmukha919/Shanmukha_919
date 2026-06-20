import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import NeuralNetworkBackground from './components/NeuralNetworkBackground'

import './App.css'

function App() {
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState('dark')
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)

        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            const validSections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact']
            if (validSections.includes(hash)) {
                setActiveSection(hash)
            } else {
                setActiveSection('home')
            }
        }

        // Initialize on load
        handleHashChange()

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    useEffect(() => {
        // Scroll back to the top of the viewport when changing sections
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [activeSection])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    if (loading) {
        return <Loader />
    }

    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <Hero />
            case 'about':
                return <About />
            case 'skills':
                return <Skills />
            case 'projects':
                return <Projects />
            case 'achievements':
                return <Achievements />
            case 'contact':
                return <Contact />
            default:
                return <Hero />
        }
    }

    return (
        <div className="app">
            <NeuralNetworkBackground />
            <Header theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
            <main>
                {renderSection()}
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default App
