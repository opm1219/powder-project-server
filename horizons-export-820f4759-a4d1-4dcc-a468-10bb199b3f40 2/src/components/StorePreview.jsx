import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const products = [
  {
    name: "Powder Promise Hoodie",
    description: "100% organic cotton, climate-neutral production",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800",
    ecoScore: 95,
    limited: true,
    remaining: 50
  },
  {
    name: "Mountain Guardian Tee",
    description: "Made from recycled materials, supports local initiatives",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
    ecoScore: 90,
    limited: false
  },
  {
    name: "Eco Alpine Water Bottle",
    description: "Sustainable stainless steel, lifetime warranty",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800",
    ecoScore: 98,
    limited: false
  }
];

const StorePreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Support the Cause
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
        >
          Every purchase directly funds our winter preservation efforts. Shop sustainable gear that makes a difference.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {product.limited && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    Limited Edition
                  </div>
                )}
                
                <div className="absolute bottom-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Eco Score: {product.ecoScore}%
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-blue-200 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  
                  {product.limited && (
                    <span className="text-sm text-red-300">
                      Only {product.remaining} left
                    </span>
                  )}
                </div>
                
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Add to Cart
                </Button>
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
            className="bg-white text-blue-900 hover:bg-blue-50"
          >
            Visit Store
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StorePreview;