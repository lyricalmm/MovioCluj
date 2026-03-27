import React, { useState } from 'react';
import './App.css';
import { translations } from './i18n';
import logo from './assets/Logo.png';
import prototip from './assets/Prototip.jpeg';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ro' : 'en');
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
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
          <button className="btn btn-secondary lang-toggle" onClick={toggleLanguage}>
            {t.nav.languageToggle}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <h1>{t.hero.headline}</h1>
          <p className="subheadline">{t.hero.subheadline}</p>
          <div className="hero-buttons">
            <a href="#product" className="btn btn-primary">{t.hero.btnConcept}</a>
            <a href="#validation" className="btn btn-secondary">{t.hero.btnValidation}</a>
          </div>
        </div>
      </header>

      {/* The Problem */}
      <section id="problem" className="problem-section bg-card">
        <div className="container">
          <h2 className="section-title text-accent">{t.problem.title}</h2>
          <p className="section-desc">{t.problem.description}</p>
          <div className="grid grid-2">
            {t.problem.list.map((item, index) => (
              <div key={index} className="problem-item">
                <span className="bullet"></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title text-teal">{t.howItWorks.title}</h2>
          <div className="grid grid-4 step-cards">
            {['step1', 'step2', 'step3', 'step4'].map((step, index) => (
              <div key={index} className="step-card bg-card">
                <div className="step-number">{index + 1}</div>
                <h3>{t.howItWorks[step]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section id="validation" className="validation-section">
        <div className="container">
          <h2 className="section-title text-accent">{t.validation.title}</h2>
          <p className="section-desc">{t.validation.description}</p>
          
          <div className="grid grid-4 stat-cards">
            {t.validation.cards.map((card, index) => (
              <div key={index} className="stat-card bg-card">
                <h3 className="stat-num text-teal">{card.number}</h3>
                <p className="stat-label text-gray">{card.label}</p>
              </div>
            ))}
          </div>
          <p className="stat-details text-gray" style={{marginTop: '2rem', textAlign: 'center'}}>
            {t.validation.details}
          </p>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="product-section bg-card">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title text-teal" style={{ textAlign: 'left' }}>{t.product.title}</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>{t.product.description}</p>
            <ul className="feature-list">
              {t.product.features.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}:</strong> {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-placeholder">
            <img src={prototip} alt="Prototip Movio Hub" style={{ width: '100%', borderRadius: '16px', border: '1px solid var(--movio-gray)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="business" className="business-section">
        <div className="container text-center">
          <h2 className="section-title">{t.businessModel.title}</h2>
          <p className="section-desc">{t.businessModel.description}</p>
          <div className="grid grid-2 mt-4">
             <div className="bz-card bg-card">
               <h3 className="text-teal">{t.businessModel.b2c.title}</h3>
               <p>{t.businessModel.b2c.text}</p>
             </div>
             <div className="bz-card bg-card">
               <h3 className="text-accent">{t.businessModel.b2b.title}</h3>
               <p>{t.businessModel.b2b.text}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="roadmap-section bg-card">
        <div className="container">
          <h2 className="section-title text-accent">{t.roadmap.title}</h2>
          <div className="timeline">
            {[1, 2, 3].map(year => (
              <div key={year} className="timeline-item">
                <div className="timeline-year text-teal">{t.roadmap[`year${year}`]}</div>
                <div className="timeline-content">
                  <p>{t.roadmap[`year${year}Text`]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
             <div>
               <img src={logo} alt="Movio Logo" className="footer-logo" />
               <p className="text-gray">{t.footer.competition}</p>
             </div>
             <div className="footer-info">
               <strong>{t.footer.team}</strong>
               <p className="text-gray">{t.footer.university}</p>
               <br/>
               <button className="btn btn-secondary">{t.footer.contactBtn}</button>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
