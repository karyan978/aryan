import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'bihar-bazaar',
      title: 'Bihar Bazaar - E-Commerce Transformation',
      client: 'Local Retail Consortium',
      industry: 'E-Commerce & Retail',
      challenge: `Traditional retailers in Bihar Sharif were losing customers to online giants. They needed a unified platform to compete digitally while maintaining their local market presence and customer relationships.`,
      solution: `We developed a comprehensive e-commerce app with multi-vendor support, local language integration, and region-specific features like cash-on-delivery and local pickup points.`,
      results: [
        { metric: 'Revenue Growth', value: '250%', description: 'Increase in monthly sales' },
        { metric: 'Customer Base', value: '25,000+', description: 'Active users within 6 months' },
        { metric: 'Vendor Adoption', value: '150+', description: 'Local businesses onboarded' },
        { metric: 'Order Fulfillment', value: '98%', description: 'Success rate' }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Payment Gateway'],
      timeline: '16 weeks',
      investment: '₹8,50,000',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      testimonial: {
        text: `Webestake transformed our traditional business into a digital powerhouse. The app not only increased our sales but also helped us reach customers we never thought possible.`,
        author: 'Rajesh Kumar',
        position: 'President, Bihar Retail Association'
      }
    },
    {
      id: 'vidya-sagar',
      title: 'Vidya Sagar - Educational Platform Revolution',
      client: 'Educational Institute Network',
      industry: 'Education & E-Learning',
      challenge: `Post-pandemic shift to digital learning created a need for a comprehensive educational platform that could serve students across Bihar with limited internet connectivity and diverse learning needs.`,
      solution: `We built an offline-capable learning app with video lectures, interactive quizzes, progress tracking, and multi-language support optimized for low-bandwidth environments.`,
      results: [
        { metric: 'Student Enrollment', value: '50,000+', description: 'Active learners' },
        { metric: 'Course Completion', value: '85%', description: 'Rate improvement' },
        { metric: 'Learning Hours', value: '2M+', description: 'Total hours logged' },
        { metric: 'Teacher Adoption', value: '500+', description: 'Educators using platform' }
      ],
      technologies: ['Flutter', 'Firebase', 'Video Streaming', 'Offline Storage'],
      timeline: '20 weeks',
      investment: '₹12,00,000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      testimonial: {
        text: `The app revolutionized how we deliver education. Students can now learn at their own pace, even without constant internet access. It's been a game-changer for rural education.`,
        author: 'Dr. Priya Sharma',position: 'Director, Vidya Sagar Institute'
      }
    },
    {
      id: 'swift-delivery',title: 'Swift Delivery - Logistics Optimization',client: 'Regional Logistics Company',industry: 'Logistics & Transportation',
      challenge: `Manual delivery management was causing delays, poor customer experience, and operational inefficiencies. The company needed real-time tracking and route optimization for their growing business.`,
      solution: `We developed a comprehensive logistics app with real-time GPS tracking, route optimization, driver management, and customer communication features tailored for local delivery challenges.`,
      results: [
        { metric: 'Delivery Time', value: '40%', description: 'Reduction in average delivery time' },
        { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Average rating' },
        { metric: 'Operational Cost', value: '30%', description: 'Reduction in logistics costs' },
        { metric: 'Daily Deliveries', value: '500+', description: 'Packages handled daily' }
      ],
      technologies: ['React Native', 'Google Maps API', 'Real-time Database', 'Push Notifications'],
      timeline: '14 weeks',investment: '₹6,75,000',image: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&h=400&fit=crop',
      testimonial: {
        text: `Swift Delivery app transformed our operations completely. We can now handle 3x more deliveries with the same team, and our customers love the real-time tracking feature.`,
        author: 'Amit Singh',position: 'CEO, Swift Logistics'
      }
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Real Success Stories from Bihar & Beyond
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover how our mobile app solutions have transformed businesses, 
            driving measurable growth and operational excellence.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <Button
              key={study.id}
              variant={activeCase === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCase(index)}
              className={`transition-all duration-300 ${
                activeCase === index 
                  ? 'bg-primary text-white shadow-brand' 
                  : 'hover:bg-primary/5'
              }`}
            >
              {study.title.split(' - ')[0]}
            </Button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {caseStudies[activeCase].industry}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-headline font-bold mb-2">
                  {caseStudies[activeCase].title}
                </h3>
                <p className="text-white/90 text-lg">
                  Client: {caseStudies[activeCase].client}
                </p>
              </div>
              
              <div className="text-right">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">{caseStudies[activeCase].timeline}</div>
                    <div className="text-sm text-white/80">Development Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{caseStudies[activeCase].investment}</div>
                    <div className="text-sm text-white/80">Investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="AlertCircle" size={20} className="mr-2" />
                    The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="mr-2" />
                    Our Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {caseStudies[activeCase].solution}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results & Visual */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Measurable Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm font-medium text-text-primary mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* App Preview */}
                <div className="bg-muted rounded-lg p-6">
                  <Image
                    src={caseStudies[activeCase].image}
                    alt={`${caseStudies[activeCase].title} preview`}
                    className="w-full h-48 object-cover rounded-lg shadow-brand"
                  />
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <Icon name="Quote" size={32} color="var(--color-primary)" className="flex-shrink-0 mt-2" />
                <div>
                  <p className="text-text-primary text-lg leading-relaxed mb-4 italic">
                    "{caseStudies[activeCase].testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        {caseStudies[activeCase].testimonial.author}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {caseStudies[activeCase].testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-brand cta-hover"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Complete Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCaseStudies;