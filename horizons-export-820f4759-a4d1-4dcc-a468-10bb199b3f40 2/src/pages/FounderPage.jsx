import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const FounderPage = () => {
  const founder = {
    name: "Sarah Thompson",
    role: "Founder & Executive Director",
    image: "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&w=800",
    story: `As a former professional skier and environmental scientist, I've witnessed firsthand the devastating impact of climate change on our beloved winter environments. Growing up in the mountains, I spent countless days carving through pristine powder and racing down challenging slopes. However, over the years, I watched as these same slopes faced increasing challenges from rising temperatures and unpredictable weather patterns.

    This personal connection to the mountains, combined with my background in environmental science, drove me to establish The Powder Project. Our mission goes beyond preserving winter sports – it's about protecting entire ecosystems and communities that depend on healthy winter environments.`,
    achievements: [
      "Olympic Medal in Alpine Skiing",
      "PhD in Environmental Science",
      "Climate Policy Advisor",
      "TEDx Speaker on Climate Action"
    ],
    impact: [
      "Led sustainability initiatives at 50+ resorts",
      "Developed eco-friendly snow management solutions",
      "Created youth environmental education programs",
      "Built partnerships with leading environmental organizations"
    ],
    timeline: [
      {
        year: 2010,
        event: "Olympic Medal in Alpine Skiing",
        description: "Represented country at Winter Olympics"
      },
      {
        year: 2014,
        event: "Completed PhD in Environmental Science",
        description: "Research focused on climate impact on mountain ecosystems"
      },
      {
        year: 2016,
        event: "Founded The Powder Project",
        description: "Launched initiative to protect winter sports"
      },
      {
        year: 2020,
        event: "Global Impact Achievement",
        description: "Reached 100+ resorts worldwide"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source
              src="https://player.vimeo.com/external/434045526.hd.mp4?s=81a2ffa19431c88f21ee1820e92275f60ee7b13d&profile_id=175"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/70 to-black" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <motion.img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-transform duration-300 group-hover:translate-y-2"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-blue-200">Resorts Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100K+</div>
                    <div className="text-sm text-blue-200">Lives Changed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold text-white">Meet Our Founder</h1>
              <h2 className="text-3xl text-blue-200">{founder.name}</h2>
              <p className="text-white/80 leading-relaxed text-lg">{founder.story}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Journey & Impact
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/20 transform -translate-x-1/2" />

            {founder.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
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
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.year}
                    </h3>
                    <h4 className="text-xl text-blue-200 mb-2">
                      {item.event}
                    </h4>
                    <p className="text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Achievements & Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Key Achievements</h3>
              <ul className="space-y-4">
                {founder.achievements.map((achievement, index) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg p-4"
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <motion.span 
                      className="text-green-400 text-2xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-blue-200 text-lg">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Global Impact</h3>
              <ul className="space-y-4">
                {founder.impact.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg p-4"
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <motion.span 
                      className="text-blue-400 text-2xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ★
                    </motion.span>
                    <span className="text-blue-200 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-200">
              Be part of the movement to protect winter sports for future generations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Take the Pledge
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;