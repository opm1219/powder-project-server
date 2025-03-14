import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const tiers = [
  {
    amount: 10,
    impact: "Plants 10 trees in mountain regions",
    icon: "🌲"
  },
  {
    amount: 25,
    impact: "Helps fund sustainable ski resort initiatives",
    icon: "🎿"
  },
  {
    amount: 50,
    impact: "Supports research on snow preservation",
    icon: "❄️"
  }
];

const DonationSection = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [progress, setProgress] = useState(65); // Mock progress percentage

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
        >
          Support Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Your contribution helps protect winter sports for future generations.
          Choose your impact level below.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.amount}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg border-2 transition-colors cursor-pointer ${
                selectedTier === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedTier(index)}
            >
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                ${tier.amount}
              </h3>
              <p className="text-gray-600">{tier.impact}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{progress}% of monthly goal</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            onClick={() => {
              // Handle donation
            }}
          >
            Make Your Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;