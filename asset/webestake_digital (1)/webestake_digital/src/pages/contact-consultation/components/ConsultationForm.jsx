import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: '',
    meetingType: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'app-development', label: 'Mobile App Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'seo-services', label: 'SEO Services' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'it-consulting', label: 'IT Consulting' },
    { value: 'multiple-services', label: 'Multiple Services' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ];

  const budgetOptions = [
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-300000', label: '₹1,00,000 - ₹3,00,000' },
    { value: '300000-500000', label: '₹3,00,000 - ₹5,00,000' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000' },
    { value: '1000000+', label: '₹10,00,000+' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-2-weeks', label: '1-2 Weeks' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const contactPreferenceOptions = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'video-call', label: 'Video Call' }
  ];

  const meetingTypeOptions = [
    { value: 'online', label: 'Online Meeting' },
    { value: 'office-visit', label: 'Visit Our Office' },
    { value: 'client-location', label: 'Visit My Location' },
    { value: 'phone-only', label: 'Phone Discussion Only' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success message
      alert('Thank you for your inquiry! We will contact you within 24 hours to schedule your free consultation.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: '',
        meetingType: ''
      });
      
    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Calendar" size={20} color="var(--color-primary)" />
              </div>
              <span className="text-primary font-medium">Free Consultation</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-6">
              Schedule Your
              <span className="text-primary"> Strategy Session</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Tell us about your project and we'll provide you with a customized 
              digital transformation roadmap during our free 30-minute consultation.
            </p>

            {/* What to Expect */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-semibold text-text-primary">
                What to Expect in Your Consultation:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: "Target",
                    title: "Project Analysis",
                    description: "We'll analyze your requirements and suggest the best approach"
                  },
                  {
                    icon: "TrendingUp",
                    title: "Growth Strategy",
                    description: "Discuss how digital solutions can accelerate your business growth"
                  },
                  {
                    icon: "Clock",
                    title: "Timeline & Budget",
                    description: "Get realistic timelines and transparent pricing for your project"
                  },
                  {
                    icon: "Users",
                    title: "Team Introduction",
                    description: "Meet the experts who will be working on your project"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-muted rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-text-secondary">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-text-secondary">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24hrs</div>
                  <div className="text-sm text-text-secondary">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-brand-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary border-b border-gray-200 pb-2">
                  Personal Information
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    error={errors.name}
                  />
                  
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    error={errors.email}
                  />
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    error={errors.phone}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary border-b border-gray-200 pb-2">
                  Project Details
                </h3>
                
                <Select
                  label="Service Required"
                  options={serviceOptions}
                  value={formData.service}
                  onChange={(value) => handleSelectChange('service', value)}
                  placeholder="Select the service you need"
                  required
                  error={errors.service}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Select
                    label="Project Budget"
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                    placeholder="Select your budget range"
                  />
                  
                  <Select
                    label="Timeline"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                    placeholder="When do you need this completed?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    required
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              {/* Meeting Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary border-b border-gray-200 pb-2">
                  Meeting Preferences
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select
                    label="Preferred Contact Method"
                    options={contactPreferenceOptions}
                    value={formData.preferredContact}
                    onChange={(value) => handleSelectChange('preferredContact', value)}
                    placeholder="How should we contact you?"
                  />
                  
                  <Select
                    label="Meeting Type"
                    options={meetingTypeOptions}
                    value={formData.meetingType}
                    onChange={(value) => handleSelectChange('meetingType', value)}
                    placeholder="Select meeting preference"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white shadow-brand cta-hover"
                  iconName="Send"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
                </Button>
                
                <p className="text-xs text-text-secondary text-center mt-3">
                  By submitting this form, you agree to our privacy policy. 
                  We'll contact you within 24 hours to schedule your consultation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;