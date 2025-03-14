import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkiTrailNavigation from '../components/SkiTrailNavigation';
import EcoCalculator from '../components/EcoCalculator';
import SustainableMap from '../components/SustainableMap';
import LivePledgeFeed from '../components/LivePledgeFeed';
import PledgeForm from '../components/PledgeForm';
import { Button } from '../components/ui/button';

const impactStats = [
  {
    label: "Pledges Taken",
    value: "10,234",
    change: "+15% this month"
  },
  {
    label: "CO₂ Reduced",
    value: "156 tons",
    change: "Equivalent to 6,800 trees"
  },
  {
    label: "Community Members",
    value: "8,547",
    change: "Across 45 countries"
  }
];

const TakeActionPage = () => {
  const [showPledgeForm, setShowPledgeForm] = useState(false);

  const handlePledgeSubmit = async (data) => {
    // Here you would typically send the data to your backend
    console.log('Pledge submitted:', data);
    setShowPledgeForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/80" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Take Action Now
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-200 max-w-2xl mx-auto mb-8"
          >
            Join thousands of winter sports enthusiasts in protecting our slopes for future generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => setShowPledgeForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Take the Powder Promise
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-300">
                  {stat.change}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <SkiTrailNavigation />
      <EcoCalculator />
      <SustainableMap />
      
      {/* Live Pledge Feed */}
      <LivePledgeFeed />

      {/* Pledge Form Modal */}
      {showPledgeForm && (
        <PledgeForm
          onSubmit={handlePledgeSubmit}
          onClose={() => setShowPledgeForm(false)}
        />
      )}
    </div>
  );
};

export default TakeActionPage;