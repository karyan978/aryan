import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to discuss my digital transformation needs', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="MessageCircle" size={24} color="white" />
                </div>
                <span className="text-white/80 font-medium">Let's Connect</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-6 leading-tight">
                Ready to Transform Your
                <span className="block text-accent"> Digital Presence?</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Schedule a free consultation with our digital transformation experts. 
                We're here to understand your vision and craft solutions that drive real results.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">24hrs</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-white/80">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-conversion-accent hover:bg-conversion-accent/90 text-white shadow-brand-lg cta-hover"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-brand"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call Now: +91 98765 43210
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Cards */}
            <div className="space-y-6">
              {/* Office Location Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} color="white" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-2">Visit Our Office</h3>
                    <p className="text-white/80 mb-2">
                      123 Digital Hub, Near Railway Station<br />
                      Bihar Sharif, Nalanda - 803101
                    </p>
                    <p className="text-sm text-white/70">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} color="white" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                    <p className="text-white/80 mb-2">
                      Get instant replies on WhatsApp or schedule a call at your convenience.
                    </p>
                    <p className="text-sm text-white/70">
                      Average response time: 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Consultation Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={24} color="white" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-2">Free Consultation</h3>
                    <p className="text-white/80 mb-2">
                      30-minute strategy session to discuss your project requirements.
                    </p>
                    <p className="text-sm text-white/70">
                      No commitment required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;