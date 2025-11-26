import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>Get in touch with our team</p>
        
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2>Let's collaborate</h2>
            <p>
              Whether you need high-speed aerial coverage, robotics expertise, or a polished digital experience, 3Dr Axis
              Labs can help you deliver it faster.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <h3>Email</h3>
                <a href="mailto:3draxislabs@gmail.com">3draxislabs@gmail.com</a>
              </div>
              <div className={styles.detailItem}>
                <h3>Phone</h3>
                <a href="tel:+917483482350">+91 74834 82350</a>
              </div>
              <div className={styles.detailItem}>
                <h3>Address</h3>
                <p>3Dr Axis Labs<br/>India</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
