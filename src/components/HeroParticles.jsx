import { useEffect, useState } from 'react'
import styles from '../styles/HeroParticles.module.css'

function HeroParticles() {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        const particleCount = 120
        const colors = ['#00abf0', '#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7']

        const newParticles = []

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 6 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 20,
                duration: Math.random() * 10 + 15
            })
        }

        setParticles(newParticles)
    }, [])

    return (
        <div className={styles.heroParticles}>
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={styles.heroParticle}
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />
            ))}
        </div>
    )
}

export default HeroParticles
