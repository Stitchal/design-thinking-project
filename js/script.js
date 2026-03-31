'use strict';

/* ─── CURSEUR ────────────────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .step, .company-card, .service-card, .actor').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ─── DONNÉES ────────────────────────────────────────────────────────────── */
const services = [
  { icon: '🏥', title: 'Santé & Hygiène',           items: ['Sanitaires et douches publiques','Visites de médecins généralistes et spécialistes','Accès à des services de coiffure / barbier','Activités sportives','Aide à la recherche de logement'] },
  { icon: '🍽️', title: 'Nourriture & Boissons',     items: ['Récupération de denrées auprès de restaurants','Soutien d\'associations et de particuliers','Fontaine d\'eau gratuite en libre accès'] },
  { icon: '📋', title: 'Démarches Administratives', items: ['Sécurité sociale','Domiciliation administrative','URSSAF et droits sociaux','Accompagnement personnalisé'] },
  { icon: '📚', title: 'Formations & Apprentissage',items: ['Cours de français','Cours de mathématiques','Cours de cuisine','Formations aux métiers manuels','Cours de sport'] },
  { icon: '💼', title: 'Insertion Professionnelle', items: ['Arbre de compétences & rédaction de CV','Entretiens de motivation','Rencontres avec des entreprises et professionnels'] }
];

const actors = [
  { name: 'Bénévoles retraités',    desc: 'Apportent du temps, de l\'expérience et de la transmission',      left: true  },
  { name: 'SDF volontaires',        desc: 'Participants actifs qui contribuent au fonctionnement du hub',     left: true  },
  { name: 'Bénévoles actifs',       desc: 'Soutien opérationnel au quotidien',                               left: false },
  { name: 'Institutions locales',   desc: 'Collaboration et ancrage territorial',                             left: false },
  { name: 'Institutions nationales',desc: 'Soutien financier et cadre légal',                                left: false }
];

const companies = [
  { name: 'Adecco',          sector: 'Interim & Emploi',       emoji: '🏢', desc: 'Leader mondial du travail temporaire, Adecco s\'engage dans des programmes d\'inclusion pour accompagner des publics éloignés de l\'emploi.',          offers: ['Missions intérim','Accompagnement CV','Formation pré-emploi'] },
  { name: 'Emmaüs Connect',  sector: 'Numérique & Inclusion',  emoji: '💻', desc: 'Association qui lutte contre la précarité numérique en donnant accès à des équipements et formations pour l\'insertion.',                              offers: ['Accès internet','Formations numériques','Matériel reconditionné'] },
  { name: 'McDonald\'s France',sector: 'Restauration',         emoji: '🍔', desc: 'Via son programme « Portes ouvertes », McDonald\'s recrute sans condition de diplôme et propose des parcours d\'intégration structurés.',              offers: ['CDI / CDD','Formation en interne','Horaires flexibles'] },
  { name: 'La Poste Groupe', sector: 'Services & Logistique',  emoji: '📬', desc: 'La Poste mène une politique d\'insertion active, notamment via des contrats aidés et des partenariats avec des SIAE.',                               offers: ['Contrats aidés','Facteur / tri postal','Formations certifiantes'] },
  { name: 'Leroy Merlin',    sector: 'Commerce & BTP',         emoji: '🔨', desc: 'Leroy Merlin valorise les profils manuels et propose des formations internes en bricolage, logistique et vente.',                                     offers: ['Manutention','Conseil vente','Apprentissage métier'] },
  { name: 'Vinci Energies',  sector: 'BTP & Industrie',        emoji: '⚡', desc: 'Groupe qui recrute massivement en apprentissage et formation alternée pour des publics en reconversion dans les métiers techniques.',                  offers: ['Électricité','Plomberie','Contrats alternance'] },
  { name: 'Sodexo',          sector: 'Restauration collective', emoji: '🍽️', desc: 'Sodexo intègre l\'inclusion dans sa stratégie RSE et recrute en cuisine, nettoyage et service dans ses établissements.',                             offers: ['Aide-cuisinier','Agent de service','Contrats adaptés'] },
  { name: 'Voisin Malin',    sector: 'Médiation sociale',      emoji: '🏘️', desc: 'Association qui forme et emploie des habitants comme médiateurs de proximité, valorisant le lien social et les compétences relationnelles.',          offers: ['Médiateur','Mission quartier','Montée en compétences'] }
];

