import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0A1828]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">About</span> Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Coding workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-gray-300 mb-6">
              I'm a BTech student at GITAM University, specializing in Electronics and Communications
              Engineering with a focus on AI & ML. With a strong academic background and hands-on
              experience in various technologies, I'm passionate about creating innovative solutions
              that make a difference.
            </p>
            <p className="text-gray-300 mb-6">
              Through my internships and projects, I've gained practical experience in Java
              development, machine learning, and web technologies. I'm constantly learning and
              adapting to new technologies while maintaining a strong foundation in core computer
              science concepts.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[#178582] font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Visakhapatnam, India</p>
              </div>
              <div>
                <h3 className="text-[#178582] font-semibold mb-2">Study</h3>
                <p className="text-gray-300">GITAM University</p>
              </div>
              <div>
                <h3 className="text-[#178582] font-semibold mb-2">Email</h3>
                <p className="text-gray-300">guduri.manoj123@gmail.com</p>
              </div>
              <div>
                <h3 className="text-[#178582] font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+91 630-264-8739</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;