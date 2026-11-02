// Skills — keahlian, pendidikan, pengalaman, dan hobi.
// Setiap daftar diambil dari data.js lalu diulang dengan .map()
import { education, experience, skills, hobbies } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Keahlian <span className="gradient-text">Saya</span></h2>

      {/* Daftar keahlian, diulang dari data.js dengan .map() */}
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill glass skill-name">
            <span className="dot" />
            {skill}
          </div>
        ))}
      </div>

      <div className="skills-grid two-col">
        {/* Kartu Pendidikan */}
        <div className="skill glass">
          <h3 className="card-title">🎓 Pendidikan</h3>
          {education.map((e) => (
            <div key={e.title} className="list-row">
              <span>{e.title}</span>
              <span className="year">{e.year}</span>
            </div>
          ))}
        </div>

        {/* Kartu Pengalaman */}
        <div className="skill glass">
          <h3 className="card-title">💼 Pengalaman</h3>
          {experience.map((x) => (
            <div key={x} className="list-row">
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hobi */}
      <div className="skill glass chip-box">
        <h3 className="card-title">🎯 Hobi & Minat</h3>
        <div className="tags">
          {hobbies.map((h) => <span key={h}>{h}</span>)}
        </div>
      </div>
    </section>
  )
}
