import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaJava,
  FaGithub
  // FaHtml5, 
  // FaCss3Alt, 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKubernetes,
  SiGraphql,
  SiPostman,
  SiVercel,
  // SiJest,
  // SiWebpack,
  // SiTensorflow,
  // SiJenkins,
  // SiAnsible,
  // SiTerraform,
  // SiSocketdotio,
  // SiJira,
  // SiFigma,
  // SiNetlify
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const TechStack = () => {
  const skillCategories = {
    languages: {
      title: "Languages",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: FaJs },
        { name: "Java", icon: FaJava },
        { name: "SQL", icon: SiPostgresql }
      ]
    },

    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Redux", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },

    databasesCloud: {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "AWS", icon: FaAws },
        { name: "Vercel", icon: SiVercel }
      ]
    },

    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: VscCode }
      ]
    },

    aiMl: {
      title: "AI / ML",
      skills: [
        { name: "PyTorch", icon: SiPytorch },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        // { name: "Scikit-learn", icon: SiScikitlearn }
      ]
    }
  };


  return (
    <section id='techStack' className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I have experience with
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className="category-section">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col items-center py-2 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="w-12 h-12 flex items-center justify-center text-2xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        <IconComponent />
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 