// =====================================================
// data.js — Semua isi portofolio disimpan di sini.
// Komponen hanya menampilkan data ini, jadi kalau mau
// mengubah isi website cukup edit file ini saja.
// =====================================================

export const profile = {
  name: 'Muhammad Nabil Abdillah',
  nickname: 'Nabil',
  photo: '/images/foto-profil.jpg', // foto profil di public/images/
  role: 'Web Developer & Pengawas Konstruksi Sipil',
  campus:
    'Mahasiswa Teknik Informatika yang berfokus pada web development & sistem informasi, berpengalaman dalam pengawasan konstruksi sipil, administrasi, hingga kepemimpinan tim.',
  location: 'Bontang, Indonesia',
  about:
    'Saya Muhammad Nabil Abdillah, biasa dipanggil Nabil. Saya pribadi yang disiplin, bertanggung jawab, dan memiliki motivasi tinggi untuk terus belajar serta berkembang. Mampu bekerja secara mandiri maupun dalam tim dengan komunikasi yang baik. Memiliki ketertarikan besar dalam bidang teknologi informasi dan administrasi, serta berorientasi pada hasil kerja yang berkualitas.',
  quote: "Today's discipline is tomorrow's foundation. Keep growing, because great results are born from consistency.",
  email: 'mhmmdnabilabdillah@gmail.com',
  github: 'https://github.com/MuhammadNabilAbdillah',
  instagram: 'https://instagram.com/mhdnabil.abd',
  tiktok: 'https://tiktok.com/@caramel_macchiatobang',
}

// Angka singkat yang tampil di bagian "Tentang"
export const stats = [
  { value: '3', label: 'Proyek' },
  { value: '4', label: 'Pengalaman' },
  { value: '2024', label: 'Mulai Kuliah' },
]

export const education = [
  { title: 'Teknik Informatika – STITEK Bontang', year: '2024 – Sekarang' },
  { title: 'SMA Negeri 1 Bontang', year: '2021 – 2024' },
  { title: 'SMP Negeri 1 Bontang', year: '2018 – 2021' },
]

export const experience = [
  'Waiters Coffee Shop',
  'Pengawas Kontraktor Sipil',
  'Pelatih Basket Berlisensi (Brother Basketball & SMKN 1)',
  'Administrative Staff CV. Akar (1 Tahun)',
]

// level = persentase panjang progress bar (ubah sesuai kemampuan)
export const skills = [
  'HTML & CSS', 'PHP & Laravel', 'MySQL', 'JavaScript', 'React.js', 'Figma UI/UX',
]

export const hobbies = [
  'Basket', 'Ngopi', 'Billiard', 'Baca Buku', 'Renang', 'Boxing', 'Padel', 'Nyanyi',
]

// Foto proyek: simpan gambar di folder public/images/
// lalu tulis namanya di "image", contoh: '/images/akademi-basket.jpg'
export const projects = [
  {
    title: 'Akademi Basket',
    subtitle: 'Management & Registration App',
    tech: 'Laravel / PHP',
    image: '/images/akademi-basket.jpg',
    icon: '🏀',
    link: '#',
  },
  {
    title: 'Supervisi Lapangan',
    subtitle: 'Quality Control & Progress Report',
    tech: 'Sipil / Field',
    image: '/images/supervisi-lapangan.jpg',
    icon: '🏗️',
    link: '#',
  },
  {
    title: 'Website Portofolio',
    subtitle: 'Laravel API & React.js',
    tech: 'React / Laravel',
    image: '/images/website-portofolio.jpg',
    icon: '💼',
    link: '#',
  },
]
