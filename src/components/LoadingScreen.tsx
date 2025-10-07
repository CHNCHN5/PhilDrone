'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import loaderAnimation from '../../public/loader/Loader 06.json';

interface LoadingScreenProps {
  isVisible: boolean;
  message?: string;
}

const LoadingScreen = ({ isVisible, message = "Loading..." }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          {/* Blur Background */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
          
          {/* Loading Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            {/* Lottie Animation */}
            <div className="w-32 h-32 mb-6">
              <Lottie
                animationData={loaderAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            
            {/* Loading Message */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-white text-lg font-medium text-center"
            >
              {message}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
