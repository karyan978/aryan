import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResponsivePreview = () => {
  const [activeDevice, setActiveDevice] = useState('desktop');

  const devices = [
    { id: 'desktop', name: 'Desktop', icon: 'Monitor', width: '100%', height: '400px' },
    { id: 'tablet', name: 'Tablet', icon: 'Tablet', width: '768px', height: '400px' },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', width: '375px', height: '400px' }
  ];

  const mockWebsiteContent = {
    desktop: (
      <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-brand">
        <div className="bg-primary text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} color="white" />
            </div>
            <span className="font-medium">Bihar Business Solutions</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm hover:text-accent cursor-pointer">Home</span>
            <span className="text-sm hover:text-accent cursor-pointer">Services</span>
            <span className="text-sm hover:text-accent cursor-pointer">About</span>
            <span className="text-sm hover:text-accent cursor-pointer">Contact</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6 h-full">
            <div className="col-span-2">
              <div className="h-4 bg-primary/20 rounded mb-4 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
              <div className="h-3 bg-gray-200 rounded mb-2 w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded mb-6 w-4/5"></div>
              <div className="flex space-x-4">
                <div className="h-10 bg-secondary rounded w-24"></div>
                <div className="h-10 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="h-3 bg-gray-300 rounded mb-3 w-full"></div>
              <div className="h-3 bg-gray-300 rounded mb-3 w-4/5"></div>
              <div className="h-20 bg-accent/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    tablet: (
      <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-brand">
        <div className="bg-primary text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} color="white" />
            </div>
            <span className="font-medium text-sm">Bihar Business</span>
          </div>
          <Icon name="Menu" size={20} color="white" />
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="h-4 bg-primary/20 rounded w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="h-16 bg-secondary/20 rounded"></div>
              <div className="h-16 bg-accent/20 rounded"></div>
            </div>
            <div className="h-10 bg-secondary rounded w-32"></div>
          </div>
        </div>
      </div>
    ),
    mobile: (
      <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-brand">
        <div className="bg-primary text-white p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
              <Icon name="Zap" size={12} color="white" />
            </div>
            <span className="font-medium text-xs">Bihar Biz</span>
          </div>
          <Icon name="Menu" size={16} color="white" />
        </div>
        <div className="p-3">
          <div className="space-y-3">
            <div className="h-3 bg-primary/20 rounded w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            <div className="h-12 bg-secondary/20 rounded mt-3"></div>
            <div className="h-12 bg-accent/20 rounded"></div>
            <div className="h-8 bg-secondary rounded w-24 mt-4"></div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Smartphone" size={20} color="var(--color-accent)" />
            <span className="text-accent font-medium">Responsive Design</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-6">
            Perfect on Every Device
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your website will look stunning and function flawlessly across all devices. See how our responsive design adapts to different screen sizes.
          </p>
        </div>

        {/* Device Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            <div className="flex space-x-2">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeDevice === device.id
                      ? 'bg-white text-primary shadow-brand'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={device.icon} size={18} />
                  <span>{device.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Container */}
        <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="flex justify-center">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ 
                width: devices.find(d => d.id === activeDevice)?.width,
                maxWidth: '100%',
                height: devices.find(d => d.id === activeDevice)?.height
              }}
            >
              {mockWebsiteContent[activeDevice]}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Eye" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Pixel Perfect Design
            </h3>
            <p className="text-text-secondary">
              Every element is carefully crafted to look perfect on screens of all sizes, from mobile phones to large desktop monitors.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Zap" size={32} color="var(--color-secondary)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              Fast Loading
            </h3>
            <p className="text-text-secondary">
              Optimized images and code ensure your website loads quickly on all devices, improving user experience and SEO.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} color="var(--color-accent)" />
            </div>
            <h3 className="text-xl font-headline font-bold text-text-primary mb-4">
              User Friendly
            </h3>
            <p className="text-text-secondary">
              Intuitive navigation and touch-friendly interfaces ensure visitors can easily interact with your website on any device.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">78%</div>
              <div className="text-sm text-text-secondary">Mobile Traffic</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">3.2s</div>
              <div className="text-sm text-text-secondary">Average Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-text-secondary">Mobile Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-conversion-accent mb-2">100%</div>
              <div className="text-sm text-text-secondary">Responsive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsivePreview;