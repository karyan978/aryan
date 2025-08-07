import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import BiharToGlobal from './components/BiharToGlobal';
import ClientLogos from './components/ClientLogos';
import InnovationShowcase from './components/InnovationShowcase';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import AnimatedStats from './components/AnimatedStats';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger for smooth animations
    ScrollTrigger.refresh();
    
    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Webestake - Premium Digital Solutions | Bihar Sharif's Leading Tech Agency</title>
        <meta name="description" content="Transform your business with Webestake's premium digital solutions. Expert App Development, Web Development, Digital Marketing, SEO & IT Services in Bihar Sharif, Bihar." />
        <meta name="keywords" content="digital agency bihar, web development bihar sharif, app development nalanda, digital marketing bihar, SEO services bihar sharif, webestake" />
        <meta property="og:title" content="Webestake - Premium Digital Solutions | Bihar Sharif" />
        <meta property="og:description" content="Expert digital transformation services for Bihar businesses. App development, web development, digital marketing & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webestake.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webestake - Digital Solutions Bihar" />
        <meta name="twitter:description" content="Transform your business with expert digital solutions in Bihar Sharif" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Bihar Sharif, Nalanda, Bihar" />
        <meta name="geo.position" content="25.1917;85.5215" />
        <meta name="ICBM" content="25.1917, 85.5215" />
        <link rel="canonical" href="https://webestake.com" />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesPreview />
          <BiharToGlobal />
          <Portfolio />
          <AnimatedStats />
          <Testimonials />
          <ClientLogos />
          <BlogSection />
          <InnovationShowcase />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;