'use client';

import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  Phone, 
  Clock, 
  Shield, 
  Users, 
  FileText, 
  Download,
  ChevronDown,
  Check,
  ExternalLink,
  Github,
  Youtube,
  MessageSquare,
  Plus,
  Minus
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SupportPage = () => {
  const [selectedTerm, setSelectedTerm] = useState('12 Months');
  const [selectedResponse, setSelectedResponse] = useState('24 Hours');
  const [selectedRequests, setSelectedRequests] = useState('Unlimited');
  // Support request form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('General');
  const [priority, setPriority] = useState('Normal');
  const [droneModel, setDroneModel] = useState('');
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
  // Show all features state (mobile only)
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Options for custom dropdowns
  const categoryOptions = ['General', 'Technical', 'Warranty', 'Training', 'Billing'];
  const priorityOptions = ['Low', 'Normal', 'High', 'Urgent'];

  // Lightweight custom dropdown to match dark theme
  const Dropdown = ({
    value,
    onChange,
    options,
    placeholder
  }: {
    value: string;
    onChange: (val: string) => void;
    options: string[];
    placeholder?: string;
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <div
        className="relative"
        tabIndex={0}
        onBlur={(e) => {
          const related = e.relatedTarget as Node | null;
          if (!e.currentTarget.contains(related)) setOpen(false);
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
        >
          <span className="truncate text-left">{value || placeholder || 'Select'}</span>
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute z-30 mt-2 w-full max-h-56 overflow-auto rounded-lg bg-gray-900/95 border border-gray-700/60 shadow-xl backdrop-blur-md"
          >
            {options.map((opt) => {
              const isActive = opt === value;
              return (
                <li key={opt} className="p-0 m-0">
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>
    );
  };

  const buildMailtoHref = () => {
    const to = 'support@phildrones.com';
    const subj = encodeURIComponent(`[${category}] ${subject || 'Support Request'} - ${priority}`);
    const bodyLines = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Priority: ${priority}`,
      `Category: ${category}`,
      `Drone Model: ${droneModel || 'N/A'}`,
      `Order/License ID: ${orderId || 'N/A'}`,
      '',
      'Message:',
      message || '(no message provided)'
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${to}?subject=${subj}&body=${body}`;
  };

  const canSubmit = () => {
    return fullName.trim() && email.trim() && subject.trim() && message.trim();
  };

  const supportFeatures = [
    {
      title: 'Support & Maintenance Term',
      value: selectedTerm,
      options: ['6 Months', '12 Months', '24 Months'],
      icon: Clock,
      description: 'Comprehensive support coverage for your drone operations'
    },
    {
      title: 'Guaranteed Response Time',
      value: selectedResponse,
      options: ['2 Hours', '24 Hours', '48 Hours'],
      icon: Shield,
      description: 'Fast response times for critical drone issues'
    },
    {
      title: 'Support Requests Per License',
      value: selectedRequests,
      options: ['Limited', 'Unlimited'],
      icon: Users,
      description: 'Number of support requests available per license holder'
    },
    {
      title: 'Private Support Portal Access',
      value: 'Included',
      icon: Check,
      description: 'Dedicated portal for priority support'
    },
    {
      title: 'Community Forum Access',
      value: 'Included',
      icon: Check,
      description: 'Access to our drone community forums'
    },
    {
      title: 'Feature Requests',
      value: 'Unlimited',
      icon: FileText,
      description: 'Submit unlimited feature requests for drone improvements'
    },
    {
      title: 'Technical Documentation',
      value: 'Included',
      icon: Download,
      description: 'Complete technical manuals and guides'
    }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Direct email support for license holders with guaranteed response times.',
      icon: Mail,
      contact: 'support@phildrones.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Phone Support',
      description: 'Immediate assistance for critical drone operations and emergencies.',
      icon: Phone,
      contact: '+1 (555) 123-DRONE',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Live Chat',
      description: 'Real-time chat support for quick questions and troubleshooting.',
      icon: MessageCircle,
      contact: 'Available 24/7',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const communityChannels = [
    {
      name: 'GitHub',
      description: 'Report bugs, request features, and track development progress.',
      icon: Github,
      link: 'https://github.com/phildrones',
      color: 'text-gray-400 hover:text-white'
    },
    {
      name: 'YouTube',
      description: 'Video tutorials, drone demos, and training content.',
      icon: Youtube,
      link: 'https://youtube.com/phildrones',
      color: 'text-gray-400 hover:text-red-500'
    },
    {
      name: 'Discord',
      description: 'Community discussions and peer-to-peer support.',
      icon: MessageSquare,
      link: 'https://discord.gg/phildrones',
      color: 'text-gray-400 hover:text-indigo-500'
    }
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Support and Maintenance
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Designed for Simplicity and Not Complexity
            </p>
          </motion.div>
        </div>
      </section>

       {/* Support Features Section */}
       <section className="py-8 sm:py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="rounded-2xl"
           >
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-7">
               {supportFeatures.slice(0, showAllFeatures || !isMobile ? supportFeatures.length : 2).map((feature, index) => (
                 <motion.div
                   key={feature.title}
                   initial={{ opacity: 0, y: 16 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.05 }}
                   className="relative rounded-xl p-[1px] bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent hover:from-cyan-500/50 hover:via-purple-500/30 transition-colors"
                 >
                   <div className="group rounded-[11px] h-full bg-gray-900/60 backdrop-blur-md border border-gray-700/50 p-4 sm:p-5 lg:p-6 hover:border-cyan-500/30 transition-colors">
                     <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                       <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
                         {/* Hide icon on mobile, show on sm and up */}
                         <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 items-center justify-center ring-1 ring-cyan-500/30 flex-shrink-0">
                           <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                         </div>
                         <div className="min-w-0 flex-1">
                           <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                             {feature.title}
                           </h3>
                           <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                             {feature.description}
                           </p>
                         </div>
                       </div>

                       <div className="flex items-center justify-end sm:justify-start">
                         <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white border border-gray-600 group-hover:border-cyan-500/40 whitespace-nowrap">
                           {feature.value}
                         </span>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
             
             {/* Show All Button - Mobile Only */}
             {supportFeatures.length > 2 && (
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex justify-center mt-6 sm:hidden"
               >
                 <button
                   onClick={() => setShowAllFeatures(!showAllFeatures)}
                   className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-600/30 hover:border-cyan-500/50 transition-all duration-300 font-medium text-sm"
                 >
                   {showAllFeatures ? 'Show Less' : `Show All ${supportFeatures.length} Features`}
                 </button>
               </motion.div>
             )}
           </motion.div>
         </div>
       </section>

      {/* Support Channels Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ways to Raise Support & Feature Requests
            </h2>
            <p className="text-gray-400 text-lg">Raise Support</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Direct Support Channels */}
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center`}>
                    <channel.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{channel.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{channel.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contact:</span>
                    <span className="text-white">{channel.contact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50 p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl">Community Support Channels</h3>
            </div>
            
             <p className="text-gray-300 mb-6 hidden sm:block">
               Join our community of drone enthusiasts and professionals. Get help from peers, 
               share experiences, and contribute to the growing drone ecosystem.
             </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityChannels.map((channel, index) => (
                <motion.a
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <channel.icon className={`w-6 h-6 ${channel.color} transition-colors`} />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {channel.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{channel.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">Quick answers to common questions</p>
          </motion.div>

           <div className="space-y-6">
             {[
               {
                 question: "What is included in the drone support package?",
                 answer: "Our support package includes technical assistance, software updates, maintenance guidance, and access to our expert team for troubleshooting drone operations."
               },
               {
                 question: "How quickly will I receive support?",
                 answer: "Response times vary by support level. Priority support gets 2-hour response, standard support within 24 hours, and community support within 48 hours."
               },
               {
                 question: "Do you provide training for drone operations?",
                 answer: "Yes, we offer comprehensive training programs including flight training, safety protocols, maintenance procedures, and advanced operational techniques."
               },
               {
                 question: "Can I upgrade my support package?",
                 answer: "Absolutely! You can upgrade your support package at any time to access faster response times, additional features, and priority assistance."
               }
             ].map((faq, index) => {
               const isExpanded = expandedFAQ === index;
               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                   className="bg-gray-800/60 backdrop-blur-md rounded-lg border border-gray-700/50 overflow-hidden"
                 >
                   {/* FAQ Header - Always visible */}
                   <button
                     onClick={() => setExpandedFAQ(isExpanded ? null : index)}
                     className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                   >
                     <h3 className="text-white font-semibold text-lg pr-4">{faq.question}</h3>
                     <div className="flex items-center space-x-2">
                       {/* Mobile: Show expand/collapse button */}
                       <div className="sm:hidden">
                         {isExpanded ? (
                           <Minus className="w-5 h-5 text-cyan-400" />
                         ) : (
                           <Plus className="w-5 h-5 text-cyan-400" />
                         )}
                       </div>
                       {/* Desktop: Show chevron */}
                       <div className="hidden sm:block">
                         <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                       </div>
                     </div>
                   </button>
                   
                   {/* FAQ Answer - Responsive visibility */}
                   <motion.div
                     initial={false}
                     animate={{
                       height: isExpanded ? 'auto' : 0,
                       opacity: isExpanded ? 1 : 0
                     }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                     className="overflow-hidden"
                   >
                     <div className="px-6 pb-6">
                       <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                     </div>
                   </motion.div>
                 </motion.div>
               );
             })}
           </div>
        </div>
      </section>

      {/* Submit a Support Request */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent"
          >
            <div className="rounded-[15px] bg-gray-900/60 backdrop-blur-md border border-gray-700/50 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Submit a Support Request</h2>
                  <p className="text-gray-400 mt-1">Our team will reach out as soon as possible.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Connection issue with controller"
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Category</label>
                    <Dropdown
                      value={category}
                      onChange={setCategory}
                      options={categoryOptions}
                      placeholder="Select a category"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Priority</label>
                    <Dropdown
                      value={priority}
                      onChange={setPriority}
                      options={priorityOptions}
                      placeholder="Select priority"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Drone Model (optional)</label>
                  <input
                    type="text"
                    value={droneModel}
                    onChange={(e) => setDroneModel(e.target.value)}
                    placeholder="e.g., PD-Enterprise X2"
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Order/License ID (optional)</label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="#A1B2-C3D4"
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the issue or request in detail..."
                    rows={6}
                    className="w-full rounded-lg bg-white/5 border border-gray-700/60 focus:border-cyan-500/50 focus:ring-0 text-white px-3 py-2.5"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-xs text-gray-400">
                  By submitting, you agree to our support terms. We may contact you for more details.
                </p>
                <a
                  href={canSubmit() ? buildMailtoHref() : undefined}
                  onClick={(e) => { if (!canSubmit()) e.preventDefault(); }}
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${canSubmit() ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-neon' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}
                >
                  Send Request
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SupportPage;
