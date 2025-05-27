import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&crop=faces" 
        alt="Logo" 
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-[#BFA181] font-bold text-xl">Manoj</span>
    </div>
  );
};

export default Logo;