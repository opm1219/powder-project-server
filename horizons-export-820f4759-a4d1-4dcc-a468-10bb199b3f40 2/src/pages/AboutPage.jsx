import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';

const boardMembers = [
  {
    name: "Sarah Thompson",
    role: "Founder & Executive Director",
    image: "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&w=800",
    expertise: "Professional Skiing & Environmental Science",
    background: "Former Olympic athlete, PhD in Environmental Science",
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
    quote: "Our mission goes beyond preserving winter sports – it's about protecting entire ecosystems and communities that depend on healthy winter environments."
  },
  {
    name: "Dr. Michael Chen",
    role: "Chief Science Officer",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=800",
    expertise: "Climate Science & Data Analysis",
    background: "Former lead researcher at Global Climate Institute",
    achievements: [
      "Published groundbreaking research on mountain ecosystems",
      "Developed predictive models for snow patterns",
      "Led international climate research teams",
      "Advisory board member for Climate Action Network"
    ],
    impact: [
      "Pioneered new climate modeling techniques",
      "Established research partnerships worldwide",
      "Mentored 50+ young scientists",
      "Published 30+ peer-reviewed papers"
    ],
    quote: "The data is clear: we must act now to preserve our winter environments for future generations."
  },
  {
    name: "Emma Rodriguez",
    role: "Director of Community Engagement",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800",
    expertise: "Community Building & Advocacy",
    background: "Former Olympic snowboarder, Environmental Activist",
    achievements: [
      "Built global network of winter sports activists",
      "Launched youth environmental programs",
      "Created innovative community engagement strategies",
      "Led major climate advocacy campaigns"
    ],
    impact: [
      "Engaged 100,000+ community members",
      "Established 20+ local chapters",
      "Created award-winning education programs",
      "Organized global climate summits"
    ],
    quote: "Change happens when communities unite with purpose and passion."
  },
  {
    name: "James Wilson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800",
    expertise: "Sustainable Technology & Innovation",
    background: "20 years in sustainable resort operations",
    achievements: [
      "Pioneered eco-friendly snowmaking systems",
      "Reduced resort energy consumption by 40%",
      "Developed renewable energy solutions",
      "Created sustainable resort certification program"
    ],
    impact: [
      "Implemented green tech at 30+ resorts",
      "Saved 1M+ tons of CO2 emissions",
      "Trained 500+ resort operators",
      "Developed industry-leading sustainability metrics"
    ],
    quote: "Innovation and sustainability must go hand in hand to protect our winter wonderlands."
  }
];

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(boardMembers[0]);
  const [direction, setDirection] = useState(0);

  const handleMemberClick = (member) => {
    setDirection(boardMembers.indexOf(member) > boardMembers.indexOf(selectedMember) ? 1 : -1);
    setSelectedMember(member);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative py-24">
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Board of Directors</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Meet the passionate individuals leading the charge to protect winter sports and mountain environments for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Member Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {boardMembers.map((member) => (
              <motion.button
                key={member.name}
                onClick={() => handleMemberClick(member)}
                className={`relative aspect-square rounded-lg overflow-hidden group ${
                  selectedMember === member ? 'ring-4 ring-blue-500' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-blue-200">{member.role}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Member Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.name}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <motion.img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full aspect-square object-cover rounded-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                    <p className="text-xl text-blue-200">{selectedMember.role}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expertise</h3>
                    <p className="text-blue-200">{selectedMember.expertise}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Background</h3>
                    <p className="text-blue-200">{selectedMember.background}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-blue-200"
                        >
                          <span className="text-green-400">✓</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                    <ul className="space-y-2">
                      {selectedMember.impact.map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-blue-200"
                        >
                          <span className="text-blue-400">★</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-white/80">
                    "{selectedMember.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-black/30">
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
              We're always looking for passionate individuals to join our fight against climate change.
              Together, we can protect winter sports for future generations.
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

export default AboutPage;