import React from 'react';
import { Link } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'manage';
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a
              href="https://tradfiwife.com"
              className={`flex items-center space-x-2 ${
                currentPage === 'home'
                  ? 'cursor-default opacity-50'
                  : 'hover:text-blue-200 transition-colors duration-200'
              }`}
              onClick={currentPage === 'home' ? (e) => e.preventDefault() : undefined}
            >
              <Link className="h-5 w-5" />
              <span className="font-semibold">Home</span>
            </a>
            <a
              href="https://manage.tradfiwife.com"
              className={`flex items-center space-x-2 ${
                currentPage === 'manage'
                  ? 'cursor-default opacity-50'
                  : 'hover:text-blue-200 transition-colors duration-200'
              }`}
              onClick={currentPage === 'manage' ? (e) => e.preventDefault() : undefined}
            >
              <Link className="h-5 w-5" />
              <span className="font-semibold">Manage</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;