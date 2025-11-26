import Layout from '../components/Layout';
import styles from '../styles/Gallery.module.css';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'FPV Drone Shot 1', category: 'Drones', image: 'https://via.placeholder.com/300x200?text=Drone+1' },
    { id: 2, title: 'FPV Drone Shot 2', category: 'Drones', image: 'https://via.placeholder.com/300x200?text=Drone+2' },
    { id: 3, title: '3D Print Project', category: 'Prototyping', image: 'https://via.placeholder.com/300x200?text=3D+Print' },
    { id: 4, title: 'Web App Interface', category: 'Web', image: 'https://via.placeholder.com/300x200?text=Web+App' },
    { id: 5, title: 'Rapid Prototype', category: 'Prototyping', image: 'https://via.placeholder.com/300x200?text=Prototype' },
    { id: 6, title: 'Immersive Experience', category: 'Web', image: 'https://via.placeholder.com/300x200?text=Experience' },
  ];

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Gallery</h1>
        <p className={styles.subtitle}>Explore our latest projects and creations</p>
        <div className={styles.gallery}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
