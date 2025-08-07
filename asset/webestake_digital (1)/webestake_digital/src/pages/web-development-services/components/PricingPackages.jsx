import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPackages = () => {
  const [billingCycle, setBillingCycle] = useState('project');

  const packages = [
    {
      id: 'starter',
      name: 'Starter Website',
      description: 'Perfect for small businesses and startups looking to establish their online presence',
      price: {
        project: '₹45,000',
        monthly: '₹3,750'
      },
      popular: false,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        'Google Analytics',
        '3 months support',
        'Mobile optimization'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom animations',
        'Advanced integrations'
      ],
      color: 'primary',
      timeline: '2-3 weeks',
      revisions: '3 rounds'
    },
    {
      id: 'professional',
      name: 'Professional Website',
      description: 'Comprehensive solution for growing businesses with advanced features and functionality',
      price: {
        project: '₹85,000',
        monthly: '₹7,083'
      },
      popular: true,
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'Blog functionality',
        'Newsletter signup',
        'Live chat integration',
        '6 months support',
        'Performance optimization',
        'Security features'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Multi-language support'
      ],
      color: 'secondary',
      timeline: '3-4 weeks',
      revisions: '5 rounds'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      description: 'Complete web application with custom features, integrations, and ongoing support',
      price: {
        project: '₹1,50,000',
        monthly: '₹12,500'
      },
      popular: false,
      features: [
        'Unlimited pages',
        'Custom web application',
        'E-commerce functionality',
        'User management system',
        'Advanced integrations',
        'Custom animations',
        'Multi-language support',
        '12 months support',
        'Priority support',
        'Regular updates',
        'Backup & security',
        'Performance monitoring'
      ],
      notIncluded: [],
      color: 'accent',
      timeline: '6-8 weeks',
      revisions: 'Unlimited'
    }
  ];

  const getColorClasses = (color, popular = false) => {
    if (popular) {
      return {
        border: 'border-secondary shadow-secondary/20',
        header: 'bg-gradient-to-r from-secondary to-secondary/80 text-white',
        price: 'text-secondary',
        button: 'bg-secondary hover:bg-secondary/90 text-white'
      };
    }

    const colorMap = {
      primary: {
        border: 'border-gray-200',
        header: 'bg-gray-50 text-text-primary',
        price: 'text-primary',
        button: 'bg-primary hover:bg-primary/90 text-white'
      },
      secondary: {
        border: 'border-gray-200',
        header: 'bg-gray-50 text-text-primary',
        price: 'text-secondary',
        button: 'bg-secondary hover:bg-secondary/90 text-white'
      },
      accent: {
        border: 'border-gray-200',
        header: 'bg-gray-50 text-text-primary',
        price: 'text-accent',
        button: 'bg-accent hover:bg-accent/90 text-white'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="DollarSign" size={20} color="var(--color-secondary)" />
            <span className="text-secondary font-medium">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Choose Your Perfect Package
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden costs. All packages include hosting setup, SSL certificate, and ongoing support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1 shadow-brand">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                billingCycle === 'project' ?'bg-primary text-white shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              One-time Project
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                billingCycle === 'monthly' ?'bg-primary text-white shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              Monthly Payment
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const colors = getColorClasses(pkg.color, pkg.popular);
            
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-brand-lg overflow-hidden transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1 ${colors.border} ${
                  pkg.popular ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 ${colors.header}`}>
                  <h3 className="text-2xl font-headline font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm opacity-80 mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${colors.price}`}>
                      {pkg.price[billingCycle]}
                    </span>
                    {billingCycle === 'monthly' && (
                      <span className="text-sm opacity-60 ml-2">/month</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-4 text-sm opacity-80">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{pkg.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="RotateCcw" size={16} />
                      <span>{pkg.revisions}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {pkg.notIncluded.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 opacity-50">
                        <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="default"
                    fullWidth
                    className={colors.button}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline font-bold text-text-primary mb-4">
              Additional Services
            </h3>
            <p className="text-text-secondary">
              Enhance your website with these optional add-on services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Logo Design', price: '₹15,000', icon: 'Palette' },
              { name: 'Content Writing', price: '₹8,000', icon: 'PenTool' },
              { name: 'Photography', price: '₹12,000', icon: 'Camera' },
              { name: 'Digital Marketing', price: '₹20,000', icon: 'TrendingUp' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-medium text-text-primary mb-2">{service.name}</h4>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-headline font-bold text-text-primary mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <h4 className="font-medium text-text-primary mb-2">What's included in the support?</h4>
              <p className="text-text-secondary text-sm">
                Technical support, bug fixes, security updates, and minor content changes are included in all packages.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <h4 className="font-medium text-text-primary mb-2">Can I upgrade my package later?</h4>
              <p className="text-text-secondary text-sm">
                Yes, you can upgrade to a higher package at any time. We'll adjust the pricing based on work already completed.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <h4 className="font-medium text-text-primary mb-2">Do you provide hosting?</h4>
              <p className="text-text-secondary text-sm">
                Yes, we provide reliable hosting with SSL certificate, daily backups, and 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-brand">
              <h4 className="font-medium text-text-primary mb-2">What if I need custom features?</h4>
              <p className="text-text-secondary text-sm">
                We can develop custom features for any package. Contact us for a personalized quote based on your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-headline font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect package for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Chat with Expert
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Calculator"
                iconPosition="left"
              >
                Calculate Cost
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;