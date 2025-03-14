import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send email notification
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Sending Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-white/60"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-white/60"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-white/60"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-white/60 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;