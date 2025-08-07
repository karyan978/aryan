import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompetitiveAnalysis = () => {
  const [activeComparison, setActiveComparison] = useState('services');

  const comparisonData = {
    services: {
      title: 'Service Offerings',
      webestake: [
        'Complete Digital Marketing Suite',
        'Local Bihar Market Expertise',
        'Custom Strategy Development',
        'Multi-Platform Management',
        'Advanced Analytics & Reporting',
        'WhatsApp Business Integration',
        'Video Content Creation',
        'Influencer Partnership Management'
      ],
      others: [
        'Basic Social Media Management',
        'Generic Templates',
        'Limited Platform Coverage',
        'Standard Reporting',
        'No Local Market Focus',
        'Additional Charges for Extras',
        'Limited Content Types',
        'No Influencer Network'
      ]
    },
    pricing: {
      title: 'Pricing & Value',
      webestake: [
        'Transparent Pricing (₹15K-₹65K)',
        'No Hidden Fees',
        'Flexible Payment Options',
        'ROI-Based Pricing Model',
        'Free Strategy Sessions',
        'No Long-term Contracts',
        'Money-back Guarantee',
        'Quarterly Payment Plans'
      ],
      others: [
        'Unclear Pricing Structure',
        'Hidden Setup Fees',
        'Rigid Payment Terms',
        'One-size-fits-all Pricing',
        'Paid Consultations',
        '12-month Lock-in Contracts',
        'No Guarantees',
        'Annual Payment Only'
      ]
    },
    support: {
      title: 'Support & Communication',
      webestake: [
        '24/7 WhatsApp Support',
        'Dedicated Account Manager',
        'Weekly Strategy Calls',
        'Real-time Campaign Monitoring',
        'Local Language Support',
        'Same-day Response Time',
        'Video Call Consultations',
        'Emergency Support Available'
      ],
      others: [
        'Email Support Only',
        'Shared Account Managers',
        'Monthly Check-ins',
        'Delayed Response Times',
        'English Only Support',
        '48-72 Hour Response',
        'Limited Consultation Time',
        'Business Hours Only'
      ]
    },
    results: {
      title: 'Track Record & Results',
      webestake: [
        '150+ Bihar Success Stories',
        'Average 245% ROI Increase',
        '85% Client Retention Rate',
        'Local Market Understanding',
        'Proven Case Studies',
        'Industry Recognition',
        'Client Testimonials',
        'Measurable Growth Metrics'
      ],
      others: [
        'Generic Success Claims',
        'Unclear ROI Metrics',
        'High Client Turnover',
        'No Local Focus',
        'Limited Case Studies',
        'Unverified Claims',
        'Few Testimonials',
        'Vague Performance Data'
      ]
    }
  };

  const whyChooseReasons = [
    {
      icon: 'MapPin',
      title: 'Local Market Expertise',
      description: 'Deep understanding of Bihar\'s business landscape, consumer behavior, and cultural nuances that drive better campaign performance.'
    },
    {
      icon: 'TrendingUp',
      title: 'Proven ROI Results',
      description: 'Average 245% ROI increase across 150+ local businesses with transparent reporting and measurable growth metrics.'
    },
    {
      icon: 'Users',
      title: 'Dedicated Team',
      description: 'Personal account managers who understand your business goals and provide strategic guidance beyond just execution.'
    },
    {
      icon: 'Clock',
      title: 'Rapid Response',
      description: '24/7 WhatsApp support with same-day response times and emergency support for time-sensitive campaigns.'
    },
    {
      icon: 'Shield',
      title: 'Risk-Free Partnership',
      description: 'No long-term contracts, money-back guarantee, and flexible payment options designed for growing businesses.'
    },
    {
      icon: 'Award',
      title: 'Industry Recognition',
      description: 'Bihar\'s #1 digital marketing agency with industry awards and certifications from Google, Facebook, and other platforms.'
    }
  ];

  const competitorComparison = [
    {
      name: 'Traditional Agencies',
      pricing: '₹50K-₹1L+',
      strengths: ['Established reputation', 'Large team'],
      weaknesses: ['High costs', 'Slow execution', 'Generic strategies', 'Poor local understanding'],
      rating: 2
    },
    {
      name: 'Freelancers',
      pricing: '₹5K-₹20K',
      strengths: ['Low cost', 'Personal attention'],
      weaknesses: ['Limited expertise', 'No scalability', 'Inconsistent quality', 'Single point of failure'],
      rating: 2
    },
    {
      name: 'National Chains',
      pricing: '₹30K-₹80K',
      strengths: ['Brand recognition', 'Standardized processes'],
      weaknesses: ['No local focus', 'Template approach', 'Poor support', 'Hidden fees'],
      rating: 3
    },
    {
      name: 'Webestake',
      pricing: '₹15K-₹65K',
      strengths: ['Local expertise', 'Proven ROI', 'Transparent pricing', 'Dedicated support', 'Flexible terms'],
      weaknesses: ['Focused on Bihar region'],
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust-builder/10 rounded-full mb-6">
            <Icon name="BarChart3" size={16} color="var(--color-trust-builder)" />
            <span className="text-sm font-medium text-trust-builder">Competitive Analysis</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            Why Choose Webestake Over
            <span className="block text-primary">Other Agencies?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another digital marketing agency. Here's an honest comparison of what sets us apart 
            from traditional agencies, freelancers, and national chains.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden mb-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {Object.entries(comparisonData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveComparison(key)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeComparison === key
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Webestake Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={20} color="white" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-gray-900">
                    Webestake Digital
                  </h3>
                  <span className="px-3 py-1 bg-conversion-accent text-white text-xs rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <div className="space-y-3">
                  {comparisonData[activeComparison].webestake.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} color="var(--color-conversion-accent)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Others Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={20} color="white" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-gray-900">
                    Other Agencies
                  </h3>
                </div>
                <div className="space-y-3">
                  {comparisonData[activeComparison].others.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="XCircle" size={16} color="var(--color-error)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Matrix */}
        <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-8 text-center">
              Agency Comparison Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Agency Type</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Pricing Range</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Strengths</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Weaknesses</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((competitor, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 ${competitor.name === 'Webestake' ? 'bg-primary/5' : ''}`}>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">{competitor.name}</span>
                          {competitor.name === 'Webestake' && (
                            <span className="px-2 py-1 bg-primary text-white text-xs rounded">YOU ARE HERE</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{competitor.pricing}</td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          {competitor.strengths.map((strength, sidx) => (
                            <div key={sidx} className="text-sm text-gray-600">• {strength}</div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          {competitor.weaknesses.map((weakness, widx) => (
                            <div key={widx} className="text-sm text-gray-600">• {weakness}</div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Icon
                              key={star}
                              name="Star"
                              size={16}
                              color={star <= competitor.rating ? 'var(--color-secondary)' : '#e5e7eb'}
                              fill={star <= competitor.rating ? 'var(--color-secondary)' : 'none'}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-headline font-bold text-gray-900 mb-12 text-center">
            6 Reasons Bihar Businesses Choose Webestake
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={reason.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-headline font-bold text-gray-900 mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-headline font-bold mb-4">
            Ready to Experience the Webestake Difference?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Book a free strategy session and see how we compare to your current agency or marketing efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book Free Comparison Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Download Comparison Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis;