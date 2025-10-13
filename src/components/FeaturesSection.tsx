'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Brain, 
  Shield, 
  Zap, 
  Eye, 
  Wifi, 
  Battery,
  MapPin,
  Camera,
  Smartphone,
  Cloud,
  Cpu,
  WifiIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const FeaturesSection = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced artificial intelligence for autonomous flight, obstacle avoidance, and intelligent mission planning.',
      gradient: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Enterprise-level encryption and secure communication protocols to protect your data and operations.',
      gradient: 'from-green-500 to-emerald-600',
      glow: 'shadow-cyan'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'High-performance processors and optimized software for real-time data processing and rapid response.',
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-purple'
    },
    {
      icon: Eye,
      title: 'Advanced Vision Systems',
      description: 'Multi-spectral cameras, thermal imaging, and computer vision for precise navigation and data collection.',
      gradient: 'from-purple-500 to-pink-600',
      glow: 'shadow-purple'
    },
    {
      icon: Wifi,
      title: 'Long-Range Communication',
      description: 'Extended range communication systems with redundant links for reliable control and data transmission.',
      gradient: 'from-indigo-500 to-blue-600',
      glow: 'shadow-cyan'
    },
    {
      icon: Battery,
      title: 'Extended Flight Time',
      description: 'Optimized power management and high-capacity batteries for longer missions and increased productivity.',
      gradient: 'from-red-500 to-pink-600',
      glow: 'shadow-purple'
    }
  ];

  const capabilities = [
    {
      icon: MapPin,
      title: 'Precision Navigation',
      description: 'GPS, GLONASS, and RTK positioning for centimeter-level accuracy',
      color: 'text-cyan-400'
    },
    {
      icon: Camera,
      title: 'Professional Imaging',
      description: '4K/8K video recording with gimbal stabilization and multiple camera options',
      color: 'text-purple-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Control',
      description: 'Intuitive mobile app for mission planning, real-time monitoring, and data analysis',
      color: 'text-green-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity for data storage, processing, and fleet management',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Cutting-Edge <span className="text-neon">Technology</span>
          </h2>
          <p className="hidden sm:block text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our drones are equipped with the latest technology to deliver unmatched performance, 
            reliability, and intelligence for any mission.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16 transition-all duration-500 ease-in-out">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group transition-all duration-500 ease-in-out ${index >= 2 && !showAllFeatures && isMobile ? 'pointer-events-none' : ''}`}
                animate={{
                  // Mobile: Animate based on showAllFeatures state
                  // Desktop: Always show all cards
                  opacity: isMobile && index >= 2 && !showAllFeatures ? 0 : 1,
                  height: isMobile && index >= 2 && !showAllFeatures ? 0 : 'auto',
                  marginBottom: isMobile && index >= 2 && !showAllFeatures ? 0 : undefined,
                  y: isMobile && index >= 2 && !showAllFeatures ? 20 : 0,
                  scale: isMobile && index >= 2 && !showAllFeatures ? 0.95 : 1
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  overflow: 'hidden',
                  transition: 'all 0s ease'
                }}
              >
                <div className="bg-card-dark rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-neon transition-all duration-300 border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`hidden sm:flex w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.glow}`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More/Less Button - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center mb-9 sm:mb-12 sm:hidden ${!showAllFeatures ? '-mt-27' : ''}`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              const currentScrollY = window.scrollY;
              setShowAllFeatures(!showAllFeatures);
              // Maintain scroll position with longer delay for smooth animation
              setTimeout(() => {
                window.scrollTo(0, currentScrollY);
              }, 300);
            }}
            className="bg-card-dark rounded-2xl p-4 shadow-lg hover:shadow-neon transition-all duration-300 border border-gray-800 hover:border-cyan-500/50 backdrop-blur-sm w-auto max-w-sm mx-auto group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-white font-semibold text-sm">
                {showAllFeatures ? 'Show Less' : 'Show More Features'}
              </span>
              {showAllFeatures ? (
                <ChevronUp className="w-5 h-5 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 text-cyan-400 group-hover:translate-y-1 transition-transform" />
              )}
            </div>
          </button>
        </motion.div>

        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card-dark rounded-3xl p-6 sm:p-8 md:p-12 border border-cyan-500/20 backdrop-blur-sm"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Advanced Capabilities
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Built-in features that set our drones apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-cyan transition-all duration-300 border border-gray-700 group-hover:border-cyan-500/50">
                    <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 ${capability.color}`} />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{capability.title}</h4>
                  <p className="hidden sm:block text-gray-300 text-xs sm:text-sm">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: '98.7%', label: 'Reliability Rate', color: 'text-cyan-400' },
              { number: '50km', label: 'Max Range', color: 'text-purple-400' },
              { number: '5hrs', label: 'Flight Time', color: 'text-green-400' },
              { number: '4K', label: 'Video Quality', color: 'text-orange-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>{stat.number}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;