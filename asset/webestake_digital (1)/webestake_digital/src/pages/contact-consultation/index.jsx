import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import QuickQuoteForm from './components/QuickQuoteForm';
import OfficeLocation from './components/OfficeLocation';
import WhyMeetWithUs from './components/WhyMeetWithUs';
import FAQSection from './components/FAQSection';

const ContactConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Methods */}
      <ContactMethods />
      
      {/* Why Meet With Us */}
      <WhyMeetWithUs />
      
      {/* Consultation Form */}
      <ConsultationForm />
      
      {/* Quick Quote Calculator */}
      <QuickQuoteForm />
      
      {/* Office Location */}
      <OfficeLocation />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default ContactConsultation;