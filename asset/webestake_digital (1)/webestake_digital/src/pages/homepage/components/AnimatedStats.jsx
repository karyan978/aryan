import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Icon from '../../../components/AppIcon';
import { useFadeInUp, useStaggerAnimation } from '../../../hooks/useGSAP';

const AnimatedStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const sectionRef = useFadeInUp(0, 1);
  const statsRef = useStaggerAnimation('.stat-item', 0.2);

  const stats = [
    {
      id: 1,
      number: 150,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful digital solutions across Bihar and India',
      icon: 'CheckCircle',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 2,
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback and project reviews',
      icon: 'Heart',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      id: 3,
      number: 120,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses transformed with digital solutions',
      icon: 'Users',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 4,
      number: 5,
      suffix: '+',
      label: 'Years Experience',
      description: 'Dedicated to digital transformation excellence',
      icon: 'Calendar',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 5,
      number: 200,
      suffix: '%',
      label: 'Average ROI',
      description: 'Return on investment for our digital solutions',
      icon: 'TrendingUp',
      color: 'text-primary',
      bgColor: 'bg-primary/5'
    },
    {
      id: 6,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and maintenance',
      icon: 'Shield',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5'
    }
  ];

  const achievements = [
    {
      title: 'Bihar Digital Leader',
      description: 'Recognized as leading digital solutions provider in Bihar',
      icon: 'Award'
    },
    {
      title: 'Client Choice Award',
      description: '2024 Best Digital Agency for Local Businesses',
      icon: 'Star'
    },
    {
      title: 'Innovation Excellence',
      description: 'Innovative approach to digital transformation',
      icon: 'Lightbulb'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="BarChart3" size={16} />
            <span>Our Impact</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            Numbers That Tell Our Story
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence is reflected in these metrics. Each number represents 
            real businesses transformed, goals achieved, and digital dreams realized.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-item bg-white dark:bg-gray-800 rounded-xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={stat.icon} size={24} className={stat.color} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      {inView && (
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2.5}
                          separator=","
                        />
                      )}
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-text-secondary">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-brand">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
              Recognition & Achievements
            </h3>
            <p className="text-text-secondary">
              Our excellence has been recognized by clients and industry leaders alike
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon 
                    name={achievement.icon} 
                    size={24} 
                    color="var(--color-primary)" 
                    className="group-hover:text-white transition-colors"
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-text-secondary">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Growth */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-brand">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary">Business Growth</h4>
                <span className="text-2xl font-bold text-conversion-accent">+250%</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '85%' } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="bg-conversion-accent h-3 rounded-full"
                ></motion.div>
              </div>
              
              <p className="text-sm text-text-secondary">
                Average business growth achieved by our clients within 12 months
              </p>
            </div>

            {/* Client Retention */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-brand">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary">Client Retention</h4>
                <span className="text-2xl font-bold text-green-500">95%</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '95%' } : {}}
                  transition={{ duration: 2, delay: 0.7 }}
                  className="bg-green-500 h-3 rounded-full"
                ></motion.div>
              </div>
              
              <p className="text-sm text-text-secondary">
                Clients who continue working with us for long-term growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;