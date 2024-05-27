import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const FloatingLanguageSelector = ({ onLanguageChange }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 group-hover:text-blue-300">
        <FaGlobe className="w-5 h-5" />
      </button>
      <div className="dropdown-menu hidden group-hover:block mt-2 bg-white rounded-lg shadow-lg">
        <button 
          onClick={() => onLanguageChange('en')} 
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-t-lg">
          English
        </button>
        <button 
          onClick={() => onLanguageChange('fr')} 
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-b-lg">
          Français
        </button>
      </div>
    </div>
  );
};

export default FloatingLanguageSelector;
