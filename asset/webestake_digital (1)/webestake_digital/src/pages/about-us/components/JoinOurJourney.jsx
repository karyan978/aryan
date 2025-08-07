import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Link } from 'react-router-dom';

const JoinOurJourney = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your interest! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const journeyOptions = [
    {
      icon: "Briefcase",
      title: "Business Partnership",
      description: "Transform your business with our digital solutions",
      benefits: [
        "Free digital audit",
        "Custom solution design",
        "Dedicated project manager",
        "Ongoing support"
      ],
      cta: "Start Your Transformation",
      color: "from-primary to-primary/80"
    },
    {
      icon: "GraduationCap",
      title: "Career Opportunities",
      description: "Join our growing team of digital experts",
      benefits: [
        "Competitive salaries",
        "Skill development programs",
        "Flexible work environment",
        "Growth opportunities"
      ],
      cta: "Explore Careers",
      color: "from-conversion-accent to-conversion-accent/80"
    },
    {
      icon: "Users",
      title: "Community Engagement",
      description: "Be part of Bihar\'s digital transformation movement",
      benefits: [
        "Free workshops",
        "Networking events",
        "Skill sharing sessions",
        "Digital literacy programs"
      ],
      cta: "Join Community",
      color: "from-secondary to-secondary/80"
    }
  ];

  const nextSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute consultation to understand your needs",
      icon: "MessageCircle"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom digital strategy tailored to your goals",
      icon: "Target"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution with regular progress updates",
      icon: "Rocket"
    },
    {
      step: "04",
      title: "Growth & Support",
      description: "Ongoing optimization and support for continued success",
      icon: "TrendingUp"
    }
  ];

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon-Sat, 9 AM - 7 PM",
      action: "tel:+919876543210"
    },
    {
      icon: "Mail",
      title: "Email Us",
      value: "hello@webestake.com",
      description: "We respond within 2 hours",
      action: "mailto:hello@webestake.com"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "Chat with us",
      description: "Instant support available",
      action: "https://wa.me/919876543210"
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      value: "Bihar Sharif Office",
      description: "Schedule an appointment",
      action: "/contact-consultation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-muted/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you're a business seeking transformation, a professional looking for opportunities, or someone passionate about digital innovation, there's a place for you in our journey
          </p>
        </motion.div>

        {/* Journey Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {journeyOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${option.color}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={option.icon} size={28} color="white" />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 text-center">
                  {option.title}
                </h3>
                
                <p className="text-text-secondary text-center mb-6 leading-relaxed">
                  {option.description}
                </p>

                <div className="space-y-3 mb-8">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon name="Check" size={12} color="white" />
                      </div>
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  className="border-primary text-primary hover:bg-primary hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  {option.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Steps Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-brand p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
              Your Journey Starts Here
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our proven process ensures a smooth and successful digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={step.icon} 
                      size={24} 
                      color="var(--color-primary)" 
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Line */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20"></div>
          </div>
        </motion.div>

        {/* Contact Form & Methods */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-brand p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Let's Start the Conversation
              </h3>
              <p className="text-text-secondary">
                Tell us about your goals and we'll show you how we can help achieve them
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                />
              </div>

              <Input
                label="Area of Interest"
                type="text"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                placeholder="Web Development, App Development, Digital Marketing, etc."
                required
              />

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                  placeholder="Tell us about your project or goals..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white shadow-brand"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Get in Touch
              </h3>
              <p className="text-text-secondary">
                Multiple ways to connect with us. Choose what works best for you.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  if (method.action.startsWith('http') || method.action.startsWith('tel') || method.action.startsWith('mailto')) {
                    window.open(method.action, '_blank');
                  }
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={method.icon} 
                      size={24} 
                      color="var(--color-primary)" 
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">{method.title}</h4>
                    <p className="text-secondary font-medium mb-1">{method.value}</p>
                    <p className="text-text-secondary text-sm">{method.description}</p>
                  </div>

                  <Icon 
                    name="ExternalLink" 
                    size={16} 
                    color="var(--color-text-secondary)" 
                    className="group-hover:text-primary transition-colors duration-300"
                  />
                </div>
              </motion.div>
            ))}

            {/* Quick CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white text-center">
              <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-white/90 text-sm mb-4">
                Book a free consultation and let's discuss your digital transformation goals
              </p>
              <Button
                variant="default"
                size="sm"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact-consultation">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurJourney;