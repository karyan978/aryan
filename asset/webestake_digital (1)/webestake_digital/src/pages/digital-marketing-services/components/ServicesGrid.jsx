import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ServicesGrid = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: 'Share2',
      description: 'Build brand awareness and engage customers across Facebook, Instagram, LinkedIn, and Twitter with content that resonates with Bihar\'s diverse audience.',
      features: ['Content Creation & Curation', 'Community Management', 'Influencer Partnerships', 'Social Commerce Setup'],
      tools: ['Facebook Business Manager', 'Instagram Creator Studio', 'Hootsuite', 'Canva Pro'],
      roi: '180% average engagement increase',
      pricing: '₹15,000/month',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ppc-advertising',
      title: 'PPC & Google Ads',
      icon: 'Target',
      description: 'Drive immediate traffic and conversions with strategically crafted Google Ads, Facebook Ads, and local search campaigns optimized for Bihar market.',
      features: ['Keyword Research & Analysis', 'Ad Copy Creation', 'Landing Page Optimization', 'Conversion Tracking'],
      tools: ['Google Ads', 'Facebook Ads Manager', 'Google Analytics', 'SEMrush'],
      roi: '320% ROAS average',
      pricing: '₹20,000/month + ad spend',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      icon: 'FileText',
      description: 'Create compelling content that tells your brand story, educates your audience, and drives organic growth through blogs, videos, and infographics.',
      features: ['Blog Writing & SEO', 'Video Content Creation', 'Infographic Design', 'Content Calendar Planning'],
      tools: ['WordPress', 'Yoast SEO', 'Adobe Creative Suite', 'Grammarly'],
      roi: '250% organic traffic growth',
      pricing: '₹12,000/month',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      icon: 'Mail',
      description: 'Nurture leads and retain customers with personalized email campaigns that deliver value and drive conversions throughout the customer journey.',
      features: ['Email Automation Setup', 'Newsletter Design', 'Segmentation Strategy', 'A/B Testing'],
      tools: ['Mailchimp', 'ConvertKit', 'Klaviyo', 'Canva'],
      roi: '400% ROI on email campaigns',
      pricing: '₹8,000/month',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'local-seo',
      title: 'Local SEO Optimization',
      icon: 'MapPin',
      description: 'Dominate local search results in Bihar Sharif and surrounding areas with optimized Google My Business, local citations, and location-based content.',
      features: ['Google My Business Optimization', 'Local Citation Building', 'Review Management', 'Local Keyword Targeting'],
      tools: ['Google My Business', 'BrightLocal', 'Moz Local', 'Google Search Console'],
      roi: '300% local search visibility',
      pricing: '₹10,000/month',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      icon: 'BarChart3',
      description: 'Make data-driven decisions with comprehensive analytics, custom dashboards, and detailed monthly reports that show real business impact.',
      features: ['Custom Dashboard Setup', 'Monthly Performance Reports', 'Conversion Tracking', 'Competitor Analysis'],
      tools: ['Google Analytics 4', 'Google Data Studio', 'SEMrush', 'Hotjar'],
      roi: '150% better decision making',
      pricing: '₹5,000/month',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Zap" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Complete Digital Marketing Suite</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="block text-primary">Real Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From social media management to PPC campaigns, we offer comprehensive digital marketing services 
            designed specifically for Bihar's business landscape and growth opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? 'transform scale-105' 
                  : 'hover:transform hover:scale-102'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`bg-white rounded-2xl p-8 shadow-brand h-full transition-all duration-300 ${
                activeService === index 
                  ? 'shadow-brand-lg border-2 border-primary' 
                  : 'hover:shadow-brand-lg border-2 border-transparent'
              }`}>
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-primary text-white' :'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                }`}>
                  <Icon name={service.icon} size={24} />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ROI & Pricing */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Expected ROI</div>
                      <div className="font-semibold text-conversion-accent">{service.roi}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="font-semibold text-primary">{service.pricing}</div>
                    </div>
                  </div>
                  
                  <Button
                    variant={activeService === index ? "default" : "outline"}
                    size="sm"
                    fullWidth
                    className={activeService === index ? "bg-primary hover:bg-primary/90" : ""}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Service Image */}
            <div className="relative h-80 lg:h-auto">
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>

            {/* Service Details */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name={services[activeService].icon} size={20} color="white" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* All Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Tools & Platforms:</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-cta-primary hover:bg-cta-primary/90 flex-1"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Book Strategy Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Get Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;