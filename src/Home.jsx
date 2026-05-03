import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { translations } from './i18n';
import logo from './assets/Logo.png';
import prototip from './assets/Prototip.jpeg';
import heroBg from './assets/hero_bg.png';

/* ═══════════════════════════════════════════
   CANVAS PARTICLES COMPONENT
═══════════════════════════════════════════ */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const COLORS = ['#00B4B4', '#F4A827', '#00B4B4', '#00B4B4'];
    const NUM = Math.floor((W * H) / 14000);

    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const LINK_DIST = 130;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00B4B4';
            ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

/* ═══════════════════════════════════════════
   MOUSE GLOW COMPONENT
═══════════════════════════════════════════ */
function MouseGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}

/* ═══════════════════════════════════════════
   ANIMATED COUNTER COMPONENT
═══════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
        const isFloat = target.includes('.');
        const duration = 1800;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const cur = eased * numTarget;
          setValue(isFloat ? cur.toFixed(1) : Math.floor(cur));
          if (progress < 1) requestAnimationFrame(animate);
          else setValue(target.replace(/[0-9.]+/, isFloat ? numTarget.toFixed(1) : numTarget));
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   REVEAL HOOK
═══════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('active'); },
      { threshold: 0.10 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MARQUEE TICKER
═══════════════════════════════════════════ */
function Marquee({ items }) {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SVG ANIMATED WHEEL (corner decoration)
═══════════════════════════════════════════ */
function BikeWheelSVG() {
  return (
    <svg className="hero-svg-wheel" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="90" stroke="#00B4B4" strokeWidth="1.5" strokeDasharray="4 7" opacity="0.35" />
      <circle cx="100" cy="100" r="68" stroke="#00B4B4" strokeWidth="1" opacity="0.15" />
      <circle cx="100" cy="100" r="10" fill="#00B4B4" opacity="0.4" />
      <circle cx="100" cy="100" r="5" fill="#F4A827" opacity="0.8" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line key={i}
            x1={100 + 10 * Math.cos(angle)} y1={100 + 10 * Math.sin(angle)}
            x2={100 + 68 * Math.cos(angle)} y2={100 + 68 * Math.sin(angle)}
            stroke="#00B4B4" strokeWidth="0.7" opacity="0.28"
          />
        );
      })}
      <circle cx="100" cy="100" r="90" stroke="url(#glowArcCorner)" strokeWidth="3" strokeDasharray="60 502" />
      <defs>
        <linearGradient id="glowArcCorner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B4B4" stopOpacity="1" />
          <stop offset="100%" stopColor="#F4A827" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   BIKE LED OVERLAY — animated LEDs on bike
