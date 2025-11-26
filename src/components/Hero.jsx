import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleViewServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate random particles for background animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Particles */}
      <div className={styles.backgroundAnimation}>
        {/* Particle Animation Background */}
        <div className={styles.particleContainer}>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={styles.particle}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Original Blobs with reduced opacity */}
        <motion.div 
          className={styles.blob1}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={styles.blob2}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={styles.blob3}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        className={styles.heroContainer}
        style={{ y, opacity }}
      >
        {/* Main Title */}
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.titleLine}>Shaping The Future</span>
          <span className={styles.titleLine}>In Every Dimentions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          FPV Drones • Web & App Development • 3D Printing • Robotics
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#services"
            onClick={handleViewServices}
            className={styles.btnPrimary}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(255, 77, 109, 0.4)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
            <motion.span
              className={styles.arrow}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.button
            className={styles.btnSecondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1 + index * 0.1, 
                type: 'spring',
                stiffness: 200 
              }}
              whileHover={{ y: -5 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ opacity }}
      >
        <span>Scroll to explore</span>
        <motion.div 
          className={styles.scrollLine}
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
