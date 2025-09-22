// src/components/Home.tsx
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import { projectsData } from '../data/projects-data'; // Mengimpor data proyek

const Home: React.FC = () => {
  // Hanya ambil 6 proyek pertama untuk ditampilkan di halaman beranda
  const recentProjects = projectsData.slice(0, 6);

  return (
    <>
      <Hero />
      <Services />

      {/* Bagian Portofolio untuk Halaman Utama */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proyek Terbaru
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek pilihan kami yang telah berhasil diselesaikan
              dengan kepuasan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/projects/${project.id}`}
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Lihat Detail
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol "Lihat Proyek Lainnya" */}
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Lihat Proyek Lainnya
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;