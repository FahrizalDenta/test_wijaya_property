// src/components/ProjectDetail.tsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Calendar, Users, ChevronRight, X } from 'lucide-react';
import { projectsData } from '../data/projects-data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div className="pt-20 text-center text-gray-600">Proyek tidak ditemukan.</div>;
  }

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-gray-500 text-base mb-8 sm:mb-12">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
            Beranda
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <Link to="/portfolio" className="hover:text-blue-600 transition-colors duration-200">
            Portofolio
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-800 font-medium"> {project.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            {project.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Info Proyek */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Informasi Proyek
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-900 mr-2">Lokasi:</span>
                  {project.location}
                </li>
                <li className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-900 mr-2">Tahun Selesai:</span>
                  {project.year}
                </li>
                <li className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-900 mr-2">Klien:</span>
                  {project.client}
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 pt-4">
              Fitur & Detail
            </h3>
            <ul className="space-y-3">
              {project.specifications.map((spec, index) => (
                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Galeri Foto */}
          {project.images.length > 1 ? (
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Foto ${index + 1}`}
                  className="w-full h-64 rounded-xl shadow-lg object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          ) : (
            <div className="relative">
              <img
                src={project.images[0]}
                alt={`${project.title} - Foto 1`}
                className="w-full h-96 sm:h-[480px] lg:h-[600px] rounded-xl shadow-2xl object-cover cursor-pointer"
                onClick={() => setSelectedImage(project.images[0])}
              />
            </div>
          )}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
