import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const EcoCalculator = () => {
  const [formData, setFormData] = useState({
    drivingDistance: 0,
    carpooling: false,
    equipmentBuying: 'new',
    resortChoice: 'regular'
  });

  const [result, setResult] = useState(null);

  const calculateImpact = () => {
    // Basic calculation example
    let carbonFootprint = 0;
    
    // Driving impact (kg CO2 per mile)
    carbonFootprint += formData.drivingDistance * 0.404;
    
    // Carpooling reduction
    if (formData.carpooling) {
      carbonFootprint *= 0.5;
    }
    
    // Equipment choices
    if (formData.equipmentBuying === 'used') {
      carbonFootprint *= 0.7;
    }
    
    // Resort choice
    if (formData.resortChoice === 'sustainable') {
      carbonFootprint *= 0.8;
    }

    setResult({
      carbonFootprint: Math.round(carbonFootprint),
      recommendations: [
        formData.carpooling ? "Great job carpooling!" : "Consider carpooling to reduce emissions",
        formData.equipmentBuying === 'used' ? "Excellent choice buying used equipment!" : "Consider buying used equipment",
        formData.resortChoice === 'sustainable' ? "Thank you for choosing sustainable resorts!" : "Look for eco-certified resorts"
      ]
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-900 mb-8"
        >
          Calculate Your Ski Season Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-600 mb-12"
        >
          See how your choices affect winter's future and get personalized recommendations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average driving distance per trip (miles)
              </label>
              <input
                type="number"
                value={formData.drivingDistance}
                onChange={(e) => setFormData({ ...formData, drivingDistance: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.carpooling}
                  onChange={(e) => setFormData({ ...formData, carpooling: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">I carpool to the resort</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Equipment choices
              </label>
              <select
                value={formData.equipmentBuying}
                onChange={(e) => setFormData({ ...formData, equipmentBuying: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="new">Buy new equipment</option>
                <option value="used">Buy used equipment</option>
                <option value="rent">Rent equipment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resort preference
              </label>
              <select
                value={formData.resortChoice}
                onChange={(e) => setFormData({ ...formData, resortChoice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="regular">Regular resort</option>
                <option value="sustainable">Eco-certified resort</option>
              </select>
            </div>

            <Button
              onClick={calculateImpact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Calculate Impact
            </Button>
          </motion.div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">Your Impact</h3>
                
                <div className="mb-6">
                  <p className="text-gray-600">Estimated carbon footprint:</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.carbonFootprint} kg CO2
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Recommendations:</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <span className="text-green-500">✓</span>
                        <span>{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EcoCalculator;