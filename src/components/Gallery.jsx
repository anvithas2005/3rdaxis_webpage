import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'FPV Drone Cinematography',
      description: 'Professional aerial footage with cinematic quality and smooth stabilization.',
      image: 'https://via.placeholder.com/400x300?text=Drone+Shot+1',
      category: 'Drones',
      icon: '🚁'
    },
    {
      id: 2,
      title: 'Aerial Urban Exploration',
      description: 'High-speed FPV racing through urban landscapes and complex environments.',
      image: 'https://via.placeholder.com/400x300?text=Drone+Racing',
      category: 'Drones',
      icon: '🚁'
    },
    {
      id: 3,
      title: '3D Printed Prototypes',
      description: 'Custom engineered parts with sub-micron precision manufacturing.',
      image: 'https://via.placeholder.com/400x300?text=3D+Print+1',
      category: 'Manufacturing',
      icon: '🖨️'
    },
    {
      id: 4,
      title: 'Rapid Prototyping',
      description: 'Fast-turnaround 3D printing for product development and testing.',
      image: 'https://via.placeholder.com/400x300?text=3D+Print+2',
      category: 'Manufacturing',
      icon: '🖨️'
    },
    {
      id: 5,
      title: 'React Web Dashboard',
      description: 'Real-time analytics dashboard with interactive data visualization.',
      image: 'https://via.placeholder.com/400x300?text=Web+App+1',
      category: 'Web',
      icon: '💻'
    },
    {
      id: 6,
      title: 'Mobile Application UI',
      description: 'Modern mobile app interface with seamless user experience.',
      image: 'https://via.placeholder.com/400x300?text=Mobile+App',
      category: 'Web',
      icon: '💻'
    },
    {
      id: 7,
      title: 'Robotics Assembly Line',
      description: 'Automated assembly solutions for manufacturing efficiency.',
      image: 'https://via.placeholder.com/400x300?text=Robotics+1',
      category: 'Robotics',
      icon: '🤖'
    },
    {
      id: 8,
      title: 'Precision Robot Calibration',
      description: 'Advanced robotic systems for complex manufacturing tasks.',
      image: 'https://via.placeholder.com/400x300?text=Robotics+2',
      category: 'Robotics',
      icon: '🤖'
    },
    {
      id: 9,
      title: 'Product Photography Setup',
      description: 'Professional product shots with premium lighting and composition.',
      image: 'https://via.placeholder.com/400x300?text=Product+Shot+1',
      category: 'Photography',
      icon: '📸'
    },
    {
      id: 10,
      title: 'Studio Photography',
      description: 'High-quality product imagery for e-commerce and marketing.',
      image: 'https://via.placeholder.com/400x300?text=Product+Shot+2',
      category: 'Photography',
      icon: '📸'
    },
  ];

  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className={styles.section}>
      <AnimatedBackground />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>Our Portfolio</p>
            <h2 className={styles.title}>Gallery</h2>
            <p className={styles.subtitle}>Explore our latest projects and creative works across multiple domains</p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterSection}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryWrapper}>
          <div className={styles.grid}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.image} />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.icon}>{item.icon}</span>
                      <h3 className={styles.overlayTitle}>{item.title}</h3>
                      <p className={styles.overlayDescription}>{item.description}</p>
                      <button className={styles.viewBtn}>View Project</button>
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <span className={`${styles.badge} ${styles[`badge-${item.category.toLowerCase()}`]}`}>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to Start Your Project?</h3>
            <p>Let's bring your vision to life with our innovative solutions.</p>
            <a href="#contact" className={styles.ctaButton}>Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
