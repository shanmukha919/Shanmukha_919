import styles from '../styles/Achievements.module.css'
import Particles from './Particles'

function Achievements() {
    const images = [
        {
            name: 'Coursera Certificate 1',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera 0S7L839S2MZ1.pdf#toolbar=0`
        },
        {
            name: 'Coursera Certificate 2',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera G1WK3ZQC0ARZ.pdf#toolbar=0`
        },
        {
            name: 'Coursera Certificate 3',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera III2UKW102MQ.pdf#toolbar=0`
        },
        {
            name: 'Coursera Certificate 4',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera KUH8DIZ793BF.pdf#toolbar=0`
        },
        {
            name: 'Coursera Certificate 5',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera SD4NJRUEJ3FF.pdf#toolbar=0`
        },
        {
            name: 'MultiCloudNetwork Certificate',
            src: `${import.meta.env.BASE_URL}docs/assets/MultiCloudNetwork.newlogo20251031-32-1n874.pdf#toolbar=0`
        },
        {
            name: 'Certified Architect Associate',
            src: `${import.meta.env.BASE_URL}docs/assets/Certified Architect Associate.pdf#toolbar=0`
        },
        {
            name: 'Certified Developer Professional',
            src: `${import.meta.env.BASE_URL}docs/assets/Certified Developer Professional.pdf#toolbar=0`
        }
    ];

    return (
        <section className={styles.achievements} id="Achievements">
            <Particles />
            <div className="container">
                <h2 className="section-title">My <span>Achievements</span></h2>

                <div className={styles.allCertificatesContainer}>
                    <div className={styles.certificatesGridAll}>
                        {images.map((image, index) => (
                            <div key={index} className={styles.fullCertificate}>
                                <h4>{image.name}</h4>
                                <object data={image.src} type="application/pdf" style={{width: '100%', height: '200px', borderRadius: '10px', border: 'none'}} title={image.name}></object>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
