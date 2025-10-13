'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Package, Lightbulb, Building2, HelpCircle, Info } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, navigateWithLoading } = usePageTransition();

  const handleNavigation = (href: string) => {
    // Close menu first
    setIsMenuOpen(false);
    
    if (href === '/products' || href === '/') {
      navigateWithLoading(href);
    } else {
      // For anchor links, scroll to the section with a small delay
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleGetStarted = () => {
    navigateWithLoading('/');
    // Scroll to contact section after navigation and loading is complete
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); // Wait for page to load and loading screen to disappear
  };

  // Close mobile menu when clicking outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element;
        const dropdown = document.querySelector('[data-dropdown]');
        const menuButton = document.querySelector('[data-menu-button]');
        
        // Don't close if clicking inside dropdown or menu button
        if (dropdown?.contains(target) || menuButton?.contains(target)) {
          return;
        }
        
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Products', href: '/products', hasDropdown: true, icon: Package },
    { name: 'Solutions', href: '#solutions', hasDropdown: true, icon: Lightbulb },
    { name: 'Industries', href: '#industries', hasDropdown: true, icon: Building2 },
    { name: 'Support', href: '#support', icon: HelpCircle },
    { name: 'About', href: '#about', icon: Info },
  ];

  const productDropdown = [
    { name: 'Accessories', href: '#accessories' },
    { name: 'Consumer Drones', href: '#consumer' },
    { name: 'Enterprise Solutions', href: '#enterprise' },
    { name: 'Professional Drones', href: '#professional' },
    { name: 'Military Drones', href: '#military' },
  ];

  const solutionDropdown = [
    { name: 'Aerial Photography', href: '#photography' },
    { name: 'Mapping & Surveying', href: '#mapping' },
    { name: 'Search & Rescue', href: '#rescue' },
    { name: 'Infrastructure Inspection', href: '#inspection' },
    { name: 'Delivery Services', href: '#delivery' },
  ];

  const industryDropdown = [
    { name: 'Agriculture', href: '#agriculture' },
    { name: 'Construction', href: '#construction' },
    { name: 'Energy & Utilities', href: '#energy' },
    { name: 'Public Safety', href: '#safety' },
    { name: 'Media & Entertainment', href: '#media' },
  ];

  return (
    <>
      <LoadingScreen isVisible={isLoading} message="Loading page..." />
      <header className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50 shadow-neon">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center group"
            >
              <div className="w-20 h-20 sm:w-30 sm:h-20 flex items-center justify-center transition-all duration-300 overflow-hidden">
                <Image 
                  src="/images/MARK_3.png" 
                  alt="PhilDrone Logo" 
                  width={58} 
                  height={58} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                PhilDrones
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.href === '/products' ? (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-gray-300 hover:text-cyan-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium flex items-center transition-all duration-200 relative"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium flex items-center transition-all duration-200 relative"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                  
                  {/* Dropdown Menus */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 lg:w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-neon opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-cyan-500/20">
                      <div className="py-2">
                        {item.name === 'Products' && productDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                        {item.name === 'Solutions' && solutionDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                        {item.name === 'Industries' && industryDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg hover:shadow-neon transition-all duration-300 font-medium relative overflow-hidden group text-xs lg:text-sm"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              data-menu-button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-200 p-1"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 z-40"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
              }}
            />
            {/* Dropdown */}
            <div className="md:hidden absolute top-full left-40 right-4 -mt-3 z-50">
            <div 
              data-dropdown
              className="bg-black/80 backdrop-blur-md rounded-xl shadow-neon border border-cyan-500/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Navigation Items */}
              <div className="py-0">
                {navigation.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="w-full flex items-center justify-start px-4 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 text-right"
                      >
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </button>
                    </div>
                  );
                })}
                
                 {/* Get Started Button */}
                 <div className="px-4 py-3 border-t border-gray-700/50">
                   <button
                     onClick={() => {
                       setIsMenuOpen(false);
                       handleGetStarted();
                     }}
                     className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:shadow-neon transition-all duration-300"
                   >
                     Get Started
                   </button>
                 </div>
              </div>
            </div>
            </div>
          </>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;