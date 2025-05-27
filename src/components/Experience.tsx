import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Intern',
      company: 'Centre for Geospatial AI Digital Twins - IIT Hyderabad',
      period: 'May 2024 - July 2024',
      description: [
        'Successfully completed and Implemented a project related to the veterinary department.',
        'Presented and pitched the importance and significance of the project to authorities.',
        'Expanded professional network with industry officials.',
      ],
    },
    {
      title: 'Competence Development Intern',
      company: 'GCGC',
      period: 'March 2024 - June 2024',
      description: [
        'Engaged in Alumni Talk Series, connecting with GITAM alumni for insights.',
        'Collaborated with peers on career workshops.',
      ],
    },
    {
      title: 'Sub-Executive Member',
      company: 'IEEE',
      period: 'June 2023 - Present',
      description: [
        'Core member overseeing Technical and Creative Arts domains.',
        'Responsible for mentoring and supervising new members.',
      ],
    },
    {
      title: 'Java Programming Intern',
      company: 'CODSOFT',
      period: 'February 2024 - March 2024',
      description: [
        'Successfully accomplished Java application development tasks.',
        'Met project objectives 100% on schedule.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">Work</span> Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#0A1828]/30 p-6 rounded-lg border border-[#178582]/20 hover:border-[#178582]/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#178582]/20 rounded-lg">
                  <Briefcase className="text-[#178582]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#BFA181]">{exp.title}</h3>
                  <p className="text-[#178582] mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;