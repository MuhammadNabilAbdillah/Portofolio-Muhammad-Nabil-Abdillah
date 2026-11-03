// Projects — menampilkan proyek dalam bentuk kartu bergambar.
// Foto diambil dari folder public/images/ sesuai nama di data.js.
// Kalau foto belum ada, otomatis diganti dengan ikon (lihat onError).
import { useState } from 'react'
import { projects } from '../data'

function ProjectCard({ p, index }) {
  const [imgError, setImgError] = useState(false) // true = foto gagal dimuat
  const number = String(index + 1).padStart(2, '0') // 1 -> "01"

  return (
    <a href={p.link} className="project glass">
      <div className="project-thumb">
        {imgError ? (
          <span className="project-icon">{p.icon}</span>
        ) : (
          <img src={p.image} alt={p.title} onError={() => setImgError(true)} />
        )}
      </div>

      <h3>{p.title}</h3>
      <div className="project-foot">
        <div>
          <p>{p.subtitle}</p>
          <p>{p.tech}</p>
        </div>
        <span className="project-num gradient-text">{number} →</span>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Project <span className="gradient-text">Saya</span></h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
