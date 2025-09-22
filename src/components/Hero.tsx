import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gambar lokal untuk slider
import heroImage1 from '../assets/home.jpeg';
import heroImage2 from '../assets/home2.jpeg';
import heroImage3 from '../assets/home3.jpeg';
import heroImage4 from '../assets/home4.jpeg';

// Array berisi semua gambar yang akan digunakan dalam slider
const images = [heroImage1, heroImage2, heroImage3, heroImage4]; // Tambahkan lebih banyak jika ada

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk berpindah ke gambar berikutnya
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk berpindah ke gambar sebelumnya
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Efek untuk auto-slide
  useEffect(() => {
    const autoSlideTimer = setInterval(nextImage, 5000); // Ganti gambar setiap 5 detik

    // Membersihkan timer saat komponen di-unmount
    return () => clearInterval(autoSlideTimer);
  }, [currentImageIndex]); // Re-run effect setiap kali gambar berganti

  return (
    <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      {/* Mengurangi padding vertikal (py) dari py-20 menjadi py-16 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            {/* Mengubah ukuran font pada headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Wujudkan Properti Impian Anda Bersama{' '}
              <span className="text-blue-600">Wijaya Property</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
             Wijaya Property siap membantu Anda menemukan rumah idaman maupun properti investasi yang sesuai kebutuhan.
             Dengan desain modern dan lokasi strategis, kami hadir untuk mewujudkan masa depan yang lebih baik bagi keluarga Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/portfolio" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                  Lihat Portofolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              {/* Tambahkan tombol ini di bawah tombol "Lihat Portofolio" */}
              <a
                href="/contact"
                className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
                >
                  Konsultasi Gratis
              </a>
            </div>
          </div>
          
          <div className="relative w-full h-96 sm:h-[480px] lg:h-[600px] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Slider Gambar */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Wijaya Property ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Tombol Navigasi Slider */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indikator Titik Slider */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full bg-white transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-75'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian statistik di bawah hero */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">30+</h3>
            <p className="text-sm sm:text-base text-gray-600">Proyek Selesai</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">30+</h3>
            <p className="text-sm sm:text-base text-gray-600">Klien Puas</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">5+</h3>
            <p className="text-sm sm:text-base text-gray-600">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;