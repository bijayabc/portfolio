import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ResearchCard = ({ research }) => {
  return (
    <div className="card">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {research.title}
          </h3>
          {research.period && (
            <p className="text-gray-600 text-sm mt-1">
              {research.period}
            </p>
          )}
        </div>
        
        <div className="text-body">
          <p>{research.description}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Research Focus:</h4>
          <ul className="text-body space-y-1">
            {research.focus.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        {research.github && (
          <div className="flex space-x-3">
            <a
              href={research.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Research Code
            </a>
            {research.paper && (
              <a
                href={research.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                View Paper
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Research = () => {
  const researchProjects = [
    {
      title: "Improving Low-Resource NLP in Nepali via Adapter-Based Fine-Tuning of mBERT and mT5",
      advisor: "Prof. Vladislav D. Veksler",
      period: "May 2025 - August 2025",
      description: "Focused on fine-tuning multilingual models using AdapterHub to reduce compute needs while improving NLP performance on Nepali tasks.",
      focus: [
        "Multilingual BERT (mBERT) and mT5 fine-tuning",
        "AdapterHub framework for efficient model adaptation", 
        "Low-resource language processing for Nepali",
        "Computational efficiency in NLP model training"
      ],
      github: "https://github.com/bijayabc/mBERT-finetuning",
      paper: null
    },
  ];

  return (
    <section id="research" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="heading-primary text-center">Research</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {researchProjects.map((research, index) => (
            <ResearchCard key={index} research={research} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 