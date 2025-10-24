'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Shield, 
  Sprout, 
  MapPin, 
  Search, 
  Flame, 
  Anchor, 
  Target, 
  Zap, 
  Heart,
  Award,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllFocusAreas, setShowAllFocusAreas] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreFocusAreas = [
    {
      icon: Shield,
      title: "Public Safety and Tactical",
      description: "Drones engineered for security, reconnaissance, and enhanced operational efficiency.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Smart drones for crop monitoring, spraying, and yield optimization.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Geodetic Surveying",
      description: "High-precision drones for mapping, surveying, and data collection.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Law Enforcement",
      description: "Drones for surveillance, search operations, and public safety support.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Flame,
      title: "Fire Fighting",
      description: "Fire-target drones for detection, monitoring, and suppression assistance.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Anchor,
      title: "Maritime",
      description: "Drones for shipping inspection, coastal monitoring, and maritime safety.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const droneProducts = [
    {
      name: "Surveillance VTOL",
      description: "Advanced vertical take-off and landing surveillance drone for tactical operations",
      image: "/images/surveillance_drone.png"
    },
    {
      name: "Agri Sprayer and Spreader 16L",
      description: "High-capacity agricultural drone for precision spraying and spreading operations",
      image: "/images/agri_drone.png"
    },
    {
      name: "Survey and Mapping Drone",
      description: "Professional surveying drone for high-precision mapping and data collection",
      image: "/images/survey_drone.png"
    },
    {
      name: "Medical Delivery Drone",
      description: "Specialized drone for medical supplies and emergency delivery services",
      image: "/images/medical_drone.png"
    },
    {
      name: "FIMI Pro Drone",
      description: "Professional-grade drone for advanced aerial operations and data collection",
      image: "/images/Drone.jpeg"
    }
  ];

  const whyPhilDrones = [
    {
      icon: Target,
      title: "Mission-Ready",
      description: "Tested for reliability in real-world conditions"
    },
    {
      icon: Zap,
      title: "Precision Engineering",
      description: "Advanced technology ensures accurate results every flight"
    },
    {
      icon: Heart,
      title: "Proudly Filipino",
      description: "Designed and built in the Philippines, supporting local innovation"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative p-40 pl-10 pr-10 -mt-17 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('/images/aerial-shot-aboutus.jpg')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-max mx-auto px-0 sm:px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">PHILDRONES</span>
            </h1>
            <p className="text-md md:text-2xl lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              At PHILDRONES, we design and field mission-ready aircraft tailored to meet the most demanding operational needs. From defense applications to agricultural optimization and geodetic surveying, our drones are engineered for precision, reliability, and performance.
            </p>
            <div className="grid grid-cols-0 gap-4 justify-items-center max-w-md mx-auto">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">Mission-Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">Precision Engineering</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400 col-span-2 justify-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">Proudly Filipino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold text-sm">Established in Philippines</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built in the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Philippines</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Each drone meets rigorous operational standards, reflecting our commitment to quality, innovation, and national pride. We empower industries, professionals, and visionaries with aerial technology that elevates their capabilities and transforms the way they work.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Filipino Made</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Quality Assured</h3>
                  <p className="text-gray-400">Rigorous testing and standards</p>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <Image
                    src="/images/Drone-removebg-preview.png"
                    alt="PhilDrones Drone"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400 font-semibold text-sm">Core Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Focus Areas</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized drone solutions for diverse industries and applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFocusAreas.map((area, index) => {
              const IconComponent = area.icon;
              const isHidden = !showAllFocusAreas && index >= 2;
              
              return (
                <div
                  key={area.title}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-neon overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isHidden ? 'hidden md:block' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {/* Hide icon on mobile, show on desktop */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg hidden md:flex`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{area.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Show More/Less Button for Mobile */}
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={() => setShowAllFocusAreas(!showAllFocusAreas)}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold flex items-center space-x-2"
            >
              <span>{showAllFocusAreas ? 'Show Less' : 'Show More'}</span>
              {showAllFocusAreas ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Why PHILDRONES */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">PHILDRONES</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the drone industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyPhilDrones.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`text-center group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-neon ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative z-10">
                    {/* Hide icon on mobile, show on desktop */}
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hidden md:flex">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Drone Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400 font-semibold text-sm">Our Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Drone Products</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced drone solutions designed for specific operational requirements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {droneProducts.map((drone, index) => (
              <div
                key={drone.name}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-neon ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <Image
                      src={drone.image}
                      alt={drone.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{drone.name}</h3>
                    {/* Hide description on mobile, show on desktop */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hidden md:block">{drone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PHILDRONES envisions becoming a premier leader in advanced drone technology and integrated aerial solutions, fostering lasting partnerships through excellence, innovation, and trust. We are committed to delivering intelligent, high-quality drone systems that enhance operational efficiency, improve accessibility, and drive sustainable growth for businesses, institutions, and communities.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At PHILDRONES, our mission is to redefine industries through cutting-edge drone innovation and responsible technology. We are dedicated to continuous advancement, empowering skilled professionals, and cultivating a culture of collaboration, adaptability, and excellence. We aim to make drone technology transformative—optimizing workflows, strengthening decision-making, and creating meaningful impact across sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className={`relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-[url('/images/aerial-shot-long-road-surrounded-by-trees-fields.jpg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold text-sm">Get Started Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Operations</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover how PHILDRONES can elevate your capabilities with our mission-ready drone solutions. Built in the Philippines, designed for the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-neon transition-all duration-300 font-semibold flex items-center justify-center group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Our Products
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold relative overflow-hidden group">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
