// App.jsx — Komponen utama.
// Tugasnya hanya menyusun komponen-komponen lain dari atas ke bawah.
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Muhammad Nabil Abdillah · Dibuat dengan React.js
      </footer>
    </>
  )
}
