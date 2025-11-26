import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { items, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.panel}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <header className={styles.header}>
              <h3>Your Cart</h3>
              <button onClick={() => setIsCartOpen(false)}>×</button>
            </header>
            <div className={styles.body}>
              {items.length === 0 ? (
                <p>No items yet. Explore services to add offerings.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div>
                      <p className={styles.itemTitle}>{item.title || 'Service'}</p>
                      <small>{item.description || 'Custom offering'}</small>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))
              )}
            </div>
            <footer className={styles.footer}>
              <button onClick={clearCart} disabled={items.length === 0}>
                Clear cart
              </button>
              <button onClick={() => setIsCartOpen(false)}>Close</button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;

