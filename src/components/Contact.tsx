import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-[#178582]" size={24} />,
      label: 'Email',
      value: 'guduri.manoj123@gmail.com',
      link: 'mailto:guduri.manoj123@gmail.com',
    },
    {
      icon: <Phone className="text-[#178582]" size={24} />,
      label: 'Phone',
      value: '+91 630-264-8739',
      link: 'tel:+916302648739',
    },
    {
      icon: <MapPin className="text-[#178582]" size={24} />,
      label: 'Location',
      value: 'Visakhapatnam, India',
    },
    {
      icon: <Github className="text-[#178582]" size={24} />,
      label: 'GitHub',
      value: 'github.com/manojguduri',
      link: 'https://github.com/manojguduri',
    },
    {
      icon: <Linkedin className="text-[#178582]" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manoj-kumar-guduri/',
      link: 'https://linkedin.com/in/manoj-kumar-guduri/',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#BFA181]">Get in</span> Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-[#0A1828]/30 rounded-lg border border-[#178582]/20 hover:border-[#178582]/50 transition-colors"
              >
                <div className="p-2 bg-[#178582]/20 rounded-lg">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-[#BFA181] font-medium">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#178582] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0A1828]/30 p-6 rounded-lg border border-[#178582]/20">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#BFA181] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0A1828] border border-[#178582]/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#178582]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#BFA181] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0A1828] border border-[#178582]/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#178582]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#BFA181] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#0A1828] border border-[#178582]/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#178582]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#178582] text-white py-3 px-6 rounded-lg hover:bg-[#178582]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;