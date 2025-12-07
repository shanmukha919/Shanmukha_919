import { useEffect, useState } from 'react'
import styles from '../styles/Loader.module.css'

function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.loaderContainer}>
                <div className={styles.loaderCircle}>
                    <span className={styles.loaderEmoji}>🚀</span>
                </div>
                <div className={styles.loaderParticles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                </div>
            </div>
            <div className={styles.loaderText}>
                Loading <span className="name-highlight">Shanmukha Portfolio</span>...!
            </div>
            <div className={styles.loaderSubtitle}>
                Crafting Digital Experiences
            </div>
        </div>
    )
}

export default Loader
