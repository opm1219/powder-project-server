import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PledgeCounter = () => {
  const [count, setCount] = useState(12547);
  const controls = useAnimation();

  useEffect(() => {
    // Increment counter randomly but more realistically
    const interval = setInterval(() => {
      const increment = Math.random() < 0.7 ? 1 : 0; // 70% chance to increment by 1
      setCount(prevCount => {
        const newCount = prevCount + increment;
        localStorage.setItem('pledgeCount', newCount.toString());
        return newCount;
      });
      
      // Animate the counter only when it changes
      if (increment > 0) {
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.3 }
        });
      }
    }, 8000); // Update every 8 seconds (more realistic)

    // Load saved count from localStorage
    const savedCount = localStorage.getItem('pledgeCount');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="text-center relative group"
    >
      <motion.div
        className="absolute -inset-4 bg-blue-500/20 rounded-lg blur-lg group-hover:bg-blue-500/30 transition-all duration-300"
        animate={controls}
      />
      
      <p className="text-xl font-semibold text-white mb-2 relative">
        Pledges taken to save winter
      </p>
      
      <motion.div
        animate={controls}
        className="relative"
      >
        <motion.span
          key={count}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl font-bold text-white block"
        >
          {count.toLocaleString()}
        </motion.span>
        
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-sm text-white/80">and growing</span>
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm text-blue-400"
          >
            ●
          </motion.span>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-sm text-white/80 mt-4 relative"
        whileHover={{ scale: 1.05 }}
      >
        Join the movement to protect winter sports
      </motion.p>
    </motion.div>
  );
};

export default PledgeCounter;