import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Prediction',
      description: 'Built a linear regression model using scikit-learn for sales prediction, utilizing pandas and seaborn for data exploration and visualization.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      highlights: [
        'Analyzed 200 entries with variables TV, Radio, Newspaper, and Sales',
        'Conducted train-test split and cross-validation',
        'Performed OLS regression analysis',
      ],
    },
    {
      title: 'Medicinal Plant Identification',
      description: 'Developed a CNN-based system for identifying medicinal plants and raw materials using image processing techniques.',
      tags: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
      highlights: [
        'Processed 40 samples of 80 species',
        'Implemented transfer learning',
        'Applied data augmentation techniques',
      ],
    },
    {
      title: 'Student Course Management System',
      description: 'Java-based command-line application for student course registration and management.',
      tags: ['Java', 'OOP', 'Command Line'],
      highlights: [
        'Course enrollment and dropping functionality',
        'Student ID validation',
        'Error handling implementation',
      ],
    },
    {
      title: 'Quiz Application',
      description: 'Timer-based quiz application with comprehensive scoring and feedback system.',
      tags: ['Java', 'OOP', 'UI Design'],
      highlights: [
        'Timer implementation',
        'Multiple-choice system',
        'Scoring mechanism',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0A1828]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">Featured</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0A1828] p-6 rounded-lg border border-[#178582]/20 hover:border-[#178582]/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#178582]/20 rounded-lg">
                  <Code2 className="text-[#178582]" size={24} />
                </div>
                <ExternalLink className="text-gray-400 hover:text-[#178582] cursor-pointer" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-[#BFA181] mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-[#178582] font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#178582]/20 text-[#178582] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;