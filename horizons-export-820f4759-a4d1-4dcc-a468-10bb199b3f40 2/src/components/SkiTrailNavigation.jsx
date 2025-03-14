import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SkiTrailNavigation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const trail = [
    {
      title: "Start Your Journey",
      description: "Take the first step towards sustainable skiing"
    },
    {
      title: "Learn the Impact",
      description: "Understand how climate change affects winter sports"
    },
    {
      title: "Make the Promise",
      description: "Commit to protecting winter for future generations"
    },
    {
      title: "Take Action",
      description: "Choose sustainable options and spread awareness"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black py-24 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=2000')",
          y
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Your Path to Impact
        </motion.h2>

        <div className="relative">
          {/* Ski Trail Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/20 transform -translate-x-1/2" />

          {trail.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-24 ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`relative ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: 0
                  }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                />
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkiTrailNavigation;