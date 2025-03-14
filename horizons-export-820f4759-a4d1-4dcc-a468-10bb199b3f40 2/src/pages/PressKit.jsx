import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const PressKit = () => {
  const { toast } = useToast();

  const brandAssets = [
    {
      title: "Complete Logo Package",
      description: "Full brand identity package including all logo variations, formats, and usage guidelines",
      format: "SVG",
      size: "24.6 KB",
      contents: [
        "Primary logo (full color, monochrome)",
        "Symbol only variations",
        "Wordmark versions",
        "Social media optimized",
        "Favicon package",
        "App icons"
      ],
      files: [
        "/brand-assets/logo-package/svg/powder-project-logo-primary.svg",
        "/brand-assets/logo-package/svg/powder-project-logo-white.svg",
        "/brand-assets/logo-package/svg/powder-project-symbol.svg"
      ]
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive guide for logo usage, typography, color palette, and brand voice",
      format: "PDF",
      size: "8.4 KB",
      contents: [
        "Logo usage rules",
        "Color specifications",
        "Typography guide",
        "Visual language",
        "Photography style",
        "Copy guidelines"
      ],
      files: ["/brand-assets/brand-guidelines.pdf"]
    }
  ];

  const handleDownload = async (asset) => {
    try {
      // Download all files in the asset
      for (const fileUrl of asset.files) {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileUrl.split('/').pop(); // Get filename from URL
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
      
      toast({
        title: "Download Started",
        description: `${asset.title} files are being downloaded.`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error starting the download. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Press Kit</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Everything you need to tell the story of The Powder Project's mission to protect winter sports.
          </p>
        </motion.div>

        {/* Brand Assets */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Brand Assets
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{asset.title}</h3>
                <p className="text-blue-200 mb-4">{asset.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white/80 mb-2">Includes:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {asset.contents.map((item, i) => (
                      <li key={i} className="text-sm text-blue-200 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-white/60">
                    {asset.format} • {asset.size}
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => handleDownload(asset)}
                  >
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Press Contact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Media Inquiries</h3>
                <p className="text-blue-200 mb-4">
                  For press inquiries, interview requests, or additional information, please contact our media relations team.
                </p>
                <div className="space-y-2">
                  <p className="text-white">press@powderproject.org</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                <p className="text-blue-200">
                  We aim to respond to all media inquiries within 24 hours. For urgent requests, please indicate "Urgent" in your email subject line.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default PressKit;