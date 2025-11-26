import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import styles from '../styles/About.module.css';

const About = () => {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality or excellence.'
    },
    {
      icon: '🎯',
      title: 'Precision Engineering',
      description: 'Meticulous attention to detail in every project we undertake.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Your success is our success. We work as an extension of your team.'
    }
  ];

  return (
    <section id="about" className={styles.section}>
      <AnimatedBackground />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.p 
            className={styles.eyebrow}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.p>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building Tomorrow's Solutions Today
          </motion.h2>
        </div>

        {/* Mission Statement */}
        <div className={styles.missionContainer}>
          <motion.div 
            className={styles.missionIcon}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={{ y: [0, -10, 0] }}
          >
            💡
          </motion.div>
          <motion.div 
            className={styles.missionBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              We provide innovative, high-quality technology solutions that empower businesses and 
              individuals to achieve their goals and transform their visions into reality.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.valueIcon}>{value.icon}</div>
              <h4 className={styles.valueTitle}>{value.title}</h4>
              <p className={styles.valueDescription}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