const calEvents = [
  { title: 'Forum Emploi Inclusion',     day: 0, hStart: 9,    hEnd: 11.5, cat: 'forum',     desc: 'Rencontre directe avec des recruteurs engagés dans l\'inclusion. Apportez votre CV.' },
  { title: 'Atelier CV & Compétences',   day: 0, hStart: 14,   hEnd: 15.5, cat: 'formation', desc: 'Rédaction de CV, arbre de compétences et lettre de motivation accompagnés.' },
  { title: 'Jobdating — Leroy Merlin',   day: 0, hStart: 16,   hEnd: 17.5, cat: 'jobdate',   desc: 'Rencontre exclusive avec Leroy Merlin pour des postes en manutention et vente.' },
  { title: 'Consultation Médicale',      day: 1, hStart: 9,    hEnd: 12,   cat: 'sante',     desc: 'Médecin généraliste présent. Accès libre sur inscription le matin.' },
  { title: 'Cours de Français',          day: 1, hStart: 13.5, hEnd: 15,   cat: 'formation', desc: 'Niveau débutant et intermédiaire. Animé par des bénévoles certifiés FLE.' },
  { title: 'Sport & Bien-être',          day: 1, hStart: 16,   hEnd: 17.5, cat: 'sante',     desc: 'Activité physique adaptée : marche, étirements, jeux collectifs.' },
  { title: 'Ateliers Numériques',        day: 2, hStart: 9,    hEnd: 10.5, cat: 'atelier',   desc: 'Emmaüs Connect : initiation à l\'ordinateur, email et démarches en ligne.' },
  { title: 'Atelier Cuisine',            day: 2, hStart: 10.5, hEnd: 12,   cat: 'atelier',   desc: 'Préparation d\'un repas collectif avec les denrées récupérées. Ouvert à tous.' },
  { title: 'Jobdating Express',          day: 2, hStart: 14,   hEnd: 17,   cat: 'jobdate',   desc: 'Sessions de 10 min avec des entreprises partenaires : Adecco, McDonald\'s, Sodexo.' },
  { title: 'Cours Mathématiques',        day: 3, hStart: 9,    hEnd: 10.5, cat: 'formation', desc: 'Remise à niveau calcul, logique et préparation aux tests de recrutement.' },
  { title: 'Forum Emploi — jeudi',       day: 3, hStart: 11,   hEnd: 13,   cat: 'forum',     desc: 'Format réduit, 4 entreprises, entretiens en 15 min.' },
  { title: 'Permanence Administrative',  day: 3, hStart: 14,   hEnd: 17,   cat: 'atelier',   desc: 'Aide à la domiciliation, sécurité sociale, URSSAF. Un conseiller vous accompagne.' },
  { title: 'Formation Électricité',      day: 4, hStart: 9,    hEnd: 12,   cat: 'formation', desc: 'Initiation aux métiers électriques avec Vinci Energies. Certification en fin de cycle.' },
  { title: 'Atelier Métier — La Poste',  day: 4, hStart: 14,   hEnd: 15.5, cat: 'atelier',   desc: 'Un recruteur La Poste présente les métiers de facteur et agent de tri.' },
  { title: 'Santé Mentale & Soutien',    day: 4, hStart: 16,   hEnd: 17.5, cat: 'sante',     desc: 'Groupe de parole animé par un psychologue bénévole. Confidentiel et bienveillant.' }
];

/* ─── RENDU SERVICES ─────────────────────────────────────────────────────── */
const servicesGrid = document.getElementById('services-grid');
services.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'service-card fade-in';
  el.style.setProperty('--i', i);
  el.innerHTML = `
    <span class="service-icon">${s.icon}</span>
    <h3>${s.title}</h3>
    <ul>${s.items.map(it => `<li>${it}</li>`).join('')}</ul>
  `;
  servicesGrid.appendChild(el);
});

/* ─── RENDU ACTEURS ──────────────────────────────────────────────────────── */
const leftCol  = document.getElementById('actors-left');
const rightCol = document.getElementById('actors-right');
actors.forEach(a => {
  const el = document.createElement('div');
  el.className = 'actor fade-in';
  el.innerHTML = `<h4>${a.name}</h4><p>${a.desc}</p>`;
  (a.left ? leftCol : rightCol).appendChild(el);
});

/* ─── RENDU ENTREPRISES ──────────────────────────────────────────────────── */
const companiesGrid = document.getElementById('companies-grid');
companies.forEach((c, i) => {
  const el = document.createElement('div');
  el.className = 'company-card fade-in';
  el.style.setProperty('--i', i);
  el.innerHTML = `
    <div class="company-top">
      <div class="company-logo">${c.emoji}</div>
      <div>
        <div class="company-top-name">${c.name}</div>
        <div class="company-sector">${c.sector}</div>
      </div>
    </div>
    <p class="company-desc">${c.desc}</p>
    <div class="company-offers">${c.offers.map(o => `<span class="offer-pill">${o}</span>`).join('')}</div>
  `;
  el.querySelector('.company-top-name').style.cssText = 'font-size:.95rem;font-weight:500;color:var(--txt)';
  companiesGrid.appendChild(el);
});

