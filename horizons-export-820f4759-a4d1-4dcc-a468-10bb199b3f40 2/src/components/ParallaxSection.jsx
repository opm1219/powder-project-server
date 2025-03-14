import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="h-screen relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=2000')",
          y: y1
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
        style={{ y: y2 }}
      />
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-white"
        style={{ opacity }}
      >
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Time to Act is Now
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Every day we wait, we lose more of our winter wonderland.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxSection;