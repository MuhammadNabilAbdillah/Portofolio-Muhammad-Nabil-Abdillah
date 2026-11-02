// Contact — kutipan dan tautan untuk menghubungi.
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact glass">
        <p className="quote">“{profile.quote}”</p>
        <h2>Let's Work <span className="gradient-text">Together</span></h2>
        <p>
          Terbuka untuk kolaborasi web development, pengawasan konstruksi, coaching,
          maupun peluang kerja profesional lainnya.
        </p>
        <div className="hero-btns">
          {/* Membuka Gmail di tab baru dengan alamat tujuan sudah terisi */}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Kirim Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">Instagram</a>
          <a href={profile.tiktok} target="_blank" rel="noreferrer" className="btn btn-outline">TikTok</a>
        </div>
        <a href={`mailto:${profile.email}`} className="email-text">{profile.email}</a>
      </div>
    </section>
  )
}
