import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyValues = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: "Zap",
      title: "Transformation",
      subtitle: "Driving Digital Change",
      description: "We believe in the power of digital transformation to revolutionize businesses, streamline operations, and unlock new growth opportunities for our clients.",
      details: [
        "Modernizing legacy systems",
        "Implementing cutting-edge technologies",
        "Optimizing business processes",
        "Creating scalable solutions"
      ],
      color: "from-primary to-primary/80"
    },
    {
      icon: "Shield",
      title: "Trust",
      subtitle: "Building Lasting Relationships",
      description: "Trust is the foundation of every successful partnership. We earn it through transparency, reliability, and consistent delivery of exceptional results.",
      details: [
        "Transparent communication",
        "Reliable project delivery",
        "Data security & privacy",
        "Long-term partnerships"
      ],
      color: "from-conversion-accent to-conversion-accent/80"
    },
    {
      icon: "Award",
      title: "Excellence",
      subtitle: "Pursuing Technological Mastery",
      description: "We strive for excellence in every aspect of our work, from code quality to user experience, ensuring our solutions meet the highest standards.",
      details: [
        "Quality-first approach",
        "Continuous learning",
        "Best practices implementation",
        "Innovation-driven solutions"
      ],
      color: "from-secondary to-secondary/80"
    },
    {
      icon: "Users",
      title: "Community",
      subtitle: "Empowering Local Growth",
      description: "We\'re committed to growing Bihar\'s digital ecosystem by nurturing local talent and helping businesses thrive in the digital economy.",
      details: [
        "Local talent development",
        "Community engagement",
        "Knowledge sharing",
        "Regional economic growth"
      ],
      color: "from-trust-builder to-trust-builder/80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and define our commitment to clients and community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Values List */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeValue === index
                    ? 'bg-gradient-to-r ' + value.color + ' text-white shadow-brand-lg scale-105'
                    : 'bg-muted/30 hover:bg-muted/50'
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeValue === index ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name={value.icon} 
                      size={24} 
                      color={activeValue === index ? 'white' : 'var(--color-primary)'} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-1 ${
                      activeValue === index ? 'text-white' : 'text-primary'
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm font-medium mb-2 ${
                      activeValue === index ? 'text-white/80' : 'text-secondary'
                    }`}>
                      {value.subtitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      activeValue === index ? 'text-white/90' : 'text-text-secondary'
                    }`}>
                      {value.description}
                    </p>
                  </div>

                  <div className={`transition-transform duration-300 ${
                    activeValue === index ? 'rotate-90' : ''
                  }`}>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      color={activeValue === index ? 'white' : 'var(--color-text-secondary)'} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Value Details */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-brand-lg p-8"
          >
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${values[activeValue].color} flex items-center justify-center mx-auto mb-4`}>
                <Icon name={values[activeValue].icon} size={32} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {values[activeValue].title}
              </h3>
              <p className="text-secondary font-medium">
                {values[activeValue].subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary mb-4">How we live this value:</h4>
              {values[activeValue].details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${values[activeValue].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <span className="text-text-secondary">{detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 flex space-x-2">
              {values.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    idx === activeValue ? 'bg-primary' : 'bg-muted'
                  }`}
                ></div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Values in Action</h3>
            <p className="text-text-secondary">
              See how our values translate into real results for our clients and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-text-secondary">Businesses Transformed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-conversion-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-text-secondary">Industry Awards</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust-builder rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-text-secondary">Local Jobs Created</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyValues;