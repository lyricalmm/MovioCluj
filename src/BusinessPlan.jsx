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
          <Link to="/" className="bp-nav-back"><ArrowLeft size={18} /> ÃŽnapoi la website</Link>
          <span className="bp-brand-tag">MOVIO Â· PLAN DE AFACERI 2026</span>
        </div>

        {/* HERO */}
        <header className="bp-hero">
          <div className="bp-hero-badge"><span className="bp-hero-pulse" /> CONFIDENÈšIAL Â· JA BIZZFACTORY</div>
          <h1 className="bp-title">Plan de Afaceri <span>Movio</span></h1>
          <p className="bp-subtitle">Sistem inteligent de bike-sharing pentru campusurile universitare din RomÃ¢nia. Strategie, piaÈ›Äƒ, financiar È™i operaÈ›ional â€” 2026â€“2028.</p>
          <div className="bp-hero-stats">
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">130</span><span className="bp-hero-stat-label">RespondenÈ›i validare</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">86%</span><span className="bp-hero-stat-label">AdopÈ›ie declaratÄƒ</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num amber">21.700â‚¬</span><span className="bp-hero-stat-label">FinanÈ›are solicitatÄƒ</span></div>
            <div className="bp-hero-sep" />
            <div className="bp-hero-stat"><span className="bp-hero-stat-num">4.26/5</span><span className="bp-hero-stat-label">Scor utilitate</span></div>
          </div>
        </header>

        {/* TOC */}
        <nav className="bp-toc">
          <span className="bp-toc-label">ConÈ›inut:</span>
          <a href="#strategie">Strategie</a><span className="bp-toc-sep">Â·</span>
          <a href="#piata">PiaÈ›Äƒ</a><span className="bp-toc-sep">Â·</span>
          <a href="#echipa">EchipÄƒ</a><span className="bp-toc-sep">Â·</span>
          <a href="#marketing">Marketing</a><span className="bp-toc-sep">Â·</span>
          <a href="#venituri">Venituri</a><span className="bp-toc-sep">Â·</span>
          <a href="#swot">SWOT</a><span className="bp-toc-sep">Â·</span>
          <a href="#roadmap">Roadmap</a><span className="bp-toc-sep">Â·</span>
          <a href="#capex">CAPEX</a><span className="bp-toc-sep">Â·</span>
          <a href="#opex">OPEX</a><span className="bp-toc-sep">Â·</span>
          <a href="#proiectii">ProiecÈ›ii</a><span className="bp-toc-sep">Â·</span>
          <a href="#breakeven">Break-even</a><span className="bp-toc-sep">Â·</span>
          <a href="#operational">OperaÈ›ional</a><span className="bp-toc-sep">Â·</span>
          <a href="#kpi">KPI</a><span className="bp-toc-sep">Â·</span>
          <a href="#riscuri">Riscuri</a>
        </nav>

        {/* PART 1 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 1 Â· Strategie & PiaÈ›Äƒ</span><div className="bp-part-divider-line" /></div>
        {/* STRATEGIE */}
        <section className="bp-section" id="strategie">
          <h2 className="bp-section-title"><Target size={20} /> Sumar Executiv & Descrierea Companiei</h2>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Misiune</h3>
              <p>Mobilitate accesibilÄƒ, fiabilÄƒ È™i verde pentru studenÈ›ii romÃ¢ni â€” Ã®ncepÃ¢nd cu cei <strong>22.000 de studenÈ›i ai UTCN</strong>. Sistemul combinÄƒ hub-uri modulare proiectate intern, o aplicaÈ›ie PWA È™i o flotÄƒ de city-bike-uri standardizate.</p>
            </div>
            <div className="bp-card">
              <h3>Viziunea pe 5 Ani</h3>
              <p>Movio devine standardul de bike-sharing Ã®n campusurile universitare din RomÃ¢nia, prezent Ã®n <strong>Cluj, IaÈ™i, TimiÈ™oara È™i BraÈ™ov</strong>. Pilot lansare: vara 2026 la UTCN Cluj-Napoca.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Forma JuridicÄƒ</h3>
              <p><strong>SRL Ã®n regim de microÃ®ntreprindere</strong> (1% impozit pe venit). Capital social minim 500 RON. CAEN: 7711 (Ã®nchirieri biciclete), 6209 (IT services), 7320 (marketing B2B). Sediu planificat: Cluj-Napoca, prin incubare UTCN.</p>
            </div>
            <div className="bp-card">
              <h3>Structura ProprietÄƒÈ›ii</h3>
              <p><strong>4 cofondatori, 25% fiecare.</strong> ÃŽnregistrare SRL dupÄƒ primele venituri din pilot. Servicii contabile externalizate la 250â€“400 RON/lunÄƒ post-Ã®nregistrare.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Cerere de FinanÈ›are Faza Pilot</p>
          <div className="bp-grid-4">
            <div className="bp-stat-card"><div className="bp-stat">~21.700â‚¬</div><div className="bp-stat-label">Total necesar pilot</div></div>
            <div className="bp-stat-card"><div className="bp-stat">47%</div><div className="bp-stat-label">Biciclete (32 buc)</div></div>
            <div className="bp-stat-card"><div className="bp-stat">16%</div><div className="bp-stat-label">Operare 6 luni</div></div>
            <div className="bp-stat-card"><div className="bp-stat">14-16</div><div className="bp-stat-label">Luna profitabilitate op.</div></div>
          </div>
        </section>
        {/* PIATA */}
        <section className="bp-section" id="piata">
          <h2 className="bp-section-title"><MapPin size={20} /> Analiza PieÈ›ei</h2>
          <div className="bp-grid-3">
            <div className="bp-stat-card"><div className="bp-stat">24M RON</div><div className="bp-stat-label">TAM â€” 540.000 studenÈ›i Ã®n RomÃ¢nia (~30 RON/an + extras)</div></div>
            <div className="bp-stat-card"><div className="bp-stat">12M RON</div><div className="bp-stat-label">SAM â€” 280.000 studenÈ›i Ã®n Cluj, IaÈ™i, TimiÈ™oara, BraÈ™ov</div></div>
            <div className="bp-stat-card"><div className="bp-stat">600K RON</div><div className="bp-stat-label">SOM â€” 5.000â€“8.000 utilizatori activi Cluj, maturitate an 3â€“4</div></div>
          </div>
          <p className="bp-section-subtitle">TendinÈ›e de PiaÈ›Äƒ</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal">
              <h3>Vidul lÄƒsat de Cluj Bike</h3>
              <p>Sistem public lansat 2015 cu <strong>14 milioane RON</strong> investiÈ›ie publicÄƒ. 101/130 respondenÈ›i Ã®l cunoÈ™teau, dar nu Ã®l foloseau. EÈ™ec de operare, nu de tehnologie â€” exact ce Movio rezolvÄƒ.</p>
            </div>
            <div className="bp-card">
              <h3>AdopÈ›ia PWA Ã®n creÈ™tere</h3>
              <p>Studii AliExpress, Twitter Lite, Pinterest aratÄƒ creÈ™teri de conversie de <strong>33â€“104%</strong> faÈ›Äƒ de app native. Eliminarea barierei de descÄƒrcare este un avantaj concret pentru studenÈ›i.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Cluj IT â€” 30.000+ angajaÈ›i tech</h3>
              <p>Peste <strong>200 firme tech</strong> cu bugete reale de Employer Branding. AudienÈ›a directÄƒ pentru modelul B2B din faza 2, cu bugete de 50.000â€“300.000 EUR/an per companie medie-mare.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Profilul Clientului Ideal</p>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal">
              <h3>B2C â€” Studentul UTCN Navetist</h3>
              <p>VÃ¢rstÄƒ: 19â€“24 ani. LocaÈ›ie: Observator, MÄƒrÄƒÈ™ti, MÄƒnÄƒÈ™tur. Transport curent: 40% pe jos, 35% CTP, 15% maÈ™inÄƒ. DistanÈ›Äƒ zilnicÄƒ tipicÄƒ: 1,5â€“4 km. Buget CTP actual: 80 RON/lunÄƒ. Sensibil la preÈ› È™i fiabilitate. Activ pe Instagram, TikTok, grupuri Facebook UTCN.</p>
            </div>
            <div className="bp-card">
              <h3>B2B â€” Compania Tech din Cluj</h3>
              <p>Firme cu 100â€“3.000 angajaÈ›i. Department HR cu buget Employer Branding. Decident: HR Director sau Talent Acquisition Lead. Durerea: dificultatea de a ajunge la talentele tinere. Oferta: vizibilitate continuÄƒ Ã®n campus prin biciclete brand-uite.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">CompetiÈ›ie & Avantajele Movio</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Competitor</th><th>Tip</th><th>Atu</th><th>SlÄƒbiciune</th></tr></thead>
              <tbody>
                <tr><td><strong>Cluj Bike</strong></td><td>Public</td><td>Brand cunoscut, infrastructurÄƒ</td><td>StaÈ›ii defecte, Ã®ncredere zero, neutilizat</td></tr>
                <tr><td><strong>Lime / Bolt scootere</strong></td><td>Privat internaÈ›ional</td><td>DistribuÈ›ie bunÄƒ, app polished</td><td>PreÈ›/cursÄƒ mare, blocate iarna</td></tr>
                <tr><td><strong>CTP Cluj</strong></td><td>Public, transport</td><td>Acoperire largÄƒ, abonament ieftin</td><td>Aglomerat, lent pe trasee scurte</td></tr>
                <tr><td><strong>BicicletÄƒ personalÄƒ</strong></td><td>Substitut direct</td><td>FÄƒrÄƒ cost recurent</td><td>Risc furt, depozitare, mentenanÈ›Äƒ proprie</td></tr>
                <tr className="total-row"><td><strong>Movio</strong></td><td>Privat, campus</td><td>Cost hub mic, PWA, validare proprie, IP hardware</td><td>Startup fÄƒrÄƒ istoric comercial</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Avantajele Competitive Movio</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal"><h3>â‘  Cost infrastructurÄƒ redus</h3><p>Componenta electronicÄƒ per hub: <strong>~100 RON</strong>. StaÈ›ii Cluj Bike costau sute de mii de lei. Asta permite densitate imposibilÄƒ pentru competitorii publici.</p></div>
            <div className="bp-card"><h3>â‘¡ Model dual B2C + B2B</h3><p>Reduce dependenÈ›a de un singur client È™i creeazÄƒ un buffer Ã®mpotriva sezonalitÄƒÈ›ii. B2B finanÈ›eazÄƒ lunile slabe de iarnÄƒ.</p></div>
            <div className="bp-card bp-card-teal"><h3>â‘¢ PWA fÄƒrÄƒ descÄƒrcare</h3><p>Acces direct din browser prin QR de pe hub. EliminÄƒ frecuÈ™ul App Store È™i creÈ™te conversia Ã®n adopÈ›ie.</p></div>
            <div className="bp-card"><h3>â‘£ Validare proprie + UTCN</h3><p>130 date reale de la utilizatori UTCN + suport instituÈ›ional = avantaj greu de replicat de un competitor extern.</p></div>
            <div className="bp-card bp-card-teal"><h3>â‘¤ Hardware proiectat intern</h3><p>IP propriu, iteraÈ›ie rapidÄƒ fÄƒrÄƒ dependenÈ›Äƒ de furnizori externi. Versiunea 2.0 a hub-ului planificatÄƒ Ã®n Anul 3.</p></div>
          </div>
        </section>
        {/* ECHIPA */}
        <section className="bp-section" id="echipa">
          <h2 className="bp-section-title"><Users size={20} /> Echipa Fondatoare</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Rol</th><th>Membru</th><th>ResponsabilitÄƒÈ›i</th></tr></thead>
              <tbody>
                <tr><td><span className="bp-teal">CEO & Strategy</span></td><td><strong>CrÄƒciun RÄƒzvan</strong></td><td>Viziune produs, parteneriate, prezentÄƒri juriu È™i sponsori</td></tr>
                <tr><td><span className="bp-teal">CTO Hardware</span></td><td><strong>Maxim Andrei-Vasile</strong></td><td>Proiectare & asamblare hub-uri, ESP8266, mecanism servo</td></tr>
                <tr><td><span className="bp-teal">COO & Planning</span></td><td><strong>MureÈ™an Vlad</strong></td><td>Plan de afaceri DreamShaper, modelare financiarÄƒ, research</td></tr>
                <tr><td><span className="bp-teal">CMO & Brand</span></td><td><strong>Oros Augusta</strong></td><td>Identitate vizualÄƒ, social media, comunicare utilizatori</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'14px', marginTop:'16px'}}>ToÈ›i 4 sunt studenÈ›i la <strong style={{color:'#F4F1EC'}}>Manufacturing Engineering, UTCN</strong>. Acces la laboratoare, imprimante 3D, software CAD licenÈ›iat. Mentor JA RomÃ¢nia prin BizzFactory 2025â€“2026. Locul 2 Innovation Day RAF.</p>
          <p className="bp-section-subtitle">Lacune Identificate & Plan de Acoperire</p>
          <div className="bp-grid-3">
            <div className="bp-card"><h3>LipsÄƒ experienÈ›Äƒ comercialÄƒ</h3><p>â†’ Mentorat JA, cursuri HP LIFE gratuite, Ã®nvÄƒÈ›are pe teren prin pilot</p></div>
            <div className="bp-card"><h3>LipsÄƒ experienÈ›Äƒ B2B</h3><p>â†’ Focus B2C Ã®n Anul 1; training HubSpot Academy + networking Cluj IT Days Ã®n Anul 2</p></div>
            <div className="bp-card"><h3>LipsÄƒ fiscalitate avansatÄƒ</h3><p>â†’ Contabil externalizat din momentul Ã®nregistrÄƒrii SRL (250â€“400 RON/lunÄƒ)</p></div>
          </div>
        </section>

        {/* MARKETING */}
        <section className="bp-section" id="marketing">
          <h2 className="bp-section-title"><Zap size={20} /> Strategie de Marketing & VÃ¢nzÄƒri</h2>
          <p className="bp-section-subtitle">PÃ¢lnia de Conversie B2C (Anul 1)</p>
          <div className="bp-funnel">
            <div className="bp-funnel-step"><div className="bp-funnel-num">3.000</div><div><div className="bp-funnel-label">ConÈ™tientizare</div><div className="bp-funnel-sub">StudenÈ›i expuÈ™i la marketing organic Ã®n campus UTCN</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">1.200</div><div><div className="bp-funnel-label">Interes</div><div className="bp-funnel-sub">ViziteazÄƒ site-ul / aplicaÈ›ia web Movio</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">700</div><div><div className="bp-funnel-label">Considerare</div><div className="bp-funnel-sub">TesteazÄƒ aplicaÈ›ia (scaneazÄƒ QR, creazÄƒ cont)</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">350</div><div><div className="bp-funnel-label">AchiziÈ›ie</div><div className="bp-funnel-sub">Abonamente plÄƒtite (rata conversie È›intÄƒ: 12%)</div></div></div>
            <div className="bp-funnel-step"><div className="bp-funnel-num">245</div><div><div className="bp-funnel-label">RetenÈ›ie An 2</div><div className="bp-funnel-sub">ReÃ®nnoiri (70% retention rate â€” conservator faÈ›Äƒ de industrie 75â€“85%)</div></div></div>
          </div>
          <p className="bp-section-subtitle">Canalele de Marketing (Total buget An 1: ~2.500 RON)</p>
          <div className="bp-grid">
            <div className="bp-card bp-card-teal"><h3>On-the-ground UTCN (1.500 RON/an)</h3><p>Demo-uri Ã®n prima sÄƒptÄƒmÃ¢nÄƒ universitarÄƒ, stand Open Day, postere cu QR Ã®n cÄƒmine, conferinÈ›e studenÈ›eÈ™ti.</p></div>
            <div className="bp-card"><h3>Social Media Organic (800 RON/an paid)</h3><p>Instagram @movio.cluj: 4â€“5 postÄƒri/sÄƒptÄƒmÃ¢nÄƒ, Reels. TikTok: 1â€“2 clipuri/sÄƒptÄƒmÃ¢nÄƒ. LinkedIn: 1 postare/sÄƒptÄƒmÃ¢nÄƒ (audienÈ›a B2B viitoare).</p></div>
            <div className="bp-card bp-card-teal"><h3>Word of Mouth (0 RON)</h3><p>Fiecare bicicletÄƒ are un nume unic ("Shayla", "GheorghiÈ›Äƒ", "Ada Lovelace"). Fenomenul: <em>"Azi am luat-o pe Shayla"</em> â€” viral organic.</p></div>
            <div className="bp-card"><h3>Program Ambasadori (0 RON cash)</h3><p>1 lunÄƒ gratuitÄƒ pentru fiecare 5 prieteni invitaÈ›i activi. 10â€“15 ambasadori cheie din comunitatea UTCN identificaÈ›i È™i activaÈ›i.</p></div>
          </div>
          <p className="bp-section-subtitle">Strategia B2B (Anul 2) â€” Procesul de VÃ¢nzare</p>
          <div className="bp-grid-3">
            <div className="bp-card"><h3>Luna 1â€“2</h3><p>Outreach LinkedIn cÄƒtre HR Directors din firme tech È›intÄƒ (Bosch, Endava, NTT Data, Emerson, Continental). ÃŽntÃ¢lnire de calificare 15 min.</p></div>
            <div className="bp-card bp-card-teal"><h3>Luna 3â€“4</h3><p>Prezentare detaliatÄƒ (45 min) cu studiu de caz din pilot. Propunere comercialÄƒ + negociere. Cost CAC B2B: ~500 RON (materiale + timp echipÄƒ).</p></div>
            <div className="bp-card"><h3>Luna 5â€“6</h3><p>Pilot 30 zile (1â€“2 biciclete brand-uite). Contract anual semnat. Valoare medie contract anual: <strong>18.000â€“25.000 RON</strong>.</p></div>
          </div>
        </section>

        {/* VENITURI */}
        <section className="bp-section" id="venituri">
          <h2 className="bp-section-title"><BarChart3 size={20} /> Modelul de Venituri</h2>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal"><h3>â‘  Abonament StudenÈ›esc â€” 30 RON/an</h3><p>Include <strong>60 minute gratuite per cursÄƒ</strong>, fÄƒrÄƒ limitÄƒ de curse/zi. Pragul psihologic confirmat de formular: 86% acceptÄƒ sÄƒ plÄƒteascÄƒ. ComparaÈ›ie: abonament CTP student = 720 RON/an.</p></div>
            <div className="bp-card"><h3>â‘¡ Tarif DepÄƒÈ™ire â€” 5 RON/orÄƒ</h3><p>Se aplicÄƒ doar dacÄƒ bicicleta e È›inutÄƒ peste 60 min. DescurajeazÄƒ imobilizarea, asigurÄƒ rotaÈ›ie. ~8â€“12% utilizatori genereazÄƒ tarife depÄƒÈ™ire lunar.</p></div>
            <div className="bp-card"><h3>â‘¢ B2B Employer Branding â€” 1.500â€“2.500 EUR/lunÄƒ</h3><p>Companie tech aplicÄƒ brandul pe 5â€“10 biciclete + 1â€“2 hub-uri. Contract minim 6 luni, ideal 12. ÈšintÄƒ: 1 contract Ã®n Anul 1, 3â€“4 Ã®n Anul 2, 6 Ã®n Anul 3.</p></div>
            <div className="bp-card bp-card-teal"><h3>â‘£ Sponsorizare Evenimente (oportunist)</h3><p>Branding temporar la evenimente UTCN, conferinÈ›e, lansÄƒri. 500â€“1.500 RON per eveniment. Revenue suplimentar, nu structural.</p></div>
          </div>
          <p className="bp-section-subtitle">Mix-ul de Venit ÈšintÄƒ pe 3 Ani</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>An</th><th>B2C (abonamente + depÄƒÈ™iri)</th><th>B2B (Employer Branding)</th><th>Total estimat</th></tr></thead>
              <tbody>
                <tr><td>Anul 1</td><td>65%</td><td>35%</td><td>39.075 RON</td></tr>
                <tr><td>Anul 2</td><td>45%</td><td>55%</td><td>301.000 RON</td></tr>
                <tr><td>Anul 3</td><td>35%</td><td>65%</td><td>841.500 RON</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>La ~841.500 RON (~168.300 EUR) Ã®n Anul 3, firma depÄƒÈ™eÈ™te plafonul de 100.000 EUR pentru regimul micro È™i trece automat la <strong style={{color:'#F4F1EC'}}>impozit pe profit de 16%</strong>. Normal È™i sÄƒnÄƒtos pentru o companie Ã®n creÈ™tere.</p>
        </section>

        {/* SWOT */}
        <section className="bp-section" id="swot">
          <h2 className="bp-section-title"><ShieldCheck size={20} /> Analiza SWOT cu Mitigare</h2>
          <div className="bp-swot">
            <div className="bp-swot-cell strengths"><h4>âœ¦ Puncte Forte</h4><ul>
              <li>EchipÄƒ tehnicÄƒ completÄƒ (Manufacturing Engineering UTCN)</li>
              <li>Validare realÄƒ: 130 respondenÈ›i, 86% adopÈ›ie declaratÄƒ</li>
              <li>Hardware proiectat intern, cost mic (~520 RON/hub)</li>
              <li>Suport instituÈ›ional UTCN (lab, imprimante 3D, CAD)</li>
              <li>Locul 2 Innovation Day RAF â€” credibilitate externÄƒ</li>
              <li>Prototip funcÈ›ional, nu doar concept</li>
            </ul></div>
            <div className="bp-swot-cell weaknesses"><h4>âš  Puncte Slabe</h4><ul>
              <li>LipsÄƒ experienÈ›Äƒ antreprenorialÄƒ prealabilÄƒ</li>
              <li>Capital iniÈ›ial limitat</li>
              <li>Niciun contract B2B semnat la prezentare</li>
              <li>DependenÈ›Äƒ de aprobarea formalÄƒ UTCN pentru locaÈ›ii</li>
              <li>Sezonalitate previzibilÄƒ (novâ€“feb utilizare scÄƒzutÄƒ)</li>
            </ul></div>
            <div className="bp-swot-cell opportunities"><h4>â–² OportunitÄƒÈ›i</h4><ul>
              <li>Cluj â€” capitala IT a RomÃ¢niei (200+ firme tech)</li>
              <li>EÈ™ecul Cluj Bike a creat vid pe piaÈ›Äƒ</li>
              <li>TendinÈ›Äƒ europeanÄƒ mobilitate verde (PNRR, fonduri UE)</li>
              <li>100.000+ studenÈ›i Ã®n Cluj la 4 universitÄƒÈ›i</li>
              <li>PosibilÄƒ expansiune IaÈ™i, TimiÈ™oara, BraÈ™ov</li>
            </ul></div>
            <div className="bp-swot-cell threats"><h4>âœ• AmeninÈ›Äƒri & Mitigare</h4><ul>
              <li>Vandalism/furt â†’ GPS, asigurare 80 RON/bic./an, pazÄƒ UTCN</li>
              <li>Competitor internaÈ›ional â†’ first-mover, parteneriat UTCN</li>
              <li>Sezonalitate â†’ contract B2B anual acoperÄƒ lunile slabe</li>
              <li>AprobÄƒri lente UTCN â†’ plan B: spaÈ›ii private limitrofe</li>
              <li>EÈ™ec hardware â†’ modular, stoc piese, garanÈ›ii furnizori</li>
            </ul></div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="bp-section" id="roadmap">
          <h2 className="bp-section-title"><Target size={20} /> Roadmap pe 36 Luni</h2>
          <div className="bp-timeline">
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 1â€“3 Â· Q3 2026</div><div className="bp-tl-title">Lansare Pilot UTCN</div><ul className="bp-tl-items"><li>Finalizare prototip hardware funcÈ›ional</li><li>Semnare LOI cu UTCN, Ã®nregistrare SRL</li><li>AchiziÈ›ie 32 biciclete + asamblare 24 hub-uri Ã®n 4 staÈ›ii</li><li>Lansare oficialÄƒ Ã®n campus</li><li>ÈšintÄƒ: 200 abonamente plÄƒtite Ã®n primele 30 zile</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 4â€“6</div><div className="bp-tl-title">Stabilizare & ÃŽnvÄƒÈ›are</div><ul className="bp-tl-items"><li>Optimizare flux operaÈ›ional pe baza datelor reale</li><li>Atingerea pragului de 350â€“400 abonaÈ›i activi</li><li>ÃŽnceputul outreach-ului B2B</li><li>Primul raport public de impact (km, COâ‚‚)</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">LUNILE 7â€“12</div><div className="bp-tl-title">Consolidare</div><ul className="bp-tl-items"><li>Semnarea primului contract B2B Employer Branding (luna 8â€“10)</li><li>500+ abonaÈ›i activi</li><li>PregÄƒtirea expansiunii la UBB</li><li>Decizie: organic growth vs. aplicaÈ›ie seed</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">ANUL 2 Â· 2027</div><div className="bp-tl-title">Expansiune Cluj</div><ul className="bp-tl-items"><li>Lansare Ã®n UBB, UMF, USAMV (16 hub-uri totale)</li><li>FlotÄƒ crescutÄƒ la ~120 biciclete</li><li>3â€“4 contracte B2B active</li><li>Atingerea pragului de profitabilitate operaÈ›ionalÄƒ</li></ul></div>
            <div className="bp-tl-item"><div className="bp-tl-period">ANUL 3 Â· 2028</div><div className="bp-tl-title">Consolidare Model</div><ul className="bp-tl-items"><li>2.500+ abonaÈ›i activi Ã®n Cluj</li><li>4â€“6 contracte B2B active</li><li>Studiu de fezabilitate IaÈ™i sau TimiÈ™oara</li><li>Optimizare hardware versiunea 2.0 (hub 4 biciclete, PCB custom)</li></ul></div>
          </div>
        </section>

        {/* PART 2 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 2 Â· Financiar</span><div className="bp-part-divider-line" /></div>
        {/* CAPEX */}
        <section className="bp-section" id="capex">
          <h2 className="bp-section-title"><TrendingUp size={20} /> CAPEX: InvestiÈ›ia IniÈ›ialÄƒ (4 staÈ›ii Ã— 6 hub-uri/staÈ›ie = 24 hub-uri, 32 biciclete)</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Categorie</th><th>Cantitate</th><th>PreÈ› unitar</th><th>Subtotal</th></tr></thead>
              <tbody>
                <tr><td>Biciclete city-bike noi (Pegas Strada / DHS Citadinne / Cross)</td><td>32 buc</td><td>320 EUR (1.600 RON)</td><td>51.200 RON</td></tr>
                <tr><td>Componente electronice hub (ESP8266, SG90, limitator, LED, fire)</td><td>24 hub-uri (4 staÈ›ii Ã— 6)</td><td>100 RON/hub</td><td>2.400 RON</td></tr>
                <tr><td>Materiale structurÄƒ hub (profil oÈ›el, vopsit, È™uruburi, suport)</td><td>24 hub-uri</td><td>250 RON/hub</td><td>6.000 RON</td></tr>
                <tr><td>Imprimare 3D componente custom (filament PETG, lab UTCN)</td><td>24 hub-uri</td><td>80 RON/hub</td><td>1.920 RON</td></tr>
                <tr><td>Panouri solare 5V/1W per hub</td><td>24 buc</td><td>35 RON</td><td>840 RON</td></tr>
                <tr><td>Baterie LiPo + modul TP4056</td><td>24 buc</td><td>45 RON</td><td>1.080 RON</td></tr>
                <tr><td>Coduri QR laminate (2 per hub)</td><td>48 buc</td><td>5 RON</td><td>240 RON</td></tr>
                <tr><td>GPS tracker basic per bicicletÄƒ (antifurt, eMAG)</td><td>32 buc</td><td>80 RON</td><td>2.560 RON</td></tr>
                <tr><td>Antifurt fizic suplimentar (lacÄƒte U-lock)</td><td>32 buc</td><td>30 RON</td><td>960 RON</td></tr>
                <tr><td>Domeniu movio.ro + email Workspace 1 an</td><td>â€”</td><td>â€”</td><td>350 RON</td></tr>
                <tr><td>Hosting aplicaÈ›ie web 1 an (Vercel/Cloudflare)</td><td>â€”</td><td>â€”</td><td>600 RON</td></tr>
                <tr><td>Marketing lansare (postere, paid promo, bannere)</td><td>â€”</td><td>â€”</td><td>2.500 RON</td></tr>
                <tr><td>Stoc piese rezervÄƒ (servo, ESP, anvelope, camere)</td><td>â€”</td><td>â€”</td><td>1.500 RON</td></tr>
                <tr><td>ÃŽnregistrare SRL + capital social (ONRC + servicii)</td><td>â€”</td><td>â€”</td><td>800 RON</td></tr>
                <tr><td>Asigurare flotÄƒ an 1</td><td>32 buc Ã— 80 RON</td><td>80 RON/bic.</td><td>2.560 RON</td></tr>
                <tr><td>RezervÄƒ operaÈ›ionalÄƒ (15%)</td><td>â€”</td><td>â€”</td><td>11.358 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL CAPEX</strong></td><td></td><td></td><td><strong>86.850 RON (~17.370 EUR)</strong></td></tr>
                <tr><td>MentenanÈ›Äƒ & operare 6 luni post-lansare</td><td></td><td></td><td>21.630 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL INVESTIÈšIE NECESARÄ‚</strong></td><td></td><td></td><td><strong className="bp-teal">108.480 RON (~21.696 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Surse de FinanÈ›are CAPEX</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>SursÄƒ</th><th>SumÄƒ estimatÄƒ</th><th>Probabilitate</th><th>Termen</th></tr></thead>
              <tbody>
                <tr><td>Self-funding cofondatori (4 Ã— 1.000 EUR)</td><td>4.000 EUR</td><td><span className="positive">Sigur</span></td><td>Imediat</td></tr>
                <tr><td>Premiu JA BizzFactory (semifinala / naÈ›ionala)</td><td>1.000â€“3.000 EUR</td><td>Mediu</td><td>Iunie 2026</td></tr>
                <tr><td>Program Fix Cluj (finanÈ›are nerambursabilÄƒ tineri)</td><td>3.000â€“5.000 EUR</td><td>Mediu</td><td>Iulieâ€“Aug 2026</td></tr>
                <tr><td>Sponsorizare Ã®n naturÄƒ UTCN (acces lab, spaÈ›iu)</td><td>echivalent 2.000 EUR</td><td><span className="positive">ÃŽnalt (LOI)</span></td><td>Imediat</td></tr>
                <tr><td>Granturi Innovation Day RAF / alte concursuri</td><td>500â€“2.000 EUR</td><td>ScÄƒzut-mediu</td><td>Variabil</td></tr>
                <tr><td>Crowdfunding local (post-validare)</td><td>3.000â€“5.000 EUR</td><td>ScÄƒzut</td><td>Toamna 2026</td></tr>
                <tr><td>ÃŽmprumut personal cofondatori (rezervÄƒ)</td><td>pÃ¢nÄƒ la 5.000 EUR</td><td><span className="positive">Sigur la nevoie</span></td><td>Imediat</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* OPEX */}
        <section className="bp-section" id="opex">
          <h2 className="bp-section-title"><Settings size={20} /> OPEX: Costuri OperaÈ›ionale</h2>
          <p className="bp-section-subtitle">OPEX Lunar â€” Faza Pilot (Lunile 1â€“12)</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Categorie</th><th>Cost lunar</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>MentenanÈ›Äƒ biciclete (revizie + reparaÈ›ii ad-hoc)</td><td>600 RON</td><td>~12,5 RON/bic./lunÄƒ Ã— 32 + 200 RON ad-hoc</td></tr>
                <tr><td>Hosting + domeniu (lunarizat)</td><td>80 RON</td><td>Vercel, Cloudflare, Workspace email</td></tr>
                <tr><td>Servicii contabile externalizate</td><td>350 RON</td><td>MicroÃ®ntreprindere, volum mic tranzacÈ›ii</td></tr>
                <tr><td>ComunicaÈ›ii (telefon firmÄƒ)</td><td>50 RON</td><td>Plan business minimal</td></tr>
                <tr><td>Marketing operaÈ›ional lunar</td><td>200 RON</td><td>Paid promo ocazional, materiale</td></tr>
                <tr><td>Costuri bancare (cont firmÄƒ, Stripe/Netopia 2â€“3%)</td><td>150 RON</td><td>Comisioane procesare card</td></tr>
                <tr><td>Asigurare flotÄƒ (lunarizat)</td><td>215 RON</td><td>2.560 RON / 12</td></tr>
                <tr><td>Salariu admin / 1 angajat min normÄƒ (obligatoriu regim micro)</td><td>1.640 RON</td><td>Contract mandat administrator part-time, cost firmÄƒ</td></tr>
                <tr><td>Diverse + buffer (10%)</td><td>320 RON</td><td>UrgenÈ›e, papetÄƒrie</td></tr>
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
                <tr><td>MentenanÈ›Äƒ biciclete</td><td>7.200 RON</td><td>24.000 RON</td><td>60.000 RON</td></tr>
                <tr><td>Hosting + domeniu</td><td>960 RON</td><td>1.500 RON</td><td>2.400 RON</td></tr>
                <tr><td>Servicii contabile</td><td>4.200 RON</td><td>5.400 RON</td><td>7.200 RON</td></tr>
                <tr><td>ComunicaÈ›ii + utilitÄƒÈ›i birou</td><td>600 RON</td><td>2.400 RON</td><td>4.800 RON</td></tr>
                <tr><td>Marketing operaÈ›ional</td><td>2.400 RON</td><td>8.000 RON</td><td>18.000 RON</td></tr>
                <tr><td>Costuri bancare + procesare card</td><td>1.800 RON</td><td>5.000 RON</td><td>12.000 RON</td></tr>
                <tr><td>Asigurare flotÄƒ</td><td>2.560 RON</td><td>8.000 RON</td><td>20.000 RON</td></tr>
                <tr><td>Salarii + CAM</td><td>19.700 RON</td><td>62.000 RON</td><td>130.000 RON</td></tr>
                <tr><td>Sezonierii (mentenanÈ›Äƒ vÃ¢rf sezon)</td><td>â€”</td><td>6.000 RON</td><td>12.000 RON</td></tr>
                <tr><td>Diverse + buffer</td><td>3.840 RON</td><td>12.000 RON</td><td>26.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX anual</strong></td><td><strong>43.260 RON</strong></td><td><strong>134.300 RON</strong></td><td><strong>292.400 RON</strong></td></tr>
                <tr className="total-row"><td><strong>TOTAL OPEX EUR</strong></td><td><strong>8.652 EUR</strong></td><td><strong>26.860 EUR</strong></td><td><strong>58.480 EUR</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PROIECTII + P&L + CF */}
        <section className="bp-section" id="proiectii">
          <h2 className="bp-section-title"><BarChart3 size={20} /> ProiecÈ›ii Venituri & P&L pe 3 Ani</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>SursÄƒ venit</th><th>Calcul An 1</th><th>Total An 1</th></tr></thead>
              <tbody>
                <tr><td>Abonamente (lunarizat conservator)</td><td>3.150 abonaÈ›i-luni Ã— 2,5 RON/lunÄƒ</td><td>7.875 RON</td></tr>
                <tr><td>Tarife depÄƒÈ™ire</td><td>~150 RON/lunÄƒ Ã— 8 luni active</td><td>1.200 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>1.500 EUR/lunÄƒ Ã— 4 luni</td><td>30.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL An 1</strong></td><td></td><td><strong>39.075 RON (7.815 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'16px'}}>
            <table className="bp-table">
              <thead><tr><th>SursÄƒ venit</th><th>Calcul An 2</th><th>Total An 2</th></tr></thead>
              <tbody>
                <tr><td>Abonamente</td><td>1.500 Ã— 30 RON/an</td><td>45.000 RON</td></tr>
                <tr><td>Tarife depÄƒÈ™ire</td><td>~600 RON/lunÄƒ Ã— 10 luni</td><td>6.000 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>~50.000 EUR (3,5 contracte eÈ™alonat)</td><td>250.000 RON</td></tr>
                <tr className="total-row"><td><strong>TOTAL An 2</strong></td><td></td><td><strong>301.000 RON (60.200 EUR)</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'16px'}}>
            <table className="bp-table">
              <thead><tr><th>SursÄƒ venit</th><th>Calcul An 3</th><th>Total An 3</th></tr></thead>
              <tbody>
                <tr><td>Abonamente</td><td>3.500 Ã— 30 RON/an</td><td>105.000 RON</td></tr>
                <tr><td>Tarife depÄƒÈ™ire</td><td>~1.500 RON/lunÄƒ Ã— 11 luni</td><td>16.500 RON</td></tr>
                <tr><td>B2B Employer Branding</td><td>6 Ã— 2.000 EUR Ã— 12 luni</td><td>720.000 RON</td></tr>
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
                <tr><td>(-) CAPEX expansiune</td><td>â€”</td><td className="negative">220.000 RON</td><td className="negative">320.000 RON</td></tr>
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
                <tr><td>Cash Ã®n (venituri)</td><td className="positive">39.075 RON</td><td className="positive">301.000 RON</td><td className="positive">841.500 RON</td></tr>
                <tr><td>Cash Ã®n (finanÈ›are externÄƒ)</td><td className="positive">96.506 RON</td><td>â€”</td><td>â€”</td></tr>
                <tr><td>Cash out (CAPEX iniÈ›ial)</td><td className="negative">74.876 RON</td><td>â€”</td><td>â€”</td></tr>
                <tr><td>Cash out (CAPEX expansiune)</td><td>â€”</td><td className="negative">220.000 RON</td><td className="negative">320.000 RON</td></tr>
                <tr><td>Cash out (OPEX)</td><td className="negative">43.260 RON</td><td className="negative">134.300 RON</td><td className="negative">292.400 RON</td></tr>
                <tr><td>Cash out (impozit)</td><td className="negative">391 RON</td><td className="negative">3.010 RON</td><td className="negative">25.648 RON</td></tr>
                <tr className="total-row"><td><strong>Cash net la sfÃ¢rÈ™it de an</strong></td><td className="positive"><strong>+17.054 RON</strong></td><td className="negative"><strong>-56.310 RON</strong></td><td className="positive"><strong>+203.452 RON</strong></td></tr>
                <tr className="total-row"><td><strong>PoziÈ›ie cumulativÄƒ cash</strong></td><td className="positive"><strong>17.054 RON</strong></td><td className="negative"><strong>-39.256 RON</strong></td><td className="positive"><strong>+164.196 RON</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>âš ï¸ Deficitul de cash din Anul 2 (~56.000 RON) se acoperÄƒ prin: <strong style={{color:'#F4F1EC'}}>finanÈ›are seed micÄƒ (~15.000 EUR)</strong> sau scalare mai lentÄƒ la 80 biciclete Ã®n loc de 120, menÈ›inÃ¢nd cash flow-ul cumulativ pozitiv.</p>
        </section>

        {/* BREAKEVEN */}
        <section className="bp-section" id="breakeven">
          <h2 className="bp-section-title"><TrendingUp size={20} /> Break-Even & Unit Economics</h2>
          <div className="bp-grid-3">
            <div className="bp-stat-card"><div className="bp-stat">1.442</div><div className="bp-stat-label">AbonaÈ›i pentru break-even fÄƒrÄƒ B2B</div></div>
            <div className="bp-stat-card"><div className="bp-stat amber">1</div><div className="bp-stat-label">Contract B2B = break-even operaÈ›ional instant</div></div>
            <div className="bp-stat-card"><div className="bp-stat">Luna 30â€“36</div><div className="bp-stat-label">Recuperarea investiÈ›iei iniÈ›iale</div></div>
          </div>
          <p className="bp-section-subtitle">Validare MatematicÄƒ Break-Even prin B2B</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>Costuri fixe/lunÄƒ An 1</h3><p><strong>3.605 RON</strong></p></div>
            <div className="bp-card"><h3>Venit lunar la 350 abonaÈ›i</h3><p><strong>875 RON</strong> (30 RON/12 Ã— 350)</p></div>
            <div className="bp-card bp-card-teal"><h3>1 contract B2B (1.500 EUR/lunÄƒ)</h3><p><strong>7.500 RON</strong> â†’ acoperÄƒ tot OPEX-ul</p></div>
          </div>
          <p className="bp-section-subtitle">Unit Economics</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>MetricÄƒ</th><th>Valoare</th><th>Comentariu</th></tr></thead>
              <tbody>
                <tr><td>CAC B2C (cost achiziÈ›ie client)</td><td className="positive">8,6 RON</td><td>Buget marketing 3.000 RON / 350 abonaÈ›i</td></tr>
                <tr><td>LTV B2C (lifetime value)</td><td className="positive">~100 RON</td><td>30 RON Ã— 1/(1-0,7 retention) â‰ˆ 100 RON</td></tr>
                <tr><td>Raport LTV/CAC B2C</td><td className="positive"><strong>11.7x</strong></td><td>Excelent (industria {'>'} 3x = sÄƒnÄƒtos)</td></tr>
                <tr><td>Payback period B2C</td><td className="positive">~1 lunÄƒ</td><td>Aproape instantaneu</td></tr>
                <tr><td>CAC B2B</td><td className="positive">~500 RON</td><td>Materiale prezentare + timp echipÄƒ</td></tr>
                <tr><td>LTV B2B</td><td className="positive">~36.000 RON</td><td>1.800 EUR/lunÄƒ Ã— 12 luni Ã— 2 ani retenÈ›ie</td></tr>
                <tr><td>Raport LTV/CAC B2B</td><td className="positive"><strong>72x</strong></td><td>ExcepÈ›ional</td></tr>
                <tr><td>Marja brutÄƒ per cursÄƒ</td><td className="positive">~95%</td><td>Cost incremental al unei curse neglijabil</td></tr>
                <tr><td>Cost per cursÄƒ (mentenanÈ›Äƒ distribuitÄƒ)</td><td>~0,8 RON</td><td>10.000 RON mentenanÈ›Äƒ / 12.000 curse/an</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Scenarii de Stres</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-red">
              <h3>Pesimist (-30% adopÈ›ie, 0 B2B An 1)</h3>
              <p>An 1: 250 abonaÈ›i, 7.500 RON venituri vs. 43.260 RON OPEX â†’ <strong>pierdere -35.760 RON</strong></p>
              <p style={{marginTop:'8px'}}>An 2: 800 abonaÈ›i, 24.000 RON venituri â†’ pierdere continuÄƒ. <strong>Concluzie: fÄƒrÄƒ B2B, modelul nu e viabil.</strong></p>
            </div>
            <div className="bp-card">
              <h3>Realist (proiecÈ›iile principale)</h3>
              <p>350 abonaÈ›i + 1 B2B Ã®n An 1. Inflexiune Ã®n Anul 3, recuperare investiÈ›ie luna 30â€“36. Business sustenabil cu creÈ™tere organicÄƒ.</p>
            </div>
            <div className="bp-card bp-card-teal">
              <h3>Optimist (+30% adopÈ›ie, 2 B2B An 1)</h3>
              <p>An 1: 450 abonaÈ›i, 73.000 RON venituri â†’ <strong>+29.740 RON</strong></p>
              <p style={{marginTop:'8px'}}>An 3: 4.500 abonaÈ›i, 1.200.000 RON venituri. Payback luna 18, pregÄƒtire rundÄƒ Seed la 3 ani.</p>
            </div>
          </div>
          <p className="bp-section-subtitle">ComparaÈ›ie cu EÈ™ecul Cluj Bike</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Parametru</th><th>Cluj Bike</th><th>Movio (proiecÈ›ie)</th></tr></thead>
              <tbody>
                <tr><td>InvestiÈ›ie iniÈ›ialÄƒ</td><td className="negative">~14.000.000 RON (public)</td><td className="positive">~108.480 RON (privat)</td></tr>
                <tr><td>Cost per staÈ›ie/hub</td><td className="negative">~280.000 RON</td><td className="positive">~625 RON</td></tr>
                <tr><td>Cost per bicicletÄƒ</td><td className="negative">~26.000 RON inclusiv infrastructurÄƒ</td><td className="positive">~2.900 RON inclusiv mentenanÈ›Äƒ 6 luni</td></tr>
                <tr><td>Sursa de venit</td><td className="negative">Bugetul primÄƒriei</td><td className="positive">Abonamente + B2B (privat, sustenabil)</td></tr>
                <tr><td>AdopÈ›ie realÄƒ 2026</td><td className="negative">Aproape zero</td><td className="positive">ÈšintÄƒ: 350 abonaÈ›i An 1, 3.500 An 3</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PART 3 */}
        <div className="bp-part-divider"><div className="bp-part-divider-line" /><span className="bp-part-divider-label">Partea 3 Â· OperaÈ›ional</span><div className="bp-part-divider-line" /></div>
        {/* OPERATIONAL */}
        <section className="bp-section" id="operational">
          <h2 className="bp-section-title"><Settings size={20} /> ProducÈ›ie Hub-uri & PregÄƒtire FlotÄƒ</h2>
          <p style={{color:'#7A8A9A', fontSize:'14px', marginBottom:'16px'}}>Structura pilot: <strong style={{color:'#F4F1EC'}}>4 staÈ›ii Ã— 6 hub-uri/staÈ›ie = 24 hub-uri.</strong> Un hub gÄƒzduieÅŸte 2 biciclete. Cele 32 de biciclete sunt distribuite Ã®ntre hub-uri (nu toate hub-urile sunt ocupate la capacitate maximÄƒ â€” flexibilitate de rebalansare).</p>
          <p className="bp-section-subtitle">PaÈ™ii AsamblÄƒrii unui Hub Movio (~6 ore, echipÄƒ 2 persoane)</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text"><strong>TÄƒiere & sudare structurÄƒ metalicÄƒ</strong> â€” 1,5 ore, la atelier UTCN sau partener local Cluj</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text"><strong>Vopsire structurÄƒ</strong> â€” 30 min activ, uscare 24h Ã®n lab UTCN</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text"><strong>Imprimare 3D componente custom</strong> â€” overnight Ã®n lab UTCN (carcasÄƒ electronicÄƒ, suport QR, filament PETG)</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text"><strong>Asamblare modularÄƒ</strong> â€” 1 orÄƒ, montare componente printate pe structurÄƒ metalicÄƒ</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text"><strong>Montare componente electronice</strong> â€” 1,5 ore: ESP8266, servo SG90, limitator de cursÄƒ, LED-uri, panou solar 5V/1W, baterie LiPo</div></div>
            <div className="bp-step"><div className="bp-step-num">6</div><div className="bp-step-text"><strong>Programare & flash firmware</strong> â€” 30 min, Arduino IDE, cod open-source documentat intern</div></div>
            <div className="bp-step"><div className="bp-step-num">7</div><div className="bp-step-text"><strong>Test funcÈ›ional Ã®n atelier</strong> â€” 1 orÄƒ: secvenÈ›a completÄƒ senzor â†’ blocare â†’ cod QR â†’ deblocare</div></div>
            <div className="bp-step"><div className="bp-step-num">8</div><div className="bp-step-text"><strong>Instalare Ã®n campus</strong> â€” 1,5 ore: fixare pe sol prin bride sau greutÄƒÈ›i de beton, calibrare poziÈ›ie</div></div>
          </div>
          <div className="bp-table-wrapper" style={{marginTop:'24px'}}>
            <table className="bp-table">
              <thead><tr><th>Element</th><th>Cost (RON)</th></tr></thead>
              <tbody>
                <tr><td>Componente electronice</td><td>100</td></tr>
                <tr><td>Materiale structurÄƒ (oÈ›el, vopsea, È™uruburi)</td><td>250</td></tr>
                <tr><td>Imprimare 3D componente custom (filament)</td><td>80</td></tr>
                <tr><td>Panou solar 5V/1W</td><td>35</td></tr>
                <tr><td>Baterie LiPo + modul TP4056</td><td>45</td></tr>
                <tr><td>Coduri QR laminate (2 buc)</td><td>10</td></tr>
                <tr><td>ManoperÄƒ internÄƒ (cofondatori, neplÄƒtitÄƒ An 1)</td><td>0</td></tr>
                <tr className="total-row"><td><strong>Total cost direct hub</strong></td><td><strong>520 RON</strong></td></tr>
                <tr className="total-row"><td><strong>Total inclusiv overheads (transport, instalare)</strong></td><td><strong>~600 RON</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">PregÄƒtire BicicletÄƒ pentru FlotÄƒ (~55 min/bicicletÄƒ)</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text"><strong>RecepÈ›ie de la furnizor</strong> (Pegas / DHS / Cross local)</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text"><strong>Verificare calitate iniÈ›ialÄƒ</strong> â€” frÃ¢ne, anvelope, transmisie (15 min)</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text"><strong>Personalizare Movio:</strong> marcaj cu nume unic, GPS tracker pe cadru (15 min), U-lock ataÈ™at permanent (10 min), etichetÄƒ QR de hub</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text"><strong>ÃŽnregistrare Ã®n aplicaÈ›ie</strong> + asociere cu un hub default (5 min)</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text"><strong>Test funcÈ›ional final</strong> (10 min). Cost incremental per bicicletÄƒ: ~120 RON (GPS + lacÄƒt + etichete)</div></div>
          </div>
        </section>

        {/* MENTENANTA + OPS */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Settings size={20} /> Plan de MentenanÈ›Äƒ & OperaÈ›iuni Zilnice</h2>
          <p className="bp-section-subtitle">MentenanÈ›Äƒ ProgramatÄƒ per BicicletÄƒ</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>FrecvenÈ›Äƒ</th><th>OperaÈ›iune</th><th>Cost</th><th>Cine face</th></tr></thead>
              <tbody>
                <tr><td>SÄƒptÄƒmÃ¢nal</td><td>InspecÈ›ie vizualÄƒ Ã®n campus (2 min/bicicletÄƒ)</td><td>0 (intern)</td><td>Echipa Movio</td></tr>
                <tr><td>Lunar</td><td>Verificare presiune anvelope, ungere lanÈ›</td><td>0 (intern)</td><td>Echipa Movio</td></tr>
                <tr><td>3 luni</td><td>Reglare frÃ¢ne, schimbÄƒtoare, verificare È™uruburi</td><td>50 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr><td>6 luni</td><td>Revizie standard (curÄƒÈ›are, ungere, reglaje complete)</td><td>150 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr><td>12 luni</td><td>Revizie premium (Ã®nlocuire piese uzate, anvelope, cabluri)</td><td>250 RON (atelier)</td><td>Atelier partener Cluj</td></tr>
                <tr className="total-row"><td><strong>Cost mediu anual/bicicletÄƒ</strong></td><td></td><td><strong>~150 RON</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Procesul End-to-End pentru Utilizator</p>
          <div className="bp-steps">
            <div className="bp-step"><div className="bp-step-num">1</div><div className="bp-step-text">Utilizatorul vede <strong>hub Movio Ã®n campus</strong> È™i scaneazÄƒ QR cu telefonul</div></div>
            <div className="bp-step"><div className="bp-step-num">2</div><div className="bp-step-text">Deschide <strong>app web Movio direct Ã®n browser</strong> (fÄƒrÄƒ descÄƒrcare), creazÄƒ cont Ã®n 30 secunde</div></div>
            <div className="bp-step"><div className="bp-step-num">3</div><div className="bp-step-text">PlÄƒteÈ™te <strong>abonament 30 RON/an</strong> sau pay-per-use (5 RON/orÄƒ)</div></div>
            <div className="bp-step"><div className="bp-step-num">4</div><div className="bp-step-text">SelecteazÄƒ bicicleta â†’ app trimite <strong>comandÄƒ deblocare</strong> la hub via WiFi/4G â†’ LED verde</div></div>
            <div className="bp-step"><div className="bp-step-num">5</div><div className="bp-step-text">ReturneazÄƒ bicicleta la orice hub â†’ hub detecteazÄƒ (limitator de cursÄƒ) â†’ app afiÈ™eazÄƒ <strong>km, COâ‚‚ economisit, puncte</strong></div></div>
          </div>
          <p className="bp-section-subtitle">Rebalancing FlotÄƒ (ProblemÄƒ ClasicÄƒ Bike-Sharing)</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>SoluÈ›ie An 1 (gamification)</h3><p>Utilizatorul care returneazÄƒ la un hub gol primeÈ™te <strong>5 minute extra gratuite</strong> Ã®n urmÄƒtoarea cursÄƒ.</p></div>
            <div className="bp-card"><h3>Rebalancing manual vineri</h3><p>1 orÄƒ, echipÄƒ Movio, maÈ™inÄƒ personalÄƒ + cÄƒrucior. <strong>Cost An 1: 0 RON cash</strong> (cofondatori, neplÄƒtit).</p></div>
            <div className="bp-card bp-card-teal"><h3>An 2â€“3: externalizare</h3><p>Curier local sau part-timer 4h/sÄƒptÄƒmÃ¢nÄƒ. <strong>Cost: ~12.000 RON/an.</strong></p></div>
          </div>
        </section>

        {/* KPI */}
        <section className="bp-section" id="kpi">
          <h2 className="bp-section-title"><BarChart3 size={20} /> KPI (Key Performance Indicators)</h2>
          <div className="bp-kpi-grid">
            <div className="bp-kpi-card"><h4>KPI AdopÈ›ie</h4><ul>
              <li>AbonaÈ›i activi lunÄƒ 12: <span>350</span></li>
              <li>RatÄƒ conversie vizitatorâ†’abonat: <span>12%</span></li>
              <li>NPS trimestrial: <span>{'>'}40</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI Utilizare</h4><ul>
              <li>Curse/zi/bicicletÄƒ: <span>2â€“3</span></li>
              <li>DuratÄƒ medie cursÄƒ: <span>18â€“25 min</span></li>
              <li>Curse sub 60 min: <span>{'>'}85%</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI OperaÈ›ionali</h4><ul>
              <li>Disponibilitate flotÄƒ: <span>{'>'}90%</span></li>
              <li>Timp rezolvare problemÄƒ: <span>{'<'}24h</span></li>
              <li>Cost mentenanÈ›Äƒ/cursÄƒ: <span>{'<'}2 RON</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI Financiari</h4><ul>
              <li>MRR din abonamente: <span>â†’ tracking</span></li>
              <li>ARPU È›intÄƒ: <span>35 RON/an</span></li>
              <li>LTV/CAC ratio: <span>{'>'}5x</span></li>
              <li>Cash flow op. pozitiv: <span>luna 10</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>KPI de Impact</h4><ul>
              <li>Total km parcurÈ™i: <span>tracking</span></li>
              <li>COâ‚‚ economisit: <span>200g/km vs maÈ™inÄƒ</span></li>
              <li>Curse Ã®n orele de vÃ¢rf: <span>8:00â€“9:30 / 16:00â€“18:00</span></li>
            </ul></div>
            <div className="bp-kpi-card"><h4>Praguri Minime Pilot</h4><ul>
              <li>AbonaÈ›i la 6 luni: <span>150</span></li>
              <li>AbonaÈ›i la 12 luni: <span>350</span></li>
              <li>B2B la 12 luni: <span>1 (obligatoriu)</span></li>
              <li>Curse/zi/bicicletÄƒ (12L): <span>2,5</span></li>
            </ul></div>
          </div>
        </section>

        {/* HR */}
        <section className="bp-section">
          <h2 className="bp-section-title"><Users size={20} /> Resurse Umane & Furnizori</h2>
          <p className="bp-section-subtitle">Plan de AngajÄƒri</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Rol</th><th>Anul</th><th>Salariu brut/lunÄƒ</th><th>Comentariu</th></tr></thead>
              <tbody>
                <tr><td>Administrator (cofondator)</td><td>1</td><td>4.050 RON</td><td>Necesar legal pentru regim micro</td></tr>
                <tr><td>Tehnician mentenanÈ›Äƒ part-time</td><td>2</td><td>2.500 RON</td><td>4h/zi Ã— 5 zile, rebalancing + reparaÈ›ii</td></tr>
                <tr><td>Marketing intern (full-time)</td><td>2</td><td>4.500 RON</td><td>Augusta sau angajare nouÄƒ</td></tr>
                <tr><td>Tehnician mentenanÈ›Äƒ full-time</td><td>3</td><td>4.500 RON</td><td>ÃŽnlocuieÈ™te part-timer-ul</td></tr>
                <tr><td>Sales B2B</td><td>3</td><td>5.500 RON + comision</td><td>Pentru creÈ™terea contractelor B2B</td></tr>
                <tr><td>Developer software</td><td>3</td><td>8.000 RON</td><td>IteraÈ›ie app È™i platformÄƒ admin</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Furnizori ConfirmaÈ›i</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Furnizor</th><th>Categoria</th><th>Detalii</th></tr></thead>
              <tbody>
                <tr><td>Pegas / DHS / Cross</td><td>Biciclete</td><td>ProducÄƒtori romÃ¢ni entry-mid, 1.300â€“2.000 RON, garanÈ›ie 24 luni</td></tr>
                <tr><td>OptimusDigital, Cleste, Ardushop</td><td>Electronice</td><td>ESP8266, servomotoare, senzori, LED-uri â€” livrare din RomÃ¢nia</td></tr>
                <tr><td>Filament3D / 3DJake</td><td>Filament 3D</td><td>PETG pentru imprimante UTCN, ~70 RON/kg</td></tr>
                <tr><td>Atelier mecanic Cluj (de identificat)</td><td>SudurÄƒ structurÄƒ</td><td>Partener local pentru construcÈ›ia structurii metalice hub-uri</td></tr>
                <tr><td>DrBike / BikePub / atelier local</td><td>MentenanÈ›Äƒ flotÄƒ</td><td>Contract anual, tarif negociat 100 RON/orÄƒ (vs. 150 RON retail)</td></tr>
                <tr><td>Tipografie localÄƒ Cluj</td><td>Etichete, QR-uri</td><td>Imprimare laminatÄƒ rezistentÄƒ la intemperii</td></tr>
                <tr><td>Vercel / Cloudflare</td><td>Hosting web</td><td>Plan gratuit suficient pentru pilot; upgrade Vercel Pro Ã®n An 2</td></tr>
                <tr><td>Stripe / Netopia</td><td>Procesare plÄƒÈ›i</td><td>2â€“3% per tranzacÈ›ie; integrare cu PWA</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Parteneri InstituÈ›ionali</p>
          <div className="bp-grid-3">
            <div className="bp-card bp-card-teal"><h3>UTCN â€” Manufacturing Engineering</h3><p>Acces lab, imprimante 3D, software CAD, cadru didactic coordonator, spaÈ›ii pentru hub-uri pilot.</p></div>
            <div className="bp-card"><h3>Junior Achievement RomÃ¢nia</h3><p>Mentorat, vizibilitate prin BizzFactory È™i Gen-E, acces la reÈ›eaua de mentori È™i investitori JA.</p></div>
            <div className="bp-card bp-card-teal"><h3>Companii tech Cluj (Faza 2)</h3><p>Bosch, Endava, NTT Data, Emerson, Porsche Engineering, Continental, Crystal System.</p></div>
          </div>
        </section>

        {/* RISCURI */}
        <section className="bp-section" id="riscuri">
          <h2 className="bp-section-title"><AlertCircle size={20} /> Riscuri OperaÈ›ionale & Plan de Continuitate</h2>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Risc</th><th>Probabilitate</th><th>Impact</th><th>Plan de Mitigare</th></tr></thead>
              <tbody>
                <tr><td>BicicletÄƒ defectÄƒ Ã®n mijlocul cursei</td><td>Mediu</td><td>Mediu</td><td>Compensare automatÄƒ Ã®n app (cursÄƒ gratuitÄƒ + bonus); mentenanÈ›Äƒ reactivÄƒ Ã®n {'<'}24h</td></tr>
                <tr><td>Hub defect (servo blocat)</td><td>ScÄƒzut</td><td>Mediu</td><td>Stoc servo-uri rezervÄƒ; piesÄƒ Ã®nlocuitÄƒ Ã®n {'<'}2h</td></tr>
                <tr><td>Furt bicicletÄƒ</td><td>ScÄƒzut-mediu</td><td>Mare</td><td>GPS activat, raport poliÈ›ie Ã®n {'<'}2h, deposit reÈ›inut, asigurare acoperitoare</td></tr>
                <tr><td>Vandalism hub</td><td>ScÄƒzut</td><td>Mediu</td><td>LocaÈ›ie vizibilÄƒ (campus), camere pazÄƒ UTCN, asigurare comercialÄƒ</td></tr>
                <tr><td>Vreme extremÄƒ (zÄƒpadÄƒ, ploaie)</td><td>Sigur sezonier</td><td>Mic</td><td>Hub-uri cu acoperire parÈ›ialÄƒ; comunicare proactivÄƒ Ã®n app</td></tr>
                <tr><td>PanÄƒ internet / WiFi campus</td><td>ScÄƒzut</td><td>Mare</td><td>Backup 4G planificat Ã®n Anul 2; cod admin pentru unlock manual</td></tr>
                <tr><td>Server down {'>'} 2h</td><td>ScÄƒzut</td><td>Mare</td><td>SLA 99% uptime Vercel; notificare proactivÄƒ utilizatori; echipÄƒ pe teren</td></tr>
                <tr><td>Aprobare lentÄƒ UTCN</td><td>Mediu</td><td>Mare</td><td>Plan B: parcaje private limitrofe campus cu permisiune scrisÄƒ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bp-section-subtitle">Plan de Scalare OperaÈ›ionalÄƒ</p>
          <div className="bp-grid-2">
            <div className="bp-card bp-card-teal">
              <h3>Anul 2 â€” Extindere UBB / UMF / USAMV</h3>
              <p>Contact formal LOI (luna 13â€“15) â†’ ProducÈ›ie 60 hub-uri suplimentare (180 ore manoperÄƒ) â†’ AchiziÈ›ie 90 biciclete (144.000 RON CAPEX) â†’ Lansare scalonatÄƒ: USAMV luna 18, UBB luna 21, UMF luna 24.</p>
            </div>
            <div className="bp-card">
              <h3>Anul 3 â€” PregÄƒtire Scalare NaÈ›ionalÄƒ</h3>
              <p>Studiu fezabilitate IaÈ™i sau TimiÈ™oara (6â€“8 sÄƒptÄƒmÃ¢ni) â†’ Identificare partener universitar local â†’ Hub v2.0 (4 biciclete/hub, PCB custom, parteneriat Pegas pentru bicicletÄƒ Movio ediÈ›ie limitatÄƒ).</p>
            </div>
          </div>
          <p className="bp-section-subtitle">Indicatori de Succes Pilot UTCN (Praguri pentru Decizia de Scalare)</p>
          <div className="bp-table-wrapper">
            <table className="bp-table">
              <thead><tr><th>Indicator</th><th>Prag minim 6 luni</th><th>Prag minim 12 luni</th></tr></thead>
              <tbody>
                <tr><td>AbonaÈ›i activi</td><td>150</td><td className="positive">350</td></tr>
                <tr><td>Disponibilitate flotÄƒ</td><td>85%</td><td className="positive">90%</td></tr>
                <tr><td>NPS</td><td>{'>'}30</td><td className="positive">{'>'}40</td></tr>
                <tr><td>Cash flow op. lunar</td><td>-2.000 RON</td><td className="positive">+1.000 RON</td></tr>
                <tr><td>Contracte B2B</td><td>0 (acceptabil)</td><td className="negative">1 (obligatoriu)</td></tr>
                <tr><td>Curse zilnice medii/bicicletÄƒ</td><td>1,5</td><td className="positive">2,5</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{color:'#7A8A9A', fontSize:'13px', marginTop:'12px'}}>DacÄƒ pragurile de 12 luni sunt atinse + cel puÈ›in 1 contract B2B semnat, echipa decide oficial scalarea. DacÄƒ nu, existÄƒ 2 opÈ›iuni: <strong style={{color:'#F4F1EC'}}>Extindere mandat pilot</strong> cu Ã®ncÄƒ 6 luni sau <strong style={{color:'#F4F1EC'}}>Pivot</strong> â€” ajustare model business pe baza datelor reale.</p>
        </section>

      </div>
    </div>
  );
}

export default BusinessPlan;

