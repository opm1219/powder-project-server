import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const FrozenGoldPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6"
            >
              Frozen Gold
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-200 mb-8"
            >
              A groundbreaking documentary exploring the impact of climate change on winter sports and mountain communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Watch Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                View Trailer
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Film */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">About the Film</h2>
              <p className="text-blue-200">
                Follow our journey through the world's most iconic winter destinations as we uncover the stark reality of climate change's impact on snow sports and the communities that depend on them.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white mb-2">40+</div>
                  <div className="text-sm text-blue-200">Locations Filmed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white mb-2">2 Years</div>
                  <div className="text-sm text-blue-200">In Production</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Featured Voices</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>• Professional Athletes</li>
                  <li>• Climate Scientists</li>
                  <li>• Local Community Members</li>
                  <li>• Mountain Guides</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800"
                alt="Film Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-16 h-16 flex items-center justify-center"
                  onClick={() => {
                    // Handle play trailer
                  }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-blue-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Film Impact
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "1M+",
                label: "Views Worldwide",
                description: "Reaching audiences across 50+ countries"
              },
              {
                stat: "15+",
                label: "Film Festivals",
                description: "Official selections and awards"
              },
              {
                stat: "100K+",
                label: "Pledges Taken",
                description: "Direct action inspired by the film"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {item.stat}
                </div>
                <div className="text-xl font-semibold text-blue-200 mb-2">
                  {item.label}
                </div>
                <div className="text-blue-300">
                  {item.description}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-white">
              Join the Movement
            </h2>
            <p className="text-xl text-blue-200">
              Watch Frozen Gold and become part of the solution.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Watch Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FrozenGoldPage;