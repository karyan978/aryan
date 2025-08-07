import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About Us', path: '/about-us', icon: 'Users' },
    { name: 'Digital Marketing', path: '/digital-marketing-services', icon: 'TrendingUp' },
    { name: 'App Development', path: '/app-development-services', icon: 'Smartphone' },
    { name: 'Web Development', path: '/web-development-services', icon: 'Code' },
    { name: 'Contact', path: '/contact-consultation', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to discuss my digital transformation needs', '_blank');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-brand border-b border-gray-100 dark:border-gray-700' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link 
                to="/homepage" 
                className="flex items-center space-x-3 transition-brand hover:opacity-80"
                onClick={closeMenu}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-brand">
                    <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion-accent rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-headline font-bold text-primary dark:text-primary">
                    Webestake
                  </h1>
                  <p className="text-xs text-text-secondary font-medium -mt-1">
                    Digital Solutions
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/5 shadow-sm'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={item.icon} 
                      size={16} 
                      color={isActivePath(item.path) ? 'var(--color-primary)' : 'currentColor'} 
                    />
                    <span>{item.name}</span>
                  </div>
                  {isActivePath(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle className="hidden sm:flex" />

              {/* WhatsApp Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center space-x-2 text-conversion-accent hover:bg-conversion-accent/10 transition-brand"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
              >
                <span className="hidden md:inline">WhatsApp</span>
              </Button>

              {/* Primary CTA */}
              <Button
                variant="default"
                size="sm"
                asChild
                className="hidden sm:inline-flex bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand cta-hover"
              >
                <Link to="/contact-consultation">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Book Consultation
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="lg:hidden p-2"
                iconName={isMenuOpen ? "X" : "Menu"}
                iconSize={20}
              >
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 shadow-brand-lg">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon 
                    name={item.icon} 
                    size={18} 
                    color={isActivePath(item.path) ? 'var(--color-primary)' : 'currentColor'} 
                  />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <Icon name="ChevronRight" size={16} color="var(--color-primary)" className="ml-auto" />
                  )}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
                {/* Theme Toggle for Mobile */}
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium text-text-secondary">Dark Mode</span>
                  <ThemeToggle />
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    handleWhatsAppClick();
                    closeMenu();
                  }}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="justify-center text-conversion-accent border-conversion-accent hover:bg-conversion-accent hover:text-white"
                >
                  Chat on WhatsApp
                </Button>
                
                <Button
                  variant="default"
                  fullWidth
                  asChild
                  className="justify-center bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand"
                >
                  <Link to="/contact-consultation" onClick={closeMenu}>
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Book Free Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-60 sm:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-conversion-accent hover:bg-conversion-accent/90 text-white shadow-brand-lg float-animation pulse-notification"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>

      {/* Header Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;