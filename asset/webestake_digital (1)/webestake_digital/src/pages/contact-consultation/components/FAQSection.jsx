import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How long does the free consultation take?",
      answer: "Our free consultation typically takes 30-60 minutes, depending on your project complexity. We structure it to understand your needs, analyze your current situation, and provide actionable recommendations. There's no rush - we take the time needed to give you valuable insights."
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Come prepared with information about your business goals, target audience, current digital presence (if any), budget range, and timeline expectations. If you have existing websites, apps, or marketing materials, having access to them during the call would be helpful. Don't worry if you don't have everything - we'll guide you through the process."
    },
    {
      question: "Is the consultation really free with no obligations?",
      answer: "Absolutely! Our consultation is 100% free with no strings attached. We believe in providing value upfront. You're under no obligation to work with us after the consultation. Our goal is to help you understand your digital opportunities, whether you choose to work with us or not."
    },
    {
      question: "Can we meet in person or is it only online?",
      answer: "We offer both options! You can visit our office in Bihar Sharif, we can visit your location (within reasonable distance), or we can conduct the consultation via video call. Choose whatever is most convenient for you. In-person meetings are great for detailed discussions and seeing our work environment."
    },
    {
      question: "What happens after the consultation?",
      answer: "After our consultation, we'll send you a detailed summary of our discussion, recommended solutions, and a customized proposal if you're interested in moving forward. There's no pressure - take your time to review everything. We're here to answer any follow-up questions you might have."
    },
    {
      question: "Do you work with businesses outside Bihar Sharif?",
      answer: "Yes! While we're based in Bihar Sharif, we work with clients across Bihar, India, and even internationally. We have experience working remotely and can manage projects effectively regardless of location. Our local presence gives us unique insights into the regional market."
    },
    {
      question: "What if I'm not sure what services I need?",
      answer: "That's perfectly fine! Many of our clients come to us with a general idea of wanting to 'go digital' but aren't sure about the specifics. Our consultation is designed to help you identify the right solutions for your business goals and budget. We'll guide you through the options."
    },
    {
      question: "How quickly can you start working on my project?",
      answer: "Project start times vary depending on our current workload and your project complexity. Typically, we can begin new projects within 1-2 weeks of contract signing. Rush projects can sometimes be accommodated with priority scheduling. We'll discuss timelines during your consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We believe in long-term partnerships. We offer various support and maintenance packages to keep your digital assets running smoothly. This includes updates, security monitoring, performance optimization, and technical support. We'll discuss support options during your consultation."
    },
    {
      question: "What makes Webestake different from other agencies?",
      answer: "We combine global digital expertise with deep local market understanding. Being based in Bihar Sharif, we understand the unique challenges and opportunities of businesses in our region. We focus on practical, results-driven solutions rather than just fancy designs. Our transparent pricing and ongoing support set us apart."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-primary font-medium">Common Questions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-4">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get answers to the most common questions about our consultation process, 
            services, and how we can help your business grow digitally.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-brand border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    color="var(--color-primary)" 
                  />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} color="var(--color-primary)" />
            </div>
            
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Reach out to us directly and we'll get back to you within 2 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/919876543210?text=Hi, I have some questions about your services', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-brand shadow-brand"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Ask on WhatsApp
              </button>
              <button
                onClick={() => window.open('mailto:hello@webestake.com?subject=Questions about your services', '_self')}
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-primary/5 transition-brand border border-primary"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;