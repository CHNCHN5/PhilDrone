import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Zap,
  Cpu,
  Wifi
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-cyan">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">PhilDrone</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading the future of autonomous flight with cutting-edge drone technology 
              and innovative solutions for every industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:shadow-cyan">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:shadow-cyan">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:shadow-purple">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Consumer Drones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Professional Drones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Enterprise Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Software</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Aerial Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Mapping & Surveying</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Search & Rescue</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Infrastructure Inspection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Delivery Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <span>info@phildrone.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Elements */}
        <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-gray-400">
            <Cpu className="h-4 w-4" />
            <span className="text-sm">AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Wifi className="h-4 w-4" />
            <span className="text-sm">Connected</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Zap className="h-4 w-4" />
            <span className="text-sm">High Performance</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PhilDrone. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;