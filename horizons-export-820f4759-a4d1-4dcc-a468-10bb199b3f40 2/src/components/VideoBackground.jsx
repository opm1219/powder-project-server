import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  // Updated video sources focused on aerial mountain footage
  const videoSources = [
    "https://player.vimeo.com/external/434045526.hd.mp4?s=81a2ffa19431c88f21ee1820e92275f60ee7b13d&profile_id=175", // Aerial mountain landscape
    "https://player.vimeo.com/external/517090081.hd.mp4?s=60c145c1e5a0c7f9e793b51b1843f466f3f68947&profile_id=175" // Dramatic mountain scenery
  ];

  // Fallback images focused on aerial mountain views
  const fallbackImage = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {videoSources.map((src, index) => (
            <source key={index} src={src} type="video/mp4" />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback Image */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${fallbackImage}')`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* Atmospheric Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-blue-500/10"
      />

      {/* Snow Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: -10,
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: '100vh',
              x: `${Math.random() * 20 - 10}%`
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Loading Indicator */}
      {!isVideoLoaded && !isVideoError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;