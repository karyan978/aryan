import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      action: "Call Now",
      actionType: "phone",
      available: "Mon-Sat, 9 AM - 7 PM"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Quick responses on your favorite app",
      primary: "Chat instantly",
      secondary: "File sharing supported",
      action: "Start Chat",
      actionType: "whatsapp",
      available: "24/7 Available"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email Us",
      description: "Detailed project discussions",
      primary: "hello@webestake.com",
      secondary: "projects@webestake.com",
      action: "Send Email",
      actionType: "email",
      available: "Response within 4 hours"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Book Meeting",
      description: "Schedule a video consultation",
      primary: "30-minute free session",
      secondary: "Screen sharing available",
      action: "Schedule Now",
      actionType: "calendar",
      available: "Flexible timings"
    }
  ];

  const handleAction = (actionType, method) => {
    switch (actionType) {
      case 'phone':
        window.open('tel:+919876543210', '_self');
        break;
      case 'whatsapp':
        window.open('https://wa.me/919876543210?text=Hi, I would like to discuss my digital transformation needs', '_blank');
        break;
      case 'email':
        window.open('mailto:hello@webestake.com?subject=Project Inquiry&body=Hi, I would like to discuss my project requirements.', '_self');
        break;
      case 'calendar':
        // In a real app, this would open a calendar booking system
        alert('Calendar booking system would open here');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-primary font-medium">Multiple Ways to Connect</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-4">
            Choose Your Preferred
            <span className="text-primary"> Communication Method</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We understand that every client has different communication preferences. 
            Pick the method that works best for you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name={method.icon} size={28} color="var(--color-primary)" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {method.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-text-primary">
                    {method.primary}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {method.secondary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleAction(method.actionType, method)}
                  className="bg-primary hover:bg-primary/90 text-white"
                  iconName={method.icon}
                  iconPosition="left"
                >
                  {method.action}
                </Button>
                
                <p className="text-xs text-text-secondary text-center">
                  {method.available}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-cta-primary to-cta-primary/90 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Zap" size={28} color="white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Urgent Support?
            </h3>
            <p className="text-white/90 mb-6">
              For existing clients with urgent technical issues or project deadlines, 
              use our priority support line.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:+919876543210', '_self')}
                className="border-white text-white hover:bg-white hover:text-cta-primary transition-brand"
                iconName="Phone"
                iconPosition="left"
              >
                Emergency: +91 98765 43210
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('https://wa.me/919876543210?text=URGENT: I need immediate support for my project', '_blank')}
                className="text-white hover:bg-white/10 transition-brand"
                iconName="MessageCircle"
                iconPosition="left"
              >
                WhatsApp Priority
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;