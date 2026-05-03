import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Settings, Users, BarChart3, AlertCircle, MapPin, Zap, ShieldCheck } from 'lucide-react';
import './BusinessPlan.css';

function BusinessPlan() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bp-page">
      <div className="bp-container">

        {/* NAV */}
        <div className="bp-nav-bar">
          <Link to="/" className="bp-nav-back"><ArrowLeft size={18} /> Înapoi la website</Link>
          <span className="bp-brand-tag">MOVIO · PLAN DE AFACERI 2026</span>
        </div>

        {/* HERO */}
        <header className="bp-hero">
          <div className="bp-hero-badge"><span className="bp-hero-pulse" /> CONFIDENȚIAL · JA BIZZFACTORY</div>
          <h1 className="bp-title">Plan de Afaceri <span>Movio</span></h1>
          <p className="bp-subtitle">Sistem inteligent de bike-sharing pentru campusurile universitare din România. Strategie, piață, financiar și operațional — 2026–2028.</p>
          <div className="bp-hero-stats">
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">130</span><span className="bp-hero-stat-label">Respondenți validare</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">86%</span><span className="bp-hero-stat-label">Adopție declarată</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num amber">21.700€</span><span className="bp-hero-stat-label">Finanțare solicitată</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">4.26/5</span><span className="bp-hero-stat-label">Scor utilitate</span></div>
          </div>
        </header>

        {/* TOC */}
        <nav className="bp-toc">
          <span className="bp-toc-label">Conținut:</span>
          <a href="#strategie">Strategie</a><span className="bp-toc-sep">·</span>
          <a href="#piata">Piață</a><span className="bp-toc-sep">·</span>
          <a href="#echipa">Echipă</a><span className="bp-toc-sep">·</span>
          <a href="#marketing">Marketing</a><span className="bp-toc-sep">·</span>
          <a href="#venituri">Venituri</a><span className="bp-toc-sep">·</span>
          <a href="#swot">SWOT</a><span className="bp-toc-sep">·</span>
          <a href="#roadmap">Roadmap</a><span className="bp-toc-sep">·</span>
          <a href="#capex">CAPEX</a><span className="bp-toc-sep">·</span>
          <a href="#opex">OPEX</a><span className="bp-toc-sep">·</span>
          <a href="#proiectii">Proiecții</a><span className="bp-toc-sep">·</span>
          <a href="#breakeven">Break-even</a><span className="bp-toc-sep">·</span>
          <a href="#operational">Operațional</a><span className="bp-toc-sep">·</span>
          <a href="#kpi">KPI</a><span className="bp-toc-sep">·</span>
          <a href="#riscuri">Riscuri</a>
        </nav>

        {/* PART 1 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 1 · Strategie & Piață</span><div className="bp-part-divider-line" /></div>
        {/* STRATEGIE */}
        <section className="bp-section" id="strategie">
          <h2 className="bp-section-title"><Target size={20} /> Sumar Executiv & Descrierea Companiei</h2>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Misiune</h3>
              <p>Mobilitate accesibilă, fiabilă și verde pentru studenții români — începând cu cei <strong>22.000 de studenți ai UTCN</strong>. Sistemul combină hub-uri modulare proiectate intern, o aplicație PWA și o flotă de city-bike-uri standardizate.</p>
            </div>
            <div className="bp-card">
              <h3>Viziunea pe 5 Ani</h3>
              <p>Movio devine standardul de bike-sharing în campusurile universitare din România, prezent în <strong>Cluj, Iași, Timișoara și Brașov</strong>. Pilot lansare: vara 2026 la UTCN Cluj-Napoca.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Forma Juridică</h3>
              <p><strong>SRL în regim de microîntreprindere</strong> (1% impozit pe venit). Capital social minim 500 RON. CAEN: 7711 (închirieri biciclete), 6209 (IT services), 7320 (marketing B2B). Sediu planificat: Cluj-Napoca, prin incubare UTCN.</p>
            </div>
            <div className="bp-card">
              <h3>Structura Proprietății</h3>
              <p><strong>4 cofondatori, 25% fiecare.</strong> Înregistrare SRL după primele venituri din pilot. Servicii contabile externalizate la 250–400 RON/lună post-înregistrare.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Cerere de Finanțare Faza Pilot</p>
          <div className="bp-grid-4">
            <div className="bp-stat-card"><div className="bp-stat">~21.700€</div><div className="bp-stat-label">Total necesar pilot</div></div>
            <div className="bp-stat-card"><div className="bp-stat">47%</div><div className="bp-stat-label">Biciclete (32 buc)</div></div>
            <div className="bp-stat-card"><div className="bp-stat">16%</div><div className="bp-stat-label">Operare 6 luni</div></div>
            <div className="bp-stat-card"><div className="bp-stat">14-16</div><div className="bp-stat-label">Luna profitabilitate op.</div></div>
          </div>
        </section>
        {/* PIATA */}
        <section className="bp-section" id="piata">
          <h2 className="bp-section-title"><MapPin size={20} /> Analiza Pieței</h2>
          <div className="bp-grid-3">
            <div className="bp-stat-card"><div className="bp-stat">24M RON</div><div className="bp-stat-label">TAM — 540.000 studenți în România (~30 RON/an + extras)</div></div>
            <div className="bp-stat-card"><div className="bp-stat">12M RON</div><div className="bp-stat-label">SAM — 280.000 studenți în Cluj, Iași, Timișoara, Brașov</div></div>
            <div className="bp-stat-card"><div className="bp-stat">600K RON</div><div className="bp-stat-label">SOM — 5.000–8.000 utilizatori activi Cluj, maturitate an 3–4</div></div>
          </div>
          <p className="bp-section-subtitle">Tendințe de Piață</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Vidul lăsat de Cluj Bike</h3>
              <p>Sistem public lansat 2015 cu <strong>14 milioane RON</strong> investiție publică. 101/130 respondenți îl cunoșteau, dar nu îl foloseau. Eșec de operare, nu de tehnologie — exact ce Movio rezolvă.</p>
            </div>
            <div className="bp-card">
              <h3>Adopția PWA în creștere</h3>
              <p>Studii AliExpress, Twitter Lite, Pinterest arată creșteri de conversie de <strong>33–104%</strong> față de app native. Eliminarea barierei de descărcare este un avantaj concret pentru studenți.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Cluj IT — 30.000+ angajați tech</h3>
              <p>Peste <strong>200 firme tech</strong> cu bugete reale de Employer Branding. Audiența directă pentru modelul B2B din faza 2, cu bugete de 50.000–300.000 EUR/an per companie medie-mare.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Profilul Clientului Ideal</p>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal">
              <h3>B2C — Studentul UTCN Navetist</h3>
              <p>Vârstă: 19–24 ani. Locație: Observator, Mărăști, Mănăștur. Transport curent: 40% pe jos, 35% CTP, 15% mașină. Distanță zilnică tipică: 1,5–4 km. Buget CTP actual: 80 RON/lună. Sensibil la preț și fiabilitate. Activ pe Instagram, TikTok, grupuri Facebook UTCN.</p>
            </div>
            <div className="bp-card">
              <h3>B2B — Compania Tech din Cluj</h3>
              <p>Firme cu 100–3.000 angajați. Department HR cu buget Employer Branding. Decident: HR Director sau Talent Acquisition Lead. Durerea: dificultatea de a ajunge la talentele tinere. Oferta: vizibilitate continuă în campus prin biciclete brand-uite.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Competiție & Avantajele Movio</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Competitor</th><th>Tip</th><th>Atu</th><th>Slăbiciune</th></tr></thead>
              <tbody>
                <tr><td><strong>Cluj Bike</strong></td><td>Public</td><td>Brand cunoscut, infrastructură</td><td>Stații defecte, încredere zero, neutilizat</td></tr>
                <tr><td><strong>Lime / Bolt scootere</strong></td><td>Privat internațional</td><td>Distribuție bună, app polished</td><td>Preț/cursă mare, blocate iarna</td></tr>
                <tr><td><strong>CTP Cluj</strong></td><td>Public, transport</td><td>Acoperire largă, abonament ieftin</td><td>Aglomerat, lent pe trasee scurte</td></tr>
                <tr><td><strong>Bicicletă personală</strong></td><td>Substitut direct</td><td>Fără cost recurent</td><td>Risc furt, depozitare, mentenanță proprie</td></tr>
                <tr className="total-row"><td><strong>Movio</strong></td><td>Privat, campus</td><td>Cost hub mic, PWA, validare proprie, IP hardware</td><td>Startup fără istoric comercial</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Avantajele Competitive Movio</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal"><h3>① Cost infrastructură redus</h3><p>Componenta electronică per hub: <strong>~100 RON</strong>. Stații Cluj Bike costau sute de mii de lei. Asta permite densitate imposibilă pentru competitorii publici.</p></div>
            <div className="bp-card"><h3>② Model dual B2C + B2B</h3><p>Reduce dependența de un singur client și creează un buffer împotriva sezonalității. B2B finanțează lunile slabe de iarnă.</p></div>
            <div className="bp-card bp-card-teal"><h3>③ PWA fără descărcare</h3><p>Acces direct din browser prin QR de pe hub. Elimină frecușul App Store și crește conversia în adopție.</p></div>
            <div className="bp-card"><h3>④ Validare proprie + UTCN</h3><p>130 date reale de la utilizatori UTCN + suport instituțional = avantaj greu de replicat de un competitor extern.</p></div>
            <div className="bp-card bp-card-teal"><h3>⑤ Hardware proiectat intern</h3><p>IP propriu, iterație rapidă fără dependență de furnizori externi. Versiunea 2.0 a hub-ului planificată în Anul 3.</p></div>
          </div>
        </section>
        {/* ECHIPA */}
        <section className="bp-section" id="echipa">
          <h2 className="bp-section-title"><Users size={20} /> Echipa Fondatoare</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Rol</th><th>Membru</th><th>Responsabilități</th></tr></thead>
              <tbody>
                <tr><td><span className="bp-teal">CEO & Strategy</span></td><td><strong>Crăciun Răzvan</strong></td><td>Viziune produs, parteneriate, prezentări juriu și sponsori</td></tr>
                <tr><td><span className="bp-teal">CTO Hardware</span></td><td><strong>Maxim Andrei-Vasile</strong></td><td>Proiectare & asamblare hub-uri, ESP8266, mecanism servo</td></tr>
                <tr><td><span className="bp-teal">COO & Planning</span></td><td><strong>Mureșan Vlad</strong></td><td>Plan de afaceri DreamShaper, modelare financiară, research</td></tr>
                <tr><td><span className="bp-teal">CMO & Brand</span></td><td><strong>Oros Augusta</strong></td><td>Identitate vizuală, social media, comunicare utilizatori</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'14px', marginTop:'16px'}}>Toți 4 sunt studenți la <strong style={{color:'#F4F1EC'}}>Manufacturing Engineering, UTCN</strong>. Acces la laboratoare, imprimante 3D, software CAD licențiat. Mentor JA România prin BizzFactory 2025–2026. Locul 2 Innovation Day RAF.</p>
          <p className="bp-section-subtitle">Lacune Identificate & Plan de Acoperire</p>
          <div className="bp-grid-3">
            <div className="bp-card"><h3>Lipsă experiență comercială</h3><p>→ Mentorat JA, cursuri HP LIFE gratuite, învățare pe teren prin pilot</p></div>
            <div className="bp-card"><h3>Lipsă experiență B2B</h3><p>→ Focus B2C în Anul 1; training HubSpot Academy + networking Cluj IT Days în Anul 2</p></div>
            <div className="bp-card"><h3>Lipsă fiscalitate avansată</h3><p>→ Contabil externalizat din momentul înregistrării SRL (250–400 RON/lună)</p></div>
          </div>
        </section>

        {/* MARKETING */}
        <section className="bp-section" id="marketing">
          <h2 className="bp-section-title"><Zap size={20} /> Strategie de Marketing & Vânzări</h2>
          <p className="bp-section-subtitle">Pâlnia de Conversie B2C (Anul 1)</p>
          <div className="bp-funnel">
            <div className="bp-funnel-step"><div className="bp-funnel-num">3.000</div><div><div className="bp-funnel-label">Conștientizare</div><div className="bp-funnel-sub">Studenți expuși la marketing organic în campus UTCN</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">1.200</div><div><div className="bp-funnel-label">Interes</div><div className="bp-funnel-sub">Vizitează site-ul / aplicația web Movio</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">700</div><div><div className="bp-funnel-label">Considerare</div><div className="bp-funnel-sub">Testează aplicația (scanează QR, crează cont)</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">350</div><div><div className="bp-funnel-label">Achiziție</div><div className="bp-funnel-sub">Abonamente plătite (rata conversie țintă: 12%)</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">245</div><div><div className="bp-funnel-label">Retenție An 2</div><div className="bp-funnel-sub">Reînnoiri (70% retention rate — conservator față de industrie 75–85%)</div></div></div>
          </div>
          <p className="bp-section-subtitle">Canalele de Marketing (Total buget An 1: ~2.500 RON)</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal"><h3>On-the-ground UTCN (1.500 RON/an)</h3><p>Demo-uri în prima săptămână universitară, stand Open Day, postere cu QR în cămine, conferințe studențești.</p></div>
            <div className="bp-card"><h3>Social Media Organic (800 RON/an paid)</h3><p>Instagram @movio.cluj: 4–5 postări/săptămână, Reels. TikTok: 1–2 clipuri/săptămână. LinkedIn: 1 postare/săptămână (audiența B2B viitoare).</p></div>
            <div className="bp-card bp-card-teal"><h3>Word of Mouth (0 RON)</h3><p>Fiecare bicicletă are un nume unic ("Shayla", "Gheorghiță", "Ada Lovelace"). Fenomenul: <em>"Azi am luat-o pe Shayla"</em> — viral organic.</p></div>
            <div className="bp-card"><h3>Program Ambasadori (0 RON cash)</h3><p>1 lună gratuită pentru fiecare 5 prieteni invitați activi. 10–15 ambasadori cheie din comunitatea UTCN identificați și activați.</p></div>
          </div>
          <p className="bp-section-subtitle">Strategia B2B (Anul 2) — Procesul de Vânzare</p>
          <div className="bp-grid-3">
            <div className="bp-card"><h3>Luna 1–2</h3><p>Outreach LinkedIn către HR Directors din firme tech țintă (Bosch, Endava, NTT Data, Emerson, Continental). Întâlnire de calificare 15 min.</p></div>
            <div className="bp-card bp-card-teal"><h3>Luna 3–4</h3><p>Prezentare detaliată (45 min) cu studiu de caz din pilot. Propunere comercială + negociere. Cost CAC B2B: ~500 RON (materiale + timp echipă).</p></div>
            <div className="bp-card"><h3>Luna 5–6</h3><p>Pilot 30 zile (1–2 biciclete brand-uite). Contract anual semnat. Valoare medie contract anual: <strong>18.000–25.000 RON</strong>.</p></div>
          </div>
        </section>

        {/* VENITURI */}
        <section className="bp-section" id="venituri">
          <h2 className="bp-section-title"><BarChart3 size={20} /> Modelul de Venituri</h2>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal"><h3>① Abonament Studențesc — 30 RON/an</h3><p>Include <strong>60 minute gratuite per cursă</strong>, fără limită de curse/zi. Pragul psihologic confirmat de formular: 86% acceptă să plătească. Comparație: abonament CTP student = 720 RON/an.</p></div>
            <div className="bp-card"><h3>② Tarif Depășire — 5 RON/oră</h3><p>Se aplică doar dacă bicicleta e ținută peste 60 min. Descurajează imobilizarea, asigură rotație. ~8–12% utilizatori generează tarife depășire lunar.</p></div>
            <div className="bp-card"><h3>③ B2B Employer Branding — 1.500–2.500 EUR/lună</h3><p>Companie tech aplică brandul pe 5–10 biciclete + 1–2 hub-uri. Contract minim 6 luni, ideal 12. Țintă: 1 contract în Anul 1, 3–4 în Anul 2, 6 în Anul 3.</p></div>
            <div className="bp-card bp-card-teal"><h3>④ Sponsorizare Evenimente (oportunist)</h3><p>Branding temporar la evenimente UTCN, conferințe, lansări. 500–1.500 RON per eveniment. Revenue suplimentar, nu structural.</p></div>
          </div>
          <p className="bp-section-subtitle">Mix-ul de Venit Țintă pe 3 Ani</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>An</th><th>B2C (abonamente + depășiri)</th><th>B2B (Employer Branding)</th><th>Total estimat</th></tr></thead>
              <tbody>
                <tr><td>Anul 1</td><td>65%</td><td>35%</td><td>39.075 RON</td></tr>
                <tr><td>Anul 2</td><td>45%</td><td>55%</td><td>301.000 RON</td></tr>
                <tr><td>Anul 3</td><td>35%</td><td>65%</td><td>841.500 RON</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>La ~841.500 RON (~168.300 EUR) în Anul 3, firma depășește plafonul de 100.000 EUR pentru regimul micro și trece automat la <strong style={{color:'#F4F1EC'}}>impozit pe profit de 16%</strong>. Normal și sănătos pentru o companie în creștere.</p>
        </section>

        {/* SWOT */}
        <section className="bp-section" id="swot">
          <h2 className="bp-section-title"><ShieldCheck size={20} /> Analiza SWOT cu Mitigare</h2>
          <div className="bp-swot">
            <div className="bp-swot-cell strengths"><h4>✦ Puncte Forte</h4><ul>
              <li>Echipă tehnică completă (Manufacturing Engineering UTCN)</li>
              <li>Validare reală: 130 respondenți, 86% adopție declarată</li>
              <li>Hardware proiectat intern, cost mic (~520 RON/hub)</li>
              <li>Suport instituțional UTCN (lab, imprimante 3D, CAD)</li>
              <li>Locul 2 Innovation Day RAF — credibilitate externă</li>
              <li>Prototip funcțional, nu doar concept</li>
            </ul></div>
            <div className="bp-swot-cell weaknesses"><h4>⚠ Puncte Slabe</h4><ul>
              <li>Lipsă experiență antreprenorială prealabilă</li>
              <li>Capital inițial limitat</li>
              <li>Niciun contract B2B semnat la prezentare</li>
              <li>Dependență de aprobarea formală UTCN pentru locații</li>
              <li>Sezonalitate previzibilă (nov–feb utilizare scăzută)</li>
            </ul></div>
            <div className="bp-swot-cell opportunities"><h4>▲ Oportunități</h4><ul>
              <li>Cluj — capitala IT a României (200+ firme tech)</li>
              <li>Eșecul Cluj Bike a creat vid pe piață</li>
              <li>Tendință europeană mobilitate verde (PNRR, fonduri UE)</li>
              <li>100.000+ studenți în Cluj la 4 universități</li>
              <li>Posibilă expansiune Iași, Timișoara, Brașov</li>
            </ul></div>
            <div className="bp-swot-cell threats"><h4>✕ Amenințări & Mitigare</h4><ul>
              <li>Vandalism/furt → GPS, asigurare 80 RON/bic./an, pază UTCN</li>
              <li>Competitor internațional → first-mover, parteneriat UTCN</li>
              <li>Sezonalitate → contract B2B anual acoperă lunile slabe</li>
              <li>Aprobări lente UTCN → plan B: spații private limitrofe</li>
              <li>Eșec hardware → modular, stoc piese, garanții furnizori</li>
            </ul></div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="bp-section" id="roadmap">
          <h2 className="bp-section-title"><Target size={20} /> Roadmap pe 36 Luni</h2>
          <div className="bp-timeline">
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 1–3 · Q3 2026</div><div className="bp-tl-title">Lansare Pilot UTCN</div><ul className="bp-tl-items"><li>Finalizare prototip hardware funcțional</li><li>Semnare LOI cu UTCN, înregistrare SRL</li><li>Achiziție 32 biciclete + asamblare 24 hub-uri în 4 stații</li><li>Lansare oficială în campus</li><li>Țintă: 200 abonamente plătite în primele 30 zile</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 4–6</div><div className="bp-tl-title">Stabilizare & Învățare</div><ul className="bp-tl-items"><li>Optimizare flux operațional pe baza datelor reale</li><li>Atingerea pragului de 350–400 abonați activi</li><li>Începutul outreach-ului B2B</li><li>Primul raport public de impact (km, CO₂)</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 7–12</div><div className="bp-tl-title">Consolidare</div><ul className="bp-tl-items"><li>Semnarea primului contract B2B Employer Branding (luna 8–10)</li><li>500+ abonați activi</li><li>Pregătirea expansiunii la UBB</li><li>Decizie: organic growth vs. aplicație seed</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">ANUL 2 · 2027</div><div className="bp-tl-title">Expansiune Cluj</div><ul className="bp-tl-items"><li>Lansare în UBB, UMF, USAMV (16 hub-uri totale)</li><li>Flotă crescută la ~120 biciclete</li><li>3–4 contracte B2B active</li><li>Atingerea pragului de profitabilitate operațională</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">ANUL 3 · 2028</div><div className="bp-tl-title">Consolidare Model</div><ul className="bp-tl-items"><li>2.500+ abonați activi în Cluj</li><li>4–6 contracte B2B active</li><li>Studiu de fezabilitate Iași sau Timișoara</li><li>Optimizare hardware versiunea 2.0 (hub 4 biciclete, PCB custom)</li></ul></div>
          </div>
        </section>

        {/* PART 2 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 2 · Financiar</span><div className="bp-part-divider-line" /></div>
        {/* CAPEX */}
        <section className="bp-section" id="capex">
          <h2 className="bp-section-title"><TrendingUp size={20} /> CAPEX: Investiția Inițială (4 stații × 6 hub-uri/stație = 24 hub-uri, 32 biciclete)</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Categorie</th><th>Cantitate</th><th>Preț unitar</th><th>Subtotal</th></tr></thead>
              <tbody>
                <tr><td>Biciclete city-bike noi (Pegas Strada / DHS Citadinne / Cross)</td><td>32 buc</td><td>320 EUR (1.600 RON)</td><td>51.200 RON</td></tr>
                <tr><td>Componente electronice hub (ESP8266, SG90, limitator, LED, fire)</td><td>24 hub-uri</td><td>100 RON/hub</td><td>2.400 RON</td></tr>
                <tr><td>Materiale structură hub (profil oțel, vopsit, șuruburi, suport)</td><td>24 hub-uri</td><td>250 RON/hub</td><td>6.000 RON</td></tr>
                <tr><td>Imprimare 3D componente custom (filament PETG, lab UTCN)</td><td>24 hub-uri</td><td>80 RON/hub</td><td>1.920 RON</td></tr>
                <tr><td>Panouri solare 5V/1W per hub</td><td>24 buc</td><td>35 RON</td><td>840 RON</td></tr>
                <tr><td>Baterie LiPo + modul TP4056</td><td>24 buc</td><td>45 RON</td><td>1.080 RON</td></tr>
                <tr><td>Coduri QR laminate (2 per hub)</td><td>48 buc</td><td>5 RON</td><td>240 RON</td></tr>
                <tr><td>GPS tracker basic per bicicletă (antifurt, eMAG)</td><td>32 buc</td><td>80 RON</td><td>2.560 RON</td></tr>
                <tr><td>Antifurt fizic suplimentar (lacăte U-lock)</td><td>32 buc</td><td>30 RON</td><td>960 RON</td></tr>
                <tr><td>Domeniu movio.ro + email Workspace 1 an</td><td>—</td><td>—</td><td>350 RON</td></tr>
                <tr><td>Hosting aplicație web 1 an (Vercel/Cloudflare)</td><td>—</td><td>—</td><td>600 RON</td></tr>
                <tr><td>Marketing lansare (postere, paid promo, bannere)</td><td>—</td><td>—</td><td>2.500 RON</td></tr>
                <tr><td>Stoc piese rezervă (servo, ESP, anvelope, camere)</td><td>—</td><td>—</td><td>1.500 RON</td></tr>
                <tr><td>Înregistrare SRL + capital social (ONRC + servicii)</td><td>—</td><td>—</td><td>800 RON</td></tr>
                <tr><td>Asigurare flotă an 1</td><td>32 buc × 80 RON</td><td>80 RON/bic.</td><td>2.560 RON</td></tr>
                <tr><td>Rezervă operațională (15%)</td><td>—</td><td>—</td><td>11.358 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL CAPEX</strong></td><td></td><td></td><td><strong>86.850 RON (~17.370 EUR)</strong></td></tr>
                <tr><td>Mentenanță & operare 6 luni post-lansare</td><td></td><td></td><td>21.630 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL INVESTIȚIE NECESARĂ</strong></td><td></td><td></td><td><strong className="bp-teal">108.480 RON (~21.696 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Surse de Finanțare CAPEX</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Sursă</th><th>Sumă estimată</th><th>Probabilitate</th><th>Termen</th></tr></thead>
              <tbody>
                <tr><td>Self-funding cofondatori (4 × 1.000 EUR)</td><td>4.000 EUR</td><td><span className="positive">Sigur</span></td><td>Imediat</td></tr>
                <tr><td>Premiu JA BizzFactory (semifinala / naționala)</td><td>1.000–3.000 EUR</td><td>Mediu</td><td>Iunie 2026</td></tr>
                <tr><td>Program Fix Cluj (finanțare nerambursabilă tineri)</td><td>3.000–5.000 EUR</td><td>Mediu</td><td>Iulie–Aug 2026</td></tr>
                <tr><td>Sponsorizare în natură UTCN (acces lab, spațiu)</td><td>echivalent 2.000 EUR</td><td><span className="positive">Înalt (LOI)</span></td><td>Imediat</td></tr>
                <tr><td>Granturi Innovation Day RAF / alte concursuri</td><td>500–2.000 EUR</td><td>Scăzut-mediu</td><td>Variabil</td></tr>
                <tr><td>Crowdfunding local (post-validare)</td><td>3.000–5.000 EUR</td><td>Scăzut</td><td>Toamna 2026</td></tr>
                <tr><td>Împrumut personal cofondatori (rezervă)</td><td>până la 5.000 EUR</td><td><span className="positive">Sigur la nevoie</span></td><td>Imediat</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* OPEX */}
        <section className="bp-section" id="opex">
          <h2 className="bp-section-title"><Settings size={20} /> OPEX: Costuri Operaționale</h2>
          <p className="bp-section-subtitle">OPEX Lunar — Faza Pilot (Lunile 1–12)</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Categorie</th><th>Cost lunar</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>Mentenanță biciclete (revizie + reparații ad-hoc)</td><td>600 RON</td><td>~12,5 RON/bic./lună × 32 + 200 RON ad-hoc</td></tr>
                <tr><td>Hosting + domeniu (lunarizat)</td><td>80 RON</td><td>Vercel, Cloudflare, Workspace email</td></tr>
                <tr><td>Servicii contabile externalizate</td><td>350 RON</td><td>Microîntreprindere, volum mic tranzacții</td></tr>
                <tr><td>Comunicații (telefon firmă)</td><td>50 RON</td><td>Plan business minimal</td></tr>
                <tr><td>Marketing operațional lunar</td><td>200 RON</td><td>Paid promo ocazional, materiale</td></tr>
                <tr><td>Costuri bancare (cont firmă, Stripe/Netopia 2–3%)</td><td>150 RON</td><td>Comisioane procesare card</td></tr>
                <tr><td>Asigurare flotă (lunarizat)</td><td>215 RON</td><td>2.560 RON / 12</td></tr>
                <tr><td>Salariu admin / 1 angajat min normă (obligatoriu regim micro)</td><td>1.640 RON</td><td>Contract mandat administrator part-time, cost firmă</td></tr>
                <tr><td>Diverse + buffer (10%)</td><td>320 RON</td><td>Urgențe, papetărie</td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX lunar</strong></td><td><strong>3.605 RON</strong></td><td></td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX 6 luni</strong></td><td><strong>21.630 RON</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">OPEX Scalat pe 3 Ani</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Categorie</th><th>An 1</th><th>An 2</th><th>An 3</th></tr></thead>
              <tbody>
                <tr><td>Mentenanță biciclete</td><td>7.200 RON</td><td>24.000 RON</td><td>60.000 RON</td></tr>
                <tr><td>Hosting + domeniu</td><td>960 RON</td><td>1.500 RON</td><td>2.400 RON</td></tr>
                <tr><td>Servicii contabile</td><td>4.200 RON</td><td>5.400 RON</td><td>7.200 RON</td></tr>
                <tr><td>Comunicații + utilități birou</td><td>600 RON</td><td>2.400 RON</td><td>4.800 RON</td></tr>
                <tr><td>Marketing operațional</td><td>2.400 RON</td><td>8.000 RON</td><td>18.000 RON</td></tr>
                <tr><td>Costuri bancare + procesare card</td><td>1.800 RON</td><td>5.000 RON</td><td>12.000 RON</td></tr>
                <tr><td>Asigurare flotă</td><td>2.560 RON</td><td>8.000 RON</td><td>20.000 RON</td></tr>
                <tr><td>Salarii + CAM</td><td>19.700 RON</td><td>62.000 RON</td><td>130.000 RON</td></tr>
                <tr><td>Sezonierii (mentenanță vârf sezon)</td><td>—</td><td>6.000 RON</td><td>12.000 RON</td></tr>
                <tr><td>Diverse + buffer</td><td>3.840 RON</td><td>12.000 RON</td><td>26.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX anual</strong></td><td><strong>43.260 RON</strong></td><td><strong>134.300 RON</strong></td><td><strong>292.400 RON</strong></td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX EUR</strong></td><td><strong>8.652 EUR</strong></td><td><strong>26.860 EUR</strong></td><td><strong>58.480 EUR</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PROIECTII + P&L + CF */}
        <section className="bp-section" id="proiectii">
          <h2 className="bp-section-title"><BarChart3 size={20} /> Proiecții Venituri & P&L pe 3 Ani</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Sursă venit</th><th>Calcul An 1</th><th>Total An 1</th></tr></thead>
              <tbody>
                <tr><td>Abonamente (lunarizat conservator)</td><td>3.150 abonați-luni × 2,5 RON/lună</td><td>7.875 RON</td></tr>
                <tr><td>Tarife depășire</td><td>~150 RON/lună × 8 luni active</td><td>1.200 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>1.500 EUR/lună × 4 luni</td><td>30.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL An 1</strong></td><td></td><td><strong>39.075 RON (7.815 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'16px'}}>
            <table className="bp-table">
              <thead><tr><th>Sursă venit</th><th>Calcul An 2</th><th>Total An 2</th></tr></thead>
              <tbody>
                <tr><td>Abonamente</td><td>1.500 × 30 RON/an</td><td>45.000 RON</td></tr>
                <tr><td>Tarife depășire</td><td>~600 RON/lună × 10 luni</td><td>6.000 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>~50.000 EUR (3,5 contracte eșalonat)</td><td>250.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL An 2</strong></td><td></td><td><strong>301.000 RON (60.200 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'16px'}}>
            <table className="bp-table">
              <thead><tr><th>Sursă venit</th><th>Calcul An 3</th><th>Total An 3</th></tr></thead>
              <tbody>
                <tr><td>Abonamente</td><td>3.500 × 30 RON/an</td><td>105.000 RON</td></tr>
                <tr><td>Tarife depășire</td><td>~1.500 RON/lună × 11 luni</td><td>16.500 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>6 × 2.000 EUR × 12 luni</td><td>720.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL An 3</strong></td><td></td><td><strong>841.500 RON (168.300 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Cont de Profit & Pierdere (P&L)</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Linie</th><th>An 1</th><th>An 2</th><th>An 3</th></tr></thead>
              <tbody>
                <tr><td><strong>Venituri totale</strong></td><td>39.075 RON</td><td>301.000 RON</td><td>841.500 RON</td></tr>
                <tr><td>(-) OPEX</td><td className="negative">43.260 RON</td><td className="negative">134.300 RON</td><td className="negative">292.400 RON</td></tr>
                <tr><td>(-) CAPEX expansiune</td><td>—</td><td className="negative">220.000 RON</td><td className="negative">320.000 RON</td></tr>
                <tr><td><strong>EBITDA</strong></td><td className="negative">-4.185 RON</td><td className="negative">-53.300 RON</td><td className="positive">+229.100 RON</td></tr>
                <tr><td>(-) Amortizare biciclete (5 ani)</td><td className="negative">10.240 RON</td><td className="negative">32.000 RON</td><td className="negative">64.000 RON</td></tr>
                <tr><td>(-) Amortizare hub-uri (3 ani)</td><td className="negative">800 RON</td><td className="negative">2.400 RON</td><td className="negative">4.800 RON</td></tr>
                <tr><td>Impozit (1% micro / 16% profit An 3)</td><td>391 RON</td><td>3.010 RON</td><td>25.648 RON</td></tr>
                <tr className="total-row"><td><strong>PROFIT NET</strong></td><td className="negative"><strong>-15.616 RON</strong></td><td className="negative"><strong>-90.710 RON</strong></td><td className="positive"><strong>+134.652 RON (~26.930 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Cash Flow Simplificat</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Linie</th><th>An 1</th><th>An 2</th><th>An 3</th></tr></thead>
              <tbody>
                <tr><td>Cash în (venituri)</td><td className="positive">39.075 RON</td><td className="positive">301.000 RON</td><td className="positive">841.500 RON</td></tr>
                <tr><td>Cash în (finanțare externă)</td><td className="positive">96.506 RON</td><td>—</td><td>—</td></tr>
                <tr><td>Cash out (CAPEX inițial)</td><td className="negative">74.876 RON</td><td>—</td><td>—</td></tr>
                <tr><td>Cash out (CAPEX expansiune)</td><td>—</td><td className="negative">220.000 RON</td><td className="negative">320.000 RON</td></tr>
                <tr><td>Cash out (OPEX)</td><td className="negative">43.260 RON</td><td className="negative">134.300 RON</td><td className="negative">292.400 RON</td></tr>
                <tr><td>Cash out (impozit)</td><td className="negative">391 RON</td><td className="negative">3.010 RON</td><td className="negative">25.648 RON</td></tr>
                <tr className="total-row"><td><strong>Cash net la sfârșit de an</strong></td><td className="positive"><strong>+17.054 RON</strong></td><td className="negative"><strong>-56.310 RON</strong></td><td className="positive"><strong>+203.452 RON</strong></td></tr>
                <tr className="total-row"><td><strong>Poziție cumulativă cash</strong></td><td className="positive"><strong>17.054 RON</strong></td><td className="negative"><strong>-39.256 RON</strong></td><td className="positive"><strong>+164.196 RON</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>⚠️ Deficitul de cash din Anul 2 (~56.000 RON) se acoperă prin: <strong style={{color:'#F4F1EC'}}>finanțare seed mică (~15.000 EUR)</strong> sau scalare mai lentă la 80 biciclete în loc de 120, menținând cash flow-ul cumulativ pozitiv.</p>
        </section>

        {/* BREAKEVEN */}
        <section className="bp-section" id="breakeven">
          <h2 className="bp-section-title"><TrendingUp size={20} /> Break-Even & Unit Economics</h2>
          <div className="bp-grid-3">
            <div className="bp-stat-card"><div className="bp-stat">1.442</div><div className="bp-stat-label">Abonați pentru break-even fără B2B</div></div>
            <div className="bp-stat-card"><div className="bp-stat amber">1</div><div className="bp-stat-label">Contract B2B = break-even operațional instant</div></div>
            <div className="bp-stat-card"><div className="bp-stat">Luna 30–36</div><div className="bp-stat-label">Recuperarea investiției inițiale</div></div>
          </div>
          <p className="bp-section-subtitle">Validare Matematică Break-Even prin B2B</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>Costuri fixe/lună An 1</h3><p><strong>3.605 RON</strong></p></div>
            <div className="bp-card"><h3>Venit lunar la 350 abonați</h3><p><strong>875 RON</strong> (30 RON/12 × 350)</p></div>
            <div className="bp-card bp-card-teal"><h3>1 contract B2B (1.500 EUR/lună)</h3><p><strong>7.500 RON</strong> → acoperă tot OPEX-ul</p></div>
          </div>
          <p className="bp-section-subtitle">Unit Economics</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Metrică</th><th>Valoare</th><th>Comentariu</th></tr></thead>
              <tbody>
                <tr><td>CAC B2C (cost achiziție client)</td><td className="positive">8,6 RON</td><td>Buget marketing 3.000 RON / 350 abonați</td></tr>
                <tr><td>LTV B2C (lifetime value)</td><td className="positive">~100 RON</td><td>30 RON × 1/(1-0,7 retention) ≈ 100 RON</td></tr>
                <tr><td>Raport LTV/CAC B2C</td><td className="positive"><strong>11.7x</strong></td><td>Excelent (industria {'>'} 3x = sănătos)</td></tr>
                <tr><td>Payback period B2C</td><td className="positive">~1 lună</td><td>Aproape instantaneu</td></tr>
                <tr><td>CAC B2B</td><td className="positive">~500 RON</td><td>Materiale prezentare + timp echipă</td></tr>
                <tr><td>LTV B2B</td><td className="positive">~36.000 RON</td><td>1.800 EUR/lună × 12 luni × 2 ani retenție</td></tr>
                <tr><td>Raport LTV/CAC B2B</td><td className="positive"><strong>72x</strong></td><td>Excepțional</td></tr>
                <tr><td>Marja brută per cursă</td><td className="positive">~95%</td><td>Cost incremental al unei curse neglijabil</td></tr>
                <tr><td>Cost per cursă (mentenanță distribuită)</td><td>~0,8 RON</td><td>10.000 RON mentenanță / 12.000 curse/an</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Scenarii de Stres</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-red">
              <h3>Pesimist (-30% adopție, 0 B2B An 1)</h3>
              <p>An 1: 250 abonați, 7.500 RON venituri vs. 43.260 RON OPEX → <strong>pierdere -35.760 RON</strong></p>
              <p style={{marginTop:'8px'}}>An 2: 800 abonați, 24.000 RON venituri → pierdere continuă. <strong>Concluzie: fără B2B, modelul nu e viabil.</strong></p>
            </div>
            <div className="bp-card">
              <h3>Realist (proiecțiile principale)</h3>
              <p>350 abonați + 1 B2B în An 1. Inflexiune în Anul 3, recuperare investiție luna 30–36. Business sustenabil cu creștere organică.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Optimist (+30% adopție, 2 B2B An 1)</h3>
              <p>An 1: 450 abonați, 73.000 RON venituri → <strong>+29.740 RON</strong></p>
              <p style={{marginTop:'8px'}}>An 3: 4.500 abonați, 1.200.000 RON venituri. Payback luna 18, pregătire rundă Seed la 3 ani.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Comparație cu Eșecul Cluj Bike</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Parametru</th><th>Cluj Bike</th><th>Movio (proiecție)</th></tr></thead>
              <tbody>
                <tr><td>Investiție inițială</td><td className="negative">˜14.000.000 RON (public)</td><td className="positive">˜108.480 RON (privat)</td></tr>
                <tr><td>Cost per stație (6 hub-uri)</td><td className="negative">˜280.000 RON/stație</td><td className="positive">˜4.500 RON/stație (6 hub-uri × 750 RON)</td></tr>
                <tr><td>Cost per bicicletă</td><td className="negative">~26.000 RON inclusiv infrastructură</td><td className="positive">~2.900 RON inclusiv mentenanță 6 luni</td></tr>
                <tr><td>Sursa de venit</td><td className="negative">Bugetul primăriei</td><td className="positive">Abonamente + B2B (privat, sustenabil)</td></tr>
                <tr><td>Adopție reală 2026</td><td className="negative">Aproape zero</td><td className="positive">Țintă: 350 abonați An 1, 3.500 An 3</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PART 3 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 3 · Operațional</span><div className="bp-part-divider-line" /></div>
        {/* OPERATIONAL */}
        <section className="bp-section" id="operational">
          <h2 className="bp-section-title"><Settings size={20} /> Producție Hub-uri &amp; Pregătire Flotă</h2>
          <p style={{color:'#7A8A9A', fontSize:'14px', marginBottom:'16px'}}>Structura pilot: <strong style={{color:'#F4F1EC'}}>4 stații × 6 hub-uri/stație = 24 hub-uri.</strong> Un hub găzduieşte 2 biciclete. Cele 32 de biciclete sunt distribuite între hub-uri (nu toate hub-urile sunt ocupate la capacitate maximă — flexibilitate de rebalansare).</p>
          <p className="bp-section-subtitle">Pașii Asamblării unui Hub Movio (~6 ore, echipă 2 persoane)</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text"><strong>Tăiere & sudare structură metalică</strong> — 1,5 ore, la atelier UTCN sau partener local Cluj</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text"><strong>Vopsire structură</strong> — 30 min activ, uscare 24h în lab UTCN</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text"><strong>Imprimare 3D componente custom</strong> — overnight în lab UTCN (carcasă electronică, suport QR, filament PETG)</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text"><strong>Asamblare modulară</strong> — 1 oră, montare componente printate pe structură metalică</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text"><strong>Montare componente electronice</strong> — 1,5 ore: ESP8266, servo SG90, limitator de cursă, LED-uri, panou solar 5V/1W, baterie LiPo</div></div>
            <div className="bp-step"><div className="bp-step-num">6</div><div className="bp-step-text"><strong>Programare & flash firmware</strong> — 30 min, Arduino IDE, cod open-source documentat intern</div></div>
            <div className="bp-step"><div className="bp-step-num">7</div><div className="bp-step-text"><strong>Test funcțional în atelier</strong> — 1 oră: secvența completă senzor → blocare → cod QR → deblocare</div></div>
            <div className="bp-step"><div className="bp-step-num">8</div><div className="bp-step-text"><strong>Instalare în campus</strong> — 1,5 ore: fixare pe sol prin bride sau greutăți de beton, calibrare poziție</div></div>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'24px'}}>
            <table className="bp-table">
              <thead><tr><th>Element</th><th>Cost (RON)</th></tr></thead>
              <tbody>
                <tr><td>Componente electronice</td><td>100</td></tr>
                <tr><td>Materiale structură (oțel, vopsea, șuruburi)</td><td>250</td></tr>
                <tr><td>Imprimare 3D componente custom (filament)</td><td>80</td></tr>
                <tr><td>Panou solar 5V/1W</td><td>35</td></tr>
                <tr><td>Baterie LiPo + modul TP4056</td><td>45</td></tr>
                <tr><td>Coduri QR laminate (2 buc)</td><td>10</td></tr>
                <tr><td>Manoperă internă (cofondatori, neplătită An 1)</td><td>0</td></tr>
                <tr className="total-row"><td><strong>Total cost direct hub</strong></td><td><strong>520 RON</strong></td></tr>
                <tr className="total-row"><td><strong>Total inclusiv overheads (transport, instalare)</strong></td><td><strong>~600 RON</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Pregătire Bicicletă pentru Flotă (~55 min/bicicletă)</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text"><strong>Recepție de la furnizor</strong> (Pegas / DHS / Cross local)</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text"><strong>Verificare calitate inițială</strong> — frâne, anvelope, transmisie (15 min)</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text"><strong>Personalizare Movio:</strong> marcaj cu nume unic, GPS tracker pe cadru (15 min), U-lock atașat permanent (10 min), etichetă QR de hub</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text"><strong>Înregistrare în aplicație</strong> + asociere cu un hub default (5 min)</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text"><strong>Test funcțional final</strong> (10 min). Cost incremental per bicicletă: ~120 RON (GPS + lacăt + etichete)</div></div>
          </div>
        </section>

        {/* MENTENANTA + OPS */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Settings size={20} /> Plan de Mentenanță & Operațiuni Zilnice</h2>
          <p className="bp-section-subtitle">Mentenanță Programată per Bicicletă</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Frecvență</th><th>Operațiune</th><th>Cost</th><th>Cine face</th></tr></thead>
              <tbody>
                <tr><td>Săptămânal</td><td>Inspecție vizuală în campus (2 min/bicicletă)</td><td>0 (intern)</td><td>Echipa Movio</td></tr>
                <tr><td>Lunar</td><td>Verificare presiune anvelope, ungere lanț</td><td>0 (intern)</td><td>Echipa Movio</td></tr>
                <tr><td>3 luni</td><td>Reglare frâne, schimbătoare, verificare șuruburi</td><td>50 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr><td>6 luni</td><td>Revizie standard (curățare, ungere, reglaje complete)</td><td>150 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr><td>12 luni</td><td>Revizie premium (înlocuire piese uzate, anvelope, cabluri)</td><td>250 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr className="total-row"><td><strong>Cost mediu anual/bicicletă</strong></td><td></td><td><strong>~150 RON</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Procesul End-to-End pentru Utilizator</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text">Utilizatorul vede <strong>hub Movio în campus</strong> și scanează QR cu telefonul</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text">Deschide <strong>app web Movio direct în browser</strong> (fără descărcare), crează cont în 30 secunde</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text">Plătește <strong>abonament 30 RON/an</strong> sau pay-per-use (5 RON/oră)</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text">Selectează bicicleta → app trimite <strong>comandă deblocare</strong> la hub via WiFi/4G → LED verde</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text">Returnează bicicleta la orice hub → hub detectează (limitator de cursă) → app afișează <strong>km, CO₂ economisit, puncte</strong></div></div>
          </div>
          <p className="bp-section-subtitle">Rebalancing Flotă (Problemă Clasică Bike-Sharing)</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>Soluție An 1 (gamification)</h3><p>Utilizatorul care returnează la un hub gol primește <strong>5 minute extra gratuite</strong> în următoarea cursă.</p></div>
            <div className="bp-card"><h3>Rebalancing manual vineri</h3><p>1 oră, echipă Movio, mașină personală + cărucior. <strong>Cost An 1: 0 RON cash</strong> (cofondatori, neplătit).</p></div>
            <div className="bp-card bp-card-teal"><h3>An 2–3: externalizare</h3><p>Curier local sau part-timer 4h/săptămână. <strong>Cost: ~12.000 RON/an.</strong></p></div>
          </div>
        </section>

        {/* KPI */}
        <section className="bp-section" id="kpi">
          <h2 className="bp-section-title"><BarChart3 size={20} /> KPI (Key Performance Indicators)</h2>
          <div className="bp-kpi-grid">
            <div className="bp-kpi-card"><h4>KPI Adopție</h4><ul>
              <li>Abonați activi lună 12: <span>350</span></li>
              <li>Rată conversie vizitator→abonat: <span>12%</span></li>
              <li>NPS trimestrial: <span>{'>'}40</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI Utilizare</h4><ul>
              <li>Curse/zi/bicicletă: <span>2–3</span></li>
              <li>Durată medie cursă: <span>18–25 min</span></li>
              <li>Curse sub 60 min: <span>{'>'}85%</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI Operaționali</h4><ul>
              <li>Disponibilitate flotă: <span>{'>'}90%</span></li>
              <li>Timp rezolvare problemă: <span>{'<'}24h</span></li>
              <li>Cost mentenanță/cursă: <span>{'<'}2 RON</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI Financiari</h4><ul>
              <li>MRR din abonamente: <span>→ tracking</span></li>
              <li>ARPU țintă: <span>35 RON/an</span></li>
              <li>LTV/CAC ratio: <span>{'>'}5x</span></li>
              <li>Cash flow op. pozitiv: <span>luna 10</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI de Impact</h4><ul>
              <li>Total km parcurși: <span>tracking</span></li>
              <li>CO₂ economisit: <span>200g/km vs mașină</span></li>
              <li>Curse în orele de vârf: <span>8:00–9:30 / 16:00–18:00</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>Praguri Minime Pilot</h4><ul>
              <li>Abonați la 6 luni: <span>150</span></li>
              <li>Abonați la 12 luni: <span>350</span></li>
              <li>B2B la 12 luni: <span>1 (obligatoriu)</span></li>
              <li>Curse/zi/bicicletă (12L): <span>2,5</span></li>
            </ul></div>
          </div>
        </section>

        {/* HR */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Users size={20} /> Resurse Umane & Furnizori</h2>
          <p className="bp-section-subtitle">Plan de Angajări</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Rol</th><th>Anul</th><th>Salariu brut/lună</th><th>Comentariu</th></tr></thead>
              <tbody>
                <tr><td>Administrator (cofondator)</td><td>1</td><td>4.050 RON</td><td>Necesar legal pentru regim micro</td></tr>
                <tr><td>Tehnician mentenanță part-time</td><td>2</td><td>2.500 RON</td><td>4h/zi × 5 zile, rebalancing + reparații</td></tr>
                <tr><td>Marketing intern (full-time)</td><td>2</td><td>4.500 RON</td><td>Augusta sau angajare nouă</td></tr>
                <tr><td>Tehnician mentenanță full-time</td><td>3</td><td>4.500 RON</td><td>Înlocuiește part-timer-ul</td></tr>
                <tr><td>Sales B2B</td><td>3</td><td>5.500 RON + comision</td><td>Pentru creșterea contractelor B2B</td></tr>
                <tr><td>Developer software</td><td>3</td><td>8.000 RON</td><td>Iterație app și platformă admin</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Furnizori Confirmați</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Furnizor</th><th>Categoria</th><th>Detalii</th></tr></thead>
              <tbody>
                <tr><td>Pegas / DHS / Cross</td><td>Biciclete</td><td>Producători români entry-mid, 1.300–2.000 RON, garanție 24 luni</td></tr>
                <tr><td>OptimusDigital, Cleste, Ardushop</td><td>Electronice</td><td>ESP8266, servomotoare, senzori, LED-uri — livrare din România</td></tr>
                <tr><td>Filament3D / 3DJake</td><td>Filament 3D</td><td>PETG pentru imprimante UTCN, ~70 RON/kg</td></tr>
                <tr><td>Atelier mecanic Cluj (de identificat)</td><td>Sudură structură</td><td>Partener local pentru construcția structurii metalice hub-uri</td></tr>
                <tr><td>DrBike / BikePub / atelier local</td><td>Mentenanță flotă</td><td>Contract anual, tarif negociat 100 RON/oră (vs. 150 RON retail)</td></tr>
                <tr><td>Tipografie locală Cluj</td><td>Etichete, QR-uri</td><td>Imprimare laminată rezistentă la intemperii</td></tr>
                <tr><td>Vercel / Cloudflare</td><td>Hosting web</td><td>Plan gratuit suficient pentru pilot; upgrade Vercel Pro în An 2</td></tr>
                <tr><td>Stripe / Netopia</td><td>Procesare plăți</td><td>2–3% per tranzacție; integrare cu PWA</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Parteneri Instituționali</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>UTCN — Manufacturing Engineering</h3><p>Acces lab, imprimante 3D, software CAD, cadru didactic coordonator, spații pentru hub-uri pilot.</p></div>
            <div className="bp-card"><h3>Junior Achievement România</h3><p>Mentorat, vizibilitate prin BizzFactory și Gen-E, acces la rețeaua de mentori și investitori JA.</p></div>
            <div className="bp-card bp-card-teal"><h3>Companii tech Cluj (Faza 2)</h3><p>Bosch, Endava, NTT Data, Emerson, Porsche Engineering, Continental, Crystal System.</p></div>
          </div>
        </section>

        {/* RISCURI */}
        <section className="bp-section" id="riscuri">
          <h2 className="bp-section-title"><AlertCircle size={20} /> Riscuri Operaționale & Plan de Continuitate</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Risc</th><th>Probabilitate</th><th>Impact</th><th>Plan de Mitigare</th></tr></thead>
              <tbody>
                <tr><td>Bicicletă defectă în mijlocul cursei</td><td>Mediu</td><td>Mediu</td><td>Compensare automată în app (cursă gratuită + bonus); mentenanță reactivă în {'<'}24h</td></tr>
                <tr><td>Hub defect (servo blocat)</td><td>Scăzut</td><td>Mediu</td><td>Stoc servo-uri rezervă; piesă înlocuită în {'<'}2h</td></tr>
                <tr><td>Furt bicicletă</td><td>Scăzut-mediu</td><td>Mare</td><td>GPS activat, raport poliție în {'<'}2h, deposit reținut, asigurare acoperitoare</td></tr>
                <tr><td>Vandalism hub</td><td>Scăzut</td><td>Mediu</td><td>Locație vizibilă (campus), camere pază UTCN, asigurare comercială</td></tr>
                <tr><td>Vreme extremă (zăpadă, ploaie)</td><td>Sigur sezonier</td><td>Mic</td><td>Hub-uri cu acoperire parțială; comunicare proactivă în app</td></tr>
                <tr><td>Pană internet / WiFi campus</td><td>Scăzut</td><td>Mare</td><td>Backup 4G planificat în Anul 2; cod admin pentru unlock manual</td></tr>
                <tr><td>Server down {'>'} 2h</td><td>Scăzut</td><td>Mare</td><td>SLA 99% uptime Vercel; notificare proactivă utilizatori; echipă pe teren</td></tr>
                <tr><td>Aprobare lentă UTCN</td><td>Mediu</td><td>Mare</td><td>Plan B: parcaje private limitrofe campus cu permisiune scrisă</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Plan de Scalare Operațională</p>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal">
              <h3>Anul 2 — Extindere UBB / UMF / USAMV</h3>
              <p>Contact formal LOI (luna 13–15) → Producție 60 hub-uri suplimentare (180 ore manoperă) → Achiziție 90 biciclete (144.000 RON CAPEX) → Lansare scalonată: USAMV luna 18, UBB luna 21, UMF luna 24.</p>
            </div>
            <div className="bp-card">
              <h3>Anul 3 — Pregătire Scalare Națională</h3>
              <p>Studiu fezabilitate Iași sau Timișoara (6–8 săptămâni) → Identificare partener universitar local → Hub v2.0 (4 biciclete/hub, PCB custom, parteneriat Pegas pentru bicicletă Movio ediție limitată).</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Indicatori de Succes Pilot UTCN (Praguri pentru Decizia de Scalare)</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Indicator</th><th>Prag minim 6 luni</th><th>Prag minim 12 luni</th></tr></thead>
              <tbody>
                <tr><td>Abonați activi</td><td>150</td><td className="positive">350</td></tr>
                <tr><td>Disponibilitate flotă</td><td>85%</td><td className="positive">90%</td></tr>
                <tr><td>NPS</td><td>{'>'}30</td><td className="positive">{'>'}40</td></tr>
                <tr><td>Cash flow op. lunar</td><td>-2.000 RON</td><td className="positive">+1.000 RON</td></tr>
                <tr><td>Contracte B2B</td><td>0 (acceptabil)</td><td className="negative">1 (obligatoriu)</td></tr>
                <tr><td>Curse zilnice medii/bicicletă</td><td>1,5</td><td className="positive">2,5</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>Dacă pragurile de 12 luni sunt atinse + cel puțin 1 contract B2B semnat, echipa decide oficial scalarea. Dacă nu, există 2 opțiuni: <strong style={{color:'#F4F1EC'}}>Extindere mandat pilot</strong> cu încă 6 luni sau <strong style={{color:'#F4F1EC'}}>Pivot</strong> — ajustare model business pe baza datelor reale.</p>
        </section>

      </div>
    </div>
  );
}

export default BusinessPlan;
