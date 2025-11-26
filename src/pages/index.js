import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and services</p>
      </div>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>About Us</h3>
          <p>Learn more about our company and mission.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Our Services</h3>
          <p>Explore the services we offer.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Contact</h3>
          <p>Get in touch with us.</p>
        </div>
      </div>
    </Layout>
  );
}
