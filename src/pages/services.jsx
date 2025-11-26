import Layout from '../components/Layout';
import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'FPV Drone Builds',
      description: 'Custom cinewhoop and long-range rigs tuned for cinematic capture.',
    },
    {
      id: 2,
      title: 'Rapid Prototyping',
      description: '3D printing and machining with 72-hour turnaround.',
    },
    {
      id: 3,
      title: 'Immersive Web Apps',
      description: 'React-based experiences with realtime dashboards and API integrations.',
    },
  ];

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Our Services</h1>
        <p className={styles.subtitle}>Explore the services we offer</p>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.quoteBtn}>Request Quote</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
