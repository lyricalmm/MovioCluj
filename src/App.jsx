import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { translations } from './i18n';
import logo from './assets/Logo.png';
import prototip from './assets/Prototip.jpeg';
import heroBg from './assets/hero_bg_v2.png';

/* ── Reusable hook: reveal element when in viewport ── */
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

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const toggleLanguage = () => setLang(lang === 'en' ? 'ro' : 'en');

  return (
    <div className="app-container">

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
        {/* Gradient overlays for seamless blending */}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-inner container">
          {/* Empty left column — bike lives in the bg image */}
          <div className="hero-spacer" aria-hidden="true" />

          {/* Text right column */}
          <div className="hero-text-col">
            <div className="hero-tag hero-tag-anim">{t.hero.tag}</div>
            <h1 className="hero-headline">
              {t.hero.line1}
              <br />
              <span className="headline-teal">{t.hero.line2}</span>
            </h1>
            <p className="hero-sub">{t.hero.subheadline}</p>
            <div className="hero-actions">
              <a href="#product" className="btn btn-primary" id="hero-concept-btn">{t.hero.btnConcept}</a>
              <a href="#validation" className="btn btn-outline" id="hero-validation-btn">{t.hero.btnValidation}</a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-dot" />
        </div>
      </header>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="how-section">
        <div className="container">
          <Reveal><h2 className="section-title text-teal">{t.howItWorks.title}</h2></Reveal>
          <div className="steps-row">
            {['step1', 'step2', 'step3'].map((s, i) => (
              <Reveal key={s} delay={i * 100}>
                <div className="step-pill" id={`step-${i + 1}`}>
                  <div className="step-icon-wrap">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-glyph">{['📱', '📍', '🚲'][i]}</span>
                  </div>
                  <p className="step-label">{t.howItWorks[s]}</p>
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
      <section id="problem" className="problem-section">
        <div className="container">
          <Reveal><h2 className="section-title text-accent">{t.problem.title}</h2></Reveal>
          <Reveal delay={80}><p className="section-desc">{t.problem.description}</p></Reveal>
          <div className="problem-grid">
            {t.problem.list.map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="problem-card" id={`problem-card-${i}`}>
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
          <Reveal delay={80}><p className="section-desc">{t.validation.description}</p></Reveal>
          <div className="stats-grid">
            {t.validation.cards.map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="stat-card" id={`stat-card-${i}`}>
                  <div className="stat-num text-teal">{card.number}</div>
                  <div className="stat-label">{card.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <p className="stat-details">{t.validation.details}</p>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section id="product" className="product-section">
        <div className="container product-grid">
          <div className="product-text">
            <Reveal>
              <h2 className="section-title text-teal" style={{ textAlign: 'left' }}>
                {t.product.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-desc" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
                {t.product.description}
              </p>
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
            <img
              src={prototip}
              alt="Prototip Movio Hub"
              className="product-img"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ── BUSINESS MODEL ── */}
      <section id="business" className="business-section">
        <div className="container">
          <Reveal><h2 className="section-title">{t.businessModel.title}</h2></Reveal>
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
            <Reveal delay={180}>
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
          <div className="timeline">
            {[1, 2, 3].map((y, i) => (
              <Reveal key={y} delay={i * 120}>
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

      {/* ── FINAL CTA (bej, like mockup) ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <blockquote className="cta-quote">{t.cta.quote}</blockquote>
          <a href="#hero" className="btn btn-cta" id="cta-main-btn">
            {t.cta.btn} →
          </a>
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

export default App;
