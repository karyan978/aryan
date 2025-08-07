import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveAppDemos = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const appDemos = [
    {
      id: 'ecommerce',
      title: 'Bihar Bazaar - E-Commerce App',
      category: 'Retail & Shopping',
      description: 'Local marketplace connecting Bihar businesses with customers across India.',
      features: ['Multi-vendor Support', 'Real-time Inventory', 'Secure Payments', 'Order Tracking'],
      metrics: {
        downloads: '25,000+',
        rating: '4.7',
        revenue: '₹2.5L+/month'
      },
      screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=600&fit=crop'
      ],
      color: 'from-primary to-secondary'
    },
    {
      id: 'education',
      title: 'Vidya Sagar - Learning Platform',
      category: 'Education & Training',
      description: 'Comprehensive educational app serving students across Bihar with local language support.',
      features: ['Offline Content', 'Progress Tracking', 'Interactive Quizzes', 'Video Lectures'],
      metrics: {
        downloads: '50,000+',
        rating: '4.8',
        revenue: '₹1.8L+/month'
      },
      screenshots: [
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=600&fit=crop'
      ],
      color: 'from-conversion-accent to-trust-builder'
    },
    {
      id: 'delivery',
      title: 'Swift Delivery - Logistics App',
      category: 'Logistics & Delivery',
      description: 'On-demand delivery service optimized for Bihar Sharif and surrounding areas.',
      features: ['Real-time Tracking', 'Route Optimization', 'Driver Management', 'Customer Support'],
      metrics: {
        downloads: '15,000+',
        rating: '4.6',
        revenue: '₹3.2L+/month'
      },
      screenshots: [
        'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=600&fit=crop'
      ],
      color: 'from-warning to-error'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Experience Our App Development Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore interactive demos of successful apps we've built for local businesses, 
            showcasing real-world impact and user engagement.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {appDemos.map((demo, index) => (
            <Button
              key={demo.id}
              variant={activeDemo === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveDemo(index)}
              className={`transition-all duration-300 ${
                activeDemo === index 
                  ? 'bg-primary text-white shadow-brand' 
                  : 'hover:bg-primary/5'
              }`}
            >
              {demo.title}
            </Button>
          ))}
        </div>

        {/* Active Demo */}
        <div className="bg-gradient-to-br from-muted to-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* App Screenshots */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-brand-lg">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                    
                    {/* Screenshot */}
                    <div className="w-full h-full relative">
                      <Image
                        src={appDemos[activeDemo].screenshots[0]}
                        alt={`${appDemos[activeDemo].title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay UI Elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Status Bar */}
                      <div className="absolute top-8 left-4 right-4 flex justify-between items-center text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Signal" size={12} />
                          <Icon name="Wifi" size={12} />
                          <Icon name="Battery" size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Screenshots */}
                <div className="absolute -right-8 top-12 w-20 h-36 bg-white rounded-lg shadow-brand overflow-hidden opacity-80 transform rotate-12">
                  <Image
                    src={appDemos[activeDemo].screenshots[1]}
                    alt="App screenshot 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -left-8 bottom-12 w-20 h-36 bg-white rounded-lg shadow-brand overflow-hidden opacity-80 transform -rotate-12">
                  <Image
                    src={appDemos[activeDemo].screenshots[2]}
                    alt="App screenshot 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-conversion-accent/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            {/* App Details */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {appDemos[activeDemo].category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-3">
                  {appDemos[activeDemo].title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {appDemos[activeDemo].description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {appDemos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4">Success Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {appDemos[activeDemo].metrics.downloads}
                    </div>
                    <div className="text-xs text-text-secondary">Downloads</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1 flex items-center justify-center">
                      {appDemos[activeDemo].metrics.rating}
                      <Icon name="Star" size={16} color="var(--color-warning)" className="ml-1" />
                    </div>
                    <div className="text-xs text-text-secondary">App Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {appDemos[activeDemo].metrics.revenue}
                    </div>
                    <div className="text-xs text-text-secondary">Monthly Revenue</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-white shadow-brand"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  iconName="FileText"
                  iconPosition="left"
                >
                  Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAppDemos;