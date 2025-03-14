import React from 'react';
import AmbassadorSection from '../components/AmbassadorSection';
import BlogSection from '../components/BlogSection';
import CommunitySection from '../components/CommunitySection';

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      <AmbassadorSection />
      <CommunitySection />
      <BlogSection />
    </div>
  );
};

export default CommunityPage;