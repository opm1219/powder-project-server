import React from 'react';
import InteractiveStats from '../components/InteractiveStats';
import Timeline from '../components/Timeline';
import ParallaxSection from '../components/ParallaxSection';
import ScrollProgress from '../components/ScrollProgress';

const WhyItMattersPage = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <ParallaxSection />
      <InteractiveStats />
      <Timeline />
    </div>
  );
};

export default WhyItMattersPage;