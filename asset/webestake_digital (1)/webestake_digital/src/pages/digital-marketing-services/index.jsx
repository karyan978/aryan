import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import LocalSuccessStories from './components/LocalSuccessStories';
import DigitalReadinessAssessment from './components/DigitalReadinessAssessment';
import PricingPackages from './components/PricingPackages';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import ConsultationBooking from './components/ConsultationBooking';

const DigitalMarketingServices = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Digital Marketing Services - Webestake Digital | Bihar\'s #1 Marketing Agency';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your Bihar business with expert digital marketing services. Social media, Google Ads, SEO, content marketing. 150+ success stories, 245% average ROI increase. Book free consultation.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Local Success Stories */}
      <LocalSuccessStories />
      
      {/* Digital Readiness Assessment */}
      <DigitalReadinessAssessment />
      
      {/* Pricing Packages */}
      <PricingPackages />
      
      {/* Competitive Analysis */}
      <CompetitiveAnalysis />
      
      {/* Consultation Booking */}
      <ConsultationBooking />
    </div>
  );
};

export default DigitalMarketingServices;