import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const regions = [
  {
    name: "Western Region",
    resorts: [
      {
        name: "Pacific Peaks",
        location: "California",
        position: { x: 15, y: 40 },
        sustainabilityScore: 95,
        initiatives: [
          "Solar-Powered Lifts",
          "Water Conservation",
          "Wildlife Protection"
        ],
        image: "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?auto=format&fit=crop&w=800"
      },
      {
        name: "Mountain Vista",
        location: "Utah",
        position: { x: 25, y: 42 },
        sustainabilityScore: 90,
        initiatives: [
          "Biodiesel Equipment",
          "Habitat Restoration",
          "Recycling Program"
        ],
        image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800"
      }
    ]
  },
  {
    name: "Central Region",
    resorts: [
      {
        name: "Alpine Echo",
        location: "Colorado",
        position: { x: 35, y: 45 },
        sustainabilityScore: 92,
        initiatives: [
          "100% Renewable Energy",
          "Zero Waste Program",
          "Electric Vehicle Charging"
        ],
        image: "https://images.unsplash.com/photo-1520891422668-fe731254aff0?auto=format&fit=crop&w=800"
      }
    ]
  },
  {
    name: "Eastern Region",
    resorts: [
      {
        name: "Nordic Haven",
        location: "Vermont",
        position: { x: 75, y: 30 },
        sustainabilityScore: 88,
        initiatives: [
          "Sustainable Snowmaking",
          "Forest Conservation",
          "Local Energy Grid"
        ],
        image: "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?auto=format&fit=crop&w=800"
      }
    ]
  }
];

const SustainableMap = () => {
  const [selectedResort, setSelectedResort] = useState(null);
  const [hoveredResort, setHoveredResort] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);

  const allResorts = regions.flatMap(region => region.resorts);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Sustainable Resorts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-white/80 text-center max-w-2xl mx-auto mb-16"
        >
          Discover resorts leading the fight against climate change through innovative sustainability initiatives.
        </motion.p>

        <div className="relative h-[600px] rounded-xl overflow-hidden mb-8">
          {/* Map Background with Regions */}
          <div className="absolute inset-0 bg-blue-950">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                className={`absolute ${getRegionPosition(index)} bg-blue-900/50 backdrop-blur-sm rounded-lg border border-blue-800
                  ${activeRegion === region.name ? 'bg-blue-800/50' : ''}`}
                whileHover={{ backgroundColor: 'rgba(30, 64, 175, 0.3)' }}
                onClick={() => setActiveRegion(region.name === activeRegion ? null : region.name)}
              >
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{region.name}</h3>
                  <p className="text-blue-200 text-sm">
                    {region.resorts.length} Sustainable {region.resorts.length === 1 ? 'Resort' : 'Resorts'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resort Markers */}
          {allResorts.map((resort) => (
            <motion.div
              key={resort.name}
              className="absolute"
              style={{
                left: `${resort.position.x}%`,
                top: `${resort.position.y}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.button
                className="relative"
                onClick={() => setSelectedResort(resort)}
                onMouseEnter={() => setHoveredResort(resort)}
                onMouseLeave={() => setHoveredResort(null)}
              >
                <motion.div 
                  className={`w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-lg 
                    ${hoveredResort === resort ? 'bg-green-400' : 'bg-green-600'}`}
                  animate={{
                    boxShadow: hoveredResort === resort 
                      ? '0 0 20px rgba(74, 222, 128, 0.6)' 
                      : '0 0 0px rgba(74, 222, 128, 0)'
                  }}
                />
                
                <AnimatePresence>
                  {hoveredResort === resort && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg p-3 z-10"
                    >
                      <h3 className="font-bold text-blue-900">{resort.name}</h3>
                      <p className="text-sm text-gray-600">{resort.location}</p>
                      <div className="mt-1">
                        <span className="text-green-600 font-bold">
                          {resort.sustainabilityScore}%
                        </span>
                        <span className="text-gray-500 text-sm"> eco-score</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}

          {/* Region Connections */}
          <svg className="absolute inset-0 pointer-events-none">
            {allResorts.map((resort, index) => (
              <motion.line
                key={`line-${index}`}
                x1={`${resort.position.x}%`}
                y1={`${resort.position.y}%`}
                x2={`${index > 0 ? allResorts[index - 1].position.x : resort.position.x}%`}
                y2={`${index > 0 ? allResorts[index - 1].position.y : resort.position.y}%`}
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />
            ))}
          </svg>
        </div>

        {/* Selected Resort Details */}
        <AnimatePresence>
          {selectedResort && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 mt-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <motion.img
                  src={selectedResort.image}
                  alt={selectedResort.name}
                  className="w-full md:w-1/2 h-64 rounded-lg object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedResort.name}</h3>
                      <p className="text-blue-200">{selectedResort.location}</p>
                    </div>
                    <motion.button
                      className="text-white/60 hover:text-white"
                      onClick={() => setSelectedResort(null)}
                      whileHover={{ scale: 1.1 }}
                    >
                      ✕
                    </motion.button>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div 
                        className="relative h-2 w-full bg-white/20 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                      >
                        <motion.div 
                          className="absolute left-0 top-0 h-full bg-green-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedResort.sustainabilityScore}%` }}
                          transition={{ delay: 0.2, duration: 0.8 }}
                        />
                      </motion.div>
                      <span className="text-2xl font-bold text-green-400 min-w-[3rem]">
                        {selectedResort.sustainabilityScore}%
                      </span>
                    </div>

                    <h4 className="text-white font-semibold mb-3">Sustainability Initiatives:</h4>
                    <ul className="space-y-2">
                      {selectedResort.initiatives.map((initiative, index) => (
                        <motion.li
                          key={initiative}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-blue-200 flex items-center gap-2"
                        >
                          <span className="text-green-400">✓</span>
                          {initiative}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Helper function to position regions on the map
const getRegionPosition = (index) => {
  switch (index) {
    case 0: // Western
      return 'left-[10%] top-[30%] w-[25%] h-[40%]';
    case 1: // Central
      return 'left-[37.5%] top-[35%] w-[25%] h-[40%]';
    case 2: // Eastern
      return 'left-[65%] top-[20%] w-[25%] h-[40%]';
    default:
      return '';
  }
};

export default SustainableMap;