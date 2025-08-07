import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LocalImpact = () => {
  const impactAreas = [
    {
      icon: "Building",
      title: "Local Business Growth",
      description: "Helping traditional Bihar businesses embrace digital transformation",
      stats: "150+ Local Businesses Digitized",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "GraduationCap",
      title: "Skill Development",
      description: "Training local youth in modern digital skills and technologies",
      stats: "200+ Students Trained",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Briefcase",
      title: "Employment Creation",
      description: "Creating quality tech jobs and opportunities in Bihar Sharif",
      stats: "50+ Jobs Created",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const communityProjects = [
    {
      title: "Bihar Digital Literacy Program",
      description: "Free digital literacy workshops for local entrepreneurs and small business owners",
      impact: "500+ participants trained",
      status: "Ongoing",
      icon: "BookOpen"
    },
    {
      title: "Local E-commerce Initiative",
      description: "Helping traditional retailers establish online presence and reach wider markets",
      impact: "75+ stores online",
      status: "Completed",
      icon: "ShoppingCart"
    },
    {
      title: "Student Internship Program",
      description: "Providing hands-on experience to computer science students from local colleges",
      impact: "30+ interns mentored",
      status: "Ongoing",
      icon: "Users"
    },
    {
      title: "Digital Bihar Summit",
      description: "Annual conference bringing together local businesses and tech leaders",
      impact: "1000+ attendees",
      status: "Annual",
      icon: "Calendar"
    }
  ];

  const economicImpact = [
    {
      metric: "₹2.5 Cr+",
      label: "Revenue Generated for Clients",
      icon: "TrendingUp"
    },
    {
      metric: "40%",
      label: "Average Business Growth",
      icon: "BarChart"
    },
    {
      metric: "85%",
      label: "Client Retention Rate",
      icon: "Heart"
    },
    {
      metric: "24/7",
      label: "Local Support Available",
      icon: "Clock"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Our Local Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Contributing to Bihar's digital economy and empowering our community through technology, education, and opportunity creation
          </p>
        </motion.div>

        {/* Impact Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <Icon name={area.icon} size={24} color="white" />
                  </div>
                  <div className="text-white font-semibold text-sm">{area.stats}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
                <p className="text-text-secondary leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-brand p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
              Community Projects
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our ongoing initiatives to strengthen Bihar's digital ecosystem and create opportunities for local growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-brand transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={project.icon} size={24} color="var(--color-primary)" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary">{project.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Ongoing' ?'bg-conversion-accent/10 text-conversion-accent'
                          : project.status === 'Completed' ?'bg-primary/10 text-primary' :'bg-secondary/10 text-secondary'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Icon name="Target" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-sm font-medium text-conversion-accent">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Economic Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold mb-4">
              Economic Impact
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Measurable contributions to Bihar's digital economy and local business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {economicImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={24} color="white" />
                </div>
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-white/80 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-brand p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join Bihar's Digital Revolution
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Be part of the growing digital ecosystem in Bihar. Whether you're a business looking to transform or a student seeking opportunities, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Building" size={20} />
                <span>For Businesses</span>
              </button>
              <button className="px-6 py-3 bg-conversion-accent text-white rounded-lg font-medium hover:bg-conversion-accent/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="GraduationCap" size={20} />
                <span>For Students</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalImpact;