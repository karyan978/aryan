import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ModernWebStandards = () => {
  const [activeStandard, setActiveStandard] = useState('security');

  const webStandards = {
    security: {
      title: "Security & Protection",
      description: "Enterprise-grade security measures to protect your website and customer data",
      icon: "Shield",
      color: "error",
      features: [
        {
          name: "SSL Certificate",
          description: "256-bit encryption for secure data transmission",
          icon: "Lock",
          implementation: "Automatic SSL installation and renewal"
        },
        {
          name: "Firewall Protection",
          description: "Advanced firewall to block malicious attacks",
          icon: "Shield",
          implementation: "Web Application Firewall (WAF) configuration"
        },
        {
          name: "Regular Backups",
          description: "Daily automated backups with easy restoration",
          icon: "HardDrive",
          implementation: "Automated backup system with 30-day retention"
        },
        {
          name: "Security Monitoring",
          description: "24/7 monitoring for threats and vulnerabilities",
          icon: "Eye",
          implementation: "Real-time security scanning and alerts"
        }
      ],
      metrics: [
        { label: "Security Score", value: "A+", icon: "Award" },
        { label: "Uptime", value: "99.9%", icon: "Activity" },
        { label: "Response Time", value: "<1s", icon: "Zap" }
      ]
    },
    accessibility: {
      title: "Accessibility & Inclusion",
      description: "Ensuring your website is accessible to all users, including those with disabilities",
      icon: "Users",
      color: "accent",
      features: [
        {
          name: "WCAG 2.1 Compliance",
          description: "Meets international accessibility standards",
          icon: "CheckCircle",
          implementation: "AA level compliance with accessibility guidelines"
        },
        {
          name: "Screen Reader Support",
          description: "Optimized for assistive technologies",
          icon: "Volume2",
          implementation: "Semantic HTML and ARIA labels"
        },
        {
          name: "Keyboard Navigation",
          description: "Full keyboard accessibility support",
          icon: "Navigation",
          implementation: "Tab order and focus management"
        },
        {
          name: "Color Contrast",
          description: "High contrast ratios for better readability",
          icon: "Eye",
          implementation: "4.5:1 contrast ratio for normal text"
        }
      ],
      metrics: [
        { label: "Accessibility Score", value: "95%", icon: "Users" },
        { label: "WCAG Level", value: "AA", icon: "Award" },
        { label: "Compliance", value: "100%", icon: "CheckCircle" }
      ]
    },
    performance: {
      title: "Performance & Speed",
      description: "Optimized for lightning-fast loading times and smooth user experience",
      icon: "Zap",
      color: "warning",
      features: [
        {
          name: "Image Optimization",
          description: "Compressed and optimized images for faster loading",
          icon: "Image",
          implementation: "WebP format with lazy loading"
        },
        {
          name: "Code Minification",
          description: "Compressed CSS and JavaScript files",
          icon: "Code",
          implementation: "Automated minification and bundling"
        },
        {
          name: "CDN Integration",
          description: "Global content delivery network",
          icon: "Globe",
          implementation: "CloudFlare CDN for worldwide fast access"
        },
        {
          name: "Caching Strategy",
          description: "Smart caching for improved performance",
          icon: "Database",
          implementation: "Browser and server-side caching"
        }
      ],
      metrics: [
        { label: "Page Speed", value: "95/100", icon: "Gauge" },
        { label: "Load Time", value: "2.1s", icon: "Clock" },
        { label: "Core Web Vitals", value: "Good", icon: "TrendingUp" }
      ]
    },
    seo: {
      title: "SEO & Discoverability",
      description: "Built-in SEO optimization to help your website rank higher in search results",
      icon: "Search",
      color: "success",
      features: [
        {
          name: "Technical SEO",
          description: "Optimized site structure and meta tags",
          icon: "Settings",
          implementation: "Schema markup and XML sitemaps"
        },
        {
          name: "Mobile-First Indexing",
          description: "Optimized for mobile search rankings",
          icon: "Smartphone",
          implementation: "Responsive design with mobile optimization"
        },
        {
          name: "Page Speed Optimization",
          description: "Fast loading times improve search rankings",
          icon: "Zap",
          implementation: "Core Web Vitals optimization"
        },
        {
          name: "Content Optimization",
          description: "SEO-friendly content structure",
          icon: "FileText",
          implementation: "Heading hierarchy and keyword optimization"
        }
      ],
      metrics: [
        { label: "SEO Score", value: "92/100", icon: "TrendingUp" },
        { label: "Mobile Score", value: "98/100", icon: "Smartphone" },
        { label: "Indexability", value: "100%", icon: "Search" }
      ]
    }
  };

  const standards = [
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'accessibility', label: 'Accessibility', icon: 'Users' },
    { id: 'performance', label: 'Performance', icon: 'Zap' },
    { id: 'seo', label: 'SEO', icon: 'Search' }
  ];

  const currentStandard = webStandards[activeStandard];

  const getColorClasses = (color) => {
    const colorMap = {
      error: "text-error",
      accent: "text-accent",
      warning: "text-warning",
      success: "text-success"
    };
    return colorMap[color] || "text-primary";
  };

  const getBgColorClasses = (color) => {
    const colorMap = {
      error: "bg-error/10",
      accent: "bg-accent/10",
      warning: "bg-warning/10",
      success: "bg-success/10"
    };
    return colorMap[color] || "bg-primary/10";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} color="var(--color-success)" />
            <span className="text-success font-medium">Modern Standards</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Built to Modern Web Standards
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every website we build follows the latest web standards for security, accessibility, performance, and SEO to ensure your success in the digital landscape.
          </p>
        </div>

        {/* Standards Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {standards.map((standard) => (
                <button
                  key={standard.id}
                  onClick={() => setActiveStandard(standard.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeStandard === standard.id
                      ? 'bg-white text-primary shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-white/50'
                  }`}
                >
                  <Icon name={standard.icon} size={18} />
                  <span className="hidden sm:inline">{standard.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className={`p-8 ${getBgColorClasses(currentStandard.color)}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-16 h-16 ${getBgColorClasses(currentStandard.color)} rounded-xl flex items-center justify-center`}>
                <Icon name={currentStandard.icon} size={32} className={getColorClasses(currentStandard.color)} />
              </div>
              <div>
                <h3 className="text-3xl font-headline font-bold text-text-primary mb-2">
                  {currentStandard.title}
                </h3>
                <p className="text-text-secondary">
                  {currentStandard.description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-white">
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {currentStandard.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-brand transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${getBgColorClasses(currentStandard.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={feature.icon} size={24} className={getColorClasses(currentStandard.color)} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-headline font-bold text-text-primary mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-text-secondary mb-3">
                        {feature.description}
                      </p>
                      <div className="bg-white rounded-lg p-3 border-l-4 border-primary/20">
                        <p className="text-sm text-text-secondary">
                          <span className="font-medium text-primary">Implementation:</span> {feature.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
              <h4 className="text-2xl font-headline font-bold text-text-primary mb-6 text-center">
                Performance Metrics
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                {currentStandard.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center shadow-brand">
                    <div className={`w-16 h-16 ${getBgColorClasses(currentStandard.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={metric.icon} size={24} className={getColorClasses(currentStandard.color)} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${getColorClasses(currentStandard.color)}`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-headline font-bold text-text-primary mb-8">
            Compliance & Certifications
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'WCAG 2.1 AA', description: 'Accessibility Compliance', icon: 'Users' },
              { name: 'GDPR Ready', description: 'Data Protection', icon: 'Shield' },
              { name: 'ISO 27001', description: 'Security Standards', icon: 'Lock' },
              { name: 'Google Core Web Vitals', description: 'Performance Standards', icon: 'Zap' }
            ].map((badge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-brand text-center hover:shadow-brand-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={badge.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-medium text-text-primary mb-2">{badge.name}</h4>
                <p className="text-sm text-text-secondary">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-headline font-bold text-text-primary mb-4">
              Get a Standards-Compliant Website
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Ensure your website meets all modern standards for security, accessibility, performance, and SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="CheckCircle" size={20} />
                <span>Get Compliance Audit</span>
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Download Standards Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernWebStandards;