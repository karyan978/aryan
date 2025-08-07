import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Smartphone',
      description: 'Modern frameworks and tools for creating exceptional user interfaces',
      technologies: [
        { name: 'React Native', icon: 'Code', description: 'Cross-platform mobile development', level: 95 },
        { name: 'Flutter', icon: 'Layers', description: 'Google\'s UI toolkit for mobile', level: 90 },
        { name: 'Swift', icon: 'Apple', description: 'Native iOS development', level: 88 },
        { name: 'Kotlin', icon: 'Android', description: 'Modern Android development', level: 92 },
        { name: 'PWA', icon: 'Globe', description: 'Progressive Web Applications', level: 85 },
        { name: 'Ionic', icon: 'Zap', description: 'Hybrid mobile app framework', level: 80 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      description: 'Robust server-side solutions and APIs for scalable applications',
      technologies: [
        { name: 'Node.js', icon: 'Code', description: 'JavaScript runtime for servers', level: 95 },
        { name: 'Python', icon: 'Code2', description: 'Versatile backend programming', level: 90 },
        { name: 'Firebase', icon: 'Database', description: 'Google\'s mobile platform', level: 88 },
        { name: 'AWS', icon: 'Cloud', description: 'Amazon Web Services', level: 85 },
        { name: 'MongoDB', icon: 'Database', description: 'NoSQL database solution', level: 92 },
        { name: 'PostgreSQL', icon: 'Database', description: 'Advanced SQL database', level: 87 }
      ]
    },
    tools: {
      title: 'Development Tools',
      icon: 'Settings',
      description: 'Professional tools and platforms for efficient development workflow',
      technologies: [
        { name: 'Git', icon: 'GitBranch', description: 'Version control system', level: 98 },
        { name: 'Docker', icon: 'Package', description: 'Containerization platform', level: 85 },
        { name: 'Jenkins', icon: 'Workflow', description: 'CI/CD automation', level: 80 },
        { name: 'Figma', icon: 'Palette', description: 'UI/UX design tool', level: 92 },
        { name: 'Postman', icon: 'Send', description: 'API testing platform', level: 90 },
        { name: 'Jira', icon: 'CheckSquare', description: 'Project management', level: 88 }
      ]
    },
    testing: {
      title: 'Testing & Quality',
      icon: 'Shield',
      description: 'Comprehensive testing frameworks ensuring app reliability and performance',
      technologies: [
        { name: 'Jest', icon: 'TestTube', description: 'JavaScript testing framework', level: 90 },
        { name: 'Detox', icon: 'Smartphone', description: 'End-to-end mobile testing', level: 85 },
        { name: 'Appium', icon: 'TestTube2', description: 'Mobile automation testing', level: 82 },
        { name: 'Firebase Test Lab', icon: 'Cloud', description: 'Cloud-based testing', level: 88 },
        { name: 'Crashlytics', icon: 'AlertTriangle', description: 'Crash reporting', level: 92 },
        { name: 'Performance Monitor', icon: 'Activity', description: 'App performance tracking', level: 87 }
      ]
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build scalable, 
            secure, and high-performance mobile applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-gradient-to-br from-muted to-white rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={techCategories[activeCategory].icon} size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">
                  {techCategories[activeCategory].title}
                </h3>
              </div>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                {techCategories[activeCategory].description}
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories[activeCategory].technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name={tech.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{tech.name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Proficiency Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-text-secondary">Proficiency</span>
                      <span className="text-xs font-bold text-primary">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Benefits */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-conversion-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} color="var(--color-conversion-accent)" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Fast Development</h4>
                <p className="text-text-secondary text-sm">Modern frameworks enable rapid prototyping and development cycles.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} color="var(--color-trust-builder)" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Enterprise Security</h4>
                <p className="text-text-secondary text-sm">Industry-standard security practices and compliance measures.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} color="var(--color-secondary)" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Scalable Solutions</h4>
                <p className="text-text-secondary text-sm">Architecture designed to grow with your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;