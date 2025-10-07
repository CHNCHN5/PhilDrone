'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { usePageTransition } from '../hooks/usePageTransition';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, navigateWithLoading } = usePageTransition();

  const handleNavigation = (href: string) => {
    if (href === '/products' || href === '/') {
      navigateWithLoading(href);
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

  const navigation = [
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Industries', href: '#industries', hasDropdown: true },
    { name: 'Support', href: '#support' },
    { name: 'About', href: '#about' },
  ];

  const productDropdown = [
    { name: 'Consumer Drones', href: '#consumer' },
    { name: 'Professional Drones', href: '#professional' },
    { name: 'Enterprise Solutions', href: '#enterprise' },
    { name: 'Accessories', href: '#accessories' },
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-cyan group-hover:shadow-neon transition-all duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                PhilDrone
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.href === '/products' ? (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium flex items-center transition-all duration-200 relative"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium flex items-center transition-all duration-200 relative"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                  
                  {/* Dropdown Menus */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-neon opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-cyan-500/20">
                      <div className="py-2">
                        {item.name === 'Products' && productDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                        {item.name === 'Solutions' && solutionDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                        {item.name === 'Industries' && industryDropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
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
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-neon transition-all duration-300 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20">
              {navigation.map((item) => (
                item.href === '/products' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:shadow-neon transition-all duration-300 mt-4 w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;