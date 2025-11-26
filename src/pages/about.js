import styles from '../styles/Page.module.css';

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <h1>About Us</h1>
      <div className={styles.content}>
        <p>We are a dedicated team of professionals committed to excellence in everything we do.</p>
        <p>Our mission is to provide top-notch services and create meaningful experiences for our clients.</p>
      </div>
    </div>
  );
}
