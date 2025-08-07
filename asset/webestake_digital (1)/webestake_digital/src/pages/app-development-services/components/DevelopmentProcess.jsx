import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DevelopmentProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const processPhases = [
    {
      id: 'discovery',
      title: 'Discovery & Planning',
      icon: 'Search',
      duration: '1-2 weeks',
      description: 'We dive deep into your business requirements, target audience, and technical specifications.',
      activities: [
        'Stakeholder interviews and requirement gathering',
        'Market research and competitor analysis',
        'Technical feasibility assessment',
        'Project scope definition and timeline creation',
        'Technology stack selection'
      ],
      deliverables: [
        'Project Requirements Document (PRD)',
        'Technical Architecture Plan',
        'UI/UX Wireframes',
        'Development Timeline',
        'Cost Estimation'
      ],
      color: 'from-primary to-trust-builder'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: 'Palette',
      duration: '2-3 weeks',
      description: 'Creating intuitive and engaging user experiences that align with your brand identity.',
      activities: [
        'User persona development and journey mapping',
        'Information architecture and user flow design',
        'High-fidelity mockups and prototypes',
        'Design system creation',
        'Usability testing and iterations'
      ],
      deliverables: [
        'Complete UI/UX Design',
        'Interactive Prototypes',
        'Design System & Style Guide',
        'Asset Library',
        'Usability Test Reports'
      ],
      color: 'from-secondary to-warning'
    },
    {
      id: 'development',
      title: 'Development & Coding',
      icon: 'Code',
      duration: '6-12 weeks',
      description: 'Building your app with clean, scalable code following industry best practices.',
      activities: [
        'Frontend and backend development',
        'Database design and implementation',
        'API development and integration',
        'Third-party service integrations',
        'Code reviews and quality assurance'
      ],
      deliverables: [
        'Functional Mobile Application',
        'Backend API & Database',
        'Admin Dashboard',
        'Technical Documentation',
        'Source Code Repository'
      ],
      color: 'from-conversion-accent to-trust-builder'
    },
    {
      id: 'testing',
      title: 'Testing & Quality Assurance',
      icon: 'Shield',
      duration: '2-3 weeks',
      description: 'Comprehensive testing to ensure your app performs flawlessly across all scenarios.',
      activities: [
        'Functional and integration testing',
        'Performance and load testing',
        'Security vulnerability assessment',
        'Device compatibility testing',
        'User acceptance testing (UAT)'
      ],
      deliverables: [
        'Test Reports & Bug Fixes',
        'Performance Optimization',
        'Security Audit Report',
        'Device Compatibility Matrix',
        'UAT Sign-off'
      ],
      color: 'from-success to-conversion-accent'
    },
    {
      id: 'launch',
      title: 'Launch & Deployment',
      icon: 'Rocket',
      duration: '1-2 weeks',
      description: 'Deploying your app to app stores and ensuring a smooth launch with ongoing support.',
      activities: [
        'App store submission and approval',
        'Production deployment and monitoring',
        'Launch strategy execution',
        'User onboarding and training',
        'Post-launch support and maintenance'
      ],
      deliverables: [
        'Live App on App Stores',
        'Deployment Documentation',
        'Launch Marketing Materials',
        'User Training Materials',
        'Maintenance & Support Plan'
      ],
      color: 'from-error to-warning'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Our Proven Development Process
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From initial concept to App Store success, we follow a structured approach 
            that ensures quality, transparency, and timely delivery.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 transition-all duration-500 hidden lg:block"
            style={{ width: `${((activePhase + 1) / processPhases.length) * 100}%` }}
          ></div>

          {/* Phase Indicators */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {processPhases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index <= activePhase ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-brand transition-all duration-300 ${
                  index === activePhase 
                    ? 'bg-primary text-white scale-110' 
                    : index < activePhase 
                      ? 'bg-conversion-accent text-white' :'bg-white text-primary'
                }`}>
                  <Icon 
                    name={phase.icon} 
                    size={24} 
                    color={index <= activePhase ? 'white' : 'var(--color-primary)'} 
                  />
                </div>
                
                <div className="text-center mt-3">
                  <h4 className="font-semibold text-sm text-primary">{phase.title}</h4>
                  <p className="text-xs text-text-secondary mt-1">{phase.duration}</p>
                </div>

                {index === activePhase && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${processPhases[activePhase].color}`}></div>
          
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Phase Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${processPhases[activePhase].color}`}>
                    <Icon name={processPhases[activePhase].icon} size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-primary">
                      {processPhases[activePhase].title}
                    </h3>
                    <p className="text-text-secondary">Duration: {processPhases[activePhase].duration}</p>
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {processPhases[activePhase].description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-4">Key Activities</h4>
                  <div className="space-y-3">
                    {processPhases[activePhase].activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={16} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-semibold text-primary mb-6">Phase Deliverables</h4>
                <div className="space-y-4">
                  {processPhases[activePhase].deliverables.map((deliverable, index) => (
                    <div key={index} className="bg-muted rounded-lg p-4 flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} color="var(--color-conversion-accent)" />
                      <span className="text-text-secondary font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-primary">Overall Progress</span>
                    <span className="text-primary font-bold">{Math.round(((activePhase + 1) / processPhases.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((activePhase + 1) / processPhases.length) * 100}%` }}
                    ></div>
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

export default DevelopmentProcess;