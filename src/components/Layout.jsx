import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} 3Dr Axis Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
