import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Native & cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
      icon: 'Smartphone',
      route: '/app-development-services',
      features: ['iOS & Android', 'React Native', 'Flutter', 'UI/UX Design'],
      color: 'from-blue-500 to-blue-600',
      stats: '50+ Apps Built'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies and best practices.',
      icon: 'Code',
      route: '/web-development-services',
      features: ['React/Next.js', 'E-commerce', 'CMS', 'API Integration'],
      color: 'from-green-500 to-green-600',
      stats: '80+ Websites'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that boost your online presence and drive measurable results.',
      icon: 'TrendingUp',
      route: '/digital-marketing-services',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'from-purple-500 to-purple-600',
      stats: '200% Avg Growth'
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      description: 'Advanced SEO strategies that improve your search rankings and drive organic traffic to your business.',
      icon: 'Search',
      route: '/digital-marketing-services',
      features: ['Technical SEO', 'Local SEO', 'Content Strategy', 'Link Building'],
      color: 'from-orange-500 to-orange-600',
      stats: 'Top 3 Rankings'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively and leave lasting impressions.',
      icon: 'Palette',
      route: '/contact-consultation',
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'UI Design'],
      color: 'from-pink-500 to-pink-600',
      stats: '500+ Designs'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud services, cybersecurity, and technical support for businesses.',
      icon: 'Server',
      route: '/contact-consultation',
      features: ['Cloud Solutions', 'Cybersecurity', 'IT Support', 'Infrastructure'],
      color: 'from-indigo-500 to-indigo-600',
      stats: '99.9% Uptime'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            Comprehensive Digital Solutions
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital services that transform your business 
            and help you stay ahead in the competitive digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon & Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} size={24} color="white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">
                      {service.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full justify-between text-primary hover:bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    <Link to={service.route}>
                      <span>Learn More</span>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </Link>
                  </Button>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredService === service.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-brand p-8 border border-gray-100">
            <h3 className="text-xl font-headline font-bold text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored digital strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand cta-hover"
              >
                <Link to="/contact-consultation">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Discuss Your Project
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-brand"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;