import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WhyMeetWithUs = () => {
  const benefits = [
    {
      icon: "Target",
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all. Every solution is crafted specifically for your business needs and goals.",
      highlight: "100% Customized"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Meet our certified developers, designers, and digital strategists who will be working on your project.",
      highlight: "5+ Years Experience"
    },
    {
      icon: "TrendingUp",
      title: "Proven Results",
      description: "See real case studies and metrics from similar businesses that have transformed their digital presence with us.",
      highlight: "500+ Success Stories"
    },
    {
      icon: "Shield",
      title: "Transparent Process",
      description: "Clear timelines, fixed pricing, and regular updates. No hidden costs or surprise changes to your project scope.",
      highlight: "100% Transparency"
    },
    {
      icon: "Headphones",
      title: "Ongoing Support",
      description: "Your relationship with us doesn't end at project delivery. We provide continuous support and maintenance.",
      highlight: "24/7 Support"
    },
    {
      icon: "Award",
      title: "Quality Guarantee",
      description: "We stand behind our work with quality guarantees and revision policies to ensure your complete satisfaction.",
      highlight: "Quality Assured"
    }
  ];

  const consultationProcess = [
    {
      step: 1,
      title: "Discovery Call",
      duration: "15 minutes",
      description: "We'll understand your business, current challenges, and digital goals.",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Requirement Analysis",
      duration: "20 minutes",
      description: "Deep dive into your specific needs, target audience, and success metrics.",
      icon: "Search"
    },
    {
      step: 3,
      title: "Solution Presentation",
      duration: "15 minutes",
      description: "We\'ll present our recommended approach with timelines and investment details.",
      icon: "Presentation"
    },
    {
      step: 4,
      title: "Q&A Session",
      duration: "10 minutes",
      description: "Address all your questions and concerns about the project and our process.",
      icon: "MessageCircle"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Enterprises",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The consultation was incredibly valuable. They understood our local market needs and provided solutions that actually work for our business.",
      result: "300% increase in online sales"
    },
    {
      name: "Priya Sharma",
      company: "Sharma Textiles",
      location: "Nalanda",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Their team explained everything in simple terms and showed us exactly how digital marketing could help our traditional business grow.",
      result: "5x more customer inquiries"
    },
    {
      name: "Amit Singh",
      company: "Singh Motors",
      location: "Pawapuri",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Best decision we made was to meet with Webestake. They delivered exactly what they promised during our first consultation.",
      result: "Digital transformation completed"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-primary font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-4">
            Why Meet With
            <span className="text-primary"> Our Team?</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A 30-minute conversation can save you months of trial and error. 
            Here's what makes our consultation valuable for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {benefit.title}
                    </h3>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Process */}
        <div className="bg-muted rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-text-primary mb-4">
              Our 60-Minute Consultation Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here's exactly what happens during our free consultation session. We've structured it to maximize value for your time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationProcess.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < consultationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-brand relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={step.icon} size={20} color="var(--color-primary)" />
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {step.duration}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="Clock" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">
                Total Duration: 60 minutes • 100% Free • No Commitment Required
              </span>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-text-primary mb-4">
              What Our Clients Say About Our Consultations
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real feedback from local businesses who started their digital journey with a simple consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-brand border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial.company}, {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-text-secondary mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-conversion-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={14} color="var(--color-conversion-accent)" />
                  </div>
                  <span className="text-sm font-medium text-conversion-accent">
                    Result: {testimonial.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} color="white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-headline font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Join 500+ businesses in Bihar who have already started their digital transformation journey. 
              Your free consultation is just one click away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/919876543210?text=Hi, I would like to schedule a free consultation', '_blank')}
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-brand shadow-brand"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Schedule on WhatsApp
              </button>
              <button
                onClick={() => window.open('tel:+919876543210', '_self')}
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-brand border border-white/30"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Now: +91 98765 43210
              </button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              Available Mon-Sat, 9 AM - 7 PM • Response within 2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeetWithUs;