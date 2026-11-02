// Hero — bagian pembuka yang pertama kali dilihat pengunjung.
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="badge">👋 Welcome to My Portfolio</span>
      <h1>
        <span className="gradient-text">{profile.name}</span>
      </h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-sub">{profile.campus}</p>
      <p className="hero-loc">📍 {profile.location}</p>

      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
        <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
      </div>
    </section>
  )
}
