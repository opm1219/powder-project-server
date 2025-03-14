import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import SocialShareGenerator from './SocialShareGenerator';

const PledgeForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    reason: '',
    agreeToTerms: false
  });
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const checkExistingPledge = () => {
    const existingPledges = JSON.parse(localStorage.getItem('pledges') || '[]');
    return existingPledges.some(pledge => pledge.email === formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (checkExistingPledge()) {
      toast({
        title: "Already Pledged",
        description: "You have already taken the Powder Promise. Thank you for your support!",
        variant: "destructive",
      });
      return;
    }

    try {
      // Save pledge data
      const newPledge = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };

      const existingPledges = JSON.parse(localStorage.getItem('pledges') || '[]');
      localStorage.setItem('pledges', JSON.stringify([...existingPledges, newPledge]));

      // Update display counter
      const currentCount = parseInt(localStorage.getItem('pledgeCount') || '0');
      localStorage.setItem('pledgeCount', (currentCount + 1).toString());

      setShowSuccess(true);
      
      toast({
        title: "Pledge Submitted",
        description: "Thank you for taking the Powder Promise!",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your pledge. Please try again.",
        variant: "destructive",
      });
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.name || !formData.email) {
          toast({
            title: "Required Fields",
            description: "Please fill in all required fields.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 2:
        if (!formData.location) {
          toast({
            title: "Location Required",
            description: "Please enter your location.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 3:
        if (!formData.reason) {
          toast({
            title: "Reason Required",
            description: "Please share your reason for taking the pledge.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="bg-gradient-to-b from-blue-900 to-black rounded-lg p-8 max-w-xl w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-blue-200 mb-8">
              Your pledge has been recorded. Together, we can protect winter sports for future generations.
            </p>

            <SocialShareGenerator pledgeData={formData} />

            <Button
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-b from-blue-900 to-black rounded-lg p-8 max-w-xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Take the Powder Promise</h2>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1/3 h-1 rounded-full mx-1 ${
                  i <= step ? 'bg-blue-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Your Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="City, Country"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Why are you taking the pledge?
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white h-32"
                    placeholder="Share your reason..."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="rounded border-white/20 bg-white/10"
                  />
                  <label className="text-sm text-white">
                    I agree to join the movement to protect winter sports
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between gap-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.agreeToTerms}
              >
                Take the Pledge
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PledgeForm;