═══════════════════════════════════════════ */
function BikeLEDOverlay() {
  // Two animated wheel rings + a frame LED strip
  // Positioned to match the upscaled hero image: bike on the left ~0-50% of width
  const R_outer = 88;   // rim radius (viewBox units)
  const R_inner = 12;   // hub radius
  const cx = 100; const cy = 100;
  return (
    <svg
      className="bike-led-overlay"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Teal rim glow gradient */}
        <radialGradient id="rimGlow" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#00B4B4" stopOpacity="0" />
          <stop offset="100%" stopColor="#00B4B4" stopOpacity="0.18" />
        </radialGradient>

        {/* Moving arc mask */}
        <filter id="ledBlur">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
        <filter id="ledBlurSoft">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Ambient rim fill glow */}
      <circle cx={cx} cy={cy} r={R_outer} fill="url(#rimGlow)" />

      {/* Static dim rim outline */}
      <circle cx={cx} cy={cy} r={R_outer} stroke="#00B4B4" strokeWidth="1" opacity="0.22" />

      {/* ANIMATED TEAL ARC — running around rim (CSS animation via className) */}
      <circle
        cx={cx} cy={cy} r={R_outer}
        stroke="#00B4B4"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="48 508"
        opacity="0.9"
        filter="url(#ledBlur)"
        className="led-arc-teal"
      />
      {/* Second arc offset for double-LED effect */}
      <circle
        cx={cx} cy={cy} r={R_outer}
        stroke="#00e5e5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="24 532"
        opacity="0.7"
        filter="url(#ledBlur)"
        className="led-arc-teal-2"
      />

      {/* ANIMATED AMBER ARC — chases the teal one */}
      <circle
        cx={cx} cy={cy} r={R_outer}
        stroke="#F4A827"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="20 536"
        opacity="0.75"
        filter="url(#ledBlur)"
        className="led-arc-amber"
      />

      {/* Inner hub LED ring */}
      <circle
        cx={cx} cy={cy} r={R_inner + 4}
        stroke="#00B4B4"
        strokeWidth="2"
        strokeDasharray="8 12"
        opacity="0.6"
        className="led-hub-spin"
      />
      {/* Hub center amber dot */}
      <circle cx={cx} cy={cy} r="5" fill="#F4A827" opacity="0.9" filter="url(#ledBlurSoft)" className="led-hub-pulse" />
      <circle cx={cx} cy={cy} r="3" fill="#fff" opacity="0.8" />

      {/* LED dot on rim — traveling highlight */}
      <circle r="4" fill="#00B4B4" filter="url(#ledBlur)" opacity="0.95" className="led-dot-travel">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          path={`M ${cx + R_outer} ${cy} A ${R_outer} ${R_outer} 0 1 1 ${cx + R_outer - 0.001} ${cy}`}
        />
      </circle>
      {/* Amber dot chasing behind */}
      <circle r="3" fill="#F4A827" filter="url(#ledBlur)" opacity="0.8" className="led-dot-amber">
        <animateMotion
          dur="2.4s"
          begin="-0.8s"
          repeatCount="indefinite"
          path={`M ${cx + R_outer} ${cy} A ${R_outer} ${R_outer} 0 1 1 ${cx + R_outer - 0.001} ${cy}`}
        />
      </circle>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════ */
