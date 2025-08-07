import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2019,
      title: "The Beginning",
      description: "Founded in Bihar Sharif with a vision to bridge the digital gap for local businesses",
      icon: "Rocket",
      achievements: ["First 5 clients", "Local team of 3", "₹2L revenue"]
    },
    {
      year: 2020,
      title: "Digital Pivot",
      description: "Adapted to remote work and expanded services during the pandemic",
      icon: "Globe",
      achievements: ["Remote capabilities", "15+ projects", "Team expansion to 8"]
    },
    {
      year: 2021,
      title: "Service Expansion",
      description: "Added comprehensive digital marketing and app development services",
      icon: "TrendingUp",
      achievements: ["50+ clients", "New service lines", "₹25L revenue"]
    },
    {
      year: 2022,
      title: "Regional Recognition",
      description: "Became Bihar\'s leading digital transformation partner",
      icon: "Award",
      achievements: ["100+ projects", "Industry awards", "Team of 15"]
    },
    {
      year: 2023,
      title: "Innovation Hub",
      description: "Established as the go-to agency for cutting-edge digital solutions",
      icon: "Lightbulb",
      achievements: ["AI integration", "150+ clients", "₹1Cr+ revenue"]
    },
    {
      year: 2024,
      title: "Future Forward",
      description: "Leading Bihar\'s digital economy with world-class solutions",
      icon: "Zap",
      achievements: ["200+ projects", "Global standards", "Market leader"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Our Journey of Growth
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From a small startup in Bihar Sharif to becoming the region's leading digital transformation partner
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveYear(item.year)}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer ${
                    activeYear === item.year ? 'ring-2 ring-primary/20 scale-105' : ''
                  }`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name={item.icon} size={24} color="white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="text-lg font-semibold text-text-primary">{item.title}</div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} color="var(--color-conversion-accent)" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full z-10">
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    activeYear === item.year ? 'bg-secondary' : 'bg-primary'
                  }`}></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-12">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative mb-8">
                <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="bg-white rounded-lg p-4 shadow-brand ml-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name={item.icon} size={20} color="var(--color-primary)" />
                    <span className="font-bold text-primary">{item.year}</span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                  <div className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} color="var(--color-conversion-accent)" />
                        <span className="text-xs text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;