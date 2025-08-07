import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { useFadeInUp, useStaggerAnimation } from '../../../hooks/useGSAP';

const BlogSection = () => {
  const sectionRef = useFadeInUp(0, 1);
  const gridRef = useStaggerAnimation('.blog-item', 0.15);

  const blogPosts = [
    {
      id: 1,
      title: 'Digital Transformation for Bihar Businesses: A Complete Guide',
      excerpt: 'Learn how local businesses in Bihar can leverage digital technologies to compete globally while maintaining their local identity and values.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Digital Strategy',
      author: 'Webestake Team',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      tags: ['Digital Transformation', 'Bihar Business', 'Local Growth']
    },
    {
      id: 2,
      title: 'Mobile-First Approach: Why Your Bihar Business Needs a Mobile App',
      excerpt: 'Discover the growing mobile usage trends in Bihar and how a mobile app can help your business reach more customers and increase engagement.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Mobile Development',
      author: 'Tech Experts',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      tags: ['Mobile Apps', 'User Experience', 'Local Market']
    },
    {
      id: 3,
      title: 'SEO Strategies That Work for Local Bihar Businesses',
      excerpt: 'Effective SEO techniques specifically tailored for businesses in Bihar Sharif and surrounding areas to improve local search visibility.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Digital Marketing',
      author: 'Marketing Team',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      tags: ['SEO', 'Local SEO', 'Digital Marketing']
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="BookOpen" size={16} />
            <span>Latest Insights</span>
          </div>
          
          <h2 className="text-responsive-lg font-headline font-bold text-primary mb-6">
            Digital Insights & Industry Trends
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest digital trends, technology insights, and business growth strategies 
            specifically curated for businesses in Bihar and beyond.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-item bg-white dark:bg-gray-800 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-headline font-semibold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={14} color="var(--color-primary)" />
                    </div>
                    <span className="text-sm text-text-secondary">{post.author}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center space-x-1 text-primary hover:text-secondary transition-colors text-sm font-medium"
                  >
                    <span>Read More</span>
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={32} color="white" />
            </div>
            
            <h3 className="text-2xl font-headline font-bold mb-4">
              Stay Ahead with Digital Insights
            </h3>
            
            <p className="text-white/90 mb-8">
              Get weekly insights on digital transformation, technology trends, and business growth strategies 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 shadow-brand px-6 whitespace-nowrap"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              Join 500+ business owners who trust our insights. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/blog">
              <Icon name="BookOpen" size={20} className="mr-2" />
              View All Blog Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;