import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-center mb-8">Snow Season Length: 1970 → 2050</h3>
      
      <div className="relative max-w-2xl mx-auto">
        <div className="timeline-slider">
          <motion.div 
            className="timeline-progress"
            style={{ width: progress }}
          />
        </div>

        <div className="flex justify-between mt-4">
          <div className="text-center">
            <span className="block font-bold">1970</span>
            <span className="text-sm">120 Days</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">2023</span>
            <span className="text-sm">90 Days</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">2050</span>
            <span className="text-sm">60 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;