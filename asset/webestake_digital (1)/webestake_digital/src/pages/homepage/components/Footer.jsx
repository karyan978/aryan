import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'App Development', path: '/app-development-services' },
        { name: 'Web Development', path: '/web-development-services' },
        { name: 'Digital Marketing', path: '/digital-marketing-services' },
        { name: 'SEO Services', path: '/digital-marketing-services' },
        { name: 'Graphic Design', path: '/contact-consultation' },
        { name: 'IT Consulting', path: '/contact-consultation' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Team', path: '/about-us' },
        { name: 'Careers', path: '/contact-consultation' },
        { name: 'Blog', path: '/contact-consultation' },
        { name: 'Case Studies', path: '/contact-consultation' },
        { name: 'Testimonials', path: '/about-us' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact-consultation' },
        { name: 'Help Center', path: '/contact-consultation' },
        { name: 'Privacy Policy', path: '/contact-consultation' },
        { name: 'Terms of Service', path: '/contact-consultation' },
        { name: 'Refund Policy', path: '/contact-consultation' },
        { name: 'FAQ', path: '/contact-consultation' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/webestake' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/webestake' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/webestake' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/webestake' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/webestake' }
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Address',
      content: 'Bihar Sharif, Nalanda, Bihar 803101, India'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      content: '+91 98765 43210'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'hello@webestake.com'
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to discuss my digital transformation needs', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold">Webestake</h3>
                <p className="text-white/80 text-sm">Digital Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Empowering Bihar businesses with world-class digital solutions. 
              From local startups to established enterprises, we bridge the gap 
              between traditional operations and digital excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon name={social.icon} size={18} color="white" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="secondary"
              onClick={handleWhatsAppClick}
              className="bg-conversion-accent hover:bg-conversion-accent/90 text-white shadow-brand"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-lg font-headline font-semibold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name={info.icon} size={16} color="white" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">{info.title}</h5>
                  <p className="text-white/80 text-sm leading-relaxed">{info.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-headline font-semibold mb-4">
              Stay Updated with Digital Trends
            </h4>
            <p className="text-white/80 mb-6">
              Get the latest insights on digital transformation, technology trends, and business growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 shadow-brand px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-primary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Webestake Digital Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/contact-consultation" className="text-white/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/contact-consultation" className="text-white/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/contact-consultation" className="text-white/80 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-white/60 text-xs">
              Proudly serving Bihar Sharif, Nalanda, and businesses across India with world-class digital solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;