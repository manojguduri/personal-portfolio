import React from 'react';
import { Code, Cpu, Users } from 'lucide-react';

const Skills = () => {
  const skills = {
    programming: [
      'Java',
      'Python',
      'C',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
    technical: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'Machine Learning',
      'TensorFlow',
      'Git',
      'Linux',
    ],
    soft: [
      'Communication',
      'Adaptability',
      'Teamwork',
      'Time Management',
      'Critical Thinking',
      'Problem Solving',
    ],
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">My</span> Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0A1828]/30 p-6 rounded-lg border border-[#178582]/20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-[#178582]" size={24} />
              <h3 className="text-xl font-semibold text-[#BFA181]">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#178582]/20 text-[#178582] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1828]/30 p-6 rounded-lg border border-[#178582]/20">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-[#178582]" size={24} />
              <h3 className="text-xl font-semibold text-[#BFA181]">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#178582]/20 text-[#178582] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1828]/30 p-6 rounded-lg border border-[#178582]/20">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[#178582]" size={24} />
              <h3 className="text-xl font-semibold text-[#BFA181]">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#178582]/20 text-[#178582] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;