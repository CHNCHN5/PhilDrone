'use client';

import { motion } from 'framer-motion';
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
  WifiIcon
} from 'lucide-react';

const FeaturesSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cutting-Edge <span className="text-neon">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our drones are equipped with the latest technology to deliver unmatched performance, 
            reliability, and intelligence for any mission.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card-dark rounded-2xl p-8 shadow-lg hover:shadow-neon transition-all duration-300 border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.glow}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card-dark rounded-3xl p-8 md:p-12 border border-cyan-500/20 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Advanced Capabilities
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built-in features that set our drones apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-cyan transition-all duration-300 border border-gray-700 group-hover:border-cyan-500/50">
                    <IconComponent className={`w-10 h-10 ${capability.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '99.9%', label: 'Reliability Rate', color: 'text-cyan-400' },
              { number: '50km', label: 'Max Range', color: 'text-purple-400' },
              { number: '2hrs', label: 'Flight Time', color: 'text-green-400' },
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
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;