import { useEffect, useState } from 'react'
import styles from '../styles/Particles.module.css'

function Particles() {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        const particleCount = 100
        const newParticles = []

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                left: Math.random() * 100,
                animationDelay: Math.random() * 20,
                size: Math.random() * 6 + 1
            })
        }

        setParticles(newParticles)
    }, [])

    return (
        <div className={styles.particles}>
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={styles.particle}
                    style={{
                        left: `${particle.left}%`,
                        animationDelay: `${particle.animationDelay}s`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`
                    }}
                />
            ))}
        </div>
    )
}

export default Particles
