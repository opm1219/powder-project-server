import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const articles = [
  {
    title: "The Future of Skiing: What the Next 30 Years Look Like",
    excerpt: "Climate scientists predict significant changes to winter sports. Here's what you need to know.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800",
    category: "Climate Science",
    readTime: "5 min read"
  },
  {
    title: "5 Resorts Leading the Fight Against Climate Change",
    excerpt: "These innovative ski resorts are setting new standards for sustainability in winter sports.",
    image: "https://images.unsplash.com/photo-1520891422668-fe731254aff0?auto=format&fit=crop&w=800",
    category: "Sustainability",
    readTime: "4 min read"
  },
  {
    title: "Eco-Friendly Ski Gear That Actually Works",
    excerpt: "Our top picks for sustainable ski and snowboard equipment that doesn't compromise on performance.",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800",
    category: "Gear",
    readTime: "6 min read"
  }
];

const categories = ["All", "Climate Science", "Sustainability", "Gear", "Community"];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
        >
          Latest Updates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Stay informed about climate change's impact on winter sports and learn how you can make a difference.
        </motion.p>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Read More
                </Button>
              </div>
            </motion.article>
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
            variant="outline"
            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;