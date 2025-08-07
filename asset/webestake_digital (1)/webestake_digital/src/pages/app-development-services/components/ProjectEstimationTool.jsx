import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProjectEstimationTool = () => {
  const [formData, setFormData] = useState({
    appType: '',
    platform: '',
    features: [],
    complexity: '',
    timeline: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [estimation, setEstimation] = useState(null);

  const appTypeOptions = [
    { value: 'ecommerce', label: 'E-Commerce & Shopping' },
    { value: 'education', label: 'Education & Learning' },
    { value: 'healthcare', label: 'Healthcare & Wellness' },
    { value: 'business', label: 'Business & Productivity' },
    { value: 'social', label: 'Social & Communication' },
    { value: 'entertainment', label: 'Entertainment & Media' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'travel', label: 'Travel & Tourism' },
    { value: 'food', label: 'Food & Delivery' },
    { value: 'other', label: 'Other' }
  ];

  const platformOptions = [
    { value: 'ios', label: 'iOS Only' },
    { value: 'android', label: 'Android Only' },
    { value: 'both-native', label: 'Both (Native Development)' },
    { value: 'cross-platform', label: 'Cross-Platform (React Native/Flutter)' },
    { value: 'pwa', label: 'Progressive Web App (PWA)' }
  ];

  const complexityOptions = [
    { value: 'basic', label: 'Basic (Simple functionality, few screens)' },
    { value: 'medium', label: 'Medium (Moderate features, user management)' },
    { value: 'advanced', label: 'Advanced (Complex features, integrations)' },
    { value: 'enterprise', label: 'Enterprise (Highly complex, scalable)' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush delivery)' },
    { value: '2-3months', label: '2-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6+months', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: '1-3lakhs', label: '₹1-3 Lakhs' },
    { value: '3-5lakhs', label: '₹3-5 Lakhs' },
    { value: '5-10lakhs', label: '₹5-10 Lakhs' },
    { value: '10-20lakhs', label: '₹10-20 Lakhs' },
    { value: '20+lakhs', label: '₹20+ Lakhs' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const featureOptions = [
    { id: 'auth', label: 'User Authentication & Profiles', cost: 25000 },
    { id: 'payment', label: 'Payment Gateway Integration', cost: 50000 },
    { id: 'notifications', label: 'Push Notifications', cost: 20000 },
    { id: 'chat', label: 'In-app Chat/Messaging', cost: 75000 },
    { id: 'maps', label: 'Maps & Location Services', cost: 40000 },
    { id: 'camera', label: 'Camera & Photo Features', cost: 30000 },
    { id: 'social', label: 'Social Media Integration', cost: 25000 },
    { id: 'analytics', label: 'Analytics & Reporting', cost: 35000 },
    { id: 'offline', label: 'Offline Functionality', cost: 60000 },
    { id: 'admin', label: 'Admin Dashboard', cost: 80000 },
    { id: 'api', label: 'Third-party API Integrations', cost: 45000 },
    { id: 'multilang', label: 'Multi-language Support', cost: 40000 }
  ];

  const calculateEstimation = () => {
    let baseCost = 0;
    let timeWeeks = 0;

    // Base cost by complexity
    switch (formData.complexity) {
      case 'basic':
        baseCost = 200000;
        timeWeeks = 8;
        break;
      case 'medium':
        baseCost = 500000;
        timeWeeks = 14;
        break;
      case 'advanced':
        baseCost = 1000000;
        timeWeeks = 20;
        break;
      case 'enterprise':
        baseCost = 1500000;
        timeWeeks = 28;
        break;
      default:
        baseCost = 300000;
        timeWeeks = 12;
    }

    // Platform multiplier
    const platformMultiplier = {
      'ios': 1,
      'android': 1,
      'both-native': 1.8,
      'cross-platform': 1.3,
      'pwa': 0.8
    };

    baseCost *= platformMultiplier[formData.platform] || 1;

    // Add feature costs
    const featureCost = formData.features.reduce((total, featureId) => {
      const feature = featureOptions.find(f => f.id === featureId);
      return total + (feature ? feature.cost : 0);
    }, 0);

    // Timeline adjustment
    const timelineMultiplier = {
      'asap': 1.3,
      '2-3months': 1.1,
      '3-6months': 1,
      '6+months': 0.95,
      'flexible': 0.9
    };

    const totalCost = (baseCost + featureCost) * (timelineMultiplier[formData.timeline] || 1);
    const adjustedTime = timeWeeks * (timelineMultiplier[formData.timeline] || 1);

    setEstimation({
      totalCost: Math.round(totalCost),
      timeline: Math.round(adjustedTime),
      breakdown: {
        baseCost: Math.round(baseCost),
        featureCost,
        platformMultiplier: platformMultiplier[formData.platform] || 1,
        timelineMultiplier: timelineMultiplier[formData.timeline] || 1
      }
    });
  };

  const handleFeatureChange = (featureId, checked) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, featureId]
        : prev.features.filter(id => id !== featureId)
    }));
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEstimation();
      setCurrentStep(5);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetTool = () => {
    setFormData({
      appType: '',
      platform: '',
      features: [],
      complexity: '',
      timeline: '',
      budget: '',
      contactInfo: {
        name: '',
        email: '',
        phone: '',
        company: ''
      }
    });
    setCurrentStep(1);
    setEstimation(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Project Estimation Tool
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get an instant estimate for your app development project. 
            Answer a few questions to receive a detailed cost breakdown.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-muted p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-primary">
                Step {currentStep} of 5
              </span>
              <span className="text-sm text-text-secondary">
                {Math.round((currentStep / 5) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Step 1: App Type & Platform */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <Icon name="Smartphone" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                    App Type & Platform
                  </h3>
                  <p className="text-text-secondary">
                    Tell us about your app idea and target platform
                  </p>
                </div>

                <div className="space-y-6">
                  <Select
                    label="What type of app are you building?"
                    options={appTypeOptions}
                    value={formData.appType}
                    onChange={(value) => handleInputChange('appType', value)}
                    placeholder="Select app category"
                    required
                  />

                  <Select
                    label="Which platform(s) do you want to target?"
                    options={platformOptions}
                    value={formData.platform}
                    onChange={(value) => handleInputChange('platform', value)}
                    placeholder="Select platform"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Features */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <Icon name="Settings" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                    Features & Functionality
                  </h3>
                  <p className="text-text-secondary">
                    Select the features you need for your app
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {featureOptions.map((feature) => (
                    <div key={feature.id} className="border border-gray-200 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <Checkbox
                        label={
                          <div className="flex justify-between items-center w-full">
                            <span>{feature.label}</span>
                            <span className="text-sm font-medium text-secondary">
                              +₹{feature.cost.toLocaleString('en-IN')}
                            </span>
                          </div>
                        }
                        checked={formData.features.includes(feature.id)}
                        onChange={(e) => handleFeatureChange(feature.id, e.target.checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Complexity & Timeline */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <Icon name="Layers" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                    Complexity & Timeline
                  </h3>
                  <p className="text-text-secondary">
                    Help us understand your project scope and timeline
                  </p>
                </div>

                <div className="space-y-6">
                  <Select
                    label="What's the complexity level of your app?"
                    options={complexityOptions}
                    value={formData.complexity}
                    onChange={(value) => handleInputChange('complexity', value)}
                    placeholder="Select complexity"
                    required
                  />

                  <Select
                    label="What's your preferred timeline?"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => handleInputChange('timeline', value)}
                    placeholder="Select timeline"
                    required
                  />

                  <Select
                    label="What's your budget range?"
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={(value) => handleInputChange('budget', value)}
                    placeholder="Select budget range"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center">
                  <Icon name="User" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                    Contact Information
                  </h3>
                  <p className="text-text-secondary">
                    We'll send your estimate and follow up with next steps
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    value={formData.contactInfo.name}
                    onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                    placeholder="Enter your name"
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                    placeholder="Enter your phone"
                    required
                  />

                  <Input
                    label="Company Name"
                    type="text"
                    value={formData.contactInfo.company}
                    onChange={(e) => handleInputChange('contactInfo.company', e.target.value)}
                    placeholder="Enter company name (optional)"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Estimation Results */}
            {currentStep === 5 && estimation && (
              <div className="space-y-8">
                <div className="text-center">
                  <Icon name="Calculator" size={48} color="var(--color-conversion-accent)" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                    Your Project Estimation
                  </h3>
                  <p className="text-text-secondary">
                    Based on your requirements, here's our estimated cost and timeline
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        ₹{estimation.totalCost.toLocaleString('en-IN')}
                      </div>
                      <div className="text-text-secondary">Estimated Cost</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        {estimation.timeline} weeks
                      </div>
                      <div className="text-text-secondary">Development Timeline</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Cost Breakdown:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base Development Cost:</span>
                      <span>₹{estimation.breakdown.baseCost.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Additional Features:</span>
                      <span>₹{estimation.breakdown.featureCost.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Multiplier:</span>
                      <span>{estimation.breakdown.platformMultiplier}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline Adjustment:</span>
                      <span>{estimation.breakdown.timelineMultiplier}x</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total Estimated Cost:</span>
                      <span>₹{estimation.totalCost.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Info" size={20} color="var(--color-warning)" className="flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-warning mb-1">Please Note:</p>
                      <p className="text-text-secondary">
                        This is an estimated cost based on your inputs. Final pricing may vary based on 
                        detailed requirements analysis and project scope refinement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>

              <div className="flex space-x-3">
                {currentStep === 5 ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={resetTool}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Start Over
                    </Button>
                    <Button
                      variant="default"
                      className="bg-primary hover:bg-primary/90"
                      iconName="Send"
                      iconPosition="right"
                    >
                      Get Detailed Quote
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="default"
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary/90"
                    iconName="ChevronRight"
                    iconPosition="right"
                  >
                    {currentStep === 4 ? 'Calculate Estimate' : 'Next'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimationTool;