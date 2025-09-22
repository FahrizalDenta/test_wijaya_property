import React from 'react';
import { Home, Building, Hammer, Wrench, Truck, Shield, LayoutGrid, Fence, Car, Key, Handshake } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Membangun Rumah',
      description: 'Layanan pembangunan rumah baru, mulai dari perencanaan arsitektur hingga serah terima kunci.',
      features: ['Desain Arsitektur', 'Izin Mendirikan Bangunan', 'Pembangunan & Interior']
    },
    {
      icon: Wrench,
      title: 'Renovasi Rumah',
      description: 'Perbaikan dan pembaruan struktur maupun desain rumah agar terlihat lebih modern dan fungsional.',
      features: ['Perbaikan Struktural', 'Peningkatan Desain', 'Ekspansi Ruangan']
    },
    {
      icon: Building,
      title: 'Kontrakan',
      description: 'Menyediakan jasa pembangunan unit kontrakan atau kos-kosan dengan berbagai tipe.',
      features: ['Konstruksi Unit', 'Fasilitas Umum', 'Desain Efisien']
    },
    {
      icon: Handshake,
      title: 'Jual Beli Kavling',
      description: 'Membantu proses jual beli tanah kavling siap bangun di lokasi strategis.',
      features: ['Pencarian Lokasi', 'Survei Lahan', 'Proses Legalitas']
    },
    {
      icon: Fence,
      title: 'Pasang Pagar',
      description: 'Jasa pemasangan pagar dengan beragam material untuk keamanan dan estetika properti Anda.',
      features: ['Pagar Besi', 'Pagar Minimalis', 'Pagar Otomatis']
    },
    {
      icon: Car,
      title: 'Pasang Kanopi',
      description: 'Pemasangan kanopi modern untuk melindungi area carport atau teras dari cuaca.',
      features: ['Kanopi Baja Ringan', 'Kanopi Alderon', 'Desain Custom']
    },
      {
      icon: Key,
      title: 'Sewa Apartemen',
      description: 'Layanan penyewaan unit apartemen di berbagai lokasi yang nyaman.',
      features: ['Unit Harian', 'Unit Bulanan', 'Fasilitas Lengkap']
    },
      {
      icon: Hammer, // Atau icon lain yang relevan seperti Wrench, Truck, atau Building
      title: 'Jasa Sewa Scaffolding',
      description: 'Menyediakan layanan penyewaan perancah (scaffolding) untuk mendukung berbagai proyek konstruksi.',
      features: ['Sewa Harian', 'Sewa Bulanan', 'Instalasi & Pembongkaran']
    },
    {
      icon: LayoutGrid, // Ikon untuk paving
      title: 'Pemasangan Jalan Paving',
      description: 'Jasa profesional pemasangan jalan paving untuk halaman, jalan perumahan, atau area komersial.',
      features: ['Paving Blok', 'Batu Alam', 'Paving Berwarna', 'Desain Pola Khusus']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            // Mengubah div menjadi a (tautan) agar seluruh kartu dapat diklik
            <a
              href="#" // Ganti dengan URL halaman layanan detail jika ada
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Tombol 'Pelajari Lebih Lanjut' dihilangkan karena seluruh kartu sudah menjadi tautan */}
            </a>
          ))}
        </div>
        {/* Tombol 'Konsultasi Proyek Anda' dihilangkan untuk tampilan yang lebih bersih */}
      </div>
    </section>
  );
};

export default Services;