import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { useFadeInUp, useSlideInLeft } from '../../../hooks/useGSAP';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const sectionRef = useFadeInUp(0, 1);
  const contentRef = useSlideInLeft(0.2, 0.8);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO, Bihar Organic Foods',
      company: 'Local Agriculture Business',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Webestake transformed our traditional business into a digital powerhouse. Our online sales increased by 150% within 6 months. Their team understands both technology and local business needs perfectly.',
      rating: 5,
      project: 'E-commerce Development',
      location: 'Bihar Sharif, Bihar'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Founder, Nalanda Education Hub',
      company: 'Educational Services',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The mobile app developed by Webestake has revolutionized how we connect with students across the district. The user experience is exceptional, and the technical support is outstanding.',
      rating: 5,
      project: 'Mobile App Development',
      location: 'Nalanda, Bihar'
    },
    {
      id: 3,
      name: 'Amit Singh',
      position: 'Marketing Director, PatnaMax',
      company: 'Retail Chain',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Their digital marketing strategies helped us reach customers across Bihar and beyond. The ROI on our marketing spend improved by 200%. Highly recommend Webestake for any digital needs.',
      rating: 5,
      project: 'Digital Marketing Campaign',
      location: 'Patna, Bihar'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      position: 'Owner, Handicrafts Bihar',
      company: 'Artisan Business',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'As a traditional artisan, I never thought I could sell online. Webestake not only built our website but also taught us how to manage it. Now we ship across India!',
      rating: 5,
      project: 'Website Development & Training',
      location: 'Bihar Sharif, Bihar'
    },
    {
      id: 5,
      name: 'Dr. Vikash Anand',
      position: 'Director, HealthCare Plus',
      company: 'Healthcare Services',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The appointment booking system has streamlined our operations completely. Patient satisfaction has increased significantly, and our staff can focus more on care rather than administration.',
      rating: 5,
      project: 'Healthcare Management System',
      location: 'Gaya, Bihar'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setAutoPlay(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? '#fbbf24' : '#e5e7eb'}
        fill={index < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            What Our Clients Say About Us
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses across Bihar who have transformed 
            their operations with our digital solutions.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div ref={contentRef} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-brand-lg p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={32} color="var(--color-primary)" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-8">
                  <p className="text-lg md:text-xl text-text-primary leading-relaxed italic mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover shadow-brand"
                    />
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-primary text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
                  
                  <div className="text-center md:text-left">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
                      <Icon name="MapPin" size={14} />
                      <span>{testimonials[currentTestimonial].location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-primary">
                      <Icon name="Briefcase" size={14} />
                      <span>{testimonials[currentTestimonial].project}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-brand flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-brand flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary w-8' :'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors"
            >
              <Icon name={autoPlay ? "Pause" : "Play"} size={16} />
              <span>{autoPlay ? 'Pause' : 'Play'} Auto-rotation</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100+', label: 'Happy Clients' },
            { number: '150+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '5+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;