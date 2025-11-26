import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: '3draxislabs@gmail.com',
      link: 'mailto:3draxislabs@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 74834 82350',
      link: 'tel:+917483482350'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bangalore, India',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Response Time',
      value: '24-48 hours',
      link: '#'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.section}>
      <AnimatedBackground />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>Get In Touch</p>
            <h2 className={styles.title}>Let's Collaborate</h2>
            <p className={styles.subtitle}>
              Tell us about your mission. Whether you need high-speed aerial coverage, robotics expertise, or a polished digital experience, we're here to help you deliver it faster.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <div className={styles.contactMethodsGrid}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              className={styles.contactMethod}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.methodIcon}>{method.icon}</div>
              <h4 className={styles.methodTitle}>{method.title}</h4>
              <p className={styles.methodValue}>{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Contact Form */}
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.formTitle}>Send us a Message</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project details..."
                  rows="5"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>Why Work With Us?</h3>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚡</div>
                <h4>Fast Response</h4>
                <p>We typically respond within 24-48 hours to all inquiries.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🎯</div>
                <h4>Expert Team</h4>
                <p>Our specialists have years of experience across multiple domains.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>💡</div>
                <h4>Custom Solutions</h4>
                <p>Every project is tailored to meet your unique requirements.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🤝</div>
                <h4>Dedicated Support</h4>
                <p>We provide ongoing support throughout your project lifecycle.</p>
              </div>
            </div>

            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                "Let's turn your vision into reality. We're ready to take on your next challenge."
              </p>
              <p className={styles.quoteAuthor}>— 3Dr Axis Labs Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

