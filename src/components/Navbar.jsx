// Navbar — menu navigasi di bagian atas + tombol Dark/Light mode.
// useState dipakai untuk:
//   1. open  → membuka/menutup menu di layar HP
//   2. theme → menyimpan tema yang dipilih ('dark' atau 'light')
import { useState, useEffect } from 'react'
import { profile } from '../data'

const menu = ['About', 'Skills', 'Projects', 'Contact']

// Ambil tema terakhir yang disimpan di browser (default: dark)
function getSavedTheme() {
  try {
    return localStorage.getItem('theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getSavedTheme)

  // Setiap kali theme berubah: pasang atribut data-theme di <html>
  // agar CSS memakai warna yang sesuai, lalu simpan pilihannya.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* abaikan jika browser tidak mengizinkan */
    }
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        {profile.nickname}<span>.</span>
      </a>

      <div className="nav-right">
        <ul className={open ? 'nav-links open' : 'nav-links'}>
          {menu.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol ganti tema */}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Tombol menu, hanya muncul di layar kecil */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
