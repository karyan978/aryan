import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { useStaggerAnimation, useFadeInUp } from '../../../hooks/useGSAP';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const sectionRef = useFadeInUp(0, 1);
  const gridRef = useStaggerAnimation('.portfolio-item', 0.1);

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid' },
    { id: 'web', name: 'Web Development', icon: 'Code' },
    { id: 'app', name: 'App Development', icon: 'Smartphone' },
    { id: 'marketing', name: 'Digital Marketing', icon: 'TrendingUp' },
    { id: 'design', name: 'Graphic Design', icon: 'Palette' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Bihar Organic Foods E-commerce',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern e-commerce platform for local organic food producers in Bihar',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      results: '+150% sales increase, 5000+ active users'
    },
    {
      id: 2,
      title: 'Nalanda Education App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Educational mobile app connecting students across Nalanda district',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      link: '#',
      results: '10,000+ downloads, 4.8★ rating'
    },
    {
      id: 3,
      title: 'Bihar Tourism Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Digital marketing campaign promoting Bihar tourism destinations',
      technologies: ['Social Media', 'Google Ads', 'Content Marketing'],
      link: '#',
      results: '2M+ reach, 30% tourism increase'
    },
    {
      id: 4,
      title: 'Local Business Directory',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive business directory for Bihar Sharif local businesses',
      technologies: ['Next.js', 'PostgreSQL', 'Maps API'],
      link: '#',
      results: '500+ businesses listed, 10K+ monthly visitors'
    },
    {
      id: 5,
      title: 'Healthcare Booking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Mobile app for booking appointments with local healthcare providers',
      technologies: ['Flutter', 'PHP', 'MySQL'],
      link: '#',
      results: '50+ clinics onboarded, 3000+ appointments'
    },
    {
      id: 6,
      title: 'Brand Identity Package',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete brand identity design for emerging Bihar startups',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      link: '#',
      results: '20+ startups rebranded, 90% brand recall'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Folder" size={16} />
            <span>Our Portfolio</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            Transforming Ideas Into Reality
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover how we've helped businesses across Bihar and beyond achieve their digital transformation goals 
            with innovative solutions and measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="portfolio-item bg-white dark:bg-gray-800 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Eye" size={24} color="white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-headline font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-conversion-accent font-medium">
                      {project.results}
                    </div>
                    <Icon name="ArrowRight" size={16} color="var(--color-primary)" className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            className="bg-cta-primary hover:bg-cta-primary/90 text-white shadow-brand cta-hover"
          >
            <Icon name="Folder" size={20} className="mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-text-secondary mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Results:</h4>
                  <p className="text-conversion-accent font-medium">
                    {selectedProject.results}
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    View Live Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;