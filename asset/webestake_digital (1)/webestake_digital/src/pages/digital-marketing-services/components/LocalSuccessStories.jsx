import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const LocalSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      businessName: "Bihar Handicrafts Co.",
      industry: "Traditional Crafts",
      location: "Bihar Sharif",
      owner: "Rajesh Kumar",
      ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      businessImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      challenge: "Traditional handicraft business struggling to reach customers beyond local markets, with 90% revenue dependent on walk-in customers and local exhibitions.",
      solution: "Comprehensive digital transformation including e-commerce website, social media marketing, Google Ads for handicraft keywords, and influencer partnerships with home decor enthusiasts.",
      results: {
        onlineSales: "₹8.5L monthly",
        revenueGrowth: "340%",
        customerBase: "2,500+ nationwide",
        socialFollowers: "15K+",
        timeframe: "8 months"
      },
      testimonial: "Webestake transformed our family business from local to national. We now ship handicrafts across India and our online sales have become our primary revenue source.",
      services: ["E-commerce Development", "Social Media Marketing", "Google Ads", "Content Marketing"]
    },
    {
      id: 2,
      businessName: "Green Valley Restaurant",
      industry: "Food & Hospitality",
      location: "Nalanda",
      owner: "Priya Sharma",
      ownerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      businessImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      challenge: "Local restaurant with excellent food but poor online presence, struggling with food delivery apps and lacking direct customer engagement channels.",
      solution: "Local SEO optimization, Google My Business enhancement, social media food photography, WhatsApp ordering system, and targeted Facebook ads for local food lovers.",
      results: {
        onlineSales: "₹3.2L monthly",
        revenueGrowth: "180%",
        customerBase: "1,200+ regular",
        socialFollowers: "8K+",
        timeframe: "6 months"
      },
      testimonial: "Our restaurant is now the talk of the town! Online orders have doubled our revenue and we're booked every weekend. The social media strategy brought customers we never imagined reaching.",
      services: ["Local SEO", "Social Media Marketing", "Google My Business", "WhatsApp Integration"]
    },
    {
      id: 3,
      businessName: "TechEd Institute",
      industry: "Education & Training",
      location: "Rajgir",
      owner: "Dr. Amit Singh",
      ownerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      businessImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      challenge: "Computer training institute competing with online platforms, struggling to attract students and showcase course quality in the digital age.",
      solution: "Educational content marketing, YouTube channel development, Google Ads for skill-based keywords, student success story campaigns, and online course platform integration.",
      results: {
        onlineSales: "₹12L annually",
        revenueGrowth: "250%",
        customerBase: "800+ students",
        socialFollowers: "12K+",
        timeframe: "10 months"
      },
      testimonial: "From 50 students to 800+ in less than a year! Our YouTube channel has 12K subscribers and we're now recognized as Bihar's leading tech education institute.",
      services: ["Content Marketing", "YouTube Marketing", "Google Ads", "Website Development"]
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-conversion-accent/10 rounded-full mb-6">
            <Icon name="MapPin" size={16} color="var(--color-conversion-accent)" />
            <span className="text-sm font-medium text-conversion-accent">Bihar Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            Local Businesses,
            <span className="block text-conversion-accent">Global Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real Bihar businesses that transformed their growth trajectory through our digital marketing strategies. 
            These aren't just numbers—they're stories of dreams realized and communities empowered.
          </p>
        </div>

        {/* Success Story Showcase */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-brand-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Story Content */}
            <div className="p-8 lg:p-12">
              {/* Business Header */}
              <div className="flex items-center space-x-4 mb-8">
                <Image
                  src={currentStory.ownerImage}
                  alt={currentStory.owner}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-headline font-bold text-gray-900">
                    {currentStory.businessName}
                  </h3>
                  <p className="text-gray-600">
                    {currentStory.industry} • {currentStory.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Owner: {currentStory.owner}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-2 text-warning" />
                  The Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentStory.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Lightbulb" size={16} className="mr-2 text-secondary" />
                  Our Solution
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {currentStory.solution}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentStory.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-conversion-accent">
                    {currentStory.results.onlineSales}
                  </div>
                  <div className="text-sm text-gray-600">Online Sales</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {currentStory.results.revenueGrowth}
                  </div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">
                    {currentStory.results.customerBase}
                  </div>
                  <div className="text-sm text-gray-600">Customer Base</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-trust-builder">
                    {currentStory.results.timeframe}
                  </div>
                  <div className="text-sm text-gray-600">Timeframe</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-conversion-accent">
                <Icon name="Quote" size={24} color="var(--color-conversion-accent)" className="mb-4" />
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{currentStory.testimonial}"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={currentStory.ownerImage}
                    alt={currentStory.owner}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{currentStory.owner}</div>
                    <div className="text-sm text-gray-600">Owner, {currentStory.businessName}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Image */}
            <div className="relative">
              <Image
                src={currentStory.businessImage}
                alt={currentStory.businessName}
                className="w-full h-full object-cover min-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Navigation Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevStory}
                  className="bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                
                <div className="flex space-x-2">
                  {successStories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStory(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === activeStory ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextStory}
                  className="bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-headline font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 150+ Bihar businesses that have transformed their growth with our digital marketing expertise. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-cta-primary hover:bg-cta-primary/90 text-white"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book Your Strategy Session
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              <Icon name="FileText" size={16} className="mr-2" />
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSuccessStories;