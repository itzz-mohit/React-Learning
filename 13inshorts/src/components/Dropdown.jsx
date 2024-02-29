import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ml-3">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-700 focus:outline-none"
      >
        <span>Categories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-5 h-5 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
          <ul className="py-2">
            <li className="px-4 py-3  hover:bg-gray-200">India</li>
            <li className="px-4 py-3  hover:bg-gray-200">Business</li>
            <li className="px-4 py-3  hover:bg-gray-200">Politics</li>
            <li className="px-4 py-3  hover:bg-gray-200">Sports</li>
            <li className="px-4 py-3  hover:bg-gray-200">Technology</li>
            <li className="px-4 py-3  hover:bg-gray-200">Startups</li>
            <li className="px-4 py-3  hover:bg-gray-200">Entertainment</li>
            <li className="px-4 py-3  hover:bg-gray-200">Hatke</li>
            <li className="px-4 py-3  hover:bg-gray-200">International</li>
            <li className="px-4 py-3  hover:bg-gray-200">Automobile</li>
            <li className="px-4 py-3  hover:bg-gray-200">Science</li>
            <li className="px-4 py-3  hover:bg-gray-200">Travel</li>
            <li className="px-4 py-3  hover:bg-gray-200">Miscellaneous</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
