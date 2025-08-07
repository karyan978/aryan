import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  
  const [statsInViewRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const heroSlides = [
    {
      title: "Empowering Your Digital Journey",
      subtitle: "Transform Your Business with Cutting-Edge Digital Solutions",
      description: "From traditional operations to digital excellence - we bridge the gap between where you are and where you want to be in the digital landscape.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      primaryCTA: "Book Free Consultation",
      secondaryCTA: "View Our Work"
    },
    {
      title: "Bihar to Global Excellence",
      subtitle: "Local Understanding, World-Class Solutions",
      description: "Proudly serving Bihar Sharif and beyond with digital solutions that compete on the global stage while understanding local business needs.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2070&q=80",
      primaryCTA: "Start Your Journey",
      secondaryCTA: "Our Success Stories"
    }
  ];

  const stats = [
    { key: 'projects', label: 'Projects Delivered', target: 150, suffix: '+' },
    { key: 'satisfaction', label: 'Client Satisfaction', target: 98, suffix: '%' },
    { key: 'clients', label: 'Happy Clients', target: 120, suffix: '+' },
    { key: 'years', label: 'Years Experience', target: 5, suffix: '+' }
  ];

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial animation on component mount
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animate stats card
    gsap.fromTo(statsRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        delay: 1.2
      }
    );

    // Parallax effect for background elements
    gsap.to(".hero-bg-element", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Slide animation when currentSlide changes
  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline();
      
      tl.to([titleRef.current, subtitleRef.current], {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
      .to(imageRef.current, {
        scale: 0.95,
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
      .to([titleRef.current, subtitleRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      })
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.6");
    }
  }, [currentSlide]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to discuss my digital transformation needs', '_blank');
  };

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="hero-bg-element absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="hero-bg-element absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="hero-bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Digital Transformation Experts</span>
              </div>
              
              <h1 ref={titleRef} className="text-responsive-xl font-headline font-bold text-primary dark:text-primary leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              
              <h2 ref={subtitleRef} className="text-responsive-lg font-headline font-semibold text-text-primary dark:text-text-primary">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg text-text-secondary dark:text-text-secondary leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand cta-hover"
              >
                <Link to="/contact-consultation">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  {heroSlides[currentSlide].primaryCTA}
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-brand dark:border-primary dark:text-primary"
              >
                <Icon name="Play" size={20} className="mr-2" />
                {heroSlides[currentSlide].secondaryCTA}
              </Button>
            </div>

            {/* WhatsApp Quick Connect */}
            <div className="flex items-center space-x-4 pt-4">
              <Button
                variant="ghost"
                onClick={handleWhatsAppClick}
                className="text-conversion-accent hover:bg-conversion-accent/10 transition-brand"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Quick WhatsApp Chat
              </Button>
              <span className="text-sm text-text-secondary dark:text-text-secondary">
                Get instant response within 5 minutes
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div ref={imageRef} className="relative overflow-hidden rounded-2xl shadow-brand-lg">
              <Image
                src={heroSlides[currentSlide].image}
                alt="Digital transformation workspace"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent dark:from-primary/30"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div 
              ref={(el) => {
                statsRef.current = el;
                statsInViewRef(el);
              }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-xl shadow-brand-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.key} className="text-center">
                    <div className="text-2xl font-bold text-primary dark:text-primary">
                      {statsInView ? (
                        <CountUp
                          start={0}
                          end={stat.target}
                          duration={2.5}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-text-secondary dark:text-text-secondary font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-8' :'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} color="var(--color-primary)" />
      </div>
    </section>
  );
};

export default HeroSection;