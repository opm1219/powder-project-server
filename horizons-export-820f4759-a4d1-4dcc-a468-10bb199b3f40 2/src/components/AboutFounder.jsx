import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const AboutFounder = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&w=800"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-200">Resorts Visited</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-blue-200">Lives Impacted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Meet Our Founder</h2>
            
            <div className="space-y-4 text-white/80">
              <p>
                As a lifelong winter sports enthusiast and environmental advocate, I've witnessed firsthand the devastating impact of climate change on our beloved mountain environments.
              </p>
              <p>
                My journey began in the pristine slopes of [Location], where I first discovered my passion for winter sports. Over the years, I've watched as these same slopes faced increasing challenges from rising temperatures and unpredictable weather patterns.
              </p>
              <p>
                This personal connection to the mountains, combined with [specific experience/expertise], drove me to establish The Powder Project. Our mission is to unite the winter sports community in taking meaningful action against climate change.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Initiatives</h3>
              <ul className="space-y-2">
                {[
                  "Leading sustainability programs at major resorts",
                  "Developing eco-friendly snow management solutions",
                  "Building partnerships with environmental organizations",
                  "Creating educational programs for young athletes"
                ].map((initiative, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-blue-200"
                  >
                    <span className="text-green-400">✓</span>
                    {initiative}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Vision for the Future</h3>
              <p className="text-white/80">
                Our goal is to create a sustainable future for winter sports, where the next generation can experience the same joy and wonder that we have. Through innovation, education, and community action, we're working to protect our winter wonderlands for years to come.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Join Our Mission
            </Button>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                role: "Head of Sustainability",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400",
                expertise: "Environmental Science & Policy"
              },
              {
                name: "Michael Chen",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
                expertise: "Climate Data Analysis"
              },
              {
                name: "Emma Rodriguez",
                role: "Community Director",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400",
                expertise: "Sports Community Building"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounder;