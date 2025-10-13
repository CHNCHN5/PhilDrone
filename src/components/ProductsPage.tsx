'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Camera, Wifi, Battery, MapPin } from 'lucide-react';
import Image from 'next/image';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';
import ScrollToTop from './ScrollToTop';

const ProductsPage = () => {
  const { isLoading, navigateWithLoading } = usePageTransition();

  const handleNavigation = (productId: number) => {
    navigateWithLoading(`/products/${productId}`);
  };

  const handleBackNavigation = () => {
    navigateWithLoading('/');
  };

  const droneVariants = [
    {
      id: 1,
      name: 'Surveillance VTOL',
      description: 'Fixed-wing VTOL RPAS (UAV/UAS) with hybrid gasoline + battery power for extended surveillance operations up to 8 hours.',
      features: ['8 Hour Flight Time', 'Hybrid Power System', 'VTOL Capable', '6km Ceiling'],
      specs: {
        type: 'Fixed-wing VTOL RPAS (UAV/UAS)',
        maxPayload: '8 kg',
        flightTime: 'Up to 8 hours',
        range: 'Up to 200 km (124 mi)',
        cruiseSpeed: '90 km/h (56 mph)',
        maxSpeed: '120 km/h',
        operatingAltitude: '6,000m ceiling',
        windResistance: '15 m/s',
        powerSystem: 'Hybrid Gasoline + Battery',
        endurance: '8 hours continuous'
      },
      range: '200KM',
      flightTime: '8 hours',
      camera: '4K + Thermal Imaging',
      price: 'From ₱1,899,970',
      gradient: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      id: 2,
      name: 'Agri Sprayer and Spreader 16L',
      description: 'The 16L Drone is designed to combine power, efficiency, and precision in agricultural operations. With advanced spreading and spraying systems, smart automation, and rapid charging.',
      features: ['16L Tank Capacity', 'Precision Agriculture', 'Smart Automation', 'Liquid Cooled'],
      specs: {
        type: 'Agricultural Multirotor',
        maxPayload: '16L liquid / 25kg solid',
        flightTime: 'Up to 30 min',
        range: 'Up to 10 km',
        cruiseSpeed: '25 km/h',
        maxSpeed: '40 km/h',
        operatingAltitude: '500m AGL',
        windResistance: '12 m/s',
        sprayWidth: '6-8 meters',
        tankCapacity: '16 liters',
        coolingSystem: 'Liquid Cooled'
      },
      range: '10KM',
      flightTime: '30 min',
      camera: '4K + Multispectral',
      price: 'From ₱1,299,970',
      gradient: 'from-green-500 to-emerald-600',
      popular: false
    },
    {
      id: 3,
      name: 'Medical Delivery Drone',
      description: 'Hexacopter medical drones are six-rotor UAVs designed for fast, stable delivery of lightweight medical supplies in urban or remote areas, using GPS and onboard cameras for autonomous, contactless transport.',
      features: ['Obstacle Avoidance', 'Contactless Delivery', 'GPS Navigation', '6-Rotor Stability'],
      specs: {
        type: 'Hexacopter Delivery System',
        maxPayload: '5 kg',
        flightTime: 'Up to 40 min',
        range: 'Up to 25 km',
        cruiseSpeed: '50 km/h',
        maxSpeed: '80 km/h',
        operatingAltitude: '1,000m AGL',
        windResistance: '15 m/s',
        deliverySystem: 'Automated contactless drop',
        navigation: 'GPS + Obstacle Avoidance'
      },
      range: '25KM',
      flightTime: '40 min',
      camera: '4K + GPS Tracking',
      price: 'From ₱999,970',
      gradient: 'from-red-500 to-pink-600',
      popular: false
    },
    {
      id: 4,
      name: 'Survey and Mapping Drone',
      description: 'Drones for mapping use high-resolution cameras and GPS to capture aerial images for creating 2D maps and 3D models. They offer stable flight, precise navigation, and quick deployment ideal for land surveys and inspections.',
      specs: {
        type: 'Professional Mapping Platform',
        maxPayload: '3 kg',
        flightTime: 'Up to 50 min',
        range: 'Up to 20 km',
        cruiseSpeed: '45 km/h',
        maxSpeed: '70 km/h',
        operatingAltitude: '2,000m AGL',
        windResistance: '12 m/s',
        positionAccuracy: '±1cm (RTK-GPS)',
        surveyCoverage: '800 hectares/day',
        mappingCapability: '2D Maps + 3D Models'
      },
      features: ['High-Resolution Camera', '2D/3D Mapping', 'Stable Flight', 'Quick Deployment'],
      range: '20KM',
      flightTime: '50 min',
      camera: '4K Survey Camera + LiDAR',
      price: 'From ₱1,599,970',
      gradient: 'from-purple-500 to-indigo-600',
      popular: false
    }
  ];

  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading product details..." />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="cyber-grid opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <button 
              onClick={handleBackNavigation}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-card-dark hover:bg-gray-800/80 text-cyan-400 hover:text-cyan-300 transition-all duration-300 rounded-xl border border-gray-700 hover:border-cyan-500/50 backdrop-blur-sm hover:shadow-neon group"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-neon">Product Line</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Discover our comprehensive range of drones designed for every industry and application. 
              From agriculture to military, we have the perfect solution for your needs.
            </p>
          </motion.div>

          {/* Drone Variants Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 pt-5 sm:pt-0">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-neon">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="bg-card-dark rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-neon transition-all duration-300 h-full border border-gray-800 group-hover:border-cyan-500/50 backdrop-blur-sm relative">
                  {/* Drone Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-full h-37 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={drone.id === 1 ? "/images/surveillance_drone.png" : 
                             drone.id === 2 ? "/images/agri_drone.png" :
                             drone.id === 3 ? "/images/medical_drone.png" :
                             "/images/survey_drone.png"}
                        alt={drone.name}
                        width={200}
                        height={150}
                        className="object-contain filter drop-shadow-2xl w-49 h-43 sm:w-60 sm:h-50"
                      />
                      
                      {/* Tech Icons */}
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex space-x-1 sm:space-x-2">
                        <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                        <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        <Battery className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{drone.name}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{drone.description}</p>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                      <div className="bg-gray-800/50 rounded-lg p-1.5 sm:p-3">
                        <div className="flex items-center mb-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mr-1 sm:mr-2" />
                          <span className="text-xs text-gray-400">Range</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">{drone.range}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-1.5 sm:p-3">
                        <div className="flex items-center mb-1">
                          <Battery className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                          <span className="text-xs text-gray-400">Flight Time</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">{drone.flightTime}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-1.5 sm:p-3">
                        <div className="flex items-center mb-1">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 sm:mr-2" />
                          <span className="text-xs text-gray-400">Max Speed</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">{drone.specs.maxSpeed}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-1.5 sm:p-3">
                        <div className="flex items-center mb-1">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2" />
                          <span className="text-xs text-gray-400">Payload</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">{drone.specs.maxPayload}</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-1.5 sm:p-3 col-span-2">
                        <div className="flex items-center mb-1">
                          <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-1 sm:mr-2" />
                          <span className="text-xs text-gray-400">Camera</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">{drone.camera}</span>
                      </div>
                    </div>

                    {/* Detailed Tech Specs */}
                    <div className="bg-gray-900/50 rounded-lg p-2 sm:p-3 mt-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-400">Type:</span>
                          <span className="text-white ml-1">{drone.specs.type}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Cruise:</span>
                          <span className="text-white ml-1">{drone.specs.cruiseSpeed}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Altitude:</span>
                          <span className="text-white ml-1">{drone.specs.operatingAltitude}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Wind:</span>
                          <span className="text-white ml-1">{drone.specs.windResistance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-0.5 sm:gap-2">
                        {drone.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 sm:pt-4 border-t border-gray-800 space-y-2 sm:space-y-0">
                      <span className="text-base sm:text-lg font-bold text-white">{drone.price}</span>
                      <button 
                        onClick={() => handleNavigation(drone.id)}
                        className={`bg-gradient-to-r ${drone.gradient} text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-neon transition-all duration-300 w-full sm:w-auto`}
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
            className="text-center mt-12 sm:mt-16"
          >
            <div className="bg-card-dark rounded-2xl shadow-neon p-4 sm:p-8 max-w-4xl mx-auto border border-cyan-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Our engineering team can design and build custom drone solutions tailored to your specific requirements and industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 text-sm sm:text-base">
                  Contact Our Engineers
                </button>
                <button className="border-2 border-cyan-500/50 text-cyan-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <ScrollToTop />
    </>
  );
};

export default ProductsPage;
