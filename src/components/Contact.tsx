import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const mapAddress = 'Jl. Pucang Gading Raya No.192, Pucanggading, Batursari, Kec. Mranggen, Kabupaten Demak, Jawa Tengah 59567';
  const encodedAddress = encodeURIComponent(mapAddress);
  
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim profesional kami siap membantu dan menjawab setiap pertanyaan Anda.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Informasi Kontak
            </h2>
            <div className="space-y-4 sm:space-y-6">
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Alamat Kantor</h3>
                  <a 
                    href={`http://maps.google.com/?q=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm sm:text-base hover:underline transition-colors duration-200"
                  >
                    Jl. Pucang Gading Raya No.192<br />
                    Pucanggading, Batursari, Kec. Mranggen,<br />
                    Kabupaten Demak, Jawa Tengah 59567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Telepon</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    +62 895 3756 00138
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    +62 895 3302 03358
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    wijayapropertysmg@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Jam Operasional</h3>
                  <div className="text-gray-600 text-sm sm:text-base">
                    <div className="flex">
                      <span className="w-[120px] sm:w-[140px] flex-shrink-0">Senin - Sabtu</span>
                      <span>: 09:00 - 16:00</span>
                    </div>
                    <div className="flex">
                      <span className="w-[120px] sm:w-[140px] flex-shrink-0">Minggu</span>
                      <span>: 10:00 - 15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Kunjungi kantor pusat kami untuk konsultasi langsung dengan tim ahli
            </p>
          </div>
          
          <div className="h-64 sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
            <a 
              href={`http://maps.google.com/?q=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe
                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;