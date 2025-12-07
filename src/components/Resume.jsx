import styles from "../styles/Resume.module.css";
import Particles from "./Particles";

function Resume() {
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "KL University",
            year: "2020 - 2024",
            grade: "CGPA: 8.5/10",
            location: "Vijayawada, Andhra Pradesh"
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Narayana Junior College",
            year: "2018 - 2020",
            grade: "Percentage: 95%",
            location: "Vijayawada, Andhra Pradesh"
        },
        {
            degree: "SSC",
            institution: "St. Joseph's High School",
            year: "2017 - 2018",
            grade: "CGPA: 9.8/10",
            location: "Vijayawada, Andhra Pradesh"
        }
    ];

    const experience = [
        {
            position: "Full Stack Developer Intern",
            company: "Tech Solutions Inc.",
            duration: "Jan 2024 - Present",
            location: "Remote",
            description: [
                "Developed responsive web applications using React.js and Node.js",
                "Implemented RESTful APIs and database integration",
                "Collaborated with cross-functional teams in agile environment"
            ]
        },
        {
            position: "Frontend Developer Intern",
            company: "Digital Innovations",
            duration: "Jun 2023 - Dec 2023",
            location: "Hyderabad, India",
            description: [
                "Built interactive user interfaces using HTML, CSS, and JavaScript",
                "Optimized website performance and user experience",
                "Worked with version control systems (Git)"
            ]
        }
    ];

    return (
        <section className={styles.resume} id="resume">
            <Particles />
            <div className="container">
                <h2 className="section-title">My <span>Resume</span></h2>

                <div className={styles.resumeGrid}>
                    {/* Education Section */}
                    <div className={styles.resumeColumn}>
                        <h3 className={styles.resumeHeading}>
                            <i className="fas fa-graduation-cap"></i> Education
                        </h3>
                        <div className={styles.resumeCards}>
                            {education.map((edu, index) => (
                                <div key={index} className={styles.resumeCard}>
                                    <div className={styles.resumeCardHeader}>
                                        <h4>{edu.degree}</h4>
                                        <span className={styles.year}>{edu.year}</span>
                                    </div>
                                    <div className={styles.resumeCardContent}>
                                        <p className={styles.institution}>
                                            <i className="fas fa-university"></i> {edu.institution}
                                        </p>
                                        <p className={styles.grade}>
                                            <i className="fas fa-award"></i> {edu.grade}
                                        </p>
                                        <p className={styles.location}>
                                            <i className="fas fa-map-marker-alt"></i> {edu.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={styles.resumeColumn}>
                        <h3 className={styles.resumeHeading}>
                            <i className="fas fa-briefcase"></i> Experience
                        </h3>
                        <div className={styles.resumeCards}>
                            {experience.map((exp, index) => (
                                <div key={index} className={styles.resumeCard}>
                                    <div className={styles.resumeCardHeader}>
                                        <h4>{exp.position}</h4>
                                        <span className={styles.year}>{exp.duration}</span>
                                    </div>
                                    <div className={styles.resumeCardContent}>
                                        <p className={styles.company}>
                                            <i className="fas fa-building"></i> {exp.company}
                                        </p>
                                        <p className={styles.location}>
                                            <i className="fas fa-map-marker-alt"></i> {exp.location}
                                        </p>
                                        <ul className={styles.description}>
                                            {exp.description.map((desc, descIndex) => (
                                                <li key={descIndex}>{desc}</li>
                                            ))}
                                        </ul>
                                        <a href={`${import.meta.env.BASE_URL}experience-certificate.jpg`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-eye"></i> View Experience
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download Resume Button */}
                <div className={styles.resumeDownload}>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-eye"></i> View Resume
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        className="btn btn-primary"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-download"></i> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
