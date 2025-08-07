import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const marketStats = [
    { value: "85%", label: "Bihar businesses going digital", icon: "TrendingUp" },
    { value: "₹2.5L", label: "Average ROI increase", icon: "IndianRupee" },
    { value: "150+", label: "Local success stories", icon: "Award" },
    { value: "24/7", label: "Campaign monitoring", icon: "Clock" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">🚀 Bihar's #1 Digital Marketing Agency</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="block text-secondary">Digital Marketing</span>
                <span className="block text-accent">Excellence</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From traditional Bihar businesses to digital success stories. We've helped 150+ local companies achieve 
                an average of ₹2.5L ROI increase through strategic digital marketing campaigns tailored for the Indian market.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand-lg cta-hover"
                >
                  <Link to="/contact-consultation">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Get Free Strategy Session
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-brand"
                  onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  View Our Services
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {marketStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name={stat.icon} size={20} color="white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Digital Marketing Dashboard Analytics"
                  className="w-full h-96 object-cover rounded-2xl shadow-brand-lg"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-brand-lg float-animation">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-conversion-accent rounded-lg flex items-center justify-center">
                      <Icon name="TrendingUp" size={16} color="white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">ROI Growth</div>
                      <div className="text-xs text-gray-600">+245% This Month</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-brand-lg float-animation" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Users" size={16} color="white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">New Customers</div>
                      <div className="text-xs text-gray-600">+1,250 This Week</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;