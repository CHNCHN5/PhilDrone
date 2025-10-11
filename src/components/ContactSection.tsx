'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
  Zap,
  Cpu
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'Tech City, TC 12345', 'United States'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri 9AM-6PM EST'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@phildrone.com', 'support@phildrone.com', 'sales@phildrone.com'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-neon">Touch</span>
          </h2>
          <p className="hidden sm:block text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your operations to new heights? Contact our team of experts 
            to discuss your drone needs and find the perfect solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-dark rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for your interest. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-sm text-sm sm:text-base"
                    >
                      <option value="">Select an option</option>
                      <option value="consumer">Consumer Drones</option>
                      <option value="professional">Professional Drones</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="custom">Custom Development</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none backdrop-blur-sm text-sm sm:text-base"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                We're here to help you find the perfect drone solution. Reach out to us through 
                any of the channels below, and our team will get back to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card-dark rounded-xl p-3 sm:p-6 shadow-lg border border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-3">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-xs sm:text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card-dark rounded-xl h-48 sm:h-64 flex items-center justify-center border border-gray-800 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse">
                    <Cpu className="w-2 h-2 text-white m-1" />
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Interactive Map</p>
                <p className="text-xs sm:text-sm text-gray-400">123 Innovation Drive, Tech City</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;