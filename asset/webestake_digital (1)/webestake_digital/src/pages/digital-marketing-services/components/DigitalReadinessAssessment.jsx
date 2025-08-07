import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DigitalReadinessAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: ''
  });

  const questions = [
    {
      id: 'online_presence',
      question: 'What best describes your current online presence?',
      type: 'single',
      options: [
        { value: 'none', label: 'No website or social media', score: 0 },
        { value: 'basic', label: 'Basic website or social media page', score: 2 },
        { value: 'moderate', label: 'Website + active social media', score: 4 },
        { value: 'advanced', label: 'Professional website + multiple platforms', score: 6 }
      ]
    },
    {
      id: 'digital_marketing',
      question: 'Which digital marketing activities are you currently doing?',
      type: 'multiple',
      options: [
        { value: 'social_media', label: 'Social Media Marketing', score: 1 },
        { value: 'google_ads', label: 'Google Ads', score: 2 },
        { value: 'seo', label: 'Search Engine Optimization', score: 2 },
        { value: 'email', label: 'Email Marketing', score: 1 },
        { value: 'content', label: 'Content Marketing', score: 1 },
        { value: 'none', label: 'None of the above', score: 0 }
      ]
    },
    {
      id: 'customer_acquisition',
      question: 'How do most of your customers find you?',
      type: 'single',
      options: [
        { value: 'word_of_mouth', label: 'Word of mouth/referrals', score: 1 },
        { value: 'local_ads', label: 'Local newspaper/radio ads', score: 2 },
        { value: 'online_search', label: 'Online search (Google)', score: 4 },
        { value: 'social_media', label: 'Social media platforms', score: 3 }
      ]
    },
    {
      id: 'online_sales',
      question: 'What percentage of your sales come from online channels?',
      type: 'single',
      options: [
        { value: 'none', label: '0% - All offline sales', score: 0 },
        { value: 'low', label: '1-25% - Minimal online sales', score: 2 },
        { value: 'moderate', label: '26-50% - Balanced approach', score: 4 },
        { value: 'high', label: '51%+ - Primarily online', score: 6 }
      ]
    },
    {
      id: 'competition',
      question: 'How do your competitors compare in digital presence?',
      type: 'single',
      options: [
        { value: 'behind', label: 'We\'re ahead of most competitors', score: 6 },
        { value: 'equal', label: 'We\'re about the same', score: 3 },
        { value: 'ahead', label: 'Competitors are ahead of us', score: 1 },
        { value: 'unknown', label: 'I\'m not sure', score: 0 }
      ]
    },
    {
      id: 'budget',
      question: 'What\'s your monthly budget for digital marketing?',
      type: 'single',
      options: [
        { value: 'none', label: '₹0 - No current budget', score: 0 },
        { value: 'low', label: '₹5,000 - ₹15,000', score: 2 },
        { value: 'moderate', label: '₹15,000 - ₹50,000', score: 4 },
        { value: 'high', label: '₹50,000+', score: 6 }
      ]
    }
  ];

  const handleAnswerChange = (questionId, value, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(v => v !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (question.type === 'multiple' && Array.isArray(answer)) {
        answer.forEach(value => {
          const option = question.options.find(opt => opt.value === value);
          if (option) totalScore += option.score;
        });
      } else if (question.type === 'single' && answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) totalScore += option.score;
      }
    });
    return totalScore;
  };

  const getReadinessLevel = (score) => {
    if (score <= 8) return { level: 'Beginner', color: 'text-error', bg: 'bg-error/10' };
    if (score <= 16) return { level: 'Developing', color: 'text-warning', bg: 'bg-warning/10' };
    if (score <= 24) return { level: 'Intermediate', color: 'text-secondary', bg: 'bg-secondary/10' };
    return { level: 'Advanced', color: 'text-conversion-accent', bg: 'bg-conversion-accent/10' };
  };

  const getRecommendations = (score) => {
    if (score <= 8) {
      return [
        'Start with a professional website and Google My Business listing',
        'Create social media profiles on Facebook and Instagram',
        'Implement basic SEO for local search visibility',
        'Set up Google Analytics to track website performance'
      ];
    }
    if (score <= 16) {
      return [
        'Enhance your website with better content and user experience',
        'Launch targeted social media advertising campaigns',
        'Implement email marketing to nurture leads',
        'Start content marketing with regular blog posts'
      ];
    }
    if (score <= 24) {
      return [
        'Optimize conversion rates with A/B testing',
        'Expand to additional digital marketing channels',
        'Implement marketing automation workflows',
        'Focus on customer retention and loyalty programs'
      ];
    }
    return [
      'Explore advanced analytics and attribution modeling',
      'Test emerging platforms and technologies',
      'Implement AI-powered personalization',
      'Focus on omnichannel customer experience'
    ];
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setUserInfo({ businessName: '', ownerName: '', email: '', phone: '' });
  };

  const currentQuestion = questions[currentStep];
  const score = calculateScore();
  const readiness = getReadinessLevel(score);
  const recommendations = getRecommendations(score);

  if (showResults) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
            {/* Results Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
              <Icon name="Award" size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-headline font-bold mb-2">
                Your Digital Readiness Score
              </h2>
              <div className="text-6xl font-bold mb-2">{score}/30</div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${readiness.bg} ${readiness.color} bg-white/20 text-white`}>
                <span className="font-semibold">{readiness.level} Level</span>
              </div>
            </div>

            {/* Results Content */}
            <div className="p-8">
              {/* Score Breakdown */}
              <div className="mb-8">
                <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                  Assessment Breakdown
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions.map((question, idx) => {
                    const answer = answers[question.id];
                    let questionScore = 0;
                    
                    if (question.type === 'multiple' && Array.isArray(answer)) {
                      answer.forEach(value => {
                        const option = question.options.find(opt => opt.value === value);
                        if (option) questionScore += option.score;
                      });
                    } else if (question.type === 'single' && answer) {
                      const option = question.options.find(opt => opt.value === answer);
                      if (option) questionScore = option.score;
                    }

                    return (
                      <div key={idx} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {question.question}
                          </h4>
                          <span className="text-primary font-bold">
                            {questionScore}/{question.type === 'multiple' ? '6' : '6'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(questionScore / 6) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                  Recommended Next Steps
                </h3>
                <div className="space-y-3">
                  {recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                  Get Your Personalized Digital Strategy
                </h3>
                <p className="text-gray-600 mb-6">
                  Based on your assessment, we'll create a custom digital marketing plan for your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input
                    label="Business Name"
                    type="text"
                    placeholder="Enter your business name"
                    value={userInfo.businessName}
                    onChange={(e) => setUserInfo({...userInfo, businessName: e.target.value})}
                  />
                  <Input
                    label="Your Name"
                    type="text"
                    placeholder="Enter your name"
                    value={userInfo.ownerName}
                    onChange={(e) => setUserInfo({...userInfo, ownerName: e.target.value})}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-cta-primary hover:bg-cta-primary/90 text-white flex-1"
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Book Free Strategy Session
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={resetAssessment}
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Retake Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust-builder/10 rounded-full mb-6">
            <Icon name="CheckCircle" size={16} color="var(--color-trust-builder)" />
            <span className="text-sm font-medium text-trust-builder">Free Digital Assessment</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 mb-6">
            How Digitally Ready
            <span className="block text-primary">Is Your Business?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our comprehensive 6-question assessment to discover your digital maturity level 
            and get personalized recommendations for growth.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Content */}
          <div className="p-8 lg:p-12">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {currentStep + 1}
                </div>
                <div>
                  <div className="text-sm text-gray-500">Question {currentStep + 1} of {questions.length}</div>
                  <div className="font-semibold text-gray-900">Digital Readiness Assessment</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-8">
              {currentQuestion.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = currentQuestion.type === 'multiple' 
                  ? (answers[currentQuestion.id] || []).includes(option.value)
                  : answers[currentQuestion.id] === option.value;

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerChange(currentQuestion.id, option.value, currentQuestion.type === 'multiple')}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected 
                        ? 'border-primary bg-primary/5 text-primary' :'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-primary bg-primary' : 'border-gray-300'
                      }`}>
                        {isSelected && <Icon name="Check" size={12} color="white" />}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2"
              >
                <Icon name="ChevronLeft" size={16} />
                <span>Previous</span>
              </Button>

              <div className="flex space-x-2">
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx <= currentStep ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="default"
                onClick={nextStep}
                disabled={!answers[currentQuestion.id] || (Array.isArray(answers[currentQuestion.id]) && answers[currentQuestion.id].length === 0)}
                className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
              >
                <span>{currentStep === questions.length - 1 ? 'Get Results' : 'Next'}</span>
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReadinessAssessment;