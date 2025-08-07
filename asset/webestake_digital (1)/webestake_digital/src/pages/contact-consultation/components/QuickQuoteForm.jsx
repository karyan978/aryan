import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    features: [],
    timeline: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const projectTypes = [
    {
      value: 'website',
      label: 'Business Website',
      icon: 'Globe',
      basePrice: 50000,
      description: 'Professional website for your business'
    },
    {
      value: 'ecommerce',
      label: 'E-commerce Store',
      icon: 'ShoppingCart',
      basePrice: 150000,
      description: 'Online store with payment integration'
    },
    {
      value: 'mobile-app',
      label: 'Mobile App',
      icon: 'Smartphone',
      basePrice: 200000,
      description: 'iOS and Android mobile application'
    },
    {
      value: 'web-app',
      label: 'Web Application',
      icon: 'Monitor',
      basePrice: 300000,
      description: 'Custom web-based software solution'
    },
    {
      value: 'digital-marketing',
      label: 'Digital Marketing',
      icon: 'TrendingUp',
      basePrice: 25000,
      description: 'Monthly digital marketing package'
    }
  ];

  const featureOptions = {
    website: [
      { value: 'cms', label: 'Content Management System', price: 15000 },
      { value: 'seo', label: 'SEO Optimization', price: 20000 },
      { value: 'analytics', label: 'Analytics Integration', price: 5000 },
      { value: 'social-media', label: 'Social Media Integration', price: 8000 },
      { value: 'contact-forms', label: 'Advanced Contact Forms', price: 10000 },
      { value: 'blog', label: 'Blog Section', price: 12000 }
    ],
    ecommerce: [
      { value: 'payment-gateway', label: 'Payment Gateway Integration', price: 25000 },
      { value: 'inventory', label: 'Inventory Management', price: 30000 },
      { value: 'multi-vendor', label: 'Multi-vendor Support', price: 50000 },
      { value: 'mobile-app', label: 'Mobile App', price: 100000 },
      { value: 'advanced-analytics', label: 'Advanced Analytics', price: 20000 },
      { value: 'crm', label: 'CRM Integration', price: 35000 }
    ],
    'mobile-app': [
      { value: 'push-notifications', label: 'Push Notifications', price: 15000 },
      { value: 'offline-mode', label: 'Offline Mode', price: 25000 },
      { value: 'social-login', label: 'Social Media Login', price: 12000 },
      { value: 'payment-integration', label: 'Payment Integration', price: 30000 },
      { value: 'geolocation', label: 'GPS/Location Services', price: 20000 },
      { value: 'chat', label: 'In-app Chat', price: 35000 }
    ],
    'web-app': [
      { value: 'user-management', label: 'User Management System', price: 40000 },
      { value: 'api-integration', label: 'Third-party API Integration', price: 25000 },
      { value: 'reporting', label: 'Advanced Reporting', price: 30000 },
      { value: 'real-time', label: 'Real-time Features', price: 45000 },
      { value: 'mobile-responsive', label: 'Mobile Responsive Design', price: 15000 },
      { value: 'security', label: 'Advanced Security Features', price: 35000 }
    ],
    'digital-marketing': [
      { value: 'seo', label: 'SEO Services', price: 15000 },
      { value: 'social-media', label: 'Social Media Management', price: 12000 },
      { value: 'ppc', label: 'Google Ads Management', price: 18000 },
      { value: 'content', label: 'Content Creation', price: 10000 },
      { value: 'email', label: 'Email Marketing', price: 8000 },
      { value: 'analytics', label: 'Analytics & Reporting', price: 5000 }
    ]
  };

  const timelineOptions = [
    { value: '1-2-weeks', label: '1-2 Weeks', multiplier: 1.5 },
    { value: '1-month', label: '1 Month', multiplier: 1.2 },
    { value: '2-3-months', label: '2-3 Months', multiplier: 1.0 },
    { value: '3-6-months', label: '3-6 Months', multiplier: 0.9 },
    { value: '6-months+', label: '6+ Months', multiplier: 0.8 }
  ];

  const budgetRanges = [
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-300000', label: '₹1,00,000 - ₹3,00,000' },
    { value: '300000-500000', label: '₹3,00,000 - ₹5,00,000' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000' },
    { value: '1000000+', label: '₹10,00,000+' }
  ];

  const handleProjectTypeSelect = (projectType) => {
    setFormData(prev => ({
      ...prev,
      projectType,
      features: []
    }));
    setCurrentStep(2);
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const calculateEstimate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const selectedProject = projectTypes.find(p => p.value === formData.projectType);
      let basePrice = selectedProject?.basePrice || 0;
      
      // Add feature costs
      const featureCosts = formData.features.reduce((total, featureValue) => {
        const feature = featureOptions[formData.projectType]?.find(f => f.value === featureValue);
        return total + (feature?.price || 0);
      }, 0);
      
      // Apply timeline multiplier
      const timelineMultiplier = timelineOptions.find(t => t.value === formData.timeline)?.multiplier || 1;
      
      const totalCost = Math.round((basePrice + featureCosts) * timelineMultiplier);
      
      setEstimatedCost({
        basePrice,
        featureCosts,
        timelineMultiplier,
        totalCost,
        range: {
          min: Math.round(totalCost * 0.8),
          max: Math.round(totalCost * 1.2)
        }
      });
      
      setIsCalculating(false);
      setCurrentStep(4);
    }, 2000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Thank you ${formData.contactInfo.name}! We've sent your detailed quote to ${formData.contactInfo.email}. Our team will contact you within 24 hours to discuss your project.`);
    
    // Reset form
    setFormData({
      projectType: '',
      features: [],
      timeline: '',
      budget: '',
      contactInfo: { name: '', email: '', phone: '' }
    });
    setCurrentStep(1);
    setEstimatedCost(null);
  };

  const resetQuote = () => {
    setFormData({
      projectType: '',
      features: [],
      timeline: '',
      budget: '',
      contactInfo: { name: '', email: '', phone: '' }
    });
    setCurrentStep(1);
    setEstimatedCost(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Calculator" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-primary font-medium">Quick Quote Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-4">
            Get an Instant
            <span className="text-primary"> Project Estimate</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Answer a few quick questions and get an estimated cost for your project. 
            No commitment required - just transparent pricing.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-secondary">
              Step {currentStep} of 4
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round((currentStep / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Quote Calculator Card */}
        <div className="bg-white rounded-2xl shadow-brand-lg border border-gray-100 overflow-hidden">
          {/* Step 1: Project Type Selection */}
          {currentStep === 1 && (
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
                What type of project do you need?
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((project) => (
                  <button
                    key={project.value}
                    onClick={() => handleProjectTypeSelect(project.value)}
                    className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={project.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      {project.label}
                    </h4>
                    <p className="text-sm text-text-secondary mb-3">
                      {project.description}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      Starting from ₹{project.basePrice.toLocaleString('en-IN')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Feature Selection */}
          {currentStep === 2 && (
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Select Additional Features
                </h3>
                <p className="text-text-secondary">
                  Choose the features you need for your {projectTypes.find(p => p.value === formData.projectType)?.label}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {featureOptions[formData.projectType]?.map((feature) => (
                  <label
                    key={feature.value}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.features.includes(feature.value)
                        ? 'border-primary bg-primary/5' :'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.value)}
                      onChange={() => handleFeatureToggle(feature.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                      formData.features.includes(feature.value)
                        ? 'border-primary bg-primary' :'border-gray-300'
                    }`}>
                      {formData.features.includes(feature.value) && (
                        <Icon name="Check" size={14} color="white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">
                        {feature.label}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        +₹{feature.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Back
                </Button>
                <Button
                  variant="default"
                  onClick={() => setCurrentStep(3)}
                  className="bg-primary hover:bg-primary/90 text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Timeline & Budget */}
          {currentStep === 3 && (
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Timeline & Budget Preferences
                </h3>
                <p className="text-text-secondary">
                  Help us provide a more accurate estimate
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    When do you need this completed?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {timelineOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setFormData(prev => ({ ...prev, timeline: option.value }))}
                        className={`p-3 border-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          formData.timeline === option.value
                            ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 text-text-secondary hover:border-primary/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    What's your budget range?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {budgetRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setFormData(prev => ({ ...prev, budget: range.value }))}
                        className={`p-3 border-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          formData.budget === range.value
                            ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 text-text-secondary hover:border-primary/50'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Back
                </Button>
                <Button
                  variant="default"
                  onClick={calculateEstimate}
                  loading={isCalculating}
                  className="bg-primary hover:bg-primary/90 text-white"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Estimate'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Results & Contact */}
          {currentStep === 4 && estimatedCost && (
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} color="var(--color-primary)" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Your Project Estimate
                </h3>
                <p className="text-text-secondary">
                  Based on your requirements, here's what your project might cost
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Base Project Cost</span>
                    <span className="font-semibold text-text-primary">
                      ₹{estimatedCost.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  
                  {estimatedCost.featureCosts > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Additional Features</span>
                      <span className="font-semibold text-text-primary">
                        ₹{estimatedCost.featureCosts.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                  
                  {formData.timeline && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Timeline Adjustment</span>
                      <span className={`font-semibold ${
                        estimatedCost.timelineMultiplier > 1 ? 'text-cta-primary' : 'text-conversion-accent'
                      }`}>
                        {estimatedCost.timelineMultiplier > 1 ? '+' : ''}
                        {Math.round((estimatedCost.timelineMultiplier - 1) * 100)}%
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-text-primary">Estimated Total</span>
                      <span className="text-2xl font-bold text-primary">
                        ₹{estimatedCost.range.min.toLocaleString('en-IN')} - ₹{estimatedCost.range.max.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Get Your Detailed Quote
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    value={formData.contactInfo.name}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, name: e.target.value }
                    }))}
                    placeholder="Enter your name"
                    required
                  />
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, phone: e.target.value }
                    }))}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <Input
                  label="Email Address"
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contactInfo: { ...prev.contactInfo, email: e.target.value }
                  }))}
                  placeholder="your@email.com"
                  required
                />
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white flex-1"
                    iconName="Send"
                    iconPosition="left"
                  >
                    Get Detailed Quote
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetQuote}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Start Over
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-text-secondary">
            * This is an estimated cost based on your selections. Final pricing may vary based on 
            detailed requirements and project complexity. All estimates are valid for 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickQuoteForm;