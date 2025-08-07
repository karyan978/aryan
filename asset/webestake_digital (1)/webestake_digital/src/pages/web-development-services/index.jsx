import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import TechStackSection from './components/TechStackSection';
import ResponsivePreview from './components/ResponsivePreview';
import ClientTransformations from './components/ClientTransformations';
import DevelopmentProcess from './components/DevelopmentProcess';
import PricingPackages from './components/PricingPackages';
import ModernWebStandards from './components/ModernWebStandards';

const WebDevelopmentServices = () => {
  return (
    <>
      <Helmet>
        <title>Professional Web Development Services in Bihar | Webestake Digital</title>
        <meta 
          name="description" 
          content="Transform your business with professional web development services in Bihar. Custom websites, e-commerce solutions, and web applications built with modern technologies. Get started today!" 
        />
        <meta name="keywords" content="web development Bihar, website development Bihar Sharif, custom website development, e-commerce development, React development, responsive web design" />
        <meta property="og:title" content="Professional Web Development Services in Bihar | Webestake Digital" />
        <meta property="og:description" content="Transform your business with professional web development services in Bihar. Custom websites, e-commerce solutions, and web applications built with modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webestake.com/web-development-services" />
        <link rel="canonical" href="https://webestake.com/web-development-services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesOverview />
          <TechStackSection />
          <ResponsivePreview />
          <ClientTransformations />
          <DevelopmentProcess />
          <ModernWebStandards />
          <PricingPackages />
        </main>

        {/* Footer Spacer */}
        <div className="h-20"></div>
      </div>
    </>
  );
};

export default WebDevelopmentServices;