import React from 'react';
import { Award, Target, Users, Heart, MessageCircle } from 'lucide-react';

// Import foto-foto tim dari folder lokal
import muftiUlyaImage from '../assets/MuftiUlya.jpeg';
import srimulyantiImage from '../assets/srimulyanti.jpeg';
import yonikImage from '../assets/yonik.jpeg';
import alfinsatrioImage from '../assets/alfinsatrio.jpeg';
import kaniaImage from '../assets/kania.jpeg';
import feryImage from '../assets/fery.jpeg';
import homeImage from '../assets/home.jpeg'; // Gambar untuk Hero Section About

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Kualitas Terbaik',
      description: 'Kami selalu mengutamakan detail dan presisi di setiap pekerjaan, memastikan hasil yang tahan lama, rapi, dan sesuai harapan klien.'
    },
    {
      icon: Target,
      title: 'Tepat Waktu',
      description: 'Setiap proyek diselesaikan sesuai timeline yang disepakati dengan manajemen proyek yang efektif.'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim ahli konstruksi berpengalaman dengan sertifikasi dan keahlian terdepan.'
    },
    {
      icon: Heart,
      title: 'Kepuasan Klien',
      description: 'Kepuasan klien adalah prioritas utama kami dengan layanan purna jual dan garansi terpercaya.'
    }
  ];

  const team = [
    {
      name: 'Mufti Ulya',
      position: 'CEO',
      image: muftiUlyaImage,
      waNumber: '0895375600138'
    },
    {
      name: 'Sri Mulyanti',
      position: 'CEO',
      image: srimulyantiImage,
      waNumber: '08973436953'
    },
    {
      name: 'Yonik Rianingsih',
      position: 'Administrasi',
      image: yonikImage,
      waNumber: '081329403682'
    },
    {
      name: 'Alfin Satrio',
      position: 'Drafter/Arsitek',
      image: alfinsatrioImage,
      waNumber: '082133809570'
    },
    {
      name: 'Kania Zuardi Putri',
      position: 'Marketing dan Customer Service',
      image: kaniaImage,
      waNumber: '0895330203358'
    },
    {
      name: 'Farid Zaky',
      position: 'Pengawas dan Pelaksana',
      image: feryImage,
      waNumber: '083879942492'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Tentang Wijaya Property
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Wijaya Property adalah mitra terpercaya Anda, hadir di Semarang, Jawa Tengah,
                dengan pengalaman lebih dari 5 tahun. Kami mengkhususkan diri dalam membangun dan merenovasi rumah, 
                kontrakan, jual beli kavling, hingga pemasangan kanopi dan pagar, dengan komitmen kuat pada kualitas, inovasi, dan kepuasan klien.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">30+</h3>
                  <p className="text-sm sm:text-base text-gray-600">Proyek Selesai</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">5+</h3>
                  <p className="text-sm sm:text-base text-gray-600">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Menggunakan gambar lokal untuk About Us */}
              <img
                src={homeImage}
                alt="Construction Site"
                // Atur tinggi tetap dan lebar otomatis, lalu pangkas bagian yang berlebih.
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Visi & Misi Section (Dipindahkan ke sini) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visi Kami
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ingin mewujudkan rumah impian bagi keluarga dalam membangun hunian yang berkualitas. Mewujudkan yang nyaman, bersih, dan didukung lingkungan yang indah. 
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Misi Kami
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  Memberikan pelayanan terbaik dengan sepenuh hati untuk setiap pelanggan
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  Menyediakan layanan legalitas yang jelas, aman, dan terpercaya
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  Mempermudah kepemilikan rumah melalui fasilitas KPR maupun KPR Inhouse yang fleksibel
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  Mewujudkan lingkungan perumahan yang layak huni, aman, dan berkelanjutan untuk masa depan yang lebih baik
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami terhadap excellence tercermin dalam setiap aspek pekerjaan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Tim Profesional Kami
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Dipimpin oleh para ahli konstruksi berpengalaman dengan rekam jejak terbukti 
        dalam industri properti di Semarang, Jawa Tengah.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          {/* Foto dengan efek hover */}
          <div className="relative h-72 w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay gelap di hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          {/* Konten */}
          <div className="p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-blue-600 font-medium mb-3">
              {member.position}
            </p>
            
            {/* Tombol WhatsApp */}
            <a
              href={`https://wa.me/62${member.waNumber.substring(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default About;