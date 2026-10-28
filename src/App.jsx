import React, { useState } from 'react';

// FOTO PROFIL & FOTO PROYEK
import fotoProfil from './profil.jpg';
import basketImg from './basket.jpg';
import civilImg from './civil.jpg';
import portoImg from './porto.jpg';

/* ================= DATA ================= */
const email = 'mhmmdnabilabdillah@gmail.com';
const githubUrl = 'https://github.com/MuhammadNabilAbdillah';
const instagramUrl = 'https://instagram.com/mhdnabil.abd';
const tiktokUrl = 'https://tiktok.com/@caramel_macchiatobang';

const heroPoints = ['Laravel & Web Development', 'Pengawas Konstruksi Sipil', 'Licensed Basketball Coach'];

const projects = [
  { no: '01', title: 'Akademi Basket', sub: 'Management & Registration App', tag: 'Laravel / PHP', theme: 'basket', image: basketImg },
  { no: '02', title: 'Supervisi Lapangan', sub: 'Quality Control & Progress Report', tag: 'Sipil / Field', theme: 'civil', image: civilImg },
  { no: '03', title: 'Website Portofolio', sub: 'Laravel API & React.js', tag: 'React / Laravel', theme: 'web', image: portoImg },
];

const education = [
  { name: 'Teknik Informatika – STITEK Bontang', year: '2024 – Now' },
  { name: 'SMA Negeri 1 Bontang', year: '2021 – 24' },
  { name: 'SMP Negeri 1 Bontang', year: '2018 – 21' },
];

const experience = 'Waiters Coffee Shop | Pengawas Kontraktor Sipil | Pelatih Basket Berlisensi (Brother Basketball & SMKN 1) | Administrative Staff CV. Akar (1 Tahun)';

const skills = [
  'PHP', 'LARAVEL', 'MYSQL', 'REACT JS', 'HTML & CSS', 'JAVASCRIPT',
  'FIGMA UI/UX', 'PENGAWASAN KONSTRUKSI', 'BASKETBALL COACHING', 'PROBLEM SOLVING',
  'CUSTOMER SERVICE', 'ADMINISTRATION',
];

// HOBI ANDA (DITAMBAH NYANYI)
const hobbies = [
  'BASKET', 'NGOPI', 'BILLIARD', 'BACA BUKU', 'RENANG', 'BOXING', 'PADEL', 'NYANYI'
];

const processSteps = [
  { title: 'Discover', sub: 'Analisis Kebutuhan', icon: 'search' },
  { title: 'Plan', sub: 'Alur & Struktur Database', icon: 'clipboard' },
  { title: 'Design', sub: 'Wireframe & UI', icon: 'pen' },
  { title: 'Develop', sub: 'Laravel & React', icon: 'code' },
  { title: 'Test', sub: 'Uji Fitur & Perbaikan', icon: 'check' },
  { title: 'Deploy', sub: 'Rilis & Maintenance', icon: 'rocket' },
];

/* ================= ICONS ================= */
const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4h6v3H9zM9 12h6M9 16h4" /></>,
  pen: <><path d="M4 20l4-1 11-11-3-3L5 16z" /><path d="M14 6l3 3" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" /></>,
  check: <><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  rocket: <><path d="M12 3c3 2 5 6 4 11l-4 3-4-3c-1-5 1-9 4-11z" /><circle cx="12" cy="10" r="1.5" /><path d="M8 14l-3 3M16 14l3 3M12 17v4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  github: <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" /></>,
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.5" />,
  pin: <><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" /><circle cx="12" cy="10" r="2" /></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
};

