import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyPhilosophy = () => {
  const philosophyPillars = [
    {
      icon: "Lightbulb",
      title: "Digital Empowerment",
      description: "We believe every business, regardless of size or location, deserves access to cutting-edge digital solutions that can transform their operations and growth potential.",
      visual: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Wrench",
      title: "Expert Craftsmanship",
      description: "Our approach combines technical excellence with artistic vision, ensuring every solution is not just functional but beautifully crafted and user-centric.",
      visual: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Heart",
      title: "Partnership Mindset",
      description: "We don't just deliver projects; we build lasting relationships. Your success is our success, and we're committed to growing together as trusted partners.",
      visual: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Listen & Understand",
      description: "We start by deeply understanding your business, challenges, and aspirations",
      icon: "Ear"
    },
    {
      step: "02",
      title: "Strategize & Plan",
      description: "Develop comprehensive digital strategies tailored to your unique needs",
      icon: "Target"
    },
    {
      step: "03",
      title: "Craft & Create",
      description: "Build solutions with meticulous attention to detail and user experience",
      icon: "Hammer"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy with confidence and provide ongoing support for continuous growth",
      icon: "Rocket"
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
            Our Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Digital empowerment through expert craftsmanship - this is more than our tagline, it's our commitment to every client we serve
          </p>
        </motion.div>

        {/* Philosophy Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {philosophyPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.visual}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={pillar.icon} size={24} color="white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{pillar.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-brand p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
              Our Craftsmanship Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every project follows our proven methodology that ensures exceptional results and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={step.icon} 
                      size={24} 
                      color="var(--color-primary)" 
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Line */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20"></div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <Icon name="Quote" size={48} color="white" className="mx-auto mb-6 opacity-50" />
            <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
              "We don't just build digital solutions; we craft digital experiences that transform businesses and empower communities. Every line of code, every design element, every strategy is infused with our commitment to excellence."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="User" size={24} color="white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Rajesh Kumar Singh</div>
                <div className="text-white/80 text-sm">Founder & CEO, Webestake</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyPhilosophy;