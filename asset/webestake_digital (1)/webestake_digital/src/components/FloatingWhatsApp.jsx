import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the floating button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip after button appears
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent(
      'Hi Webestake Team! I visited your website and I\'m interested in learning more about your digital services. Could you please provide more information?'
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    // Hide tooltip when clicked
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-full right-0 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-brand-lg p-3 border border-gray-200 dark:border-gray-700 max-w-xs"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-conversion-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={16} color="white" />
              </div>
              
              <div>
                <p className="text-sm font-medium text-text-primary mb-1">
                  Need help with your project?
                </p>
                <p className="text-xs text-text-secondary">
                  Chat with us on WhatsApp for instant support!
                </p>
              </div>
              
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-full right-6 -mt-px">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-conversion-accent hover:bg-conversion-accent/90 text-white rounded-full shadow-brand-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
      >
        {/* Background animation */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        
        {/* Icon */}
        <Icon name="MessageCircle" size={24} className="relative z-10" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full border-2 border-conversion-accent animate-ping opacity-20"></div>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border border-conversion-accent/30 animate-ping"></div>
      <div 
        className="absolute inset-0 rounded-full border border-conversion-accent/20 animate-ping" 
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  );
};

export default FloatingWhatsApp;