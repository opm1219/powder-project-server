import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TakeActionPage from './pages/TakeActionPage';
import CommunityPage from './pages/CommunityPage';
import StoreDonate from './pages/StoreDonate';
import FrozenGoldPage from './pages/FrozenGoldPage';
import PressKit from './pages/PressKit';
import LivePledgeFeed from './components/LivePledgeFeed';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#1a1a2e]">
        <Navbar />
        <Toaster />
        <LivePledgeFeed />
        
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/take-action" element={<TakeActionPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/store-donate" element={<StoreDonate />} />
            <Route path="/frozen-gold" element={<FrozenGoldPage />} />
            <Route path="/press" element={<PressKit />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;