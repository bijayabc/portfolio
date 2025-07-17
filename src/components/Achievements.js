import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Presidential Scholarship',
      institution: 'Caldwell University',
      description: 'Awarded for outstanding academic excellence and leadership.',
    },
    {
      title: 'Certificate of Recognition',
      institution: 'Caldwell University',
      description: 'For outstanding academic performance and contributions.',
    },
    {
      title: 'Dean\'s List',
      institution: 'Caldwell University',
      description: 'Awarded for maintaining a GPA of 3.5 or higher.',
    },
    {
      title: 'Student Body Prefect',
      institution: 'Nepal Police School',
      description: 'Leadership role representing student body and organizing school events.',
    },
    {
      title: 'Valedictorian',
      institution: 'Nepal Police School',
      description: 'Graduated as the top student of the class with highest academic honors.',
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="heading-primary text-center">Achievements</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow duration-200">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {achievement.institution}
                  </p>
                  <p className="text-body text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 