# portnabil

Website portofolio sederhana dengan **React.js** (dibuat menggunakan **Vite**).

## Cara menjalankan

Pastikan Node.js (versi 18 ke atas) sudah terinstal, lalu buka terminal di folder `portnabil`:

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Struktur folder

```
portnabil/
├── index.html            → halaman HTML utama, berisi <div id="root">
├── package.json          → daftar library & perintah (dev, build)
├── vite.config.js        → pengaturan Vite
└── src/
    ├── main.jsx          → titik awal, merender <App /> ke #root
    ├── App.jsx           → menyusun semua komponen
    ├── data.js           → SEMUA isi website (nama, skill, proyek, kontak)
    ├── index.css         → semua tampilan (warna, layout, responsif)
    └── components/
        ├── Navbar.jsx    → menu atas + tombol Dark/Light mode
        ├── Hero.jsx      → bagian pembuka
        ├── About.jsx     → tentang saya + statistik
        ├── Skills.jsx    → keahlian dengan progress bar
        ├── Projects.jsx  → kartu proyek
        └── Contact.jsx   → tautan kontak
```

## Penjelasan singkat (untuk presentasi)

1. **Komponen** — Website dipecah menjadi beberapa komponen kecil (Navbar, Hero, About, dll.) agar kode rapi dan mudah dirawat. `App.jsx` hanya menyusunnya dari atas ke bawah.
2. **Data terpisah** — Isi website disimpan di `data.js`. Komponen mengambil data dengan `import`, lalu menampilkannya. Kalau isi berubah, cukup edit `data.js` tanpa menyentuh komponen.
3. **`.map()`** — Dipakai untuk mengulang data (daftar skill, proyek, statistik) menjadi elemen tampilan, sehingga tidak perlu menulis HTML berulang-ulang.
4. **`useState`** — Dipakai di Navbar untuk menyimpan kondisi menu HP (terbuka/tertutup). Saat tombol ☰ ditekan, state berubah dan React otomatis memperbarui tampilan.
5. **Props/style dinamis** — Lebar progress bar di Skills diatur dari nilai `level` dengan `style={{ width: level + '%' }}`.
6. **Tampilan modern** — Tema gelap, teks gradasi, dan efek kaca (*glassmorphism*) dengan `backdrop-filter: blur()`.
7. **Responsif** — Dengan `@media (max-width: 768px)`, tata letak menyesuaikan layar HP dan menu berubah menjadi tombol ☰.
8. **Dark / Light mode** — Tombol di Navbar mengubah state `theme`. `useEffect` memasang atribut `data-theme` di tag `<html>`, lalu CSS mengganti nilai variabel warna (`[data-theme='light'] { ... }`). Pilihan tema disimpan di `localStorage` sehingga tetap sama saat halaman dibuka lagi.
