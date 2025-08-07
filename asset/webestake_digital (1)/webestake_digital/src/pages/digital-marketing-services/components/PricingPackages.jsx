import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPackages = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPackage, setSelectedPackage] = useState('growth');

  const packages = [
    {
      id: 'starter',
      name: 'Digital Starter',
      subtitle: 'Perfect for new businesses',
      monthlyPrice: 15000,
      annualPrice: 150000,
      originalPrice: 180000,
      popular: false,
      color: 'border-gray-200',
      buttonColor: 'outline',
      features: [
        'Google My Business Setup & Optimization',
        'Basic Social Media Management (2 platforms)',
        'Monthly Content Creation (8 posts)',
        'Basic Website SEO Audit',
        'Monthly Performance Report',
        'Email Support',
        'Local Citation Building (10 listings)'
      ],
      limitations: [
        'Limited to 2 social platforms',
        'Basic analytics only',
        'No paid advertising'
      ],
      idealFor: 'Small local businesses just starting their digital journey'
    },
    {
      id: 'growth',
      name: 'Digital Growth',
      subtitle: 'Most popular choice',
      monthlyPrice: 35000,
      annualPrice: 350000,
      originalPrice: 420000,
      popular: true,
      color: 'border-primary',
      buttonColor: 'default',
      features: [
        'Everything in Digital Starter',
        'Advanced Social Media Management (4 platforms)',
        'Google Ads Campaign Management (₹20K ad spend included)',
        'Content Marketing (16 posts + 2 blogs)',
        'Email Marketing Setup & Management',
        'Advanced SEO Optimization',
        'Bi-weekly Strategy Calls',
        'WhatsApp Business Integration',
        'Competitor Analysis Report'
      ],
      limitations: [
        'Ad spend limit: ₹20,000/month',
        'Limited to 4 platforms'
      ],
      idealFor: 'Growing businesses ready to scale their digital presence'
    },
    {
      id: 'premium',
      name: 'Digital Premium',
      subtitle: 'For established businesses',
      monthlyPrice: 65000,
      annualPrice: 650000,
      originalPrice: 780000,
      popular: false,
      color: 'border-secondary',
      buttonColor: 'outline',
      features: [
        'Everything in Digital Growth',
        'Multi-Platform Advertising (Google, Facebook, Instagram)',
        'Advanced Analytics & Attribution',
        'Custom Landing Page Development',
        'Video Content Creation (2 videos/month)',
        'Influencer Partnership Management',
        'Weekly Strategy Sessions',
        'Dedicated Account Manager',
        'Priority Support (24/7)',
        'Custom Reporting Dashboard'
      ],
      limitations: [
        'Custom ad spend budget required'
      ],
      idealFor: 'Established businesses seeking comprehensive digital dominance'
    }
  ];

  const addOns = [
    {
      name: 'Additional Social Platform',
      price: 3000,
      description: 'Extend your reach with additional social media management'
    },
    {
      name: 'Extra Blog Posts',
      price: 2500,
      description: 'Additional SEO-optimized blog content (per post)'
    },
    {
      name: 'Video Content Creation',
      price: 8000,
      description: 'Professional video content for social media (per video)'
    },
    {
      name: 'Advanced Analytics Setup',
      price: 5000,
      description: 'Custom tracking and conversion optimization setup'
    }
  ];

  const getPrice = (pkg) => {
    const price = billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (pkg) => {
    const monthlyCost = pkg.monthlyPrice * 12;
    const savings = monthlyCost - pkg.annualPrice;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(savings);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Icon name="IndianRupee" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-secondary">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-primary">Growth Package</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Flexible pricing designed for Bihar businesses. No hidden fees, no long-term contracts. 
            Start small and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly' ?'bg-white text-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                billingCycle === 'annual' ?'bg-white text-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-conversion-accent text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-brand border-2 transition-all duration-300 hover:shadow-brand-lg ${
                pkg.popular ? 'transform scale-105 border-primary' : pkg.color
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-headline font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">
                      {getPrice(pkg)}
                    </div>
                    <div className="text-gray-500">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-conversion-accent font-semibold mt-2">
                        Save {getSavings(pkg)} annually
                      </div>
                    )}
                  </div>

                  <Button
                    variant={pkg.buttonColor}
                    size="lg"
                    fullWidth
                    className={pkg.popular ? "bg-primary hover:bg-primary/90 text-white" : ""}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Choose Plan'}
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} color="var(--color-conversion-accent)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {pkg.limitations.length > 0 && (
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                    {pkg.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start space-x-3 mb-2">
                        <Icon name="Minus" size={16} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ideal For */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
                  <p className="text-sm text-gray-600">{pkg.idealFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  ₹{addon.price.toLocaleString('en-IN')}
                </div>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-2xl shadow-brand p-8 mb-16">
          <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
            Flexible Payment Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} color="var(--color-conversion-accent)" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Online Payments</h4>
              <p className="text-sm text-gray-600">UPI, Net Banking, Credit/Debit Cards accepted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quarterly Payments</h4>
              <p className="text-sm text-gray-600">Split annual payments into 4 installments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} color="var(--color-secondary)" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">GST Invoicing</h4>
              <p className="text-sm text-gray-600">Proper GST invoices for business expenses</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
            Questions About Pricing?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand every business is unique. Let's discuss a custom package that fits your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-cta-primary hover:bg-cta-primary/90 text-white"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Schedule Pricing Call
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;