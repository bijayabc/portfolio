import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="heading-primary text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="space-y-6 text-body">
              <p>
                I'm a senior Computer Science major at Caldwell University and a first-generation student who moved from Nepal to the U.S. in 2021 to pursue Computer Science. These past few years have been challenging and rewarding in equal measure, and they've shaped who I am today.
              </p>
              <p>
                My interests span software development, web development, and AI. I'm currently interning as a Technology and Development Intern at CNP Services, where I work on software development and system migration. Outside of that, I've built several full-stack applications and done research in AI.
              </p>
              <p>
                I care about building things that actually matter; technology that is useful, thoughtful, and contributes meaningfully to the people and communities it serves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 