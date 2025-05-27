import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-[#BFA181]">Sai Manoj Kumar</span>
            <span className="text-white"> Guduri</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8">
            BTech Student & Aspiring Software Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Passionate about building innovative solutions and exploring new technologies.
            Currently focusing on AI/ML and Full Stack Development.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#178582] hover:bg-[#178582]/90 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;