function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const toggleLanguage = () => setLang(lang === 'en' ? 'ro' : 'en');

  const marqueeItems = lang === 'en'
    ? ['Smart Locks', 'Campus Hubs', 'Web App', 'Student Plans', 'Cluj-Napoca', 'Zero Friction', 'IoT Bikes', 'UTCN']
    : ['Lacăte Smart', 'Stații Campus', 'Web App', 'Plan Studenți', 'Cluj-Napoca', 'Fără Fricțiune', 'Biciclete IoT', 'UTCN'];

  return (
    <div className="app-container">

      {/* Global mouse glow */}
      <MouseGlow />

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <img src={logo} alt="Movio Logo" />
          </a>
          <ul className="nav-links">
            <li><a href="#problem">{t.nav.theProblem}</a></li>
            <li><a href="#how-it-works">{t.nav.howItWorks}</a></li>
            <li><a href="#validation">{t.nav.validation}</a></li>
            <li><a href="#product">{t.nav.product}</a></li>
            <li><a href="#roadmap">{t.nav.roadmap}</a></li>
            <li><Link to="/business-plan" className="text-accent" style={{ fontWeight: 600 }}>Business Plan</Link></li>
          </ul>
          <button className="btn btn-lang" onClick={toggleLanguage} id="lang-toggle">
            {t.nav.languageToggle}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header
        className="hero"
        id="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Particle canvas layer */}
        <ParticleCanvas />

        {/* Gradient overlays */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Bike LED overlays — calibrated to actual wheel positions in hero_bg.png */}
        <div className="bike-led-wrap bike-led-front">
          <BikeLEDOverlay />
        </div>
        <div className="bike-led-wrap bike-led-rear">
          <BikeLEDOverlay />
        </div>

        {/* Decorative SVG wheel top-right */}
        <div className="hero-wheel-corner">
          <BikeWheelSVG />
        </div>

        <div className="hero-inner container">
          <div className="hero-spacer" aria-hidden="true" />

          <div className="hero-text-col">
            <div className="hero-tag hero-tag-anim">
              <span className="tag-pulse" />
              {t.hero.tag}
            </div>
            <h1 className="hero-headline">
              <span className="hero-line-1">{t.hero.line1}</span>
              <br />
              <span className="headline-teal glow-text">{t.hero.line2}</span>
            </h1>
            <p className="hero-sub">{t.hero.subheadline}</p>
            <div className="hero-actions">
              <a href="#product" className="btn btn-primary ripple" id="hero-concept-btn">{t.hero.btnConcept}</a>
              <Link to="/business-plan" className="btn btn-outline" id="hero-business-plan-btn">See Business Plan</Link>
            </div>

            {/* Mini stats row in hero */}
            <div className="hero-mini-stats">
              <div className="hms-item">
                <span className="hms-num text-teal">128</span>
                <span className="hms-label">{lang === 'en' ? 'Responses' : 'Răspunsuri'}</span>
              </div>
              <div className="hms-sep" />
              <div className="hms-item">
                <span className="hms-num text-accent">79.7%</span>
                <span className="hms-label">{lang === 'en' ? 'Approval' : 'Aprobare'}</span>
              </div>
              <div className="hms-sep" />
              <div className="hms-item">
                <span className="hms-num text-teal">42</span>
                <span className="hms-label">{lang === 'en' ? 'On waitlist' : 'Pe waitlist'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-line"><div className="scroll-dot" /></div>
        </div>
      </header>

      {/* ── MARQUEE ── */}
      <Marquee items={marqueeItems} />

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="how-section dot-grid-bg">
        <div className="container">
          <Reveal><h2 className="section-title text-teal">{t.howItWorks.title}</h2></Reveal>
          <Reveal delay={60}><div className="section-rule teal-rule" /></Reveal>
          <div className="steps-row">
            {['step1', 'step2', 'step3'].map((s, i) => (
              <Reveal key={s} delay={i * 110}>
                <div className="step-pill" id={`step-${i + 1}`}>
                  <div className="step-icon-wrap">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-glyph">{['📱', '📍', '🚲'][i]}</span>
                  </div>
                  <p className="step-label">{t.howItWorks[s]}</p>
                  <div className="step-connector" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLANTED PRICING BANNER ── */}
      <div className="slant-wrap">
        <div className="slant-band">
          <div className="slant-inner container">
            <div className="slant-item">
              <span className="slant-big">{t.pricing.planName}</span>
            </div>
            <div className="slant-divider" />
            <div className="slant-item">
              <span className="slant-small">{t.pricing.onlyLabel}</span>
              <span className="slant-price">{t.pricing.price}</span>
            </div>
            <div className="slant-divider" />
            <div className="slant-item">
              <span className="slant-big">{t.pricing.freeMinutes}</span>
            </div>
            <div className="slant-divider" />
            <div className="slant-item">
              <span className="slant-big">{t.pricing.access247}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM ── */}
      <section id="problem" className="problem-section dot-grid-bg">
        <div className="container">
          <Reveal><h2 className="section-title text-accent">{t.problem.title}</h2></Reveal>
          <Reveal delay={60}><div className="section-rule accent-rule" /></Reveal>
          <Reveal delay={80}><p className="section-desc">{t.problem.description}</p></Reveal>
          <div className="problem-grid">
            {t.problem.list.map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="problem-card glow-card" id={`problem-card-${i}`}>
                  <span className="accent-num">0{i + 1}</span>
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALIDATION ── */}
      <section id="validation" className="validation-section">
        <div className="container">
          <Reveal><h2 className="section-title text-accent">{t.validation.title}</h2></Reveal>
          <Reveal delay={60}><div className="section-rule accent-rule" /></Reveal>
          <Reveal delay={80}><p className="section-desc">{t.validation.description}</p></Reveal>
          <div className="stats-grid">
            {t.validation.cards.map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="stat-card glow-card-teal" id={`stat-card-${i}`}>
                  <div className="stat-num text-teal">
                    <AnimatedCounter target={card.number} />
                  </div>
                  <div className="stat-label">{card.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={340}>
            <p className="stat-details">{t.validation.details}</p>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section id="product" className="product-section">
        <div className="container product-grid">
          <div className="product-text">
            <Reveal>
              <h2 className="section-title text-teal" style={{ textAlign: 'left' }}>{t.product.title}</h2>
            </Reveal>
            <Reveal delay={40}><div className="section-rule teal-rule" style={{ margin: '0 0 2rem' }} /></Reveal>
            <Reveal delay={80}>
              <p className="section-desc" style={{ textAlign: 'left', margin: '0 0 2rem' }}>{t.product.description}</p>
            </Reveal>
            <ul className="feature-list">
              {t.product.features.map((f, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li id={`feature-${i}`}>
                    <span className="feature-dot" />
                    <div>
                      <strong>{f.title}</strong>
                      <span>{f.text}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120} className="product-img-col">
            <div className="product-img-frame">
              <img src={prototip} alt="Prototip Movio Hub" className="product-img" loading="lazy" />
              <div className="product-img-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BUSINESS MODEL ── */}
      <section id="business" className="business-section dot-grid-bg">
        <div className="container">
          <Reveal><h2 className="section-title">{t.businessModel.title}</h2></Reveal>
          <Reveal delay={60}><div className="section-rule teal-rule" /></Reveal>
          <Reveal delay={80}><p className="section-desc">{t.businessModel.description}</p></Reveal>
          <div className="biz-grid">
            <Reveal delay={100}>
              <div className="biz-card" id="biz-b2c">
                <div className="biz-badge teal-badge">B2C</div>
                <h3 className="text-teal">{t.businessModel.b2c.title}</h3>
                <p>{t.businessModel.b2c.text}</p>
                <div className="biz-accent-line teal-line" />
              </div>
            </Reveal>
            <Reveal delay={190}>
              <div className="biz-card" id="biz-b2b">
                <div className="biz-badge accent-badge">B2B</div>
                <h3 className="text-accent">{t.businessModel.b2b.title}</h3>
                <p>{t.businessModel.b2b.text}</p>
                <div className="biz-accent-line accent-line" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" className="roadmap-section">
        <div className="container">
          <Reveal><h2 className="section-title text-accent">{t.roadmap.title}</h2></Reveal>
          <Reveal delay={60}><div className="section-rule accent-rule" /></Reveal>
          <div className="timeline">
            {[1, 2, 3].map((y, i) => (
              <Reveal key={y} delay={i * 130}>
                <div className="tl-item" id={`tl-year-${y}`}>
                  <div className="tl-year text-teal">{t.roadmap[`year${y}`]}</div>
                  <div className="tl-dot" />
                  <div className="tl-content">
                    <p>{t.roadmap[`year${y}Text`]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-badge">{lang === 'en' ? 'Ready to ride?' : 'Gata să mergi?'}</div>
          <blockquote className="cta-quote">{t.cta.quote}</blockquote>
          <a href="#hero" className="btn btn-cta" id="cta-main-btn">{t.cta.btn} →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="Movio Logo" className="footer-logo" />
            <p className="text-gray">{t.footer.competition}</p>
          </div>
          <div className="footer-mid">
            <ul className="footer-links">
              <li><a href="#problem">{t.nav.theProblem}</a></li>
              <li><a href="#how-it-works">{t.nav.howItWorks}</a></li>
              <li><a href="#validation">{t.nav.validation}</a></li>
              <li><a href="#product">{t.nav.product}</a></li>
              <li><a href="#roadmap">{t.nav.roadmap}</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <strong>{t.footer.team}</strong>
            <p className="text-gray">{t.footer.university}</p>
          </div>
        </div>
        <div className="footer-line" />
        <p className="footer-copy text-gray">© 2026 Movio · JA BizzFactory / GEN-E</p>
      </footer>
    </div>
  );
}

export default Home;
