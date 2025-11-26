import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import styles from '../styles/Services.module.css';

const Services = () => {
  const offerings = [
    {
      id: 1,
      icon: '🚁',
      title: 'FPV Drone Builds',
      description: 'Custom cinewhoop and long-range rigs tuned for cinematic capture.',
      features: ['4K Stabilization', 'Real-time Transmission', 'Professional Grade'],
      price: 'Custom Quote'
    },
    {
      id: 2,
      icon: '🖨️',
      title: 'Rapid Prototyping',
      description: '3D printing and machining with 72-hour turnaround for quick iterations.',
      features: ['Sub-micron Precision', '72-hour Turnaround', 'Multiple Materials'],
      price: 'From $500'
    },
    {
      id: 3,
      icon: '💻',
      title: 'Immersive Web Apps',
      description: 'React-based experiences with realtime dashboards and API integrations.',
      features: ['Real-time Updates', 'Responsive Design', 'API Integrations'],
      price: 'Custom Quote'
    },
    {
      id: 4,
      icon: '🤖',
      title: 'Robotics Solutions',
      description: 'Automated systems and robotic solutions for manufacturing and complex tasks.',
      features: ['Custom Engineering', 'Full Automation', 'Industrial Grade'],
      price: 'Custom Quote'
    },
    {
      id: 5,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance.',
      features: ['iOS & Android', 'Offline Support', 'Cloud Sync'],
      price: 'From $2,000'
    },
    {
      id: 6,
      icon: '📸',
      title: 'Professional Photography',
      description: 'Product and commercial photography with professional lighting and composition.',
      features: ['Studio Setup', 'Drone Footage', 'Post-processing'],
      price: 'From $1,000'
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <AnimatedBackground />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>What We Offer</p>
            <h2 className={styles.title}>Our Services</h2>
            <p className={styles.subtitle}>Comprehensive solutions across FPV cinematography, manufacturing, web development, and robotics</p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {offerings.map((item, index) => (
              <motion.article
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Card Top Border */}
                <div className={styles.cardBorder}></div>

                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {/* Description */}
                <p className={styles.cardDescription}>{item.description}</p>

                {/* Features */}
                <ul className={styles.featuresList}>
                  {item.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className={styles.priceSection}>
                  <span className={styles.price}>{item.price}</span>
                </div>

                {/* Button */}
                <motion.button
                  className={styles.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Quote
                </motion.button>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.whySection}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.whyTitle}>Why Choose Us?</h3>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>⚡</div>
                <h4>Fast Delivery</h4>
                <p>Quick turnaround times without compromising on quality.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🎯</div>
                <h4>Precision</h4>
                <p>Meticulous attention to detail in every project we undertake.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🚀</div>
                <h4>Innovation</h4>
                <p>Cutting-edge technology and creative problem-solving.</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🤝</div>
                <h4>Support</h4>
                <p>Dedicated support throughout and after project completion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

