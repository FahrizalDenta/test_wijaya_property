// src/data/projects-data.ts
import project1_img1 from '../assets/project1/img1.jpeg';
import project1_img2 from '../assets/project1/img2.jpeg';
import project1_img3 from '../assets/project1/img3.jpeg';
import project1_img4 from '../assets/project1/img4.jpeg';

// Impor gambar-gambar tambahan untuk proyek 2, 3, dan 4
import project2_img1 from '../assets/project2/img1.jpeg';
import project2_img2 from '../assets/project2/img2.jpeg';
import project2_img3 from '../assets/project2/img3.jpeg';
import project2_img4 from '../assets/project2/img4.jpeg';
import project3_img1 from '../assets/project3/img1.jpeg';
import project3_img2 from '../assets/project3/img2.jpeg';
import project3_img3 from '../assets/project3/img3.jpeg';
import project3_img4 from '../assets/project3/img4.jpeg';
import project4_img1 from '../assets/project4/img1.jpeg';
import project4_img2 from '../assets/project4/img2.jpeg';
import project4_img3 from '../assets/project4/img3.jpeg';
import project4_img4 from '../assets/project4/img4.jpeg';

// Impor gambar-gambar untuk proyek 5-15 (asumsi setiap proyek memiliki 1 gambar)
import project5_img1 from '../assets/project5/img1.jpeg';
import project6_img1 from '../assets/project6/img1.jpeg';
import project7_img1 from '../assets/project7/img1.jpeg';
import project8_img1 from '../assets/project8/img1.jpeg';
import project9_img1 from '../assets/project9/img1.jpeg';
import project10_img1 from '../assets/project10/img1.jpeg';
import project11_img1 from '../assets/project11/img1.jpeg';
import project12_img1 from '../assets/project12/img1.jpeg';
import project13_img1 from '../assets/project13/img1.jpeg';
import project14_img1 from '../assets/project14/img1.jpeg';
import project15_img1 from '../assets/project15/img1.jpeg';

