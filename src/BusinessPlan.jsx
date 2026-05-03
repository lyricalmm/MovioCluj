import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Users, Zap, Briefcase, BarChart3, Settings, AlertCircle, CheckCircle2 } from 'lucide-react';
import './BusinessPlan.css';

function BusinessPlan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bp-page">
      <div className="bp-container">
        <Link to="/" className="bp-nav-back">
          <ArrowLeft size={20} />
          Înapoi la website
        </Link>

        <header className="bp-header">
          <h1 className="bp-title">Plan de Afaceri Movio</h1>
          <p className="bp-subtitle">Analiză completă: Strategie, Piață, Financiar și Operațional (2026-2028)</p>
        </header>

        {/* PARTEA 1: STRATEGIE */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Target /> Partea 1: Strategie & Piață</h2>
          
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Misiune & Viziune</h3>
              <p>Mobilitate accesibilă, fiabilă și verde pentru studenții români. Scopul pe 5 ani este transformarea Movio în standardul de bike-sharing în campusurile din România (Cluj, Iași, Timișoara, Brașov).</p>
            </div>
            
            <div className="bp-card">
              <h3>Validare Reală</h3>
              <p>130 respondenți, 86% adopție declarată și disponibilitate de plată. Scor de utilitate 4.26/5. 101/130 știau de Cluj Bike, dar nu îl foloseau, confirmând un gol în piață.</p>
            </div>

            <div className="bp-card bp-card-teal">
              <h3>Cerere de Finanțare</h3>
              <p><span className="bp-accent-text">~19.300 EUR</span> pentru faza pilot (32 biciclete, 4 hub-uri în UTCN). Repartizare: 53% biciclete, 11% operare 6 luni, 8% buffer, 7% asigurare, etc.</p>
            </div>
          </div>

          <h3 style={{color: '#F4F1EC', marginTop: '40px', marginBottom: '16px'}}>Analiza Pieței</h3>
          <div className="bp-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <div className="bp-card">
              <div className="bp-stat">24M lei</div>
              <h3>TAM (Piața Totală)</h3>
              <p>~540.000 studenți în România.</p>
            </div>
            <div className="bp-card">
              <div className="bp-stat">12M lei</div>
              <h3>SAM (Piața Serviciabilă)</h3>
              <p>~280.000 studenți (Cluj, Iași, Timișoara, Brașov).</p>
            </div>
            <div className="bp-card">
              <div className="bp-stat">600k lei</div>
              <h3>SOM (Piața Obtenabilă)</h3>
              <p>5.000-8.000 utilizatori activi în Cluj la maturitate.</p>
            </div>
          </div>

          <h3 style={{color: '#F4F1EC', marginTop: '40px', marginBottom: '16px'}}>Model de Venituri</h3>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>B2C: Abonament Studențesc</h3>
              <p><strong>30 RON/an</strong> (60 min gratuite/cursă, 5 RON/oră depășire). Generare de cash flow recurent și validare product-market fit.</p>
            </div>
            <div className="bp-card">
              <h3>B2B: Employer Branding</h3>
              <p><strong>1.500-2.500 EUR/lună</strong> per contract (companii tech din Cluj). Motorul de scalare ce finanțează expansiunea, începând cu luna 8.</p>
            </div>
          </div>
        </section>

        {/* PARTEA 2: FINANCIAR */}
        <section className="bp-section">
          <h2 className="bp-section-title"><TrendingUp /> Partea 2: Financiar & Proiecții</h2>
          
          <div className="bp-grid">
            <div className="bp-card">
              <h3>CAPEX: Investiția Inițială</h3>
              <p>Total necesar: <span className="bp-accent-text">96.506 RON</span> (~19.300 EUR). Include 32 biciclete (51.200 RON), componente electronice și structură pentru 4 hub-uri (1.720 RON), GPS/antifurt (3.520 RON), buffer operațional și alte costuri de pornire.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>OPEX: Costuri Lunare</h3>
              <p>În faza pilot, OPEX lunar este de <span className="bp-accent-text">3.605 RON</span>. Include mentenanța (600 RON), hosting, contabilitate, marketing, și salariu administrator obligatoriu pt regim microîntreprindere (1.640 RON).</p>
            </div>
            <div className="bp-card">
              <h3>Break-Even & Unit Economics</h3>
              <p>Break-even operațional atins fie cu 1.442 abonați, fie cu <strong>un singur contract B2B</strong>. Recuperarea investiției este proiectată pentru lunile 30-36 (Anul 3). LTV/CAC ratio B2C = 11.7x.</p>
            </div>
          </div>

          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead>
                <tr>
                  <th>Proiecție pe 3 Ani</th>
                  <th>Anul 1 (Pilot)</th>
                  <th>Anul 2 (Scalare)</th>
                  <th>Anul 3 (Maturitate)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Abonați / B2B</strong></td>
                  <td>350 abonați / 1 contract</td>
                  <td>1.500 abonați / 3-4 contracte</td>
                  <td>3.500 abonați / 6 contracte</td>
                </tr>
                <tr>
                  <td><strong>Flotă / Hub-uri</strong></td>
                  <td>32 biciclete / 4 hub-uri</td>
                  <td>120 biciclete / 16 hub-uri</td>
                  <td>250 biciclete / 30+ hub-uri</td>
                </tr>
                <tr>
                  <td><strong>Venituri Totale</strong></td>
                  <td>39.075 RON</td>
                  <td>301.000 RON</td>
                  <td>841.500 RON</td>
                </tr>
                <tr>
                  <td><strong>Profit Net</strong></td>
                  <td style={{color: '#ff4d4f'}}>-15.616 RON</td>
                  <td style={{color: '#ff4d4f'}}>-90.710 RON (Investiție)</td>
                  <td style={{color: '#00B4B4'}}>+134.652 RON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PARTEA 3: OPERAȚIONAL */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Settings /> Partea 3: Operațiuni & Execuție</h2>
          
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Producție & Hub-uri</h3>
              <p>Asamblarea unui hub durează ~6 ore (echipă tehnică 2 persoane). Implică sudură structură metalică, imprimare 3D a carcaselor, montare electronice (ESP8266, Servo SG90, solar). Cost efectiv per hub: <span className="bp-accent-text">~600 RON</span> (incluzând instalarea).</p>
            </div>
            <div className="bp-card">
              <h3>Mentenanță Flotă</h3>
              <p>Rețea de distribuție suportată prin inspecții vizuale săptămânale. Cost anual mentenanță per bicicletă: ~150 RON (parteneriat cu atelier service din Cluj la tarif negociat de 100 RON/oră).</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Echipa & Resurse Umane</h3>
              <p>Anul 1: Cofondatorii (studenți UTCN) acoperă rolurile gratuit (~60 ore/săptămână total). Anul 2: Primele angajări (tehnician mentenanță part-time, marketing intern). Anul 3: Echipa completă + sales B2B dedicat.</p>
            </div>
            <div className="bp-card">
              <h3>Plan de Scalare</h3>
              <p><strong>Anul 2:</strong> Extindere la UBB, UMF, USAMV cu încă 60 de hub-uri și 90 biciclete. <strong>Anul 3:</strong> Studiu de fezabilitate pentru naționalizare (Iași / Timișoara) și hub v2.0.</p>
            </div>
          </div>

          <h3 style={{color: '#F4F1EC', marginTop: '40px', marginBottom: '16px'}}>Gestiunea Riscurilor (Top 3)</h3>
          <div className="bp-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <div className="bp-card" style={{borderLeftColor: '#ff4d4f'}}>
              <h3><AlertCircle size={18} style={{display:'inline', marginBottom:'-3px'}}/> Furt / Vandalism</h3>
              <p>Atenuat prin: GPS tracking pe biciclete, asigurare flotă (80 RON/an/bicicletă), locații sigure în campus cu camere.</p>
            </div>
            <div className="bp-card" style={{borderLeftColor: '#ff4d4f'}}>
              <h3><AlertCircle size={18} style={{display:'inline', marginBottom:'-3px'}}/> Lipsă adoptie B2B</h3>
              <p>Motorul profitabilității cade. Atenuat prin: targetare directă HR din primele luni, pilot gratuit 30 zile oferit companiilor.</p>
            </div>
            <div className="bp-card" style={{borderLeftColor: '#ff4d4f'}}>
              <h3><AlertCircle size={18} style={{display:'inline', marginBottom:'-3px'}}/> Aprobări lente</h3>
              <p>Atenuat prin implicarea cadrelor didactice și opțiunea de plan B: parcări private limitrofe, dacă birocrația universitară întârzie.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default BusinessPlan;
