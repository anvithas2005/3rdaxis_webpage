import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <CartProvider>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:section" element={<Home />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  </AuthProvider>
);

export default App;