function Icon({ name, className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

/* ================= PROJECT THUMBNAILS ================= */
function ProjectThumb({ theme, image, isDarkMode }) {
  const bg = {
    basket: 'from-[#5a1a08] via-[#a33a12] to-[#1a0a06]',
    civil: 'from-[#3a3f12] via-[#6b7322] to-[#151708]',
    web: 'from-[#2a0508] via-[#7a0d16] to-[#0d0405]',
  }[theme];

  return (
    <div className={`relative h-40 rounded-xl overflow-hidden bg-gradient-to-br ${bg} border ${isDarkMode ? 'border-white/5' : 'border-slate-300'}`}>
      {image ? (
        <img src={image} alt="Project Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      ) : (
        <>
          <div className="absolute left-4 top-4 space-y-1.5">
            <div className="h-2 w-16 rounded bg-white/70" />
            <div className="h-1.5 w-24 rounded bg-white/30" />
            <div className="h-1.5 w-20 rounded bg-white/30" />
          </div>
          <div className="absolute right-5 bottom-0 w-20 h-32 rounded-t-2xl bg-black/70 border-2 border-b-0 border-white/20 p-2 space-y-1.5 group-hover:-translate-y-2 transition duration-500">
            <div className="h-8 rounded bg-white/15" />
            <div className="h-1.5 rounded bg-white/30" />
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
            <div className="h-6 rounded bg-red-600/60" />
          </div>
          <div className="absolute left-4 bottom-4 w-24 h-14 rounded-lg bg-white/10 backdrop-blur border border-white/10" />
        </>
      )}
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div 
      className={`min-h-screen font-['Outfit',sans-serif] selection:bg-red-700 selection:text-white overflow-x-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0a0506] text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
      style={{ scrollBehavior: 'smooth' }}
    >

      {/* ---------- NAVBAR ---------- */}
      <nav className={`w-full border-b relative z-30 sticky top-0 backdrop-blur-md transition-colors duration-300 ${
        isDarkMode ? 'border-white/10 bg-[#0a0506]/90' : 'border-slate-300 bg-white/95 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="leading-tight text-center sm:text-left">
            <p className="text-red-600 font-bold tracking-wide text-sm">WEB DEVELOPER</p>
            <p className={`font-semibold text-xs tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              & PENGAWAS KONSTRUKSI SIPIL
            </p>
          </div>

          {/* Menu Navigasi */}
          <div className={`flex items-center gap-6 text-xs font-semibold tracking-wider ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            <a href="#about" className="hover:text-red-600 transition">ABOUT</a>
            <a href="#projects" className="hover:text-red-600 transition">PROJECTS</a>
            <a href="#education" className="hover:text-red-600 transition">EDUCATION</a>
            <a href="#skills" className="hover:text-red-600 transition">SKILLS</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Tombol Switch Mode */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition flex items-center gap-2 text-xs font-semibold ${
                isDarkMode 
                  ? 'border-white/20 text-yellow-400 hover:bg-white/10' 
                  : 'border-slate-400 text-slate-800 bg-slate-200 hover:bg-slate-300'
              }`}
              title="Toggle Theme"
            >
              <Icon name={isDarkMode ? 'sun' : 'moon'} className="w-4 h-4" />
              <span className="hidden md:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
            </button>

            <a href="#contact" className={`flex items-center gap-2 text-xs font-bold tracking-wider hover:text-red-600 transition ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              AVAILABLE FOR PROJECTS <span className="text-red-600 text-xl leading-none">+</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className={`relative w-full h-[calc(100vh-70px)] min-h-[600px] max-h-[760px] overflow-hidden border-b ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>

        <svg
          className="absolute inset-x-0 top-[3%] w-full h-[64%] z-0 pointer-events-none select-none"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isDarkMode ? "#a10d18" : "#d97706"} />
              <stop offset="100%" stopColor={isDarkMode ? "#3d0408" : "#b91c1c"} />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="300"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="330"
            fontFamily="Anton, sans-serif"
            fill={isDarkMode ? "url(#pf)" : "#c2410c"}
            className={isDarkMode ? "opacity-100" : "opacity-85"}
          >
            PORTFOLIO
          </text>
        </svg>

        <img
          src={fotoProfil}
          alt="Muhammad Nabil Abdillah"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto max-w-none object-contain z-10 grayscale contrast-110 pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskComposite: 'intersect',
          }}
        />

        <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t z-10 pointer-events-none ${
          isDarkMode ? 'from-[#0a0506] via-[#0a0506]/60 to-transparent' : 'from-slate-100 via-slate-100/70 to-transparent'
        }`} />

        <div className="relative z-20 h-full max-w-6xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-end md:justify-between md:items-end gap-8">
          <div className="max-w-sm">
            <p className={`font-['Great_Vibes',cursive] text-5xl sm:text-6xl -mb-1 font-bold ${isDarkMode ? 'text-red-600' : 'text-red-700'}`}>Hello, I'm</p>
            <h1 className={`font-['Anton',sans-serif] uppercase leading-[1.02] text-4xl sm:text-5xl tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Muhammad Nabil Abdillah<br /><span className="text-3xl sm:text-4xl">Web Developer</span>
            </h1>
            <p className={`mt-5 text-sm font-normal leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              Mahasiswa Teknik Informatika yang berfokus pada web development & sistem informasi,
              berpengalaman dalam pengawasan konstruksi sipil, administrasi, hingga kepemimpinan tim.
            </p>
            <p className={`mt-6 flex items-center gap-2 text-xs font-bold tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <Icon name="pin" className="w-4 h-4 text-red-600" /> BASED IN BONTANG, INDONESIA
            </p>
          </div>

          <div className="md:w-64 space-y-5">
            <div className="flex items-start gap-3">
              <span className={`shrink-0 w-12 h-12 rounded-full border grid place-items-center font-bold text-lg text-red-600 ${isDarkMode ? 'border-white/40 bg-white/5' : 'border-slate-500 bg-white shadow-sm'}`}>
                N
              </span>
              <p className={`text-base font-medium leading-snug ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                Turning ideas into powerful digital experiences.
              </p>
            </div>
            {heroPoints.map((p) => (
              <p key={p} className={`flex items-center gap-4 text-base font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                <span className="text-red-600 text-2xl leading-none font-bold">+</span> {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CARD ABOUT ME ---------- */}
      <section id="about" className={`max-w-6xl mx-auto px-6 py-12 border-b scroll-mt-24 ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
        <div className={`relative rounded-2xl overflow-hidden p-8 sm:p-10 border ${
          isDarkMode 
            ? 'border-white/10 bg-gradient-to-br from-[#1a0508] via-[#0a0506] to-[#2a070b]' 
            : 'border-slate-300 bg-white shadow-md'
        }`}>
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-8 h-8 rounded-full border grid place-items-center font-bold text-xs text-red-600 ${isDarkMode ? 'border-red-600/50 bg-red-600/20' : 'border-red-300 bg-red-50'}`}>
                N
              </span>
              <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase">ABOUT ME</h2>
            </div>
            <p className={`text-sm sm:text-base font-normal leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              Saya Muhammad Nabil Abdillah biasa dipanggil Nabil, Saya memiliki individu yang disiplin, bertanggung jawab, dan memiliki motivasi tinggi untuk terus belajar serta berkembang. Mampu bekerja secara mandiri maupun dalam tim dengan komunikasi yang baik. Memiliki ketertarikan besar dalam bidang teknologi informasi dan administrasi, serta berorientasi pada hasil kerja yang berkualitas.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SELECTED PROJECTS ---------- */}
      <section id="projects" className={`max-w-6xl mx-auto px-6 py-12 border-b scroll-mt-24 ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
        <h2 className="text-lg font-bold tracking-wide mb-6">SELECTED PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.no} className="group cursor-pointer">
              <ProjectThumb theme={p.theme} image={p.image} isDarkMode={isDarkMode} />
              <h3 className={`mt-4 text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
              <div className="flex justify-between items-end">
                <div className={`text-xs font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                  <p>{p.sub}</p>
                  <p>{p.tag}</p>
                </div>
                <span className="text-red-600 text-3xl font-light flex items-center gap-1 group-hover:translate-x-1 transition">
                  {p.no} <Icon name="arrow" className="w-6 h-6" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- EDUCATION / SKILLS / HOBBIES / PROCESS / QUOTE ---------- */}
      <section id="education" className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-b scroll-mt-24 ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
        <div className={`lg:col-span-5 px-6 py-10 lg:border-r ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
          <h2 className="text-lg font-bold tracking-wide">EDUCATION & SKILLS</h2>
          <p className="mt-3 text-xs font-bold text-red-600 tracking-wider">EDUCATION</p>
          <div className="mt-3 space-y-3">
            {education.map((e) => (
              <div key={e.name} className="flex justify-between gap-4 text-sm font-medium">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{e.name}</span>
                <span className="text-red-600 text-xs shrink-0 font-bold">{e.year}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs font-bold text-red-600 tracking-wider">EXPERIENCE</p>
          <p className={`mt-2 text-xs font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{experience}</p>
          
          <div id="skills" className="scroll-mt-28">
            <p className="mt-6 text-xs font-bold text-red-600 tracking-wider">SKILLS</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold hover:border-red-600 hover:text-red-600 transition ${
                  isDarkMode ? 'border-white/20 text-slate-300' : 'border-slate-400 text-slate-800 bg-white shadow-sm'
                }`}>
                  {s}
                </span>
              ))}
            </div>

            {/* HOBBIES SECTION */}
            <p className="mt-6 text-xs font-bold text-red-600 tracking-wider">HOBBIES & INTERESTS</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span key={h} className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold hover:border-red-600 hover:text-red-600 transition ${
                  isDarkMode ? 'border-white/20 text-slate-300' : 'border-slate-400 text-slate-800 bg-white shadow-sm'
                }`}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`lg:col-span-3 px-6 py-10 lg:border-r ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
          <h2 className="text-lg font-bold tracking-wide">WORK PROCESS</h2>
          <div className="mt-6 relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-red-600" />
            <div className="space-y-5">
              {processSteps.map((s) => (
                <div key={s.title} className="relative flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-full border border-red-600 grid place-items-center ${isDarkMode ? 'bg-[#0a0506] text-slate-200' : 'bg-white text-slate-900 shadow-sm'}`}>
                    <Icon name={s.icon} className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-sm text-red-600 font-bold">{s.title}</p>
                    <p className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUOTE CARD */}
        <div
          className="lg:col-span-4 px-8 py-10 relative overflow-hidden flex flex-col justify-between"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle at 20% 30%, rgba(160,15,25,.55), transparent 55%), radial-gradient(circle at 80% 70%, rgba(120,10,18,.6), transparent 60%), repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,.25) 0 1px, transparent 1px 3px), #3a070b'
              : 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
          }}
        >
          <div>
            <p className="font-['Anton',sans-serif] text-red-400 text-7xl leading-none">“</p>
            <p className="mt-2 text-lg sm:text-xl font-normal leading-relaxed text-white">
              Today's discipline is tomorrow's foundation. Keep growing, because great results are born from consistency.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="font-['Great_Vibes',cursive] text-4xl text-white">Nabil</p>
            <span className="w-8 h-8 rounded-full border border-red-400/50 bg-red-600/30 grid place-items-center font-bold text-xs text-red-200">
              N
            </span>
          </div>
        </div>
      </section>

      {/* ---------- LET'S WORK TOGETHER / CONTACT ---------- */}
      <footer id="contact" className={`max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
        <div className="lg:col-span-4">
          <div className="flex items-start gap-4">
            <h2 className="text-4xl font-bold leading-tight tracking-wide">LET'S WORK<br />TOGETHER</h2>
            <span className={`w-8 h-8 rounded-full border grid place-items-center font-bold text-xs text-red-600 mt-3 ${isDarkMode ? 'border-red-600/50 bg-red-600/20' : 'border-red-300 bg-red-50'}`}>
              N
            </span>
          </div>
          <p className={`mt-5 text-sm font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Terbuka untuk kolaborasi web development, pengawasan konstruksi, coaching,
            maupun peluang kerja profesional lainnya.
          </p>
          <a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-4 text-xs font-bold tracking-wider text-red-600 hover:text-red-700 transition">
            <span className="w-11 h-11 rounded-full border border-red-600 grid place-items-center">
              <Icon name="arrow" className="w-5 h-5" />
            </span>
            AVAILABLE FOR FREELANCE
          </a>
        </div>

        <div className="lg:col-span-4 space-y-4">
          {[
            { icon: 'mail', label: email, href: `mailto:${email}` },
            { icon: 'github', label: githubUrl.replace('https://', ''), href: githubUrl },
            { icon: 'instagram', label: instagramUrl.replace('https://', ''), href: instagramUrl },
            { icon: 'tiktok', label: tiktokUrl.replace('https://', ''), href: tiktokUrl },
          ].map((c) => (
            <a key={c.icon} href={c.href} target="_blank" rel="noreferrer" className={`flex items-center gap-4 text-sm font-medium hover:text-red-600 group ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              <span className={`w-11 h-11 shrink-0 rounded-full border grid place-items-center group-hover:border-red-600 transition ${isDarkMode ? 'border-white/25' : 'border-slate-400 bg-white shadow-sm'}`}>
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <span className="truncate">{c.label}</span>
            </a>
          ))}
        </div>

        <div className="lg:col-span-4 hidden sm:block">
          <div className="mx-auto w-full max-w-sm">
            <div className={`rounded-t-xl border-[6px] aspect-[16/10] relative overflow-hidden ${isDarkMode ? 'border-[#2a2a2e] bg-[#0a0506]' : 'border-slate-400 bg-slate-200'}`}>
              <svg className="absolute inset-x-0 top-[12%] w-full h-[45%]" viewBox="0 0 1000 300" preserveAspectRatio="none">
                <text x="0" y="300" textLength="1000" lengthAdjust="spacingAndGlyphs" fontSize="330" fontFamily="Anton, sans-serif" fill={isDarkMode ? "#7a0b14" : "#dc2626"}>PORTFOLIO</text>
              </svg>
              <img src={fotoProfil} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80%] grayscale object-contain" />
              <p className={`absolute left-[6%] bottom-[10%] font-['Anton',sans-serif] text-[11px] leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>MUHAMMAD NABIL<br />WEB DEVELOPER</p>
            </div>
            <div className={`h-3 rounded-b-xl -mx-4 ${isDarkMode ? 'bg-gradient-to-b from-[#3a3a3f] to-[#1c1c1f]' : 'bg-gradient-to-b from-slate-400 to-slate-500'}`} />
          </div>
        </div>
      </footer>

      <div className={`max-w-6xl mx-auto px-6 py-6 border-t text-center text-[11px] font-semibold tracking-wider ${isDarkMode ? 'border-white/10 text-slate-500' : 'border-slate-300 text-slate-600'}`}>
        &copy; {new Date().getFullYear()} MUHAMMAD NABIL ABDILLAH. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
}