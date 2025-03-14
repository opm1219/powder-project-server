import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminPanel from './AdminPanel';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-blue-900/20 to-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/take-action" className="text-white/60 hover:text-white transition-colors">Take Action</a></li>
              <li><a href="/community" className="text-white/60 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/frozen-gold" className="text-white/60 hover:text-white transition-colors">Frozen Gold Film</a></li>
              <li><a href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/research" className="text-white/60 hover:text-white transition-colors">Research</a></li>
              <li><a href="/press" className="text-white/60 hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="/ambassadors" className="text-white/60 hover:text-white transition-colors">Ambassadors</a></li>
              <li><a href="/partners" className="text-white/60 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/events" className="text-white/60 hover:text-white transition-colors">Events</a></li>
              <li><a href="/join" className="text-white/60 hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/powderproject" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com/powderproject" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com/powderproject" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://linkedin.com/company/powderproject" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-white/60">
              © {new Date().getFullYear()} The Powder Project. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <button 
                onClick={() => setIsOpen(true)} 
                className="text-white/60 hover:text-white transition-colors"
              >
                Admin Access
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminPanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </footer>
  );
};

export default Footer;