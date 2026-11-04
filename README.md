# 🌐 Portofolio Pribadi - Muhammad Nabil Abdillah

Website portofolio pribadi modern yang dibangun menggunakan **React.js** dan **Vite**. Dirancang dengan tema gelap yang elegan, efek *glassmorphism*, serta tata letak yang sepenuhnya responsif untuk berbagai ukuran perangkat.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework:** [React.js (v18)](https://react.dev/)[cite: 7]
- **Build Tool:** [Vite](https://vitejs.dev/)[cite: 9, 10]
- **Styling:** CSS3 Modern (Custom Properties, Flexbox, Grid, & Glassmorphism)
- **Language:** JavaScript (ES6+)

---

## 📁 Struktur Folder Project

Project ini terorganisasi ke dalam beberapa komponen modular dan file data terpusat agar mudah dikelola dan dikembangkan:

```text
portnabil/
├── index.html            # Halaman HTML utama (titik muat React)[cite: 6, 9]
├── package.json          # Daftar dependensi dan skrip konfigurasi
├── vite.config.js        # Konfigurasi bundler Vite[cite: 9, 10]
└── src/
    ├── main.jsx          # Entry point yang merender komponen utama ke DOM
    ├── App.jsx           # Komponen utama penyusun tata letak halaman[cite: 3, 9]
    ├── data.js           # Pusat penyimpanan data (profil, skill, proyek, dll.)
    ├── index.css         # Styling global, animasi, dan tema
    └── components/       # Kumpulan komponen modular
        ├── Navbar.jsx    # Menu navigasi & pengalih tema (Dark/Light)[cite: 9]
        ├── Hero.jsx      # Bagian perkenalan utama[cite: 9]
        ├── About.jsx     # Informasi tentang saya & statistik[cite: 9]
        ├── Skills.jsx    # Daftar keahlian teknis[cite: 9]
        ├── Projects.jsx  # Galeri kartu proyek[cite: 4, 9]
        └── Contact.jsx   # Informasi kontak[cite: 9]