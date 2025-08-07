import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      activities: [
        "Business requirements analysis",
        "Target audience research",
        "Competitor analysis",
        "Technical architecture planning",
        "Project timeline creation"
      ],
      deliverables: [
        "Project proposal",
        "Technical specifications",
        "Timeline & milestones",
        "Resource allocation plan"
      ],
      icon: "Search",
      color: "primary"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "Our design team creates wireframes, mockups, and interactive prototypes that align with your brand and user experience goals.",
      activities: [
        "Wireframe creation",
        "UI/UX design",
        "Interactive prototyping",
        "Design system development",
        "Client feedback integration"
      ],
      deliverables: [
        "Design mockups",
        "Interactive prototypes",
        "Style guide",
        "Asset library"
      ],
      icon: "Palette",
      color: "secondary"
    },
    {
      id: 3,
      title: "Development & Coding",
      duration: "4-8 weeks",
      description: "Our developers bring the designs to life using modern technologies, ensuring clean code, performance optimization, and scalability.",
      activities: [
        "Frontend development",
        "Backend development",
        "Database integration",
        "API development",
        "Performance optimization"
      ],
      deliverables: [
        "Functional website",
        "Admin dashboard",
        "API documentation",
        "Code repository"
      ],
      icon: "Code",
      color: "accent"
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      duration: "1-2 weeks",
      description: "Comprehensive testing across devices, browsers, and scenarios to ensure your website performs flawlessly under all conditions.",
      activities: [
        "Cross-browser testing",
        "Mobile responsiveness testing",
        "Performance testing",
        "Security testing",
        "User acceptance testing"
      ],
      deliverables: [
        "Test reports",
        "Bug fixes",
        "Performance metrics",
        "Security audit"
      ],
      icon: "Shield",
      color: "conversion-accent"
    },
    {
      id: 5,
      title: "Launch & Deployment",
      duration: "1 week",
      description: "We handle the complete deployment process, including domain setup, hosting configuration, and go-live procedures.",
      activities: [
        "Server setup & configuration",
        "Domain & SSL setup",
        "Database migration",
        "Go-live deployment",
        "Post-launch monitoring"
      ],
      deliverables: [
        "Live website",
        "Hosting setup",
        "SSL certificate",
        "Backup systems"
      ],
      icon: "Rocket",
      color: "success"
    },
    {
      id: 6,
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous support, updates, and maintenance to ensure your website stays secure, fast, and up-to-date with the latest technologies.",
      activities: [
        "Regular updates",
        "Security monitoring",
        "Performance optimization",
        "Content updates",
        "Technical support"
      ],
      deliverables: [
        "Monthly reports",
        "Update logs",
        "Backup schedules",
        "Support tickets"
      ],
      icon: "Settings",
      color: "warning"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      accent: "bg-accent text-white",
      "conversion-accent": "bg-conversion-accent text-white",
      success: "bg-success text-white",
      warning: "bg-warning text-white"
    };
    return colorMap[color] || colorMap.primary;
  };

  const getBorderColor = (color) => {
    const colorMap = {
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      "conversion-accent": "border-conversion-accent",
      success: "border-success",
      warning: "border-warning"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="GitBranch" size={20} color="var(--color-primary)" />
            <span className="text-primary font-medium">Development Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Our Proven Development Methodology
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We follow a structured, transparent process that ensures quality delivery, timely completion, and client satisfaction at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? getColorClasses(step.color)
                      : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                  }`}
                >
                  <Icon name={step.icon} size={24} />
                </button>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-gray-200 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <div className={`p-8 ${getColorClasses(processSteps[activeStep].color)}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-headline font-bold mb-2">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-white/90 text-lg">
                  {processSteps[activeStep].description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">
                  {processSteps[activeStep].duration}
                </div>
                <div className="text-white/80 text-sm">Duration</div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Activities */}
              <div>
                <h4 className="text-2xl font-headline font-bold text-text-primary mb-6 flex items-center">
                  <Icon name="CheckSquare" size={24} className="mr-2 text-primary" />
                  Key Activities
                </h4>
                <div className="space-y-4">
                  {processSteps[activeStep].activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-2xl font-headline font-bold text-text-primary mb-6 flex items-center">
                  <Icon name="Package" size={24} className="mr-2 text-secondary" />
                  Deliverables
                </h4>
                <div className="space-y-4">
                  {processSteps[activeStep].deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-brand">
                      <Icon name="FileText" size={20} className="text-secondary" />
                      <span className="text-text-primary font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Clock" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Timely Delivery
            </h3>
            <p className="text-text-secondary">
              Our structured process ensures projects are completed on time with regular milestone updates and transparent communication.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} color="var(--color-secondary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Client Collaboration
            </h3>
            <p className="text-text-secondary">
              Regular feedback sessions and collaborative decision-making ensure the final product exceeds your expectations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Award" size={32} color="var(--color-accent)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Quality Assurance
            </h3>
            <p className="text-text-secondary">
              Rigorous testing and quality checks at every stage ensure your website meets the highest standards of performance and reliability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-headline font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized development plan that fits your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Schedule Discovery Call</span>
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Download Process Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;