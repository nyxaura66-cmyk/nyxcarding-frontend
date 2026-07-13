import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { TopUp } from './pages/TopUp';
import { Orders } from './pages/Orders';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Checkout } from './pages/Checkout';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState({ loggedIn: false, name: '', email: '' });

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInitCheckout = (plan) => {
    setSelectedPlan(plan);
    navigateTo('checkout');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} onBuyPlan={handleInitCheckout} />;
      case 'topup':
        return <TopUp onBuyPlan={handleInitCheckout} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;
      case 'checkout':
        return <Checkout product={selectedPlan} navigateTo={navigateTo} />;
      case 'orders':
        return <Orders user={user} navigateTo={navigateTo} />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login setUser={setUser} navigateTo={navigateTo} />;
      case 'signup':
        return <SignUp setUser={setUser} navigateTo={navigateTo} />;
      case 'dashboard':
        return <Dashboard user={user} setUser={setUser} navigateTo={navigateTo} />;
      case 'admin':
        return <AdminDashboard navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} onBuyPlan={handleInitCheckout} />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      navigateTo={navigateTo} 
      user={user} 
      setSearchQuery={setSearchQuery}
    >
      {renderActivePage()}
    </Layout>
  );
      }

    
