import { useState } from 'react';
import styles from '../styles/Contact.module.css'
import Particles from './Particles'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const response = await fetch("https://formsubmit.co/ajax/potturishanmukha919@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "Portfolio Contact Form",
                    message: formData.message
                })
            });

            if (response.ok) {
                // Show success message
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Clear success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                throw new Error('Form submission failed');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <Particles />
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>

                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p>I'm always open to discussing new opportunities and interesting projects.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:potturishanmukha919@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                                            potturishanmukha919@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9705477919</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="message">Message</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                            <span className={styles.btnText} style={{ display: isSubmitting ? 'none' : 'inline' }}>
                                Send Message
                            </span>
                            <span className={styles.btnLoader} style={{ display: isSubmitting ? 'inline' : 'none' }}>
                                <i className="fas fa-spinner fa-spin"></i>
                            </span>
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.formStatus} ${styles.success}`}>
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.formStatus} ${styles.error}`}>
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
