import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Smartphone" size={24} color="white" />
                </div>
                <span className="text-white/80 font-medium">Mobile App Development</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="block text-accent"> Mobile Excellence</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From concept to App Store success, we craft mobile experiences that drive engagement, 
                streamline operations, and accelerate growth for businesses across Bihar and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 shadow-brand-lg cta-hover"
                >
                  <Link to="/contact-consultation">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Start Your App Project
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  iconName="Play"
                  iconPosition="left"
                >
                  View App Demos
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-white/80">Apps Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">4.8★</div>
                  <div className="text-sm text-white/80">App Store Rating</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-brand-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-brand">
                        <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-3 flex items-center justify-center">
                          <Icon name="ShoppingCart" size={32} color="var(--color-primary)" />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">E-Commerce App</h4>
                        <p className="text-xs text-gray-600">₹2.5L+ Revenue Boost</p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-brand">
                        <div className="w-full h-32 bg-gradient-to-br from-conversion-accent/20 to-trust-builder/20 rounded-lg mb-3 flex items-center justify-center">
                          <Icon name="GraduationCap" size={32} color="var(--color-conversion-accent)" />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">Education Platform</h4>
                        <p className="text-xs text-gray-600">10K+ Active Students</p>
                      </div>
                    </div>

                    <div className="space-y-4 mt-8">
                      <div className="bg-white rounded-xl p-4 shadow-brand">
                        <div className="w-full h-32 bg-gradient-to-br from-warning/20 to-error/20 rounded-lg mb-3 flex items-center justify-center">
                          <Icon name="Truck" size={32} color="var(--color-warning)" />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">Delivery Service</h4>
                        <p className="text-xs text-gray-600">5x Faster Operations</p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-brand">
                        <div className="w-full h-32 bg-gradient-to-br from-trust-builder/20 to-primary/20 rounded-lg mb-3 flex items-center justify-center">
                          <Icon name="Building2" size={32} color="var(--color-trust-builder)" />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-1">Business Management</h4>
                        <p className="text-xs text-gray-600">40% Cost Reduction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;