'use client';

import { motion } from 'framer-motion';
import { 
  Camera, 
  Map, 
  Search, 
  Building, 
  Truck, 
  Shield,
  Leaf,
  Factory,
  Heart,
  Film,
  Zap,
  Cpu
} from 'lucide-react';

const SolutionsSection = () => {
  const industries = [
    {
      icon: Camera,
      title: 'Media & Entertainment',
      description: 'Capture stunning aerial footage for films, documentaries, and live events.',
      gradient: 'from-purple-500 to-pink-500',
      useCases: ['Cinematic Filming', 'Live Streaming', 'Event Coverage', 'Documentary Production']
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Monitor progress, inspect structures, and improve safety on construction sites.',
      gradient: 'from-orange-500 to-red-500',
      useCases: ['Progress Monitoring', 'Safety Inspections', '3D Mapping', 'Site Surveying']
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Optimize crop management with precision agriculture and automated monitoring.',
      gradient: 'from-green-500 to-emerald-500',
      useCases: ['Crop Monitoring', 'Precision Spraying', 'Yield Analysis', 'Pest Detection']
    },
    {
      icon: Shield,
      title: 'Public Safety',
      description: 'Enhance emergency response and public safety operations with aerial support.',
      gradient: 'from-blue-500 to-indigo-500',
      useCases: ['Search & Rescue', 'Disaster Response', 'Traffic Monitoring', 'Crowd Control']
    },
    {
      icon: Factory,
      title: 'Energy & Utilities',
      description: 'Inspect infrastructure, monitor equipment, and ensure operational efficiency.',
      gradient: 'from-yellow-500 to-orange-500',
      useCases: ['Power Line Inspection', 'Solar Panel Monitoring', 'Wind Turbine Maintenance', 'Pipeline Surveying']
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Revolutionize last-mile delivery with autonomous drone transportation.',
      gradient: 'from-teal-500 to-cyan-500',
      useCases: ['Package Delivery', 'Medical Supplies', 'Emergency Response', 'Remote Area Access']
    }
  ];

  const useCases = [
    {
      icon: Map,
      title: 'Mapping & Surveying',
      description: 'Create detailed 3D maps and surveys with centimeter-level accuracy.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Search & Rescue',
      description: 'Locate missing persons and assess emergency situations quickly and safely.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Medical Delivery',
      description: 'Transport critical medical supplies to remote and inaccessible areas.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Film,
      title: 'Aerial Photography',
      description: 'Capture breathtaking aerial perspectives for any creative or commercial project.',
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/aerial-shot-long-road-surrounded-by-trees-fields.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/10 to-transparent"></div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            Solutions for <span className="text-neon">Every Industry</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From agriculture to entertainment, our drone solutions are transforming 
            industries and creating new possibilities for innovation.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card-dark rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-neon transition-all duration-300 h-full border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${industry.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{industry.description}</p>

                  {/* Use Cases */}
                  <div className="space-y-2">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mr-2 shadow-cyan flex-shrink-0"></div>
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Popular Use Cases
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Discover how our drones are being used across different applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card-dark rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300 overflow-hidden border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm">
                    <div className={`h-40 sm:h-48 bg-gradient-to-br ${useCase.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-90" />
                      </div>
                      
                      {/* Tech Elements */}
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-1 sm:space-x-2">
                        <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{useCase.title}</h4>
                      <p className="text-gray-300 text-sm sm:text-base">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-6 sm:p-8 md:p-12 text-white border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-4">
              Let our experts help you find the perfect drone solution for your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 text-sm sm:text-base">
                Schedule a Demo
              </button>
              <button className="border-2 border-cyan-500/50 text-cyan-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;