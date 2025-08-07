import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="Users" size={24} color="white" />
              </div>
              <span className="text-white/80 font-medium">About Webestake</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-6 leading-tight">
              Bihar Sharif's Gateway to
              <span className="block text-accent"> Digital Excellence</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We bridge traditional businesses with cutting-edge digital solutions, empowering local enterprises to compete on a global scale through expert craftsmanship and innovative technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-brand-lg"
              >
                <Link to="/contact-consultation">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Schedule Consultation
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                iconName="Play"
                iconPosition="left"
              >
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-sm text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Webestake team collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-brand-lg float-animation">
              <Icon name="Zap" size={32} color="white" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-brand-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-conversion-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Award Winning</div>
                  <div className="text-sm text-text-secondary">Digital Agency</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;