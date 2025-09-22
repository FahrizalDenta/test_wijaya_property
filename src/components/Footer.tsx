import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'; // Menghapus Linkedin karena tidak digunakan
import { Link } from 'react-router-dom'; // Mengimpor komponen Link
import logoImage from '../assets/logo.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Link to="/">
                <img 
                  src={logoImage} 
                  alt="Wijaya Property Logo" 
                  className="h-8 w-24 sm:h-10 sm:w-32"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              WIJAYA PROPERTY
              Solusi Hunian Nyaman Dan Terpercaya
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/wijaya_property.smg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 sm:p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/wijayaproperty.smg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 sm:p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="mailto:wijayapropertysmg@gmail.com" className="bg-gray-800 p-2 sm:p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          {/* Tautan Cepat */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Tautan Cepat</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Layanan Kami */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Layanan Kami</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Membangun Rumah
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Renovasi Rumah
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Kontrakan
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Jual Beli Kavling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Pasang Pagar
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Pasang Kanopi
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Sewa Apartemen
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Jasa Sewa Scaffolding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Pemasangan Jalan Paving
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Info Kontak */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Hubungi Kami</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Jl. Pucang Gading Raya No.192<br />
                    Pucanggading, Batursari, Kec. Mranggen, Kabupaten Demak, Jawa Tengah 59567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">+62 895 3756 00138</p>
                  <p className="text-gray-300 text-sm sm:text-base">+62 895 3302 03358</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3" />
                <div>
                  <a href="mailto:wijayapropertysmg@gmail.com" className="text-gray-300 text-sm sm:text-base hover:underline transition-colors duration-200">wijayapropertysmg@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Wijaya Property. All rights reserved.
            </div>
            <div>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;