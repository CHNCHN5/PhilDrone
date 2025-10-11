'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Cpu, Wifi } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';

const HeroSection = () => {
  const { isLoading, navigateWithLoading } = usePageTransition();

  const handleExploreProducts = () => {
    navigateWithLoading('/products');
  };

  const handleWatchDemo = () => {
    // You can add demo functionality here
    console.log('Demo started');
  };
  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading..." />
      <section className="relative min-h-screen pt-14 sm:pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black cyber-grid py-8 sm:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow delay-2000"></div>
        
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
            <source src="/vid/aerialhomevid.webm" type="video/webm"/>
            <source src="/vid/aerialhomevid.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">Trusted by 10,000+ professionals worldwide</span>
              <span className="sm:hidden">10,000+ professionals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
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
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl"
            >
              Experience cutting-edge drone technology with PhilDrone's innovative solutions. 
              From aerial photography to enterprise applications, we deliver precision, reliability, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={handleExploreProducts}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center group relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleWatchDemo}
                className="border-2 border-cyan-500/50 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm text-sm sm:text-base"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Models Available</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-400">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
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
                className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative"
              >
                {/* Main Drone Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl sm:rounded-2xl shadow-2xl transform rotate-45 border border-cyan-500/30 scale-75 sm:scale-100"></div>
                
                {/* Propellers */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-cyan animate-pulse"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full shadow-purple animate-pulse delay-300"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full shadow-cyan animate-pulse delay-600"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-purple animate-pulse delay-900"></div>
                
                {/* Camera */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-50 sm:w-140 sm:h-100"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: 1
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "loop" },
                    opacity: { duration: 1, delay: 1 },
                    default: { duration: 1.5, ease: "easeOut" }
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src="/images/Drone-removebg-preview.png"
                    alt="Drone Camera"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Propeller Blades with Glow */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 sm:w-16 h-1 bg-cyan-400 rounded-full opacity-80 shadow-cyan"></div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 sm:w-16 h-1 bg-purple-400 rounded-full opacity-80 shadow-purple"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 sm:w-16 h-1 bg-green-400 rounded-full opacity-80 shadow-cyan"></div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 sm:w-16 h-1 bg-cyan-400 rounded-full opacity-80 shadow-purple"></div>
              </motion.div>

              {/* Floating Tech Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
                className="absolute top-8 right-8 sm:top-10 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full shadow-cyan"
                style={{ willChange: 'transform' }}
              >
                <Cpu className="w-2 h-2 sm:w-3 sm:h-3 text-white m-0.5" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1, repeatType: "loop" }}
                className="absolute bottom-16 left-8 sm:bottom-20 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full shadow-purple"
                style={{ willChange: 'transform' }}
              >
                <Wifi className="w-1 h-1 sm:w-2 sm:h-2 text-white m-0.5" />
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2, repeatType: "loop" }}
                className="absolute top-1/2 right-3 sm:right-5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full shadow-cyan"
                style={{ willChange: 'transform' }}
              >
                <Zap className="w-1 h-1 sm:w-1.5 sm:h-1.5 text-white m-0.25" />
              </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 border border-cyan-500/20 scale-75 sm:scale-100"></div>
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 border border-purple-500/20 scale-75 sm:scale-100"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
          style={{ willChange: 'transform' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            style={{ willChange: 'transform' }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;