import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const posts = [
  {
    username: "powder_sarah",
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800",
    caption: "Taking the #PowderPromise to protect these incredible views for future generations! 🏔️❄️",
    likes: 1243,
    comments: 89
  },
  {
    username: "alpine_mike",
    location: "Whistler, BC",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800",
    caption: "Carpooling to the slopes with the crew. Small changes make a big difference! #PowderPromise",
    likes: 892,
    comments: 45
  },
  {
    username: "eco_rider",
    location: "Park City, Utah",
    image: "https://images.unsplash.com/photo-1520891422668-fe731254aff0?auto=format&fit=crop&w=800",
    caption: "Supporting sustainable resorts and loving every minute of it! #PowderPromise #SaveSnow",
    likes: 1567,
    comments: 123
  }
];

const CommunitySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
        >
          Join the Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          See how our community is taking action to protect winter sports. Share your journey with #PowderPromise
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.username}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {post.username[0].toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.username}</h3>
                    <p className="text-sm text-gray-500">{post.location}</p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={`Post by ${post.username}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    ❤️ {post.likes.toLocaleString()}
                  </button>
                  <button className="text-gray-600 hover:text-blue-500 transition-colors">
                    💬 {post.comments.toLocaleString()}
                  </button>
                </div>

                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">{post.username}</span>{" "}
                  {post.caption}
                </p>

                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View all {post.comments} comments
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Share Your Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;