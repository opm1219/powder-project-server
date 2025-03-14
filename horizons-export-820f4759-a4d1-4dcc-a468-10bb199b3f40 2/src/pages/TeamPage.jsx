import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const TeamPage = () => {
  const coreTeam = [
    {
      name: "Dr. Michael Chen",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=800",
      expertise: "Climate Science & Data Analysis",
      background: "Former lead researcher at the Global Climate Institute",
      achievements: [
        "Published groundbreaking research on mountain ecosystems",
        "Developed predictive models for snow patterns",
        "Led international climate research teams"
      ],
      quote: "The data is clear: we must act now to preserve our winter environments."
    },
    {
      name: "Emma Rodriguez",
      role: "Director of Community Engagement",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800",
      expertise: "Community Building & Education",
      background: "Former Olympic snowboarder and environmental activist",
      achievements: [
        "Built global network of winter sports activists",
        "Launched youth environmental programs",
        "Created innovative community engagement strategies"
      ],
      quote: "Change happens when communities come together with purpose."
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800",
      expertise: "Sustainable Technology & Innovation",
      background: "20 years in sustainable resort operations",
      achievements: [
        "Pioneered eco-friendly snowmaking systems",
        "Reduced resort energy consumption by 40%",
        "Developed renewable energy solutions"
      ],
      quote: "Innovation is key to sustainable winter sports."
    }
  ];

  const departments = [
    {
      name: "Research & Development",
      description: "Leading the charge in climate science and sustainable solutions",
      members: 12,
      projects: 8,
      icon: "🔬"
    },
    {
      name: "Community Outreach",
      description: "Building bridges between winter sports enthusiasts and environmental action",
      members: 15,
      projects: 10,
      icon: "🤝"
    },
    {
      name: "Technical Operations",
      description: "Implementing sustainable solutions at resorts worldwide",
      members: 18,
      projects: 14,
      icon: "⚙️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Meet the passionate individuals dedicated to protecting winter sports and mountain environments for future generations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-square">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Expertise</h4>
                    <p className="text-blue-200">{member.expertise}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Background</h4>
                    <p className="text-blue-200">{member.background}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="text-blue-200 flex items-center gap-2 group cursor-pointer"
                          whileHover={{ x: 10 }}
                        >
                          <motion.span 
                            className="text-green-400"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                          >
                            ✓
                          </motion.span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/80 italic">"{member.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Departments
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-blue-200 mb-4">{dept.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{dept.members}</div>
                    <div className="text-sm text-blue-200">Team Members</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{dept.projects}</div>
                    <div className="text-sm text-blue-200">Active Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-200">
              We're always looking for passionate individuals to join our mission.
              Check out our current openings and become part of the change.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;