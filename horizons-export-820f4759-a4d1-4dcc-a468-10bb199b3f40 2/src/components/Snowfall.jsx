import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Snowfall = () => {
  const snowfallRef = useRef(null);
  const snowflakeCount = 50;

  useEffect(() => {
    if (!snowfallRef.current) return;

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      
      // Random initial position
      const startingLeft = Math.random() * 100;
      snowflake.style.left = `${startingLeft}%`;
      
      // Random size
      const size = Math.random() * 4 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      
      // Random opacity
      snowflake.style.opacity = Math.random() * 0.7 + 0.3;

      return { element: snowflake, startingLeft };
    };

    const animateSnowflake = (snowflake) => {
      const duration = Math.random() * 3000 + 2000;
      const delay = Math.random() * 1000;
      
      snowflake.element.animate([
        { 
          transform: 'translateY(0) translateX(0)',
          opacity: snowflake.element.style.opacity 
        },
        { 
          transform: `translateY(100vh) translateX(${Math.random() * 100 - 50}px)`,
          opacity: 0 
        }
      ], {
        duration,
        delay,
        iterations: Infinity,
        easing: 'linear'
      });
    };

    // Create and animate snowflakes
    const snowflakes = Array.from({ length: snowflakeCount }, createSnowflake);
    snowflakes.forEach(snowflake => {
      snowfallRef.current.appendChild(snowflake.element);
      animateSnowflake(snowflake);
    });

    // Cleanup
    return () => {
      if (snowfallRef.current) {
        snowfallRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <motion.div 
      ref={snowfallRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ perspective: '50px' }}
    />
  );
};

export default Snowfall;