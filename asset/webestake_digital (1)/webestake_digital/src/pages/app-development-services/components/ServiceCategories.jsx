import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'native',
      title: 'Native iOS/Android Development',
      icon: 'Smartphone',
      description: 'Platform-specific apps with optimal performance and native user experience.',
      features: [
        'Swift/Kotlin Development',
        'Platform-Specific UI/UX',
        'Hardware Integration',
        'App Store Optimization',
        'Performance Optimization'
      ],
      technologies: ['Swift', 'Kotlin', 'Xcode', 'Android Studio'],
      timeline: '12-20 weeks',
      priceRange: '₹3,00,000 - ₹15,00,000',
      bestFor: 'Complex apps requiring platform-specific features'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Solutions',
      icon: 'Layers',
      description: 'Single codebase for multiple platforms with near-native performance.',
      features: [
        'React Native/Flutter',
        'Code Reusability',
        'Faster Development',
        'Consistent UI/UX',
        'Cost-Effective Solution'
      ],
      technologies: ['React Native', 'Flutter', 'Dart', 'JavaScript'],
      timeline: '8-16 weeks',
      priceRange: '₹2,00,000 - ₹10,00,000',
      bestFor: 'Startups and businesses seeking faster time-to-market'
    },
    {
      id: 'pwa',
      title: 'Progressive Web Apps',
      icon: 'Globe',
      description: 'Web-based apps with native-like experience and offline capabilities.',
      features: [
        'Offline Functionality',
        'Push Notifications',
        'App-like Experience',
        'Cross-Platform Compatibility',
        'Easy Updates'
      ],
      technologies: ['React', 'Service Workers', 'PWA APIs', 'WebAssembly'],
      timeline: '6-12 weeks',
      priceRange: '₹1,50,000 - ₹6,00,000',
      bestFor: 'Content-driven apps and quick market entry'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Mobile Solutions',
      icon: 'Building2',
      description: 'Scalable mobile solutions for large organizations and complex workflows.',
      features: [
        'Enterprise Security',
        'System Integration',
        'Scalable Architecture',
        'Admin Dashboards',
        'Analytics & Reporting'
      ],
      technologies: ['Microservices', 'Cloud Integration', 'APIs', 'Security Protocols'],
      timeline: '16-32 weeks',
      priceRange: '₹5,00,000 - ₹25,00,000',
      bestFor: 'Large organizations with complex requirements'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Comprehensive App Development Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From native mobile apps to cross-platform solutions, we deliver the perfect 
            technology stack for your business needs and budget.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeCategory === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(index)}
              className={`transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-primary text-white shadow-brand' 
                  : 'hover:bg-primary/5'
              }`}
              iconName={category.icon}
              iconPosition="left"
              iconSize={16}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Active Category Details */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={categories[activeCategory].icon} size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">
                  {categories[activeCategory].title}
                </h3>
              </div>

              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                {categories[activeCategory].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {categories[activeCategory].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                    <p className="text-text-secondary">{categories[activeCategory].timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Investment Range</h4>
                    <p className="text-text-secondary font-medium">{categories[activeCategory].priceRange}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Best For</h4>
                  <p className="text-text-secondary">{categories[activeCategory].bestFor}</p>
                </div>
              </div>
            </div>

            {/* Technologies & Visual */}
            <div className="bg-muted p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {categories[activeCategory].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-brand">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded"></div>
                      <div className="h-4 bg-secondary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-accent/20 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Icon name={categories[activeCategory].icon} size={24} color="white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-conversion-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-warning rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;