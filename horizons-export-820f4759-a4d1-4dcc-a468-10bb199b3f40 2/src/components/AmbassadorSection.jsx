import React from 'react';
import { motion } from 'framer-motion';

const ambassadors = [
  {
    name: "Sarah Thompson",
    role: "Pro Skier",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=600",
    quote: "Every powder day is a gift we must protect."
  },
  {
    name: "Mike Chen",
    role: "Climate Scientist",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=600",
    quote: "The data is clear: winter is changing faster than ever."
  },
  {
    name: "Emma Rodriguez",
    role: "Snowboard Champion",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600",
    quote: "Let's keep the stoke alive for future generations."
  }
];

const AmbassadorSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Meet Our Ambassadors
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="ambassador-card bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{ambassador.name}</h3>
                <p className="text-blue-200 text-sm mb-4">{ambassador.role}</p>
                <p className="text-white/80 italic">"{ambassador.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg">
            Join our ambassadors in the fight to save winter.
            <br />
            Every action counts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AmbassadorSection;