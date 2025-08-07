import React from 'react';
import { Helmet } from 'react-helmet';

// Import components
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories';
import InteractiveAppDemos from './components/InteractiveAppDemos';
import DevelopmentProcess from './components/DevelopmentProcess';
import TechnologyStack from './components/TechnologyStack';
import ClientCaseStudies from './components/ClientCaseStudies';
import PricingTransparency from './components/PricingTransparency';
import ProjectEstimationTool from './components/ProjectEstimationTool';

const AppDevelopmentServices = () => {
  return (
    <>
      <Helmet>
        <title>App Development Services - Mobile Excellence | Webestake Digital</title>
        <meta 
          name="description" 
          content="Transform your business with custom mobile app development. Native iOS/Android, Cross-platform, PWA solutions. Serving Bihar Sharif and beyond with cutting-edge mobile technology." 
        />
        <meta name="keywords" content="app development, mobile apps, iOS development, Android development, React Native, Flutter, Bihar Sharif, mobile solutions" />
        <meta property="og:title" content="Professional App Development Services - Webestake Digital" />
        <meta property="og:description" content="Custom mobile app development with proven results. From concept to App Store success." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/app-development-services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />

        {/* Service Categories */}
        <ServiceCategories />

        {/* Interactive App Demos */}
        <InteractiveAppDemos />

        {/* Development Process */}
        <DevelopmentProcess />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Client Case Studies */}
        <ClientCaseStudies />

        {/* Pricing Transparency */}
        <PricingTransparency />

        {/* Project Estimation Tool */}
        <ProjectEstimationTool />
      </div>
    </>
  );
};

export default AppDevelopmentServices;