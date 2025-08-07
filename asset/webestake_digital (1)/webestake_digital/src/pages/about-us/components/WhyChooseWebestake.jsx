import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const WhyChooseWebestake = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const advantages = [
    {
      icon: "MapPin",
      title: "Local Presence, Global Standards",
      description: "Based in Bihar Sharif with deep understanding of local market needs, yet delivering solutions that meet international quality standards.",
      benefits: [
        "Face-to-face consultations available",
        "Understanding of local business culture",
        "Regional language support",
        "Quick response times"
      ],
      color: "from-primary to-primary/80"
    },
    {
      icon: "DollarSign",
      title: "Cost-Effective Solutions",
      description: "Premium quality services at competitive prices, offering better value than metro-based agencies without compromising on quality.",
      benefits: [
        "30-40% cost savings vs metro agencies",
        "Transparent pricing structure",
        "No hidden charges",
        "Flexible payment options"
      ],
      color: "from-conversion-accent to-conversion-accent/80"
    },
    {
      icon: "Users",
      title: "Dedicated Team Approach",
      description: "Each project gets a dedicated team that understands your business inside out, ensuring consistency and personalized attention.",
      benefits: [
        "Dedicated project manager",
        "Direct access to development team",
        "Regular progress updates",
        "Long-term partnership focus"
      ],
      color: "from-secondary to-secondary/80"
    },
    {
      icon: "Zap",
      title: "Rapid Delivery & Agility",
      description: "Streamlined processes and local coordination enable faster project delivery without compromising quality or attention to detail.",
      benefits: [
        "Faster project turnaround",
        "Agile development methodology",
        "Quick iteration cycles",
        "Responsive to changes"
      ],
      color: "from-trust-builder to-trust-builder/80"
    }
  ];

  const comparisonData = [
    {
      feature: "Project Cost",
      webestake: "30-40% Lower",
      competitors: "Premium Pricing",
      advantage: true
    },
    {
      feature: "Response Time",
      webestake: "< 2 Hours",
      competitors: "24-48 Hours",
      advantage: true
    },
    {
      feature: "Local Support",
      webestake: "On-site Available",
      competitors: "Remote Only",
      advantage: true
    },
    {
      feature: "Team Dedication",
      webestake: "Dedicated Team",
      competitors: "Shared Resources",
      advantage: true
    },
    {
      feature: "Cultural Understanding",
      webestake: "Deep Local Knowledge",
      competitors: "Generic Approach",
      advantage: true
    },
    {
      feature: "Post-Launch Support",
      webestake: "24/7 Local Support",
      competitors: "Limited Hours",
      advantage: true
    }
  ];

  const clientTestimonials = [
    {
      name: "Rajesh Gupta",
      company: "Gupta Textiles",
      location: "Bihar Sharif",
      testimonial: "Webestake transformed our traditional textile business into a modern e-commerce success. Their local understanding combined with technical expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Priya Sharma",
      company: "Sharma Enterprises",
      location: "Patna",
      testimonial: "The cost savings were significant, but what impressed us most was the quality and personal attention. They truly care about our success.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Amit Kumar",
      company: "Kumar Foods",
      location: "Nalanda",
      testimonial: "Working with Webestake feels like having an extended team. They understand our business and deliver solutions that actually work for us.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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
            Why Choose Webestake?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the unique advantages that make us Bihar's preferred digital transformation partner
          </p>
        </motion.div>

        {/* Key Advantages */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Advantages List */}
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeAdvantage === index
                    ? 'bg-gradient-to-r ' + advantage.color + ' text-white shadow-brand-lg scale-105'
                    : 'bg-white hover:shadow-brand'
                }`}
                onClick={() => setActiveAdvantage(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeAdvantage === index ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name={advantage.icon} 
                      size={24} 
                      color={activeAdvantage === index ? 'white' : 'var(--color-primary)'} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeAdvantage === index ? 'text-white' : 'text-primary'
                    }`}>
                      {advantage.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeAdvantage === index ? 'text-white/90' : 'text-text-secondary'
                    }`}>
                      {advantage.description}
                    </p>
                  </div>

                  <div className={`transition-transform duration-300 ${
                    activeAdvantage === index ? 'rotate-90' : ''
                  }`}>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      color={activeAdvantage === index ? 'white' : 'var(--color-text-secondary)'} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Advantage Details */}
          <motion.div
            key={activeAdvantage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-brand-lg p-8"
          >
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${advantages[activeAdvantage].color} flex items-center justify-center mx-auto mb-4`}>
                <Icon name={advantages[activeAdvantage].icon} size={32} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {advantages[activeAdvantage].title}
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary mb-4">Key Benefits:</h4>
              {advantages[activeAdvantage].benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${advantages[activeAdvantage].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <span className="text-text-secondary">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-brand p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Webestake vs. Competitors
            </h3>
            <p className="text-text-secondary">
              See how we stack up against other digital agencies
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-primary">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary">Webestake</th>
                  <th className="text-center py-4 px-6 font-semibold text-text-secondary">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-muted/20 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-medium text-text-primary">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="CheckCircle" size={16} color="var(--color-conversion-accent)" />
                        <span className="font-medium text-conversion-accent">{item.webestake}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="XCircle" size={16} color="var(--color-error)" />
                        <span className="text-text-secondary">{item.competitors}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              What Our Clients Say
            </h3>
            <p className="text-text-secondary">
              Real feedback from businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} color="var(--color-secondary)" />
                  ))}
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.company}</div>
                    <div className="text-xs text-text-secondary flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience the Webestake Advantage?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join 200+ businesses that have chosen Webestake for their digital transformation journey. 
            Let's discuss how we can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 shadow-brand-lg"
            >
              <Link to="/contact-consultation">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Free Consultation
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              iconName="Phone"
              iconPosition="left"
            >
              Call Now: +91 98765 43210
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseWebestake;