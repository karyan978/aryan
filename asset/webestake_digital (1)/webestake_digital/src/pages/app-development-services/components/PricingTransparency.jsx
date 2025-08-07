import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTransparency = () => {
  const [selectedComplexity, setSelectedComplexity] = useState('medium');

  const pricingTiers = {
    basic: {
      title: 'Basic App',
      subtitle: 'Simple functionality',
      priceRange: '₹1,50,000 - ₹3,00,000',
      timeline: '6-10 weeks',
      features: [
        'Up to 5 screens',
        'Basic UI/UX design',
        'User authentication',
        'Simple database integration',
        'Basic push notifications',
        'Android & iOS deployment',
        '3 months support'
      ],
      bestFor: 'Startups, MVPs, Simple business apps',
      examples: ['Contact forms', 'Product catalogs', 'Basic e-commerce'],
      color: 'from-conversion-accent to-trust-builder'
    },
    medium: {
      title: 'Standard App',
      subtitle: 'Enhanced features',
      priceRange: '₹3,00,000 - ₹8,00,000',
      timeline: '10-16 weeks',
      features: [
        'Up to 15 screens',
        'Custom UI/UX design',
        'Advanced user management',
        'API integrations',
        'Payment gateway integration',
        'Real-time notifications',
        'Analytics integration',
        'Admin dashboard',
        '6 months support'
      ],
      bestFor: 'Growing businesses, E-commerce, Service platforms',
      examples: ['Delivery apps', 'Booking systems', 'Social platforms'],
      color: 'from-primary to-secondary'
    },
    advanced: {
      title: 'Enterprise App',
      subtitle: 'Complex functionality',
      priceRange: '₹8,00,000 - ₹20,00,000',
      timeline: '16-24 weeks',
      features: [
        'Unlimited screens',
        'Premium UI/UX design',
        'Multi-role user system',
        'Complex integrations',
        'Advanced security features',
        'Real-time data sync',
        'Custom analytics',
        'Multi-language support',
        'Advanced admin panel',
        '12 months support'
      ],
      bestFor: 'Large enterprises, Complex workflows, Multi-tenant systems',
      examples: ['ERP systems', 'Healthcare platforms', 'Financial apps'],
      color: 'from-error to-warning'
    }
  };

  const additionalServices = [
    { name: 'App Store Optimization', price: '₹25,000', description: 'Complete ASO setup and optimization' },
    { name: 'Maintenance (Monthly)', price: '₹15,000', description: 'Bug fixes, updates, and monitoring' },
    { name: 'Feature Enhancement', price: '₹50,000+', description: 'Adding new features post-launch' },
    { name: 'Third-party Integrations', price: '₹30,000+', description: 'Payment gateways, APIs, services' },
    { name: 'Performance Optimization', price: '₹40,000', description: 'Speed and efficiency improvements' },
    { name: 'Security Audit', price: '₹35,000', description: 'Comprehensive security assessment' }
  ];

  const costFactors = [
    {
      factor: 'App Complexity',
      impact: 'High',
      description: 'Number of features, screens, and user interactions',
      icon: 'Layers'
    },
    {
      factor: 'Design Requirements',
      impact: 'Medium',
      description: 'Custom UI/UX, animations, and visual complexity',
      icon: 'Palette'
    },
    {
      factor: 'Platform Choice',
      impact: 'Medium',
      description: 'Native vs Cross-platform development approach',
      icon: 'Smartphone'
    },
    {
      factor: 'Third-party Integrations',
      impact: 'Medium',
      description: 'Payment gateways, APIs, and external services',
      icon: 'Link'
    },
    {
      factor: 'Backend Complexity',
      impact: 'High',
      description: 'Database design, server architecture, and scalability',
      icon: 'Server'
    },
    {
      factor: 'Timeline Requirements',
      impact: 'Low',
      description: 'Rush delivery may require additional resources',
      icon: 'Clock'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            No hidden costs, no surprises. Our pricing is based on your specific requirements 
            and designed to deliver maximum value for your investment.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(pricingTiers).map(([key, tier]) => (
            <div
              key={key}
              className={`relative bg-white rounded-2xl shadow-brand-lg overflow-hidden transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-2 ${
                selectedComplexity === key ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedComplexity(key)}
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-headline font-bold text-primary mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{tier.subtitle}</p>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tier.priceRange}
                  </div>
                  <div className="text-text-secondary text-sm">
                    Timeline: {tier.timeline}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Best For:</h4>
                  <p className="text-text-secondary text-sm">{tier.bestFor}</p>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tier.examples.map((example, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-muted text-text-secondary text-xs rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant={selectedComplexity === key ? "default" : "outline"}
                  fullWidth
                  className={selectedComplexity === key ? 'bg-primary hover:bg-primary/90' : ''}
                >
                  Get Quote
                </Button>
              </div>

              {/* Popular Badge */}
              {key === 'medium' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cost Factors */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            Factors That Influence App Development Cost
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={factor.icon} size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{factor.factor}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      factor.impact === 'High' ?'bg-error/10 text-error' 
                        : factor.impact === 'Medium' ?'bg-warning/10 text-warning' :'bg-conversion-accent/10 text-conversion-accent'
                    }`}>
                      {factor.impact} Impact
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 lg:p-12">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            Additional Services & Support
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-brand transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-primary">{service.name}</h4>
                  <span className="text-lg font-bold text-secondary">{service.price}</span>
                </div>
                <p className="text-text-secondary text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get a detailed quote tailored to your specific requirements. 
              Our team will analyze your needs and provide transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-brand"
                iconName="Calculator"
                iconPosition="left"
              >
                Get Custom Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;