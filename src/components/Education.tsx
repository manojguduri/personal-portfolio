import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BTech in Electronics and Communications Engineering',
      specialization: 'AI & ML',
      institution: 'GITAM University',
      location: 'Visakhapatnam',
      period: 'Oct 2021 - Present',
      grade: 'CPGA: 8.39',
    },
    {
      degree: 'Secondary Higher Education',
      institution: 'Narayana Jr College',
      location: 'Vijayawada',
      period: 'Mar 2019 - Mar 2021',
      grade: 'Percentage: 91.7%',
    },
  ];

  const certificates = [
    'Python for Machine Learning | Olympus.MyGreatLearning',
    'Programming with JavaScript | Meta',
    'Fundamentals of C Language | Face Prep',
    'Front End Development | Olympus.MyGreatLearning',
    'Writing and Editing: Drafting | University of Michigan',
    'Object-Oriented Python | Coursera',
    'Introduction to Web Development with HTML, CSS, JavaScript | IBM',
  ];

  return (
    <section id="education" className="py-20 bg-[#0A1828]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">Education</span> & Certificates
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-[#178582]" size={24} />
              <h3 className="text-xl font-semibold text-[#BFA181]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#0A1828] p-6 rounded-lg border border-[#178582]/20"
                >
                  <h4 className="text-lg font-semibold text-[#BFA181] mb-2">
                    {edu.degree}
                  </h4>
                  {edu.specialization && (
                    <p className="text-[#178582] mb-1">
                      Specialization in {edu.specialization}
                    </p>
                  )}
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-[#178582] mt-2 font-medium">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#178582]" size={24} />
              <h3 className="text-xl font-semibold text-[#BFA181]">Certificates</h3>
            </div>
            <div className="bg-[#0A1828] p-6 rounded-lg border border-[#178582]/20">
              <ul className="space-y-3">
                {certificates.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-[#178582] mt-1">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;