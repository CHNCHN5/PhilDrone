'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Star, Zap, Shield, Camera, Wifi, Battery, MapPin, CheckCircle, Globe, Target, Clock, Signal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import LoadingScreen from '../../../components/LoadingScreen';
import { usePageTransition, usePageReady } from '../../../hooks/usePageTransition';
import ScrollToTop from '../../../components/ScrollToTop';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id;
  const { isLoading: isNavigating, navigateWithLoading } = usePageTransition();
  const { isLoading } = usePageReady(true);

  const handleBackNavigation = () => {
    navigateWithLoading('/products');
  };

  // Product data - in a real app, this would come from an API
  const productData = {
    1: {
      id: 1,
      name: 'Surveillance VTOL',
      description: 'Fixed-wing VTOL RPAS (UAV/UAS) with hybrid gasoline + battery power for extended surveillance operations up to 8 hours.',
      keyFeatures: ['8 Hour Flight Time', 'Hybrid Power System', 'VTOL Capable', '6km Ceiling'],
      range: '200KM',
      flightTime: '8 hours',
      camera: '4K + Thermal Imaging',
      price: 'From ₱1,899,970',
      gradient: 'from-blue-500 to-cyan-600',
      popular: true,
      specifications: {
        maxRange: '200KM',
        omniDirectional: 'VTOL CAPABLE',
        videoQuality: '4K/60FPS',
        sensor: '4K + Thermal',
        batteryLife: '8 HOURS',
        transmission: 'Hybrid Power'
      },
      intelligence: {
        title: 'SURVEILLANCE VTOL INTELLIGENCE: WHERE HYBRID POWER MEETS AERIAL PRECISION',
        achievements: [
          'Winner of Best VTOL Drone 2024',
          'Over 50,000+ successful surveillance hours',
          'Military Grade Tests, 15,000+ tests',
          '5,000+ surveillance drones delivered'
        ],
        description: 'Experience exceptional surveillance performance with our advanced VTOL drone technology. Featuring a 200km range, hybrid gasoline + battery power, and intelligent flight modes including Auto Surveillance, Waypoint Navigation, and Target Tracking. Equipped with 6km ceiling capability and advanced thermal imaging for ultimate surveillance precision.'
      },
      features: [
        {
          icon: Signal,
          title: 'Hybrid Power System',
          description: 'Gasoline + Battery for 8 hour endurance.'
        },
        {
          icon: Camera,
          title: '4K/60FPS with Thermal Imaging',
          description: 'Advanced surveillance and night vision.'
        },
        {
          icon: Target,
          title: 'VTOL Capabilities',
          description: 'Vertical take-off and landing precision.'
        },
        {
          icon: Globe,
          title: '200KM Extended Range',
          description: 'Long-range surveillance missions.'
        },
        {
          icon: Battery,
          title: '6,000m Operating Ceiling',
          description: '8 hours of continuous operation.'
        },
        {
          icon: Shield,
          title: '90 km/h Cruise Speed',
          description: 'High-speed surveillance capabilities.'
        }
      ],
      stats: {
        satisfaction: '95%',
        onTimeDelivery: '99.2%',
        dronesDelivered: '5,000+'
      }
    },
    2: {
      id: 2,
      name: 'Agri Sprayer and Spreader 16L',
      description: 'The 16L Drone is designed to combine power, efficiency, and precision in agricultural operations. With advanced spreading and spraying systems, smart automation, and rapid charging.',
      keyFeatures: ['16L Tank Capacity', 'Precision Agriculture', 'Smart Automation', 'Liquid Cooled'],
      range: '10KM',
      flightTime: '30 min',
      camera: '4K + Multispectral',
      price: 'From ₱1,299,970',
      gradient: 'from-green-500 to-emerald-600',
      popular: false,
      specifications: {
        maxRange: '10KM',
        omniDirectional: 'PRECISION SPRAY',
        videoQuality: '4K/30FPS',
        sensor: 'Multispectral',
        batteryLife: '30 MIN',
        transmission: 'Smart Control'
      },
      intelligence: {
        title: 'AGRICULTURAL INTELLIGENCE: WHERE PRECISION MEETS AERIAL FARMING',
        achievements: [
          'Winner of Best Agricultural Drone 2024',
          'Over 100,000+ acres treated',
          'Agricultural Tests, 20,000+ tests',
          '10,000+ agricultural drones delivered'
        ],
        description: 'Experience precision agriculture with our advanced 16L drone technology. Featuring smart automation, liquid cooling system, and precision spraying capabilities. Equipped with multispectral imaging and GPS-guided application for ultimate farming efficiency and crop health monitoring.'
      },
      features: [
        {
          icon: Battery,
          title: '16L Tank Capacity',
          description: 'Large liquid/solid payload capacity.'
        },
        {
          icon: Camera,
          title: 'Multispectral Imaging',
          description: 'Advanced crop health monitoring.'
        },
        {
          icon: Target,
          title: 'Precision Spraying System',
          description: '6-8 meter spray width coverage.'
        },
        {
          icon: Signal,
          title: 'Smart Automation',
          description: 'GPS-guided precision application.'
        },
        {
          icon: Zap,
          title: 'Liquid Cooling System',
          description: 'Efficient operation in all conditions.'
        },
        {
          icon: Shield,
          title: 'Weather Resistant Design',
          description: 'Reliable agricultural operations.'
        }
      ],
      stats: {
        satisfaction: '92%',
        onTimeDelivery: '98.5%',
        dronesDelivered: '10,000+'
      }
    },
    3: {
      id: 3,
      name: 'Medical Delivery Drone',
      description: 'Hexacopter medical drones are six-rotor UAVs designed for fast, stable delivery of lightweight medical supplies in urban or remote areas, using GPS and onboard cameras for autonomous, contactless transport.',
      keyFeatures: ['Obstacle Avoidance', 'Contactless Delivery', 'GPS Navigation', '6-Rotor Stability'],
      range: '25KM',
      flightTime: '40 min',
      camera: '4K + GPS Tracking',
      price: 'From ₱999,970',
      gradient: 'from-red-500 to-pink-600',
      popular: false,
      specifications: {
        maxRange: '25KM',
        omniDirectional: '6-ROTOR SYSTEM',
        videoQuality: '4K/30FPS',
        sensor: 'GPS + Camera',
        batteryLife: '40 MIN',
        transmission: 'Medical Grade'
      },
      intelligence: {
        title: 'MEDICAL DELIVERY INTELLIGENCE: WHERE LIFESAVING MEETS AERIAL PRECISION',
        achievements: [
          'Medical Certified Delivery 2024',
          'Over 25,000+ successful deliveries',
          'Medical Safety Tests, 12,000+ tests',
          '8,000+ medical delivery drones delivered'
        ],
        description: 'Experience life-saving delivery performance with our advanced hexacopter technology. Featuring obstacle avoidance sensors, contactless delivery system, and GPS precision navigation. Equipped with temperature-controlled cargo bay and emergency protocols for ultimate medical supply transport.'
      },
      features: [
        {
          icon: Shield,
          title: 'Obstacle Avoidance Sensors',
          description: 'Advanced collision prevention system.'
        },
        {
          icon: Target,
          title: 'Contactless Delivery System',
          description: 'Safe automated medical supply drop.'
        },
        {
          icon: Globe,
          title: 'GPS Precision Navigation',
          description: 'Accurate delivery to exact locations.'
        },
        {
          icon: Signal,
          title: '6-Rotor Stability System',
          description: 'Enhanced flight stability and safety.'
        },
        {
          icon: Battery,
          title: 'Temperature Control',
          description: 'Medical grade cargo preservation.'
        },
        {
          icon: Camera,
          title: 'Real-time Tracking',
          description: '4K camera with GPS monitoring.'
        }
      ],
      stats: {
        satisfaction: '98%',
        onTimeDelivery: '99.5%',
        dronesDelivered: '8,000+'
      }
    },
    4: {
      id: 4,
      name: 'Survey and Mapping Drone',
      description: 'Drones for mapping use high-resolution cameras and GPS to capture aerial images for creating 2D maps and 3D models. They offer stable flight, precise navigation, and quick deployment ideal for land surveys and inspections.',
      keyFeatures: ['High-Resolution Camera', '2D/3D Mapping', 'Stable Flight', 'Quick Deployment'],
      range: '20KM',
      flightTime: '50 min',
      camera: '4K Survey Camera + LiDAR',
      price: 'From ₱1,599,970',
      gradient: 'from-purple-500 to-indigo-600',
      popular: false,
      specifications: {
        maxRange: '20KM',
        omniDirectional: 'SURVEY GRADE',
        videoQuality: '4K/60FPS',
        sensor: '4K + LiDAR',
        batteryLife: '50 MIN',
        transmission: 'Survey Pro'
      },
      intelligence: {
        title: 'SURVEY & MAPPING INTELLIGENCE: WHERE PRECISION MEETS AERIAL SURVEYING',
        achievements: [
          'Survey & Mapping Leader 2024',
          'Over 1,000,000+ acres mapped',
          'Survey Accuracy Tests, 25,000+ tests',
          '12,000+ survey drones delivered'
        ],
        description: 'Experience professional surveying with our advanced mapping drone technology. Featuring high-resolution cameras, LiDAR sensors, and RTK-GPS precision. Equipped with 2D/3D mapping capabilities and quick deployment design for ultimate surveying efficiency and accuracy.'
      },
      features: [
        {
          icon: Camera,
          title: 'High-Resolution Camera System',
          description: 'Professional grade 4K imaging.'
        },
        {
          icon: Target,
          title: '2D/3D Mapping Capabilities',
          description: 'Advanced terrain modeling and analysis.'
        },
        {
          icon: Globe,
          title: 'RTK-GPS Precision',
          description: '±1cm positioning accuracy.'
        },
        {
          icon: Signal,
          title: 'LiDAR Technology',
          description: 'Detailed elevation and structure data.'
        },
        {
          icon: Battery,
          title: 'Extended Survey Operations',
          description: '50 minutes of continuous mapping.'
        },
        {
          icon: Shield,
          title: 'Quick Deployment Design',
          description: 'Rapid setup for immediate surveying.'
        }
      ],
      stats: {
        satisfaction: '94%',
        onTimeDelivery: '98.8%',
        dronesDelivered: '12,000+'
      }
    }
  };

  const product = productData[Number(productId) as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-cyan-400 hover:text-cyan-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading product details..." />
      <LoadingScreen isVisible={isNavigating} message="Navigating back to products..." />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="cyber-grid opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:mt-0">
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

          {/* DRONE'S KEY FEATURE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 uppercase">
              DRONE'S KEY FEATURE
            </h1>

            {/* Main Drone Image with Labels */}
            <div className="relative mb-16">
              <div className="w-full max-w-4xl mx-auto relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden">
                  <Image
                    src="/images/Drone-removebg-preview.png"
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-contain filter drop-shadow-2xl mx-auto"
                  />
                  
                  {/* Feature Labels */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.maxRange} MAX
                    </div>
                  </div>
                  <div className="absolute top-8 right-8">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.omniDirectional}
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.videoQuality}
                    </div>
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.batteryLife}
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.sensor}
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.specifications.transmission}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card-dark rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 sm:mb-4 sm:mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.intelligence.description}
              </p>
            </motion.div>
          </motion.div>

          {/* BEST NEXT-GEN DRONE INTELLIGENCE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase leading-tight">
                {product.intelligence.title}
              </h2>
              
              <div className="space-y-4 mb-8">
                {product.intelligence.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-2 sm:gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 flex-1 sm:flex-none">
                  EXPLORE
                </button>
                <button className="border-2 border-gray-600 text-white px-4 sm:px-8 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex-1 sm:flex-none">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
                <Image
                  src={product.id === 1 ? "/images/surveillance_drone.png" : 
                       product.id === 2 ? "/images/agri_drone.png" :
                       product.id === 3 ? "/images/medical_drone.png" :
                       "/images/survey_drone.png"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-contain filter drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* STUNNING DRONES Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative mb-16"
          >
            <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
              <Image
                src="/images/aerial-shot-long-road-surrounded-by-trees-fields.jpg"
                alt="Stunning Drone View"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Text Overlays */}
              <div className="absolute top-8 right-8 text-right">
                <div className="text-white text-2xl font-bold mb-2">4K+ RESOLUTION CAMERA</div>
                <div className="text-white text-2xl font-bold">MULTIPLE CONTROL MODES</div>
              </div>
              
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-bold text-white uppercase">STUNNING DRONES</h3>
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {/* Long-Range Signal Transmission */}
            <div className="bg-card-dark rounded-xl p-6 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Signal className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3 uppercase">LONG-RANGE SIGNAL TRANSMISSION</h4>
              <p className="text-gray-300 text-sm">
                Advanced transmission technology ensures stable connection over extended distances with crystal clear video feed.
              </p>
            </div>

            {/* Smooth Mobile App & Flight */}
            <div className="bg-card-dark rounded-xl p-6 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3 uppercase">SMOOTH MOBILE APP & FLIGHT</h4>
              <p className="text-gray-300 text-sm">
                Intuitive mobile application with real-time flight data and seamless control interface for optimal user experience.
              </p>
            </div>

            {/* Drone Smart Flight Technology */}
            <div className="bg-card-dark rounded-xl p-6 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3 uppercase">DRONE SMART FLIGHT TECHNOLOGY</h4>
              <p className="text-gray-300 text-sm">
                AI-powered flight modes and autonomous features for professional-grade aerial operations and precision control.
              </p>
            </div>

            {/* Our Growth */}
            <div className="bg-card-dark rounded-xl p-6 border border-gray-800">
              <h4 className="text-white font-bold text-lg mb-6 uppercase">OUR GROWTH</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{product.stats.satisfaction}</div>
                  <p className="text-gray-300 text-sm">More than 40% of our users are satisfied with our products.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">{product.stats.onTimeDelivery}</div>
                  <p className="text-gray-300 text-sm">98.9% of our products are delivered on time.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">{product.stats.dronesDelivered}</div>
                  <p className="text-gray-300 text-sm">25,000+ drones delivered worldwide.</p>
                </div>
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

export default ProductDetailPage;
