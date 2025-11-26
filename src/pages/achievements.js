import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Achievements.module.css';

export default function Achievements() {
  const [selectedYear, setSelectedYear] = useState('all');

  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: '🚀' },
    { number: '1000+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Domains Mastered', icon: '🎯' },
    { number: '99%', label: 'Client Satisfaction', icon: '⭐' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'FPV Drone Technology Leader',
      year: 2023,
      description: 'Pioneered advanced FPV drone cinematography with cutting-edge stabilization technology.',
      category: 'Technology',
      icon: '🚁',
      impact: 'Industry Recognition'
    },
    {
      id: 2,
      title: '3D Printing Excellence',
      year: 2023,
      description: 'Achieved sub-micron precision in rapid prototyping, enabling faster time-to-market.',
      category: 'Manufacturing',
      icon: '🖨️',
      impact: 'Quality Achievement'
    },
    {
      id: 3,
      title: 'Award Winner',
      year: 2022,
      description: 'Received prestigious industry recognition for innovation and excellence in service delivery.',
      category: 'Recognition',
      icon: '🏆',
      impact: 'Industry Award'
    },
    {
      id: 4,
      title: 'Web App Development',
      year: 2022,
      description: 'Built 15+ React-based applications with real-time features and dashboard integrations.',
      category: 'Software',
      icon: '💻',
      impact: 'Technical Milestone'
    },
    {
      id: 5,
      title: 'Client Milestone',
      year: 2021,
      description: 'Reached 1000+ happy customers worldwide across multiple continents and industries.',
      category: 'Growth',
      icon: '🌍',
      impact: 'Growth Achievement'
    },
    {
      id: 6,
      title: 'Robotics Innovation',
      year: 2021,
      description: 'Developed proprietary robotics solutions for automation and complex manufacturing tasks.',
      category: 'Robotics',
      icon: '🤖',
      impact: 'Innovation Breakthrough'
    },
  ];

  const filteredAchievements = selectedYear === 'all' 
    ? achievements 
    : achievements.filter(a => a.year === parseInt(selectedYear));

  const years = ['all', ...new Set(achievements.map(a => a.year))].sort((a, b) => {
    if (a === 'all') return -1;
    return b - a;
  });

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Our Achievements</h1>
          <p className={styles.subtitle}>Milestones that define our journey of excellence and innovation</p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <h3>Filter by Year</h3>
        <div className={styles.filterButtons}>
          {years.map((year) => (
            <motion.button
              key={year}
              className={`${styles.filterBtn} ${selectedYear === year ? styles.active : ''}`}
              onClick={() => setSelectedYear(year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year === 'all' ? 'All Years' : year}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <div className={styles.achievementsSection}>
        <div className={styles.achievementsGrid}>
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={styles.achievementCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{achievement.icon}</span>
                <span className={styles.yearBadge}>{achievement.year}</span>
              </div>

              <h3 className={styles.cardTitle}>{achievement.title}</h3>
              
              <p className={styles.cardDescription}>{achievement.description}</p>

              <div className={styles.cardFooter}>
                <span className={`${styles.categoryBadge} ${styles[`category-${achievement.category.toLowerCase()}`]}`}>
                  {achievement.category}
                </span>
                <span className={styles.impactBadge}>{achievement.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Info */}
      <div className={styles.timelineInfo}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Our Growth Journey</h3>
          <p>From 2021 to 2023, we've scaled exponentially, delivering innovative solutions across FPV cinematography, 3D manufacturing, software development, and robotics. Every achievement represents our commitment to excellence and client satisfaction.</p>
        </motion.div>
      </div>
    </div>
  );
}
