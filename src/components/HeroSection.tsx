'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Cpu, Wifi } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { useLoading } from '../hooks/useLoading';

const HeroSection = () => {
  const { isLoading, withLoading } = useLoading();

  const handleExploreProducts = () => {
    withLoading(async () => {
      // Simulate navigation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      window.location.href = '/products';
    });
  };

  const handleWatchDemo = () => {
    withLoading(async () => {
      // Simulate demo loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      // You can add demo functionality here
      console.log('Demo started');
    });
  };
  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading..." />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow delay-2000"></div>
        
        {/* Aerial Video Background */}
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          >
            <source src="/vid/aerialhomevid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ professionals worldwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              The Future of
              <span className="text-neon block">
                {' '}Autonomous Flight
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Experience cutting-edge drone technology with PhilDrone's innovative solutions. 
              From aerial photography to enterprise applications, we deliver precision, reliability, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={handleExploreProducts}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleWatchDemo}
                className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Models Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Futuristic Drone Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Drone Container */}
            <div className="relative">
              {/* Drone Body */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-80 h-80 mx-auto relative"
              >
                {/* Main Drone Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-2xl transform rotate-45 border border-cyan-500/30"></div>
                
                {/* Propellers */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-cyan animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full shadow-purple animate-pulse delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full shadow-cyan animate-pulse delay-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-purple animate-pulse delay-900"></div>
                
                {/* Camera */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-140 h-100"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: 1
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 1, delay: 1 },
                    default: { duration: 1.5, ease: "easeOut" }
                  }}
                >
                  <img
                    src="/images/Drone-removebg-preview.png"
                    alt="Drone Camera"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Propeller Blades with Glow */}
                <div className="absolute -top-6 -left-6 w-16 h-1 bg-cyan-400 rounded-full opacity-80 shadow-cyan"></div>
                <div className="absolute -top-6 -right-6 w-16 h-1 bg-purple-400 rounded-full opacity-80 shadow-purple"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-1 bg-green-400 rounded-full opacity-80 shadow-cyan"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-1 bg-cyan-400 rounded-full opacity-80 shadow-purple"></div>
              </motion.div>

              {/* Floating Tech Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-4 h-4 bg-cyan-500 rounded-full shadow-cyan"
              >
                <Cpu className="w-3 h-3 text-white m-0.5" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-3 h-3 bg-purple-500 rounded-full shadow-purple"
              >
                <Wifi className="w-2 h-2 text-white m-0.5" />
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 right-5 w-2 h-2 bg-green-500 rounded-full shadow-cyan"
              >
                <Zap className="w-1.5 h-1.5 text-white m-0.25" />
              </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl transform rotate-6 border border-cyan-500/20"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl transform -rotate-3 border border-purple-500/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;