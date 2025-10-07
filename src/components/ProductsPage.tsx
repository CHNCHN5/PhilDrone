'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Star, Zap, Shield, Camera, Wifi, Battery, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';

const ProductsPage = () => {
  const { isLoading, navigateWithLoading } = usePageTransition();

  const handleNavigation = (productId: number) => {
    navigateWithLoading(`/products/${productId}`);
  };

  const droneVariants = [
    {
      id: 1,
      name: 'Agricultural Drone',
      description: 'Precision agriculture solutions for crop monitoring, spraying, and yield analysis.',
      features: ['Crop Monitoring', 'Precision Spraying', 'Yield Analysis', 'Pest Detection'],
      range: '5-15KM',
      flightTime: '45 min',
      camera: '4K Multispectral',
      price: 'From $2,999',
      gradient: 'from-green-500 to-emerald-600',
      popular: true
    },
    {
      id: 2,
      name: 'Military Grade',
      description: 'Heavy-duty drones designed for defense and security applications.',
      features: ['Surveillance', 'Reconnaissance', 'Payload Delivery', 'Night Vision'],
      range: '20-50KM',
      flightTime: '2 hours',
      camera: '8K Thermal',
      price: 'From $15,999',
      gradient: 'from-red-500 to-orange-600',
      popular: false
    },
    {
      id: 3,
      name: 'Aerial Photography',
      description: 'Professional drones for cinematography and commercial photography.',
      features: ['Cinematic Filming', 'Live Streaming', 'Event Coverage', 'Real-time Preview'],
      range: '7-20KM',
      flightTime: '30 min',
      camera: '4K 60fps',
      price: 'From $1,299',
      gradient: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      id: 4,
      name: 'Search & Rescue',
      description: 'Emergency response drones for life-saving missions.',
      features: ['Thermal Imaging', 'GPS Tracking', 'Emergency Beacon', 'Weather Resistant'],
      range: '10-25KM',
      flightTime: '1.5 hours',
      camera: '4K + Thermal',
      price: 'From $8,999',
      gradient: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      id: 5,
      name: 'Consumer Drone',
      description: 'Perfect for hobbyists and photography enthusiasts.',
      features: ['Easy Control', 'Auto Return', 'Obstacle Avoidance', 'Smart Modes'],
      range: '3-8KM',
      flightTime: '25 min',
      camera: '4K HD',
      price: 'From $599',
      gradient: 'from-cyan-500 to-blue-600',
      popular: false
    },
    {
      id: 6,
      name: 'Industrial Inspection',
      description: 'Specialized drones for infrastructure and equipment inspection.',
      features: ['Close Inspection', '3D Mapping', 'Defect Detection', 'Report Generation'],
      range: '5-12KM',
      flightTime: '40 min',
      camera: '4K Macro',
      price: 'From $4,999',
      gradient: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ];

  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading product details..." />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="cyber-grid opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-neon">Product Line</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of drones designed for every industry and application. 
              From agriculture to military, we have the perfect solution for your needs.
            </p>
          </motion.div>

          {/* Drone Variants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {droneVariants.map((drone, index) => (
              <motion.div
                key={drone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Popular Badge */}
                {drone.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-neon">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="bg-card-dark rounded-2xl p-6 shadow-lg hover:shadow-neon transition-all duration-300 h-full border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm relative">
                  {/* Drone Image */}
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <Image
                        src="/images/Drone-removebg-preview.png"
                        alt={drone.name}
                        width={200}
                        height={150}
                        className="object-contain filter drop-shadow-2xl"
                      />
                      
                      {/* Tech Icons */}
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Camera className="w-4 h-4 text-cyan-400" />
                        <Wifi className="w-4 h-4 text-purple-400" />
                        <Battery className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{drone.name}</h3>
                      <p className="text-gray-300 text-sm">{drone.description}</p>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                          <span className="text-xs text-gray-400">Range</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{drone.range}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <Battery className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-xs text-gray-400">Flight Time</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{drone.flightTime}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3 col-span-2">
                        <div className="flex items-center mb-1">
                          <Camera className="w-4 h-4 text-purple-400 mr-2" />
                          <span className="text-xs text-gray-400">Camera</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{drone.camera}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {drone.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-lg font-bold text-white">{drone.price}</span>
                      <button 
                        onClick={() => handleNavigation(drone.id)}
                        className={`bg-gradient-to-r ${drone.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-neon transition-all duration-300`}
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-card-dark rounded-2xl shadow-neon p-8 max-w-4xl mx-auto border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-6">
                Our engineering team can design and build custom drone solutions tailored to your specific requirements and industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300">
                  Contact Our Engineers
                </button>
                <button className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProductsPage;
