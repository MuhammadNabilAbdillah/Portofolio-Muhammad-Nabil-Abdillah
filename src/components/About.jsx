import { useState } from 'react'
import { profile, stats } from '../data'

export default function About() {
  const [imgError, setImgError] = useState(false) // true = foto gagal dimuat

  return (
    <section id="about" className="section">
      <h2 className="section-title">Tentang <span className="gradient-text">Saya</span></h2>

      <div className="about-grid">
        {/* Foto profil; kalau tidak ada, tampil huruf awal nama */}
        <div className="avatar">
          {imgError ? (
            profile.nickname[0]
          ) : (
            <img src={profile.photo} alt={profile.name} onError={() => setImgError(true)} />
          )}
        </div>

        <div>
          <p className="about-text">{profile.about}</p>

          {/* Mengulang data stats menjadi beberapa kotak */}
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat glass">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}