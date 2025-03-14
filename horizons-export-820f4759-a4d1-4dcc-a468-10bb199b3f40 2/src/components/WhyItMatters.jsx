import React from 'react';
import { motion } from 'framer-motion';

const WhyItMatters = () => {
  const stats = [
    {
      label: 'Snow Season Reduction',
      value: '30',
      unit: 'days',
      description: 'shorter since 1970'
    },
    {
      label: 'Snow Depth Decrease',
      value: '20',
      unit: '%',
      description: 'worldwide average'
    },
    {
      label: 'Resorts at Risk',
      value: '50',
      unit: '%',
      description: 'by 2050'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Why It Matters
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-blue-200 mb-4">
                {stat.label}
              </h3>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="text-5xl font-bold text-white mb-2"
              >
                {stat.value}{stat.unit}
              </motion.div>
              <p className="text-blue-200/80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;