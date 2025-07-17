import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
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
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-primary">Get In Touch</h2>
          
          <p className="text-body text-lg mb-8">
            Feel free to reach out via email or connect on GitHub/LinkedIn.
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2024 Bijaya B.C. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 