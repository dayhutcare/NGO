import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">HopeWorks</span>
          </div>
          <div className="flex space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Events', '/events'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'text-rose-600 border-b-2 border-rose-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;