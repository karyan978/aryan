import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar Singh",
      role: "Founder & CEO",
      department: "leadership",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 8+ years in digital transformation, passionate about empowering local businesses with global technology standards.",
      expertise: ["Strategic Planning", "Business Development", "Digital Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Technical Director",
      department: "development",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer and tech architect specializing in scalable web applications and mobile solutions.",
      expertise: ["React/Node.js", "Mobile Development", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Digital Marketing Head",
      department: "marketing",
      location: "Patna",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Digital marketing strategist with expertise in SEO, social media, and performance marketing for local and national brands.",
      expertise: ["SEO/SEM", "Social Media", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Sneha Kumari",
      role: "UI/UX Designer",
      department: "design",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Creative designer focused on user-centered design principles and creating intuitive digital experiences.",
      expertise: ["UI/UX Design", "Prototyping", "User Research"],
      social: {
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      id: 5,
      name: "Vikash Jha",
      role: "Backend Developer",
      department: "development",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Backend specialist with expertise in database design, API development, and server optimization.",
      expertise: ["Node.js", "Database Design", "API Development"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Anita Singh",
      role: "Project Manager",
      department: "operations",
      location: "Bihar Sharif",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Experienced project manager ensuring timely delivery and client satisfaction across all digital projects.",
      expertise: ["Project Management", "Client Relations", "Agile Methodology"],
      social: {
        linkedin: "#"
      }
    }
  ];

  const departments = [
    { key: 'all', label: 'All Team', icon: 'Users' },
    { key: 'leadership', label: 'Leadership', icon: 'Crown' },
    { key: 'development', label: 'Development', icon: 'Code' },
    { key: 'design', label: 'Design', icon: 'Palette' },
    { key: 'marketing', label: 'Marketing', icon: 'TrendingUp' },
    { key: 'operations', label: 'Operations', icon: 'Settings' }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

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
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate professionals from Bihar and beyond, united by our mission to deliver world-class digital solutions
          </p>
        </motion.div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.key}
              onClick={() => setActiveFilter(dept.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === dept.key
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={dept.icon} size={16} />
              <span>{dept.label}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon name="MapPin" size={12} color="var(--color-primary)" />
                  <span className="text-xs font-medium text-primary">{member.location}</span>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <Icon 
                        name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : platform === 'github' ? 'Github' : 'Dribbble'} 
                        size={14} 
                        color="var(--color-primary)" 
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-text-secondary">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <div className="text-text-secondary">Local Talent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-text-secondary">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-text-secondary">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamShowcase;