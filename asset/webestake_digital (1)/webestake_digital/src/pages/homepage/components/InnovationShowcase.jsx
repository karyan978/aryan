import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const InnovationShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const innovations = [
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Customer Support',
      description: 'Intelligent chatbots that understand context and provide personalized responses, reducing support costs by 60%.',
      technology: 'Machine Learning & NLP',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['24/7 Availability', 'Multi-language Support', 'Context Awareness', 'Human Handoff'],
      demoUrl: '#',
      status: 'Live Demo Available'
    },
    {
      id: 'ar-shopping',
      title: 'AR Shopping Experience',
      description: 'Augmented reality solutions that let customers visualize products in their space before purchasing.',
      technology: 'WebAR & 3D Modeling',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      features: ['Virtual Try-On', '3D Product Views', 'Space Visualization', 'Mobile Compatible'],
      demoUrl: '#',
      status: 'Beta Testing'
    },
    {
      id: 'blockchain-supply',
      title: 'Blockchain Supply Chain',
      description: 'Transparent and secure supply chain tracking for agricultural products from farm to consumer.',
      technology: 'Blockchain & IoT',
      image: 'https://images.pixabay.com/photo/2017/12/10/17/40/blockchain-3010123_960_720.jpg',
      features: ['Product Traceability', 'Quality Assurance', 'Smart Contracts', 'Real-time Tracking'],
      demoUrl: '#',
      status: 'Pilot Project'
    },
    {
      id: 'voice-commerce',
      title: 'Voice Commerce Platform',
      description: 'Voice-activated shopping experience optimized for regional languages and local dialects.',
      technology: 'Voice AI & Speech Recognition',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Hindi & Regional Languages', 'Voice Search', 'Order Placement', 'Payment Integration'],
      demoUrl: '#',
      status: 'Coming Soon'
    }
  ];

  const techStack = [
    { name: 'React/Next.js', icon: 'Code', color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', icon: 'Server', color: 'from-green-500 to-green-600' },
    { name: 'Python/AI', icon: 'Brain', color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud AWS', icon: 'Cloud', color: 'from-orange-500 to-orange-600' },
    { name: 'Mobile Apps', icon: 'Smartphone', color: 'from-pink-500 to-pink-600' },
    { name: 'Blockchain', icon: 'Shield', color: 'from-indigo-500 to-indigo-600' }
  ];

  const handleDemoPlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Innovation Lab</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            Cutting-Edge Technology Showcase
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our latest innovations and experimental projects that push the boundaries 
            of what's possible in digital transformation.
          </p>
        </div>

        {/* Innovation Demos */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                    <Icon name="Lightbulb" size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-primary">
                      {innovations[activeDemo].title}
                    </h3>
                    <p className="text-text-secondary">
                      {innovations[activeDemo].technology}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {innovations[activeDemo].description}
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 text-conversion-accent px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-conversion-accent rounded-full animate-pulse"></div>
                  <span>{innovations[activeDemo].status}</span>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  {innovations[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} color="var(--color-conversion-accent)" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    onClick={handleDemoPlay}
                    className="bg-accent hover:bg-accent/90 text-white shadow-brand cta-hover"
                    disabled={isPlaying}
                  >
                    <Icon name={isPlaying ? "Loader" : "Play"} size={20} className={`mr-2 ${isPlaying ? 'animate-spin' : ''}`} />
                    {isPlaying ? 'Loading Demo...' : 'Try Live Demo'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-brand"
                  >
                    <Link to="/contact-consultation">
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Discuss Implementation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                <Image
                  src={innovations[activeDemo].image}
                  alt={innovations[activeDemo].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleDemoPlay}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-brand-lg hover:bg-white hover:scale-110 transition-all duration-300"
                    disabled={isPlaying}
                  >
                    <Icon 
                      name={isPlaying ? "Loader" : "Play"} 
                      size={32} 
                      color="var(--color-primary)" 
                      className={isPlaying ? 'animate-spin' : ''}
                    />
                  </button>
                </div>
              </div>
              
              {/* Demo Navigation */}
              <div className="absolute -bottom-4 left-4 right-4">
                <div className="bg-white rounded-lg shadow-brand p-4">
                  <div className="flex space-x-2">
                    {innovations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveDemo(index)}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                          index === activeDemo 
                            ? 'bg-accent' :'bg-gray-200 hover:bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-text-secondary">
                      {activeDemo + 1} of {innovations.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            Our Technology Arsenal
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={tech.icon} size={20} color="white" />
                </div>
                <h4 className="font-semibold text-primary text-sm group-hover:text-secondary transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Ready to Innovate with Us?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's explore how cutting-edge technology can transform your business and 
              give you a competitive advantage in the digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white text-accent hover:bg-gray-100 shadow-brand cta-hover"
              >
                <Link to="/contact-consultation">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Start Innovation Project
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10 transition-brand"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Tech Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;