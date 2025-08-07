import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const BiharToGlobal = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      businessName: "Patna Sweets & Snacks",
      location: "Bihar Sharif",
      industry: "Food & Beverage",
      challenge: "Limited to local customers, no online presence",
      solution: "E-commerce platform + Digital marketing",
      results: {
        before: { revenue: "₹2L/month", reach: "Local only", orders: "Walk-in only" },
        after: { revenue: "₹8L/month", reach: "Pan-India", orders: "70% Online" }
      },
      growth: "300% Revenue Growth",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      testimonial: "Webestake transformed our traditional sweet shop into a digital powerhouse. We now serve customers across India!"
    },
    {
      id: 2,
      businessName: "Bihar Handicrafts Co.",
      location: "Nalanda",
      industry: "Handicrafts & Textiles",
      challenge: "Struggling to reach global markets",
      solution: "Multi-language website + International SEO",
      results: {
        before: { revenue: "₹5L/month", reach: "Regional", orders: "Offline only" },
        after: { revenue: "₹15L/month", reach: "Global", orders: "80% Online" }
      },
      growth: "200% Revenue Growth",
      image: "https://images.pixabay.com/photo/2017/08/02/14/26/handicraft-2571896_960_720.jpg",
      testimonial: "Our traditional crafts now reach customers in USA, UK, and Australia. Digital transformation changed everything!"
    },
    {
      id: 3,
      businessName: "EduTech Bihar",
      location: "Rajgir",
      industry: "Education Technology",
      challenge: "Limited student engagement and reach",
      solution: "Learning Management System + Mobile App",
      results: {
        before: { revenue: "₹3L/month", reach: "500 students", orders: "Offline classes" },
        after: { revenue: "₹12L/month", reach: "5000+ students", orders: "Hybrid model" }
      },
      growth: "900% Student Growth",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "From a small coaching center to serving thousands of students online. Technology made it possible!"
    }
  ];

  const localImpactStats = [
    { label: "Local Businesses Transformed", value: "50+", icon: "Building" },
    { label: "Jobs Created", value: "200+", icon: "Users" },
    { label: "Digital Revenue Generated", value: "₹5Cr+", icon: "TrendingUp" },
    { label: "Bihar Success Stories", value: "25+", icon: "Award" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 text-conversion-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MapPin" size={16} />
            <span>Local Impact, Global Reach</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            From Bihar to Global Excellence
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Proudly serving Bihar Sharif and surrounding regions, we've helped local businesses 
            achieve global success through strategic digital transformation.
          </p>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-conversion-accent to-conversion-accent/80 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-primary">
                      {successStories[activeStory].businessName}
                    </h3>
                    <p className="text-text-secondary">
                      {successStories[activeStory].location} • {successStories[activeStory].industry}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-brand border border-gray-100">
                  <h4 className="font-semibold text-primary mb-3">The Challenge</h4>
                  <p className="text-text-secondary mb-4">{successStories[activeStory].challenge}</p>
                  
                  <h4 className="font-semibold text-primary mb-3">Our Solution</h4>
                  <p className="text-text-secondary mb-4">{successStories[activeStory].solution}</p>
                  
                  <div className="bg-conversion-accent/5 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-conversion-accent mb-2">
                        {successStories[activeStory].growth}
                      </div>
                      <p className="text-sm text-text-secondary">Within 12 months</p>
                    </div>
                  </div>
                </div>

                {/* Before/After Metrics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-600 mb-4 flex items-center">
                      <Icon name="TrendingDown" size={16} className="mr-2" />
                      Before
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Revenue:</span>
                        <span className="font-medium">{successStories[activeStory].results.before.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Reach:</span>
                        <span className="font-medium">{successStories[activeStory].results.before.reach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Orders:</span>
                        <span className="font-medium">{successStories[activeStory].results.before.orders}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-conversion-accent/5 rounded-xl p-6 border border-conversion-accent/20">
                    <h4 className="font-semibold text-conversion-accent mb-4 flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2" />
                      After
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Revenue:</span>
                        <span className="font-bold text-conversion-accent">{successStories[activeStory].results.after.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Reach:</span>
                        <span className="font-bold text-conversion-accent">{successStories[activeStory].results.after.reach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Orders:</span>
                        <span className="font-bold text-conversion-accent">{successStories[activeStory].results.after.orders}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <Icon name="Quote" size={24} color="var(--color-primary)" className="mb-3" />
                  <p className="text-text-primary italic leading-relaxed">
                    "{successStories[activeStory].testimonial}"
                  </p>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                <Image
                  src={successStories[activeStory].image}
                  alt={successStories[activeStory].businessName}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              
              {/* Story Navigation */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex space-x-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStory(index)}
                      className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                        index === activeStory 
                          ? 'bg-white' :'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Impact Stats */}
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 border border-gray-100 mb-12">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            Our Impact on Bihar's Digital Economy
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {localImpactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join the growing community of Bihar businesses that have transformed their operations 
              and achieved remarkable growth through digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-gray-100 shadow-brand cta-hover"
              >
                <Link to="/contact-consultation">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Start Your Transformation
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10 transition-brand"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiharToGlobal;