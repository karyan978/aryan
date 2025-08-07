import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: "Globe",
      title: "Custom Website Development",
      description: "Tailored websites built from scratch to match your unique business requirements and brand identity.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      color: "primary"
    },
    {
      id: 2,
      icon: "ShoppingCart",
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics.",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"],
      color: "secondary"
    },
    {
      id: 3,
      icon: "Settings",
      title: "CMS Implementation",
      description: "Content management systems that empower you to update and manage your website content easily.",
      features: ["Easy Content Updates", "User Management", "SEO Tools", "Media Library"],
      color: "accent"
    },
    {
      id: 4,
      icon: "Code2",
      title: "Web Application Development",
      description: "Complex web applications with advanced functionality and seamless user experiences.",
      features: ["Custom Features", "Database Integration", "API Development", "Cloud Hosting"],
      color: "conversion-accent"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      "conversion-accent": "bg-conversion-accent/10 text-conversion-accent border-conversion-accent/20"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Layers" size={20} color="var(--color-primary)" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Comprehensive Web Development Solutions
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From simple business websites to complex web applications, we deliver solutions that drive results and enhance your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center border ${getColorClasses(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon} size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Learn More</span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-primary group-hover:translate-x-1 transition-transform" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-headline font-bold text-text-primary mb-4">
              Ready to Transform Your Web Presence?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your project requirements and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Discuss Your Project</span>
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Eye" size={20} />
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;