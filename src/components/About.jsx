import { useState } from "react";
import styles from "../styles/About.module.css";
import shanmukhaImage from "../assets/images/Shanmukha1.jpg";
import tvsLogo from "../assets/images/tvs.jpeg";
import kluLogo from "../assets/images/klu.jpeg";
import nttfLogo from "../assets/images/nttf.jpeg";
import rbpsLogo from "../assets/images/rbps.gif";
import resumePdf from "../assets/images/Shanmukha Main111.pdf";
import experienceCertificate from "../assets/images/experience-certificate.jpg";
import Particles from "./Particles";

function About() {
    const [activeTab, setActiveTab] = useState("experience");

    const viewResume = () => {
        window.open(resumePdf, "_blank");
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resumePdf;
        link.download = "Shanmukha_Potturi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewExperiences = () => {
        window.open(experienceCertificate, "_blank");
    };

    return (
        <section className={styles.about} id="about">
            <Particles />
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className={styles.aboutContent}>

                    {/* LEFT IMAGE */}
                    <div className={styles.aboutImage}>
                        <div className={styles.imageWrapper}>
                            <img src={shanmukhaImage} alt="Shanmukha Potturi" />
                            <div className={styles.decorationCircle}></div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className={styles.aboutInfo}>
                        <h3>Full Stack Developer</h3>

                        <div className={styles.aboutText}>
                            <p>
                                🚀 My professional journey started at TVS Brakes India, where I developed a strong foundation in the manufacturing and development of braking systems for vehicles. Over 3 years — 1 year as a Trainee followed by 2 years as a Junior Technical Trainee — I gained hands-on technical experience and built a deep understanding of automotive production processes. 🔧
                            </p>

                            <ul className={styles.skillsHighlights}>
                                <li>Familiar with frontend and backend development</li>
                                <li>Experience with modern web technologies</li>
                                <li>Strong problem-solving skills</li>
                            </ul>
                        </div>

                        {/* PERSONAL INFO */}
                        <div className={styles.personalInfo}>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <i className="fas fa-user"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Age:</span>
                                        <span className={styles.infoValue}>22</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-globe"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Country:</span>
                                        <span className={styles.infoValue}>India</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Email:</span>
                                        <span className={styles.infoValue}>
                                            potturishanmukha919@gmail.com
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-venus-mars"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Gender:</span>
                                        <span className={styles.infoValue}>Male</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-briefcase"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Work:</span>
                                        <span className={styles.infoValue}>Student</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-language"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Language:</span>
                                        <span className={styles.infoValue}>
                                            Telugu, English, Hindi, Tamil
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BUTTONS */}

                        {/* TABS */}
                        <div className={styles.tabsSection}>
                            <div className={styles.resumeActions}>
                                <button className="btn btn-primary" onClick={viewExperiences}>
                                    <span className={styles.emoji}>💼</span> View Experiences
                                </button>

                                <button className="btn btn-outline" onClick={viewResume}>
                                    <span className={styles.emoji}>📄</span> View Resume
                                </button>

                                <button className="btn btn-outline" onClick={downloadResume}>
                                    <span className={styles.emoji}>⬇️</span> Download CV
                                </button>
                            </div>

                            <div className={styles.tabsHeader}>
                                <button
                                    className={`${styles.tabBtn} ${activeTab === "experience" ? styles.active : ""}`}
                                    onClick={() => setActiveTab("experience")}
                                >
                                    Experience
                                </button>

                                <button
                                    className={`${styles.tabBtn} ${activeTab === "education" ? styles.active : ""}`}
                                    onClick={() => setActiveTab("education")}
                                >
                                    Education
                                </button>
                            </div>

                            <div className={styles.tabsContent}>
                                {activeTab === "experience" && (
                                    <div className={styles.tabPanel} id="experience">
                                        <div className={styles.educationCard}>
                                            <div className={styles.educationLogo}>
                                                <img src={tvsLogo} alt="TVS Brakes India Logo" />
                                            </div>

                                            <div className={styles.educationContent}>
                                                <h3>T.V.S Brakes India PVT LMT</h3>
                                                <span className={styles.grade}>JTE - Grade</span>
                                                <span className={styles.location}>Naidupeta, Andhra Pradesh</span>
                                                <span className={styles.duration}>2021 - 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "education" && (
                                    <div className={styles.tabPanel}>
                                        <div className={styles.educationCards}>

                                            <div className={styles.educationCard}>
                                                <div className={styles.educationLogo}>
                                                    <img src={kluLogo} alt="KL University Logo" />
                                                </div>

                                                <div className={styles.educationInfo}>
                                                    <h4>KL University</h4>
                                                    <div className={styles.educationGrade}>9.14 CGPA</div>
                                                    <p className={styles.educationLocation}>Vijayawada, AP</p>
                                                    <p className={styles.educationDuration}>2024 - 2027</p>
                                                </div>
                                            </div>

                                            <div className={styles.educationCard}>
                                                <div className={styles.educationLogo}>
                                                    <img src={nttfLogo} alt="NTTF Logo" />
                                                </div>

                                                <div className={styles.educationInfo}>
                                                    <h4>NTTF</h4>
                                                    <div className={styles.educationGrade}>8.67 CGPA</div>
                                                    <p className={styles.educationLocation}>Gannavaram, AP</p>
                                                    <p className={styles.educationDuration}>2018 - 2021</p>
                                                </div>
                                            </div>

                                            <div className={styles.educationCard}>
                                                <div className={styles.educationLogo}>
                                                    <img src={rbpsLogo} alt="Ravindra Bharathi Public School Logo" />
                                                </div>

                                                <div className={styles.educationInfo}>
                                                    <h4>Ravindra Bharathi Public School</h4>
                                                    <div className={styles.educationGrade}>9.3 CGPA</div>
                                                    <p className={styles.educationLocation}>Vijayawada, AP</p>
                                                    <p className={styles.educationDuration}>2018 - Passout</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
