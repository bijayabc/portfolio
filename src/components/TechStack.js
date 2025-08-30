import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaJava,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiJest,
  SiWebpack,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiTerraform,
  SiGraphql,
  SiSocketdotio,
  SiJira,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { BiData } from 'react-icons/bi';

const TechStack = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava }
      ]
    },
    databases: {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Firebase", icon: SiFirebase }
      ]
    },
    devopsCloud: {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        // { name: "Jenkins", icon: SiJenkins },
        // { name: "Ansible", icon: SiAnsible },
        // { name: "Terraform", icon: SiTerraform },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify }
      ]
    },
    languages: {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt }
      ]
    },
    toolsLibraries: {
      title: "Tools & Libraries",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: VscCode },
        // { name: "Jest", icon: SiJest },
        // { name: "Webpack", icon: SiWebpack },
        // { name: "Jira", icon: SiJira },
        { name: "Figma", icon: SiFigma },
        { name: "Postman", icon: SiPostman }
      ]
    },
    aiMlData: {
      title: "AI/ML & Data",
      skills: [
        { name: "Pytorch", icon: SiPytorch },
        // { name: "TensorFlow", icon: SiTensorflow },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Data Analysis", icon: BiData }
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col items-center py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
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