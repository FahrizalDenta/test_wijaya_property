import React from 'react';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects-data';

const Portfolio: React.FC = () => {
  const projects = projectsData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portofolio Proyek Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat koleksi proyek-proyek berkualitas tinggi yang telah kami selesaikan dengan 
            kepuasan klien dan standar kualitas terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
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
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {project.client}
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
      </div>
    </section>
  );
};

export default Portfolio;