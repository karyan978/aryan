import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const officeDetails = {
    address: "123 Digital Hub, Near Railway Station, Bihar Sharif, Nalanda - 803101",
    phone: "+91 98765 43210",
    email: "hello@webestake.com",
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
      saturday: "Saturday: 10:00 AM - 6:00 PM",
      sunday: "Sunday: Closed"
    },
    coordinates: {
      lat: 25.1972,
      lng: 85.5234
    }
  };

  const landmarks = [
    {
      icon: "Train",
      name: "Bihar Sharif Railway Station",
      distance: "500m",
      direction: "North"
    },
    {
      icon: "Building",
      name: "District Collectorate",
      distance: "1.2km",
      direction: "East"
    },
    {
      icon: "ShoppingBag",
      name: "Main Market",
      distance: "800m",
      direction: "South"
    },
    {
      icon: "GraduationCap",
      name: "Nalanda University",
      distance: "15km",
      direction: "South-East"
    }
  ];

  const handleDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${officeDetails.phone}`, '_self');
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-primary font-medium">Visit Our Office</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-text-primary mb-4">
            Located in the Heart of
            <span className="text-primary"> Bihar Sharif</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our office is strategically located for easy access from all parts of Bihar Sharif 
            and surrounding areas. Drop by for a coffee and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-brand h-80 lg:h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Webestake Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}&z=16&output=embed`}
                className="border-0"
              />
            </div>

            {/* Map Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                onClick={handleDirections}
                className="bg-primary hover:bg-primary/90 text-white flex-1"
                iconName="Navigation"
                iconPosition="left"
              >
                Get Directions
              </Button>
              <Button
                variant="outline"
                onClick={handleCall}
                className="border-primary text-primary hover:bg-primary hover:text-white flex-1"
                iconName="Phone"
                iconPosition="left"
              >
                Call for Directions
              </Button>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-muted rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2" />
                Nearby Landmarks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={landmark.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {landmark.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {landmark.distance} {landmark.direction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Office Address
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {officeDetails.address}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  onClick={handleDirections}
                  className="bg-primary hover:bg-primary/90 text-white flex-1"
                  iconName="ExternalLink"
                  iconPosition="left"
                >
                  Open in Maps
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(officeDetails.address)}
                  className="border-primary text-primary hover:bg-primary hover:text-white flex-1"
                  iconName="Copy"
                  iconPosition="left"
                >
                  Copy Address
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-gray-100">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Phone</p>
                    <p className="font-medium text-text-primary">{officeDetails.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <p className="font-medium text-text-primary">{officeDetails.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Office Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-text-secondary">Monday - Friday</span>
                  <span className="font-medium text-text-primary">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-text-secondary">Saturday</span>
                  <span className="font-medium text-text-primary">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-secondary">Sunday</span>
                  <span className="font-medium text-cta-primary">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <Icon name="Info" size={16} className="inline mr-2" />
                  We're also available for emergency support 24/7 for existing clients.
                </p>
              </div>
            </div>

            {/* Visit Instructions */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Planning to Visit?
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p className="flex items-start">
                  <Icon name="CheckCircle" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                  Free parking available in front of the building
                </p>
                <p className="flex items-start">
                  <Icon name="CheckCircle" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                  Wheelchair accessible entrance and facilities
                </p>
                <p className="flex items-start">
                  <Icon name="CheckCircle" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                  Conference room available for detailed discussions
                </p>
                <p className="flex items-start">
                  <Icon name="CheckCircle" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                  Complimentary refreshments during meetings
                </p>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="default"
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi, I would like to schedule a visit to your office', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-white"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;