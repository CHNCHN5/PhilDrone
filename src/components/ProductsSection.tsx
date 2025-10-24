'use client';

import { motion } from 'framer-motion';
import { Camera, Shield, Zap, Users, ArrowRight, Cpu, Wifi, Battery, Star, Eye, Play } from 'lucide-react';

const ProductsSection = () => {
  const features = [
    {
      id: 1,
      title: '4K Ultra HD Video at 60fps',
      description: 'Capture stunning aerial footage with professional-grade quality',
      icon: Camera,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Experience the Sky',
      subtitle: 'The next level with our high-performance FPV goggles',
      description: 'Immerse yourself in the flight experience with our advanced FPV technology',
      icon: Eye,
      gradient: 'from-purple-500 to-pink-600',
      hasButton: true,
      buttonText: 'Read More'
    }
  ];

  const testimonials = {
    rating: 4.95,
    text: 'Recommended by top wedding videographers — this drone makes your footage nothing short of explosive',
    avatars: [
      { name: 'John Smith', initials: 'JS' },
      { name: 'Sarah Johnson', initials: 'SJ' },
      { name: 'Mike Chen', initials: 'MC' }
    ]
  };

  return (
    <section id="products" className="pt-20 pb-0 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Product Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card-dark rounded-2xl p-4 sm:p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">{feature.title}</h3>
                      {feature.subtitle && (
                        <p className="text-xs sm:text-sm text-gray-300 mb-2">{feature.subtitle}</p>
                      )}
                      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{feature.description}</p>
                      
                      {feature.hasButton && (
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-neon transition-all duration-300">
                          {feature.buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <Star className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400 fill-current" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{testimonials.rating}</span>
            </motion.div>

            {/* Testimonial Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card-dark rounded-2xl p-4 sm:p-6 border border-gray-800 backdrop-blur-sm"
            >
              <p className="text-white text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {testimonials.text}
              </p>
              
              {/* Avatar Group */}
              <div className="flex items-center space-x-2">
                {testimonials.avatars.map((avatar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold border-2 border-gray-800 hover:border-cyan-400 transition-all duration-300"
                    style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                  >
                    {avatar.initials}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="bg-card-dark rounded-xl p-3 sm:p-4 border border-gray-800 text-center backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">Flying Experience</div>
                <div className="text-xs sm:text-sm text-gray-400">Smooth and Stable</div>
              </div>
              <div className="bg-card-dark rounded-xl p-3 sm:p-4 border border-gray-800 text-center backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Local Innovation</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;