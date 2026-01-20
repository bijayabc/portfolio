import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'AI Coding Agent',
      description: 'An intelligent AI-powered coding assistant built with Google\'s Gemini API that can perform file operations and execute Python code within a secure sandboxed environment.',
      tech: ['Python', 'Google Gemini API', 'File System Operations', 'Code Execution', 'Sandboxed Environment', 'Natural Language Processing'],
      github: 'https://github.com/bijayabc/ai-coding-agent',
      demo: null,
      completedDate: 'September 2025'
    },
    {
      name: 'ShredSheet',
      description: 'A fitness tracking web app for logging workouts, creating routines, and monitoring progress.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT', 'Axios', 'Bcrypt'],
      github: 'https://github.com/bijayabc/Shredsheet',
      demo: 'https://shredsheet-five.vercel.app/',
      completedDate: 'May 2025'
    },
    {
      name: 'Twitter Clone',
      description: 'Full-stack Twitter clone with authentication, tweets, follows, and image uploads using Next.js, GraphQL, Redis, and PostgreSQL.',
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'GraphQL', 'Apollo Client', 'AWS S3', 'Node.js', 'PostgreSQL', 'Redis', 'JWT', 'GraphQL Codegen'],
      github: 'https://github.com/bijayabc/twitter-clone-server',
      demo: null,
      completedDate: 'January 2025'
    },
    {
      name: 'Blogs',
      description: 'A simple full-stack blog application with CRUD functionality and password-protected blog management.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bijayabc/blogs',
      // demo: 'https://bijayblogs.onrender.com/blogs',
      completedDate: 'August 2024'
    },
    {
      name: 'Movie Charades Web App',
      description: 'A web app for playing Dumb Charades with random movie titles, a timer, and a contact form.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web3Forms', 'Google Fonts'],
      github: 'https://github.com/bijayabc/movie-charades',
      demo: 'https://bijayabc.github.io/movie-charades/',
      completedDate: 'May 2024'
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="heading-primary text-center">Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm font-semibold opacity-60 text-gray-900 mb-3">
                    {project.completedDate}
                  </p>
                  <p className="text-body mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 