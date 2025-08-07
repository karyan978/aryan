import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationBooking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    currentMarketing: '',
    monthlyBudget: '',
    primaryGoal: '',
    urgency: '',
    additionalInfo: ''
  });

  const services = [
    'Social Media Marketing',
    'Google Ads & PPC',
    'Search Engine Optimization',
    'Content Marketing',
    'Email Marketing',
    'Complete Digital Strategy',
    'Website Development + Marketing',
    'Local Business Marketing'
  ];

  const timeSlots = [
    { time: '10:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '2:00 PM', available: false },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '6:30 PM', available: true }
  ];

  const budgetRanges = [
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+'
  ];

  const primaryGoals = [
    'Increase brand awareness',
    'Generate more leads',
    'Boost online sales',
    'Improve local visibility',
    'Launch new product/service',
    'Compete with larger businesses'
  ];

  const urgencyLevels = [
    'ASAP - Need results immediately',
    'Within 1 month',
    'Within 3 months',
    'Planning for next quarter',
    'Just exploring options'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedService, selectedTimeSlot });
    alert('Thank you! We\'ll contact you within 2 hours to confirm your consultation.');
  };

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book a digital marketing consultation for my business: ${formData.businessName || '[Business Name]'}. I'm interested in ${selectedService || 'digital marketing services'}.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cta-primary/10 rounded-full mb-6">
            <Icon name="Calendar" size={16} color="var(--color-cta-primary)" />
            <span className="text-sm font-medium text-cta-primary">Free Strategy Session</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            Book Your Free
            <span className="block text-primary">Digital Marketing</span>
            <span className="block text-secondary">Consultation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a personalized digital marketing strategy for your Bihar business. No sales pitch, 
            just actionable insights you can implement immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Benefits */}
          <div>
            <div className="bg-white rounded-2xl shadow-brand-lg p-8 mb-8">
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                What You'll Get in Your Free Session
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-conversion-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Search" size={20} color="var(--color-conversion-accent)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Presence Audit</h4>
                    <p className="text-gray-600">Complete analysis of your current online presence, competitors, and market opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Strategy Blueprint</h4>
                    <p className="text-gray-600">Tailored digital marketing roadmap specific to your business goals and Bihar market.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={20} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ROI Projections</h4>
                    <p className="text-gray-600">Realistic growth projections and expected returns on your digital marketing investment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-trust-builder/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={20} color="var(--color-trust-builder)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Action Plan Document</h4>
                    <p className="text-gray-600">Written recommendations you can implement immediately, even if you don't work with us.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-brand">
                <div className="text-3xl font-bold text-primary mb-2">45 min</div>
                <div className="text-sm text-gray-600">Average session duration</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-brand">
                <div className="text-3xl font-bold text-conversion-accent mb-2">₹0</div>
                <div className="text-sm text-gray-600">Completely free consultation</div>
              </div>
            </div>

            {/* WhatsApp Quick Booking */}
            <div className="bg-conversion-accent/10 rounded-2xl p-6 mt-8">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="MessageCircle" size={24} color="var(--color-conversion-accent)" />
                <h4 className="font-semibold text-gray-900">Prefer WhatsApp?</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Skip the form and book directly via WhatsApp. We'll respond within 15 minutes during business hours.
              </p>
              <Button
                variant="default"
                onClick={handleWhatsAppBooking}
                className="bg-conversion-accent hover:bg-conversion-accent/90 text-white"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Book via WhatsApp
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
              Schedule Your Session
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Business Name"
                  type="text"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  required
                />
                <Input
                  label="Contact Person"
                  type="text"
                  placeholder="Your name"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Which service interests you most?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                        selectedService === service
                          ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred time slot (Today)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                      className={`p-3 rounded-lg border text-sm transition-all duration-200 ${
                        !slot.available
                          ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : selectedTimeSlot === slot.time
                          ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {slot.time}
                      {!slot.available && <div className="text-xs text-gray-400">Booked</div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => handleInputChange('monthlyBudget', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, idx) => (
                      <option key={idx} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select primary goal</option>
                    {primaryGoals.map((goal, idx) => (
                      <option key={idx} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline/Urgency
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => handleInputChange('urgency', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {urgencyLevels.map((level, idx) => (
                    <option key={idx} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Tell us about your current marketing efforts, challenges, or specific questions..."
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                className="bg-cta-primary hover:bg-cta-primary/90 text-white"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Book My Free Consultation
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . We'll contact you within 2 hours to confirm your session.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;