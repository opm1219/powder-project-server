import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const FrozenGoldSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Video Loop */}
      <div className="absolute inset-0 opacity-50">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="/path-to-your-frozen-gold-trailer.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frozen Gold
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A documentary exploring the impact of climate change on winter sports and mountain communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Film Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <img
              src="/path-to-your-film-poster.jpg"
              alt="Frozen Gold Film"
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

          {/* Film Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">About the Film</h3>
              <p className="text-white/80">
                Follow the journey through the world's most iconic winter destinations as we uncover the stark reality of climate change's impact on snow sports and the communities that depend on them.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-2">40+</div>
                <div className="text-sm text-white/80">Locations Filmed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-2">2 Years</div>
                <div className="text-sm text-white/80">In Production</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Featured Voices</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Professional Athletes</li>
                <li>• Climate Scientists</li>
                <li>• Local Community Members</li>
                <li>• Mountain Guides</li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Watch Now
            </Button>
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Awards & Recognition</h3>
          <div className="flex justify-center space-x-8">
            {/* Add your film festival logos or awards here */}
            <div className="w-16 h-16 bg-white/10 rounded-full" />
            <div className="w-16 h-16 bg-white/10 rounded-full" />
            <div className="w-16 h-16 bg-white/10 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrozenGoldSection;