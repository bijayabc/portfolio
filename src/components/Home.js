import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../images/bijay.jpeg';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bijayabc',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bijayabc',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:bijayabc1234@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center bg-white">
      <div className="container-max text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={profileImage} 
              alt="Bijaya BC" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Tagline */}
        <h1 className="heading-primary text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          Bijaya BC
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I like to write code and make things happen.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 