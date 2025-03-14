import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import PledgeCounter from '../components/PledgeCounter';
import InteractiveStats from '../components/InteractiveStats';
import Timeline from '../components/Timeline';
import ParallaxSection from '../components/ParallaxSection';
import ScrollProgress from '../components/ScrollProgress';
import FrozenGoldSection from '../components/FrozenGoldSection';
import { Button } from '../components/ui/button';
import Snowfall from '../components/Snowfall';
import PledgeForm from '../components/PledgeForm';
import AdminPanel from '../components/AdminPanel';

const HomePage = () => {
  const containerRef = useRef(null);
  const [showPledgeForm, setShowPledgeForm] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Snowfall />
        <VideoBackground />
        
        <motion.div 
          className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10"
          style={{ opacity, scale, y }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center text-shadow mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Powder Project
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-2xl mb-8 text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our winters are disappearing.
            <br />
            Join us in preserving snow sports for future generations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg relative z-10"
              onClick={() => setShowPledgeForm(true)}
            >
              Take the Powder Promise
            </Button>
          </motion.div>
          
          <PledgeCounter />
        </motion.div>
      </section>

      {/* Impact Section */}
      <InteractiveStats />
      
      {/* Timeline Section */}
      <Timeline />

      {/* Frozen Gold Section */}
      <FrozenGoldSection />
      
      {/* Call to Action Section */}
      <ParallaxSection />

      {/* Admin Panel */}
      <AdminPanel />

      {/* Pledge Form Modal */}
      {showPledgeForm && (
        <PledgeForm
          onClose={() => setShowPledgeForm(false)}
        />
      )}
    </div>
  );
};

export default HomePage;