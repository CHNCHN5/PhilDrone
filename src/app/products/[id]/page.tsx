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
      name: 'Agricultural Drone',
      description: 'Precision agriculture solutions for crop monitoring, spraying, and yield analysis.',
      keyFeatures: ['Crop Monitoring', 'Precision Spraying', 'Yield Analysis', 'Pest Detection'],
      range: '5-15KM',
      flightTime: '45 min',
      camera: '4K Multispectral',
      price: 'From $2,999',
      gradient: 'from-green-500 to-emerald-600',
      popular: true,
      specifications: {
        maxRange: '15KM',
        omniDirectional: '7-WAY OMNI',
        videoQuality: '1080P/60FPS',
        sensor: '4/3 CMOS',
        batteryLife: '46 MIN',
        transmission: 'O3+'
      },
      intelligence: {
        title: 'BEST NEXT-GEN DRONE INTELLIGENCE: WHERE AI MEETS AERIAL PRECISION',
        achievements: [
          'Winner of Best Consumer Drone 2024',
          'Over 10,000+ successful flight hours',
          'Global Lab Tests, 10,000+ tests',
          '25,000+ drones delivered'
        ],
        description: 'Experience exceptional performance with our advanced drone technology. Featuring a 15km range, 4/3 CMOS sensor, and intelligent flight modes including Focus Pro, Waypoints, Dronie Mode, and Active Track. Equipped with 24/7 obstacle avoidance sensors and dual GPS and GLONASS navigation for ultimate precision and safety.'
      },
      features: [
        {
          icon: Globe,
          title: 'Highlight sensors with powerful APAS 5.0',
          description: 'which can provide protection to pilots.'
        },
        {
          icon: Camera,
          title: '4K/120FPS with 10-bit D-Log M',
          description: 'the Mavic 3 can record up to one billion colors.'
        },
        {
          icon: Target,
          title: 'HD 1080P/60FPS live feed',
          description: 'you can experience smooth, stable.'
        },
        {
          icon: Signal,
          title: 'Omnidirectional obstacle sensing',
          description: '15KM HD video transmission.'
        },
        {
          icon: Battery,
          title: 'Average horizontal speed of 21 m/s',
          description: '46 minutes of flight time.'
        },
        {
          icon: Wifi,
          title: 'Hyperlapse and panorama',
          description: '1.2-mile transmission technology.'
        }
      ],
      stats: {
        satisfaction: '40%',
        onTimeDelivery: '98.9%',
        dronesDelivered: '25,000+'
      }
    },
    2: {
      id: 2,
      name: 'Military Grade',
      description: 'Heavy-duty drones designed for defense and security applications.',
      keyFeatures: ['Surveillance', 'Reconnaissance', 'Payload Delivery', 'Night Vision'],
      range: '20-50KM',
      flightTime: '2 hours',
      camera: '8K Thermal',
      price: 'From $15,999',
      gradient: 'from-red-500 to-orange-600',
      popular: false,
      specifications: {
        maxRange: '50KM',
        omniDirectional: '8-WAY OMNI',
        videoQuality: '8K/60FPS',
        sensor: '8K Thermal',
        batteryLife: '120 MIN',
        transmission: 'O4+'
      },
      intelligence: {
        title: 'MILITARY-GRADE DRONE INTELLIGENCE: WHERE SECURITY MEETS AERIAL PRECISION',
        achievements: [
          'Military Certified 2024',
          'Over 50,000+ successful missions',
          'Global Defense Tests, 25,000+ tests',
          '15,000+ military drones delivered'
        ],
        description: 'Experience military-grade performance with our advanced defense drone technology. Featuring a 50km range, 8K thermal sensor, and specialized military flight modes including Stealth Mode, Combat Reconnaissance, and Tactical Delivery. Equipped with advanced obstacle avoidance and encrypted GPS navigation for ultimate security and precision.'
      },
      features: [
        {
          icon: Shield,
          title: 'Military-grade protection systems',
          description: 'Advanced stealth and encryption technology.'
        },
        {
          icon: Camera,
          title: '8K/60FPS with thermal imaging',
          description: 'Superior night vision and target acquisition.'
        },
        {
          icon: Target,
          title: 'HD 4K/60FPS live feed',
          description: 'Real-time tactical surveillance capabilities.'
        },
        {
          icon: Signal,
          title: 'Encrypted long-range transmission',
          description: '50KM secure video transmission.'
        },
        {
          icon: Battery,
          title: 'Extended flight endurance',
          description: '2 hours of continuous operation.'
        },
        {
          icon: Wifi,
          title: 'Advanced mission planning',
          description: 'Autonomous tactical operations.'
        }
      ],
      stats: {
        satisfaction: '95%',
        onTimeDelivery: '99.5%',
        dronesDelivered: '15,000+'
      }
    },
    3: {
      id: 3,
      name: 'Aerial Photography',
      description: 'Professional drones for cinematography and commercial photography.',
      keyFeatures: ['Cinematic Filming', 'Live Streaming', 'Event Coverage', 'Real-time Preview'],
      range: '7-20KM',
      flightTime: '30 min',
      camera: '4K 60fps',
      price: 'From $1,299',
      gradient: 'from-purple-500 to-pink-600',
      popular: false,
      specifications: {
        maxRange: '20KM',
        omniDirectional: '6-WAY OMNI',
        videoQuality: '4K/60FPS',
        sensor: '4K CMOS',
        batteryLife: '30 MIN',
        transmission: 'O3'
      },
      intelligence: {
        title: 'PROFESSIONAL AERIAL PHOTOGRAPHY: WHERE CREATIVITY MEETS AERIAL PRECISION',
        achievements: [
          'Award-Winning Cinematography 2024',
          'Over 30,000+ successful shoots',
          'Professional Film Tests, 15,000+ tests',
          '20,000+ photography drones delivered'
        ],
        description: 'Experience professional-grade performance with our advanced photography drone technology. Featuring a 20km range, 4K CMOS sensor, and creative flight modes including Cinematic Mode, Follow Me, and Smart Tracking. Equipped with gimbal stabilization and real-time preview for ultimate creative control.'
      },
      features: [
        {
          icon: Camera,
          title: 'Professional gimbal stabilization',
          description: 'Smooth cinematic footage every time.'
        },
        {
          icon: Camera,
          title: '4K/60FPS with HDR recording',
          description: 'Stunning image quality and color accuracy.'
        },
        {
          icon: Target,
          title: 'HD 1080P/60FPS live feed',
          description: 'Real-time preview and framing.'
        },
        {
          icon: Signal,
          title: 'Long-range video transmission',
          description: '20KM HD video transmission.'
        },
        {
          icon: Battery,
          title: 'Optimized for creative work',
          description: '30 minutes of filming time.'
        },
        {
          icon: Wifi,
          title: 'Smart tracking and follow modes',
          description: 'Advanced autonomous filming.'
        }
      ],
      stats: {
        satisfaction: '92%',
        onTimeDelivery: '98.5%',
        dronesDelivered: '20,000+'
      }
    },
    4: {
      id: 4,
      name: 'Search & Rescue',
      description: 'Emergency response drones for life-saving missions.',
      keyFeatures: ['Thermal Imaging', 'GPS Tracking', 'Emergency Beacon', 'Weather Resistant'],
      range: '10-25KM',
      flightTime: '1.5 hours',
      camera: '4K + Thermal',
      price: 'From $8,999',
      gradient: 'from-blue-500 to-cyan-600',
      popular: false,
      specifications: {
        maxRange: '25KM',
        omniDirectional: '8-WAY OMNI',
        videoQuality: '4K/60FPS',
        sensor: '4K + Thermal',
        batteryLife: '90 MIN',
        transmission: 'O3+'
      },
      intelligence: {
        title: 'SEARCH & RESCUE INTELLIGENCE: WHERE SAVING LIVES MEETS AERIAL PRECISION',
        achievements: [
          'Emergency Response Certified 2024',
          'Over 5,000+ successful rescues',
          'Emergency Response Tests, 8,000+ tests',
          '8,000+ rescue drones delivered'
        ],
        description: 'Experience life-saving performance with our advanced rescue drone technology. Featuring a 25km range, 4K + thermal sensor, and emergency flight modes including Search Grid, Thermal Tracking, and Emergency Drop. Equipped with weather resistance and emergency beacon for ultimate rescue capabilities.'
      },
      features: [
        {
          icon: Shield,
          title: 'Advanced thermal imaging',
          description: 'Life detection in any conditions.'
        },
        {
          icon: Camera,
          title: '4K/60FPS with thermal overlay',
          description: 'Dual sensor technology for complete visibility.'
        },
        {
          icon: Target,
          title: 'HD 1080P/60FPS live feed',
          description: 'Real-time rescue coordination.'
        },
        {
          icon: Signal,
          title: 'Emergency communication systems',
          description: '25KM emergency transmission.'
        },
        {
          icon: Battery,
          title: 'Extended rescue operations',
          description: '1.5 hours of continuous search.'
        },
        {
          icon: Wifi,
          title: 'Emergency beacon and GPS',
          description: 'Advanced location tracking.'
        }
      ],
      stats: {
        satisfaction: '98%',
        onTimeDelivery: '99.8%',
        dronesDelivered: '8,000+'
      }
    },
    5: {
      id: 5,
      name: 'Consumer Drone',
      description: 'Perfect for hobbyists and photography enthusiasts.',
      keyFeatures: ['Easy Control', 'Auto Return', 'Obstacle Avoidance', 'Smart Modes'],
      range: '3-8KM',
      flightTime: '25 min',
      camera: '4K HD',
      price: 'From $599',
      gradient: 'from-cyan-500 to-blue-600',
      popular: false,
      specifications: {
        maxRange: '8KM',
        omniDirectional: '4-WAY OMNI',
        videoQuality: '4K/30FPS',
        sensor: '4K HD',
        batteryLife: '25 MIN',
        transmission: 'O2'
      },
      intelligence: {
        title: 'CONSUMER DRONE INTELLIGENCE: WHERE FUN MEETS AERIAL PRECISION',
        achievements: [
          'Best Consumer Drone 2024',
          'Over 100,000+ happy customers',
          'Consumer Tests, 50,000+ tests',
          '100,000+ consumer drones delivered'
        ],
        description: 'Experience user-friendly performance with our advanced consumer drone technology. Featuring an 8km range, 4K HD sensor, and fun flight modes including Selfie Mode, Follow Me, and Gesture Control. Equipped with obstacle avoidance and auto return for safe and easy flying.'
      },
      features: [
        {
          icon: Star,
          title: 'Beginner-friendly controls',
          description: 'Easy to learn and master.'
        },
        {
          icon: Camera,
          title: '4K/30FPS with smart modes',
          description: 'Great photos and videos made simple.'
        },
        {
          icon: Target,
          title: 'HD 1080P/30FPS live feed',
          description: 'Smooth real-time viewing.'
        },
        {
          icon: Signal,
          title: 'Stable video transmission',
          description: '8KM reliable video feed.'
        },
        {
          icon: Battery,
          title: 'Perfect for casual flying',
          description: '25 minutes of fun flight time.'
        },
        {
          icon: Wifi,
          title: 'Smart flight modes',
          description: 'Automated flying made easy.'
        }
      ],
      stats: {
        satisfaction: '88%',
        onTimeDelivery: '97.5%',
        dronesDelivered: '100,000+'
      }
    },
    6: {
      id: 6,
      name: 'Industrial Inspection',
      description: 'Specialized drones for infrastructure and equipment inspection.',
      keyFeatures: ['Close Inspection', '3D Mapping', 'Defect Detection', 'Report Generation'],
      range: '5-12KM',
      flightTime: '40 min',
      camera: '4K Macro',
      price: 'From $4,999',
      gradient: 'from-yellow-500 to-orange-600',
      popular: false,
      specifications: {
        maxRange: '12KM',
        omniDirectional: '6-WAY OMNI',
        videoQuality: '4K/60FPS',
        sensor: '4K Macro',
        batteryLife: '40 MIN',
        transmission: 'O3'
      },
      intelligence: {
        title: 'INDUSTRIAL INSPECTION INTELLIGENCE: WHERE PRECISION MEETS AERIAL INNOVATION',
        achievements: [
          'Industrial Certified 2024',
          'Over 20,000+ successful inspections',
          'Industrial Tests, 12,000+ tests',
          '12,000+ inspection drones delivered'
        ],
        description: 'Experience industrial-grade performance with our advanced inspection drone technology. Featuring a 12km range, 4K macro sensor, and specialized inspection modes including Close Proximity, 3D Mapping, and Defect Analysis. Equipped with precision positioning and detailed reporting for comprehensive inspections.'
      },
      features: [
        {
          icon: Target,
          title: 'Precision close inspection',
          description: 'Detailed examination capabilities.'
        },
        {
          icon: Camera,
          title: '4K/60FPS with macro lens',
          description: 'Ultra-detailed inspection imagery.'
        },
        {
          icon: Target,
          title: 'HD 1080P/60FPS live feed',
          description: 'Real-time inspection monitoring.'
        },
        {
          icon: Signal,
          title: 'Stable inspection transmission',
          description: '12KM reliable video feed.'
        },
        {
          icon: Battery,
          title: 'Extended inspection time',
          description: '40 minutes of detailed work.'
        },
        {
          icon: Wifi,
          title: '3D mapping and analysis',
          description: 'Advanced inspection reporting.'
        }
      ],
      stats: {
        satisfaction: '94%',
        onTimeDelivery: '98.2%',
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
                  src="/images/Drone-removebg-preview.png"
                  alt="Drone Intelligence"
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
