import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import achievementsStyles from '../styles/Achievements.module.css';
import servicesStyles from '../styles/Services.module.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <AchievementsSection />
      <Gallery />
      <Services />
      <Contact />
    </div>
  );
};

// Enhanced Achievements Section Component with all features
const AchievementsSection = () => {
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
    <section id="achievements" className={achievementsStyles.achievementsSection}>
      <AnimatedBackground />
      <div className={achievementsStyles.container}>
        {/* Hero Header */}
        <div className={achievementsStyles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={achievementsStyles.sectionTitle}>Our Achievements</h2>
            <p className={achievementsStyles.sectionSubtitle}>Milestones that define our journey of excellence and innovation</p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className={achievementsStyles.statsWrapper}>
          <div className={achievementsStyles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={achievementsStyles.statCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={achievementsStyles.statIcon}>{stat.icon}</div>
                <div className={achievementsStyles.statNumber}>{stat.number}</div>
                <div className={achievementsStyles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className={achievementsStyles.filterWrapper}>
          <h3 className={achievementsStyles.filterTitle}>Filter by Year</h3>
          <div className={achievementsStyles.filterButtons}>
            {years.map((year) => (
              <motion.button
                key={year}
                className={`${achievementsStyles.filterBtn} ${selectedYear === year ? achievementsStyles.active : ''}`}
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
        <div className={achievementsStyles.cardsWrapper}>
          <div className={achievementsStyles.achievementsGrid}>
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={achievementsStyles.achievementCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={achievementsStyles.cardHeader}>
                  <span className={achievementsStyles.icon}>{achievement.icon}</span>
                  <span className={achievementsStyles.yearBadge}>{achievement.year}</span>
                </div>

                <h3 className={achievementsStyles.cardTitle}>{achievement.title}</h3>
                
                <p className={achievementsStyles.cardDescription}>{achievement.description}</p>

                <div className={achievementsStyles.cardFooter}>
                  <span className={`${achievementsStyles.categoryBadge} ${achievementsStyles[`category-${achievement.category.toLowerCase()}`]}`}>
                    {achievement.category}
                  </span>
                  <span className={achievementsStyles.impactBadge}>{achievement.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Info */}
        <div className={achievementsStyles.timelineInfo}>
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
    </section>
  );
};

export default Home;
