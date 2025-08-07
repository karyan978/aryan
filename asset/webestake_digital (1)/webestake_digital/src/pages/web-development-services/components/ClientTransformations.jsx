import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTransformations = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "Bihar Handicrafts Co.",
      industry: "E-commerce",
      location: "Bihar Sharif",
      challenge: "Traditional handicraft business struggling with online presence and limited reach beyond local markets.",
      solution: "Complete e-commerce platform with inventory management, payment gateway integration, and mobile-responsive design.",
      results: {
        revenue: "+340%",
        traffic: "+280%",
        conversion: "+150%",
        orders: "+420%"
      },
      beforeImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      testimonial: "Webestake transformed our traditional business into a thriving online enterprise. Our handicrafts now reach customers across India!",
      clientName: "Rajesh Kumar",
      clientRole: "Owner",
      timeline: "3 months",
      investment: "₹2,50,000"
    },
    {
      id: 2,
      client: "Nalanda Education Hub",
      industry: "Education",
      location: "Nalanda",
      challenge: "Educational institute needed modern website for online course delivery and student management.",
      solution: "Learning management system with course delivery, student portal, payment integration, and progress tracking.",
      results: {
        students: "+500%",
        courses: "+200%",
        retention: "+180%",
        satisfaction: "+95%"
      },
      beforeImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      testimonial: "The platform revolutionized our teaching methods. Students love the interactive features and we've expanded our reach significantly.",
      clientName: "Dr. Priya Sharma",
      clientRole: "Director",
      timeline: "4 months",
      investment: "₹3,75,000"
    },
    {
      id: 3,
      client: "Green Valley Agro",
      industry: "Agriculture",
      location: "Patna",
      challenge: "Agricultural business needed digital platform to connect directly with farmers and buyers.",
      solution: "Multi-vendor marketplace with farmer registration, product listing, order management, and logistics integration.",
      results: {
        farmers: "+300%",
        sales: "+250%",
        efficiency: "+200%",
        reach: "+400%"
      },
      beforeImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
      testimonial: "Our digital marketplace has connected hundreds of farmers with buyers. The platform handles everything seamlessly.",
      clientName: "Amit Singh",
      clientRole: "CEO",
      timeline: "5 months",
      investment: "₹4,50,000"
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="TrendingUp" size={20} color="var(--color-conversion-accent)" />
            <span className="text-conversion-accent font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Client Transformations
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped Bihar businesses transform their digital presence and achieve remarkable growth through our web development solutions.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-brand">
            <div className="flex space-x-2">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCase === index
                      ? 'bg-primary text-white shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {study.client}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          {/* Header Info */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  {currentCase.client}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} />
                    <span>{currentCase.industry}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>{currentCase.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{currentCase.timeline} project</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-4xl font-bold mb-2">{currentCase.investment}</div>
                <div className="text-white/80">Total Investment</div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-headline font-bold text-text-primary mb-4 flex items-center">
                  <Icon name="AlertCircle" size={24} className="mr-2 text-error" />
                  Challenge
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {currentCase.challenge}
                </p>
              </div>
              
              <div>
                <h4 className="text-2xl font-headline font-bold text-text-primary mb-4 flex items-center">
                  <Icon name="CheckCircle" size={24} className="mr-2 text-success" />
                  Solution
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>
            </div>

            {/* Before & After */}
            <div className="mb-12">
              <h4 className="text-2xl font-headline font-bold text-text-primary mb-8 text-center">
                Before & After Transformation
              </h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="relative mb-4">
                    <Image
                      src={currentCase.beforeImage}
                      alt={`${currentCase.client} before transformation`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-error text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    Traditional approach with limited digital presence
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="relative mb-4">
                    <Image
                      src={currentCase.afterImage}
                      alt={`${currentCase.client} after transformation`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    Modern, responsive platform driving growth
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h4 className="text-2xl font-headline font-bold text-text-primary mb-8 text-center">
                Measurable Results
              </h4>
              
              <div className="grid md:grid-cols-4 gap-6">
                {Object.entries(currentCase.results).map(([key, value], index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                    <div className="text-sm text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Icon name="Quote" size={48} className="text-primary/20 mx-auto mb-6" />
              <blockquote className="text-xl text-text-primary mb-6 italic leading-relaxed">
                "{currentCase.testimonial}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} color="var(--color-primary)" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-text-primary">{currentCase.clientName}</div>
                  <div className="text-sm text-text-secondary">{currentCase.clientRole}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-headline font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our success stories and see how we can help your business achieve similar remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Download Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTransformations;