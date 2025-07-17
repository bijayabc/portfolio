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
                I'm a rising senior majoring in Computer Science at Caldwell University. 
                I'm a first-generation student and I've always been curious to learn deeply 
                how computers work. My goal is to build cool, useful things with that knowledge.
              </p>
              
              <p>
                I completed my high school from Nepal Police School in 2021, where I studied 
                Physical Science. After that, I moved to the U.S. to pursue my undergraduate degree.
              </p>
              
              <p>
                These past few years have been filled with challenges and opportunities, and I've 
                grown immensely, not just as a student, but as a person.
              </p>
              
              <p>
                I've enjoyed exploring different areas in CS like software development, web dev, 
                data science, and AI. My next goal is to land an internship and 
                get real world experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 