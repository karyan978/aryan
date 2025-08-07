import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const techStacks = {
    frontend: {
      title: "Frontend Technologies",
      description: "Modern, responsive user interfaces that engage and convert visitors",
      technologies: [
        { name: "React.js", description: "Dynamic user interfaces", icon: "Atom", level: 95 },
        { name: "Next.js", description: "Server-side rendering & SEO", icon: "Zap", level: 90 },
        { name: "TypeScript", description: "Type-safe development", icon: "Code", level: 88 },
        { name: "Tailwind CSS", description: "Utility-first styling", icon: "Palette", level: 92 }
      ]
    },
    backend: {
      title: "Backend Technologies",
      description: "Robust server-side solutions that power your applications",
      technologies: [
        { name: "Node.js", description: "Scalable server applications", icon: "Server", level: 90 },
        { name: "Express.js", description: "Fast web framework", icon: "Layers", level: 88 },
        { name: "MongoDB", description: "Flexible database solution", icon: "Database", level: 85 },
        { name: "PostgreSQL", description: "Reliable relational database", icon: "HardDrive", level: 82 }
      ]
    },
    tools: {
      title: "Development Tools",
      description: "Professional tools and workflows for quality delivery",
      technologies: [
        { name: "Git", description: "Version control system", icon: "GitBranch", level: 95 },
        { name: "Docker", description: "Containerization platform", icon: "Package", level: 80 },
        { name: "AWS", description: "Cloud hosting & services", icon: "Cloud", level: 85 },
        { name: "Figma", description: "Design collaboration", icon: "Figma", level: 90 }
      ]
    }
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'tools', label: 'Tools', icon: 'Settings' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Code2" size={20} color="var(--color-primary)" />
            <span className="text-primary font-medium">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Modern Web Technologies
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, secure, and scalable web solutions that give your business a competitive advantage.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-brand">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-headline font-bold text-text-primary mb-4">
                {techStacks[activeTab].title}
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {techStacks[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techStacks[activeTab].technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-brand transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon name={tech.icon} size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-headline font-bold text-text-primary">
                          {tech.name}
                        </h4>
                        <span className="text-sm text-primary font-medium">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <p className="text-text-secondary mb-4">
                        {tech.description}
                      </p>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-brand text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Zap" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Lightning Fast
            </h3>
            <p className="text-text-secondary">
              Optimized performance with loading speeds under 3 seconds for better user experience and SEO rankings.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-brand text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} color="var(--color-secondary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Secure & Reliable
            </h3>
            <p className="text-text-secondary">
              Enterprise-grade security measures and 99.9% uptime guarantee to protect your business and customers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-brand text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Smartphone" size={32} color="var(--color-accent)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Mobile Optimized
            </h3>
            <p className="text-text-secondary">
              Responsive design that works perfectly on all devices, ensuring your customers can reach you anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;