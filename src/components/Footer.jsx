import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          {/* Branding */}
          <p className="text-sm md:text-base">
            &copy; 2025 <span className="text-blue-300">Viraj</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
