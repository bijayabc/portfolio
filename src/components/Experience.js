import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Technology and Developer Intern',
      company: 'CNP Community Services',
      period: 'February 2026 - Present',
      description: 'Building internal tools for a Medicaid-funded agency serving people with intellectual and developmental disabilities. Developed a staff compliance dashboard (Python, Flask, SQLite) on a relational data model that computes each employee\'s training, onboarding, and background-check status from their role, with scheduled expiration alerts and role-restricted access to personnel data. Wrote a Pandas importer for training platforms with no APIs, and automated client applications, including a 35+ page guardianship form, so completed PDFs are generated in seconds instead of taking weeks of back-and-forth.',
    },
    {
      title: 'Summer Research Assistant - NLP',
      company: 'Caldwell University',
      period: 'May 2025 - August 2025',
      description: 'Working on adapter-based fine-tuning of mBERT and mT5 for Nepali NLP tasks.',
    },
    {
      title: 'Teaching Assistant',
      company: 'Caldwell University',
      period: 'August 2024 - May 2025',
      description: 'Assisted students in Programming Languages II. Helped debug assignments and supported exam prep.',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="heading-primary text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-body">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 