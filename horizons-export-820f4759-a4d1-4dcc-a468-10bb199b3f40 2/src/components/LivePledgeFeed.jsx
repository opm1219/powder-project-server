import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const resorts = {
  USA: [
    "Vail, Colorado",
    "Aspen Snowmass, Colorado",
    "Park City, Utah",
    "Jackson Hole, Wyoming",
    "Mammoth Mountain, California",
    "Killington, Vermont",
    "Breckenridge, Colorado",
    "Steamboat, Colorado",
    "Big Sky, Montana",
    "Squaw Valley, California"
  ],
  Canada: [
    "Whistler Blackcomb, BC",
    "Banff Sunshine, Alberta",
    "Mont Tremblant, Quebec",
    "Lake Louise, Alberta",
    "Big White, BC",
    "Mont-Sainte-Anne, Quebec",
    "Revelstoke, BC",
    "Sun Peaks, BC"
  ],
  Europe: [
    "Chamonix, France",
    "Zermatt, Switzerland",
    "St. Moritz, Switzerland",
    "Val d'Isère, France",
    "Verbier, Switzerland",
    "Kitzbühel, Austria",
    "St. Anton, Austria",
    "Courchevel, France"
  ]
};

const firstNames = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason",
  "Isabella", "William", "Mia", "James", "Charlotte", "Alexander", "Amelia",
  "Michael", "Harper", "Benjamin", "Evelyn", "Daniel", "Abigail", "Lucas",
  "Emily", "Henry", "Elizabeth", "Sebastian", "Sofia", "Jack", "Avery",
  "Owen", "Ella", "Gabriel", "Scarlett", "Matthew", "Victoria", "Leo",
  "Chloe", "David", "Camila", "Julian", "Luna", "Christopher", "Grace"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
  "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
  "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark",
  "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King",
  "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
  "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell"
];

const generatePledge = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const region = Object.keys(resorts)[Math.floor(Math.random() * Object.keys(resorts).length)];
  const resort = resorts[region][Math.floor(Math.random() * resorts[region].length)];
  
  return {
    id: Date.now(),
    name: `${firstName} ${lastName.charAt(0)}.`,
    location: resort,
    timestamp: new Date(),
    action: Math.random() > 0.5 ? 'signed the pledge' : 'joined the movement'
  };
};

const LivePledgeFeed = () => {
  const [pledges, setPledges] = useState([]);
  const maxVisiblePledges = 3;

  useEffect(() => {
    // Initial pledges
    setPledges(Array.from({ length: maxVisiblePledges }, generatePledge));

    // Generate new pledges periodically (more realistic timing)
    const interval = setInterval(() => {
      // Only 30% chance to add a new pledge
      if (Math.random() < 0.3) {
        setPledges(prev => {
          const newPledges = [...prev];
          // Remove oldest pledge
          newPledges.shift();
          // Add new pledge
          newPledges.push(generatePledge());
          return newPledges;
        });
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50">
      <div className="max-w-screen-2xl mx-auto py-4 px-4">
        <div className="flex items-center justify-center space-x-8">
          <AnimatePresence mode="popLayout">
            {pledges.map((pledge) => (
              <motion.div
                key={pledge.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="flex items-center space-x-2 text-white whitespace-nowrap bg-white/5 rounded-lg px-4 py-2"
              >
                <motion.span 
                  className="font-medium text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {pledge.name}
                </motion.span>
                <motion.span 
                  className="text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  from
                </motion.span>
                <motion.span 
                  className="text-green-400 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pledge.location}
                </motion.span>
                <motion.span 
                  className="text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {pledge.action}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LivePledgeFeed;