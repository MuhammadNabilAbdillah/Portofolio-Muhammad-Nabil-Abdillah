# Portofolio - Muhammad Nabil Abdillah

## Cara menjalankan (Windows, terminal VS Code)
1. Buka folder `portofolio-nabil` ini di VS Code (File > Open Folder).
2. Buka terminal (Ctrl + `), lalu jalankan satu per satu:

   npm.cmd install
   npm.cmd install-scripts approve esbuild
   npm.cmd rebuild esbuild
   npm.cmd run dev

3. Buka alamat yang muncul (misal http://localhost:5173).

## Menambahkan foto (nanti)
1. Taruh foto di `src/profil.png` (sebaiknya tanpa background, pakai remove.bg).
2. Di `src/App.jsx` baris atas: hapus `//` di depan `import fotoProfil ...`
   dan hapus baris `const fotoProfil = null;`.