/* ─── CALENDRIER ─────────────────────────────────────────────────────────── */
const CAL_START = 8;
const CAL_HOURS = 10; // 8h–17h
const SLOT_H    = 56; // px par heure
const DAYS_FR   = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
const MONTHS_FR = ['jan.','fév.','mars','avr.','mai','juin','juil.','août','sep.','oct.','nov.','déc.'];

let calOffset = 0;

function getWeekStart(offset) {
  const d   = new Date();
  const dow = (d.getDay() + 6) % 7; // lundi = 0
  d.setDate(d.getDate() - dow + offset * 7);
  d.setHours(0, 0, 0, 0);
  return d;
}

function fmtHour(h) {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return `${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;
}

function renderCalendar() {
  const grid  = document.getElementById('cal-grid');
  const label = document.getElementById('cal-week-label');
  grid.innerHTML = '';

  const weekStart = getWeekStart(calOffset);
  const today     = new Date(); today.setHours(0,0,0,0);
  const weekEnd   = new Date(weekStart); weekEnd.setDate(weekStart.getDate() + 6);

  label.innerHTML = `${weekStart.getDate()} ${MONTHS_FR[weekStart.getMonth()]} – <span>${weekEnd.getDate()} ${MONTHS_FR[weekEnd.getMonth()]} ${weekEnd.getFullYear()}</span>`;

  // Coin vide
  const corner = document.createElement('div');
  corner.className = 'cal-corner';
  grid.appendChild(corner);

  // En-têtes jours
  for (let d = 0; d < 7; d++) {
    const date    = new Date(weekStart); date.setDate(weekStart.getDate() + d);
    const isToday = date.getTime() === today.getTime();
    const cell    = document.createElement('div');
    cell.className = 'cal-head' + (isToday ? ' today' : '');
    cell.innerHTML = `<div class="cal-day-name">${DAYS_FR[d]}</div><div class="cal-day-num">${date.getDate()}</div>`;
    grid.appendChild(cell);
  }

  // Lignes horaires
  for (let h = 0; h < CAL_HOURS; h++) {
    const hour = CAL_START + h;

    const timeCell = document.createElement('div');
    timeCell.className = 'cal-time-cell';
    timeCell.innerHTML = `<span>${String(hour).padStart(2,'0')}:00</span>`;
    grid.appendChild(timeCell);

    for (let d = 0; d < 7; d++) {
      const date    = new Date(weekStart); date.setDate(weekStart.getDate() + d);
      const isToday = date.getTime() === today.getTime();
      const cell    = document.createElement('div');
      cell.className = 'cal-cell' + (isToday ? ' today' : '');
      cell.dataset.day  = d;
      cell.dataset.hour = hour;
      grid.appendChild(cell);
    }
  }

  // Injection des événements
  const tooltip = document.getElementById('cal-tooltip');

  calEvents.forEach(ev => {
    const startRow  = Math.floor(ev.hStart - CAL_START);
    const startFrac = (ev.hStart - CAL_START) - startRow;
    if (startRow < 0 || startRow >= CAL_HOURS) return;

    const cell = grid.querySelector(`.cal-cell[data-day="${ev.day}"][data-hour="${CAL_START + startRow}"]`);
    if (!cell) return;

    const block = document.createElement('div');
    block.className = `cal-event cat-${ev.cat}`;
    block.style.top    = (startFrac * SLOT_H) + 'px';
    block.style.height = ((ev.hEnd - ev.hStart) * SLOT_H - 2) + 'px';
    block.innerHTML = `
      <div class="cal-event-title">${ev.title}</div>
      <div class="cal-event-time">${fmtHour(ev.hStart)} – ${fmtHour(ev.hEnd)}</div>
    `;

    block.addEventListener('mouseenter', () => {
      document.getElementById('tt-title').textContent = ev.title;
      document.getElementById('tt-time').textContent  = `${DAYS_FR[ev.day]} · ${fmtHour(ev.hStart)} – ${fmtHour(ev.hEnd)}`;
      document.getElementById('tt-desc').textContent  = ev.desc;
      tooltip.classList.add('visible');
    });
    block.addEventListener('mousemove', e => {
      tooltip.style.left = Math.min(e.clientX + 16, window.innerWidth  - 280) + 'px';
      tooltip.style.top  = Math.min(e.clientY - 10, window.innerHeight - 140) + 'px';
    });
    block.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));

    cell.appendChild(block);
  });
}

document.getElementById('cal-prev').addEventListener('click', () => { calOffset--; renderCalendar(); });
document.getElementById('cal-next').addEventListener('click', () => { calOffset++; renderCalendar(); });
renderCalendar();

/* ─── SCROLL ANIMATIONS ──────────────────────────────────────────────────── */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .fade-in-left').forEach(el => fadeObserver.observe(el));

/* ─── NAV ACTIVE ─────────────────────────────────────────────────────────── */
const navLinks = document.querySelectorAll('nav ul a');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`nav ul a[href="#${e.target.id}"]`);
    if (link) link.classList.add('active');
  });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));
