import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    {
      name: "Patna Sweets & Snacks",
      logo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
      industry: "Food & Beverage",
      location: "Bihar Sharif"
    },
    {
      name: "Bihar Handicrafts Co.",
      logo: "https://images.pixabay.com/photo/2017/08/02/14/26/handicraft-2571896_960_720.jpg",
      industry: "Handicrafts",
      location: "Nalanda"
    },
    {
      name: "EduTech Bihar",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      industry: "Education",
      location: "Rajgir"
    },
    {
      name: "Green Valley Farms",
      logo: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
      industry: "Agriculture",
      location: "Pawapuri"
    },
    {
      name: "Bihar Tourism Board",
      logo: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      industry: "Tourism",
      location: "Patna"
    },
    {
      name: "Magadh Medical Center",
      logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
      industry: "Healthcare",
      location: "Gaya"
    },
    {
      name: "Bihar Textiles Ltd.",
      logo: "https://images.pixabay.com/photo/2017/03/29/04/47/industry-2185943_960_720.jpg",
      industry: "Textiles",
      location: "Bhagalpur"
    },
    {
      name: "Digital Bihar Initiative",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      industry: "Government",
      location: "Bihar"
    }
  ];

  const testimonials = [
    {
      quote: "Webestake transformed our traditional business into a digital powerhouse. Our online sales increased by 300% within 6 months.",
      author: "Rajesh Kumar",
      position: "Owner, Patna Sweets & Snacks",
      rating: 5
    },
    {
      quote: "Professional team with deep understanding of local market needs. They helped us reach global customers effectively.",
      author: "Priya Sharma",
      position: "Director, Bihar Handicrafts Co.",
      rating: 5
    },
    {
      quote: "Excellent technical expertise combined with great customer service. Our students love the new learning platform.",
      author: "Dr. Amit Singh",
      position: "Founder, EduTech Bihar",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 4));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const logosPerSlide = 4;
    const startIndex = currentSlide * logosPerSlide;
    return clientLogos.slice(startIndex, startIndex + logosPerSlide);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">
            Trusted by Leading Bihar Businesses
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From local startups to established enterprises, we've helped businesses across Bihar 
            achieve digital success and expand their reach.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {getVisibleLogos().map((client, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-brand transition-all duration-300 border border-gray-100"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-primary text-center text-sm mb-1">
                    {client.name}
                  </h3>
                  <p className="text-xs text-text-secondary text-center mb-1">
                    {client.industry}
                  </p>
                  <p className="text-xs text-text-secondary text-center">
                    {client.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-6' :'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-brand transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-primary italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-primary text-sm">
                  {testimonial.author}
                </div>
                <div className="text-text-secondary text-xs">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Local Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;