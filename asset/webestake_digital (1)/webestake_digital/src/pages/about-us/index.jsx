import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import TeamShowcase from './components/TeamShowcase';
import CompanyPhilosophy from './components/CompanyPhilosophy';
import CompanyValues from './components/CompanyValues';
import LocalImpact from './components/LocalImpact';
import CertificationsAwards from './components/CertificationsAwards';
import WhyChooseWebestake from './components/WhyChooseWebestake';
import JoinOurJourney from './components/JoinOurJourney';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Webestake Digital | Bihar Sharif's Leading Digital Agency</title>
        <meta 
          name="description" 
          content="Learn about Webestake Digital, Bihar Sharif's gateway to world-class digital solutions. Our mission-driven team bridges traditional businesses with cutting-edge digital excellence through expert craftsmanship and innovative technology." 
        />
        <meta name="keywords" content="about webestake, digital agency bihar, web development company bihar sharif, digital transformation bihar, it services bihar" />
        <meta property="og:title" content="About Webestake Digital - Bihar's Premier Digital Transformation Partner" />
        <meta property="og:description" content="Discover how Webestake Digital empowers Bihar businesses with world-class digital solutions, local expertise, and global standards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webestake.com/about-us" />
        <link rel="canonical" href="https://webestake.com/about-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <CompanyTimeline />
          <TeamShowcase />
          <CompanyPhilosophy />
          <CompanyValues />
          <LocalImpact />
          <CertificationsAwards />
          <WhyChooseWebestake />
          <JoinOurJourney />
        </main>
      </div>
    </>
  );
};

export default AboutUs;