import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsAwards = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      title: "Google Partner Certification",
      issuer: "Google",
      year: "2024",
      description: "Certified Google Ads and Analytics partner with proven expertise in digital marketing",
      icon: "Award",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Certified in AWS cloud services and infrastructure management",
      icon: "Cloud",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      description: "Certified in Microsoft Azure cloud platform and services",
      icon: "Server",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    },
    {
      title: "ISO 27001 Compliance",
      issuer: "ISO",
      year: "2024",
      description: "Information security management system certification",
      icon: "Shield",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      description: "Advanced React development and best practices certification",
      icon: "Code",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    },
    {
      title: "Digital Marketing Certification",
      issuer: "HubSpot",
      year: "2024",
      description: "Comprehensive digital marketing strategy and execution certification",
      icon: "TrendingUp",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Active"
    }
  ];

  const awards = [
    {
      title: "Best Digital Agency - Bihar 2024",
      issuer: "Bihar IT Association",
      year: "2024",
      description: "Recognized as the leading digital transformation agency in Bihar state",
      icon: "Trophy",
      category: "Industry Recognition"
    },
    {
      title: "Innovation Excellence Award",
      issuer: "India Digital Summit",
      year: "2023",
      description: "Awarded for innovative digital solutions and client success stories",
      icon: "Lightbulb",
      category: "Innovation"
    },
    {
      title: "Client Satisfaction Excellence",
      issuer: "Clutch.co",
      year: "2024",
      description: "Top-rated agency with 4.9/5 client satisfaction rating",
      icon: "Star",
      category: "Client Service"
    },
    {
      title: "Emerging Business of the Year",
      issuer: "Bihar Chamber of Commerce",
      year: "2023",
      description: "Recognized for outstanding business growth and community impact",
      icon: "TrendingUp",
      category: "Business Growth"
    },
    {
      title: "Social Impact Award",
      issuer: "Digital India Initiative",
      year: "2024",
      description: "Honored for contributions to digital literacy and skill development",
      icon: "Heart",
      category: "Social Impact"
    },
    {
      title: "Best Workplace Culture",
      issuer: "Great Place to Work",
      year: "2024",
      description: "Certified as a great workplace with excellent employee satisfaction",
      icon: "Users",
      category: "Workplace"
    }
  ];

  const partnerships = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Technology Partner",
      description: "Official Google Partner for digital marketing and cloud services"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Cloud Partner",
      description: "Microsoft Azure certified partner for cloud solutions"
    },
    {
      name: "AWS",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Cloud Partner",
      description: "Amazon Web Services consulting partner"
    },
    {
      name: "Meta",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Marketing Partner",
      description: "Meta Business Partner for social media marketing"
    }
  ];

  const tabs = [
    { key: 'certifications', label: 'Certifications', icon: 'Award', count: certifications.length },
    { key: 'awards', label: 'Awards', icon: 'Trophy', count: awards.length },
    { key: 'partnerships', label: 'Partnerships', icon: 'Handshake', count: partnerships.length }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Certifications & Recognition
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry certifications, awards, and strategic partnerships with leading technology companies
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted/30 text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeTab === tab.key
                  ? 'bg-white/20 text-white' :'bg-primary/10 text-primary'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-brand transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={cert.icon} 
                      size={24} 
                      color="var(--color-primary)" 
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Active' ?'bg-conversion-accent/10 text-conversion-accent' :'bg-muted text-text-secondary'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-secondary font-medium">{cert.issuer}</span>
                  <span className="text-text-secondary">•</span>
                  <span className="text-text-secondary">{cert.year}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-muted/20 border border-gray-200 rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={award.icon} size={24} color="white" />
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                    {award.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">{award.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-secondary font-medium">{award.issuer}</span>
                  <span className="text-text-secondary">•</span>
                  <span className="text-text-secondary">{award.year}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-brand transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">{partner.name}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3 inline-block">
                  {partner.type}
                </span>
                <p className="text-text-secondary text-sm leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Trust & Compliance</h3>
            <p className="text-text-secondary">
              Our certifications ensure the highest standards of security, quality, and professional service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <div className="text-lg font-bold text-primary mb-1">ISO 27001</div>
              <div className="text-sm text-text-secondary">Security Certified</div>
            </div>

            <div>
              <div className="w-16 h-16 bg-conversion-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} color="white" />
              </div>
              <div className="text-lg font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-text-secondary">Active Certifications</div>
            </div>

            <div>
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} color="white" />
              </div>
              <div className="text-lg font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-text-secondary">Client Rating</div>
            </div>

            <div>
              <div className="w-16 h-16 bg-trust-builder rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" size={24} color="white" />
              </div>
              <div className="text-lg font-bold text-primary mb-1">4+</div>
              <div className="text-sm text-text-secondary">Tech Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsAwards;