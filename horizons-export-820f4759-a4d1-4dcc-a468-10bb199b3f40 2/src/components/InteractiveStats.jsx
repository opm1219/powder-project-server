import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InteractiveStats = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = {
    snowDepth: {
      current: 80, // Current percentage of historical average
      historical: {
        1970: 100,
        1990: 95,
        2010: 85,
        2023: 80
      },
      projected2050: 60,
      source: "NOAA Climate Data & EPA Climate Change Indicators"
    },
    seasonLength: {
      current: 90, // Current average days
      historical: {
        1970: 120,
        1990: 110,
        2010: 100,
        2023: 90
      },
      projected2050: 60,
      source: "EPA Climate Indicators & Resort Industry Reports"
    },
    resortsAtRisk: {
      current: 50, // Percentage at risk
      breakdown: {
        lowElevation: 70,
        midElevation: 40,
        highElevation: 20
      },
      projected2050: {
        total: 80,
        withoutAction: 90,
        withAction: 30
      },
      source: "Climate Impact Lab & International Ski Federation"
    }
  };

  return (
    <div ref={ref} className="py-24 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          style={{ opacity }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          The Impact of Climate Change
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Snow Depth Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Snow Depth</h3>
            <div className="space-y-4">
              <div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stats.snowDepth.current}%
                </div>
                <p className="text-blue-200">of historical average</p>
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stats.snowDepth.current}%` }}
                  viewport={{ once: true }}
                  className="h-full bg-blue-500"
                />
              </div>
              <div className="text-sm text-blue-200">
                Projected 2050: {stats.snowDepth.projected2050}%
              </div>
            </div>
          </motion.div>

          {/* Season Length Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Season Length</h3>
            <div className="space-y-4">
              <div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stats.seasonLength.current}
                </div>
                <p className="text-blue-200">days per season</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-blue-200">
                  <span>1970: {stats.seasonLength.historical[1970]} days</span>
                  <span>2023: {stats.seasonLength.historical[2023]} days</span>
                </div>
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stats.seasonLength.current / stats.seasonLength.historical[1970]) * 100}%` }}
                    viewport={{ once: true }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
              <div className="text-sm text-blue-200">
                Projected 2050: {stats.seasonLength.projected2050} days
              </div>
            </div>
          </motion.div>

          {/* Resorts at Risk Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Resorts at Risk</h3>
            <div className="space-y-4">
              <div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stats.resortsAtRisk.current}%
                </div>
                <p className="text-blue-200">currently at risk</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Low Elevation</span>
                  <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stats.resortsAtRisk.breakdown.lowElevation}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-red-500"
                    />
                  </div>
                  <span className="text-sm text-blue-200">{stats.resortsAtRisk.breakdown.lowElevation}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Mid Elevation</span>
                  <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stats.resortsAtRisk.breakdown.midElevation}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-yellow-500"
                    />
                  </div>
                  <span className="text-sm text-blue-200">{stats.resortsAtRisk.breakdown.midElevation}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">High Elevation</span>
                  <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stats.resortsAtRisk.breakdown.highElevation}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-green-500"
                    />
                  </div>
                  <span className="text-sm text-blue-200">{stats.resortsAtRisk.breakdown.highElevation}%</span>
                </div>
              </div>
              <div className="text-sm text-blue-200">
                By 2050: Up to {stats.resortsAtRisk.projected2050.withoutAction}% at risk without action
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-blue-200"
        >
          Data sources: {stats.snowDepth.source}, {stats.seasonLength.source}, {stats.resortsAtRisk.source}
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveStats;