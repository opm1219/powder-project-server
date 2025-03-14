import React from 'react';
import { motion } from 'framer-motion';
import StorePreview from '../components/StorePreview';
import DonationSection from '../components/DonationSection';

const StoreDonate = () => {
  return (
    <div className="min-h-screen">
      <StorePreview />
      <DonationSection />
    </div>
  );
};

export default StoreDonate;