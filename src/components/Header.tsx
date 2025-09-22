// src/components/Header.tsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link dan useLocation
import logoImage from '../assets/logo.jpeg'; // Ubah nama file sesuai logomu

// Hapus props yang tidak lagi diperlukan
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook untuk melacak URL saat ini

  // Menyesuaikan menu items dengan rute baru
  const menuItems = [
    { id: 'home', label: 'Beranda', path: '/' },
    { id: 'about', label: 'Tentang Kami', path: '/about' },
    { id: 'services', label: 'Layanan', path: '/services' },
    { id: 'portfolio', label: 'Portofolio', path: '/portfolio' },
    { id: 'contact', label: 'Kontak', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img 
                src={logoImage} 
                alt="Wijaya Property Logo" 
                className="h-8 w-24 sm:h-10 sm:w-32" 
              />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm xl:text-base font-medium transition-colors duration-200 hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 text-sm sm:text-base font-medium transition-colors duration-200 hover:text-blue-600 rounded-lg ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;