export const projectsData = [
  {
    id: 1,
    title: ' Pembangunan Rumah Tipe 60',
    location: 'Pucanggading, Demak',
    year: '2023',
    client: 'Pak Wibawa',
    description: 'Pembangunan rumah baru tipe 45 dengan desain minimalis modern, mengutamakan pencahayaan alami dan sirkulasi udara yang baik.',
    specifications: [
      'Luas Lahan: 60m²',
      'Jumlah Kamar: 2',
      'Tipe Bangunan: Minimalis dan Elegan',
      'Fasilitas: Taman, CCTV'
    ],
    images: [project1_img1, project1_img2, project1_img3, project1_img4]
  },
  {
    id: 2,
    title: 'Pembangunan Rumah Tipe 45',
    location: 'Pucanggading, Demak',
    year: '2024',
    client: 'Keluarga Budi Santoso',
    description: 'Pembangunan rumah baru tipe 45 dengan desain minimalis modern, mengutamakan pencahayaan alami dan sirkulasi udara yang baik.',
    specifications: ['Luas bangunan: 45m²', 'Jumlah Kamar: 2', 'Tipe: Minimalis', 'Selesai dalam 5 bulan'],
    images: [project2_img1, project2_img2, project2_img3, project2_img4]
  },
  {
    id: 3,
    title: 'Renovasi Rumah Tipe 36',
    location: 'Gayamsari, Semarang',
    year: '2024',
    client: 'Keluarga Jaya',
    description: 'Renovasi menyeluruh untuk rumah tipe 36 dengan fokus pada efisiensi ruang dan desain modern minimalis. Termasuk perbaikan dapur, kamar mandi, dan penambahan carport.',
    specifications: ['Renovasi Total', 'Luas bangunan: 36m²', 'Selesai dalam 3 bulan'],
    images: [project3_img1, project3_img2, project3_img3, project3_img4]
  },
  {
    id: 4,
    title: 'Pembangunan Rumah Mewah 2 Lantai',
    location: 'Banyumanik, Semarang',
    year: '2023',
    client: 'Keluarga Pratama',
    description: 'Pembangunan rumah mewah 2 lantai dengan arsitektur klasik modern. Dilengkapi dengan kolam renang pribadi dan taman yang luas.',
    specifications: ['Luas bangunan: 300m²', 'Jumlah Lantai: 2', 'Desain: Klasik Modern', 'Fasilitas: Kolam Renang'],
    images: [project4_img1, project4_img2, project4_img3, project4_img4]
  },
  {
    id: 5,
    title: 'Pembangunan Rumah Tipe 70',
    location: 'Tembalang, Semarang',
    year: '2024',
    client: 'Keluarga Susilo',
    description: 'Pembangunan rumah baru tipe 70. Desain rumah ini menonjolkan ruang terbuka yang terintegrasi dengan alam, ideal untuk keluarga muda.',
    specifications: ['Luas bangunan: 70m²', 'Jumlah Kamar: 3', 'Tipe: Modern Tropis', 'Selesai dalam 6 bulan'],
    images: [project5_img1]
  },
  {
    id: 6,
    title: 'Renovasi Rumah Tua Jadi Modern',
    location: 'Ngaliyan, Semarang',
    year: '2023',
    client: 'Keluarga Setiawan',
    description: 'Proyek renovasi ekstensif yang mengubah rumah tua menjadi hunian modern dan fungsional. Termasuk perbaikan struktur, peningkatan desain, dan ekspansi ruangan.',
    specifications: ['Jenis Proyek: Renovasi', 'Fokus: Peningkatan Desain', 'Selesai dalam 4 bulan'],
    images: [project6_img1]
  },
  {
    id: 7,
    title: 'Pembangunan Rumah Tipe 54',
    location: 'Pedurungan, Semarang',
    year: '2023',
    client: 'Keluarga Ahmad',
    description: 'Pembangunan rumah tipe 54 dengan konsep ramah lingkungan. Menggunakan material daur ulang dan sistem hemat energi.',
    specifications: ['Luas bangunan: 54m²', 'Fokus: Ramah Lingkungan', 'Selesai dalam 5 bulan'],
    images: [project7_img1]
  },
  {
    id: 8,
    title: 'Renovasi Dapur dan Kamar Mandi',
    location: 'Ungaran, Semarang',
    year: '2024',
    client: 'Ibu Siti',
    description: 'Renovasi total dapur dan kamar mandi dengan penggantian keramik, sanitasi, dan instalasi air. Menghadirkan ruangan yang modern, bersih, dan fungsional.',
    specifications: ['Area: Dapur & Kamar Mandi', 'Fokus: Interior', 'Selesai dalam 2 minggu'],
    images: [project8_img1]
  },
  {
    id: 9,
    title: 'Pembangunan Rumah Tipe 60',
    location: 'Semarang Kota',
    year: '2024',
    client: 'Keluarga Bima',
    description: 'Pembangunan rumah baru tipe 60 yang menawarkan keseimbangan antara ruang privat dan ruang keluarga. Desain yang efisien dan estetis.',
    specifications: ['Luas bangunan: 60m²', 'Jumlah Kamar: 3', 'Selesai dalam 6 bulan'],
    images: [project9_img1]
  },
  {
    id: 10,
    title: 'Renovasi Eksterior Rumah',
    location: 'Genuk, Semarang',
    year: '2023',
    client: 'Keluarga Pratama',
    description: 'Proyek renovasi eksterior rumah, termasuk pengecatan ulang, perbaikan fasad, dan penataan taman depan. Memberikan tampilan segar dan modern.',
    specifications: ['Jenis Proyek: Renovasi Eksterior', 'Fokus: Fasad dan Taman', 'Selesai dalam 1 bulan'],
    images: [project10_img1]
  },
  {
    id: 11,
    title: 'Pembangunan Rumah Tipe 90',
    location: 'Mranggen, Demak',
    year: '2024',
    client: 'Bapak Deni',
    description: 'Pembangunan rumah tipe 90 dengan desain minimalis. Rumah ini dirancang dengan ruang terbuka yang luas, ideal untuk mengakomodasi kegiatan keluarga.',
    specifications: ['Luas bangunan: 90m²', 'Jumlah Kamar: 3', 'Tipe: Minimalis', 'Selesai dalam 7 bulan'],
    images: [project11_img1]
  },
  {
    id: 12,
    title: 'Proyek Interior Rumah Tinggal',
    location: 'Semarang Kota',
    year: '2024',
    client: 'Ibu Maya',
    description: 'Proyek interior untuk rumah tinggal. Mencakup desain ruang tamu, kamar tidur, dan dapur dengan fokus pada fungsionalitas dan estetika.',
    specifications: ['Area: Interior Rumah', 'Fokus: Desain dan Furnitur', 'Selesai dalam 2 bulan'],
    images: [project12_img1]
  },
  {
    id: 13,
    title: 'Pembangunan Rumah Mungil',
    location: 'Semarang, Jawa Tengah',
    year: '2024',
    client: 'Keluarga Putri',
    description: 'Pembangunan rumah mungil dengan desain kompak dan efisien, cocok untuk lahan terbatas. Menawarkan solusi hunian yang praktis dan modern.',
    specifications: ['Luas bangunan: 30m²', 'Jumlah Kamar: 1', 'Tipe: Tiny House', 'Selesai dalam 3 bulan'],
    images: [project13_img1]
  },
  {
    id: 14,
    title: 'Rumah Tinggal Tipe 50',
    location: 'Mranggen, Demak',
    year: '2024',
    client: 'Bapak Rudi',
    description: 'Pembangunan rumah tinggal baru tipe 50. Desain rumah ini mengutamakan kenyamanan dan pencahayaan alami.',
    specifications: ['Luas bangunan: 50m²', 'Jumlah Kamar: 2', 'Tipe: Modern', 'Selesai dalam 4 bulan'],
    images: [project14_img1]
  },
  {
    id: 15,
    title: 'Renovasi Fasad Rumah',
    location: 'Semarang, Jawa Tengah',
    year: '2024',
    client: 'Bapak Tono',
    description: 'Renovasi pada bagian fasad rumah untuk memberikan tampilan baru dan lebih modern, termasuk perbaikan atap, jendela, dan pengecatan.',
    specifications: ['Jenis Proyek: Renovasi Fasad', 'Fokus: Tampilan Depan', 'Selesai dalam 1 bulan'],
    images: [project15_img1]
  }
];