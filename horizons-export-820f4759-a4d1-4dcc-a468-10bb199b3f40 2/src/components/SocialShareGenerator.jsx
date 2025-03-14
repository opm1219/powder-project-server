import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import html2canvas from 'html2canvas';

const SocialShareGenerator = ({ pledgeData }) => {
  const [template, setTemplate] = useState('template1');
  const shareCardRef = useRef(null);
  const { toast } = useToast();

  const templates = {
    template1: {
      bg: "bg-gradient-to-br from-blue-600 to-blue-900",
      layout: "text-center p-8"
    },
    template2: {
      bg: "bg-gradient-to-r from-purple-600 to-blue-600",
      layout: "text-left p-8"
    },
    template3: {
      bg: "bg-gradient-to-br from-blue-900 to-black",
      layout: "text-center p-8"
    }
  };

  const handleDownload = async () => {
    try {
      const canvas = await html2canvas(shareCardRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'my-powder-promise.png';
      link.click();
      
      toast({
        title: "Image Downloaded",
        description: "Your social share image has been downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating your image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Share Your Promise</h3>

      <div className="space-y-6">
        {/* Template Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Choose Template
          </label>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(templates).map((key) => (
              <button
                key={key}
                onClick={() => setTemplate(key)}
                className={`h-20 rounded-lg ${templates[key].bg} ${
                  template === key ? 'ring-2 ring-white' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Preview */}
        <div ref={shareCardRef} className={`aspect-[4/3] rounded-lg overflow-hidden ${templates[template].bg} ${templates[template].layout}`}>
          <div className="h-full flex flex-col items-center justify-center text-white">
            <img
              src="/powder-project-icon.svg"
              alt="Logo"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-2xl font-bold mb-2">I Took the Powder Promise</h4>
            <p className="text-lg mb-4">
              I'm helping protect winter sports for future generations
            </p>
            <div className="text-sm opacity-80">
              Join me at powderproject.org
            </div>
          </div>
        </div>

        {/* Download Button */}
        <Button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Download to Share
        </Button>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full text-white border-white/20"
            onClick={() => {
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just took the #PowderPromise to protect winter sports! Join me at powderproject.org')}`, '_blank');
            }}
          >
            Share on Twitter
          </Button>
          <Button
            variant="outline"
            className="w-full text-white border-white/20"
            onClick={() => {
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://powderproject.org')}`, '_blank');
            }}
          >
            Share on Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialShareGenerator;