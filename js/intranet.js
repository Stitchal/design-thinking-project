'use strict';

/* ═══════════════════════════════════════════════════════════════════════════
   DONNÉES MOCK
═══════════════════════════════════════════════════════════════════════════ */

const USERS = [
  {
    id: 'USR001', pin: '1234', prenom: 'Thomas', nom: 'Lemaire', avatar: '👨',
    etapeActuelle: 2, etapesCompletees: [1],
    formations: [
      { titre: 'Cours de français — niveau A2',   statut: 'termine',  date: '10/02/2025', heures: 24 },
      { titre: 'Atelier CV & compétences',         statut: 'termine',  date: '01/03/2025', heures: 4  },
      { titre: 'Initiation numérique',             statut: 'en_cours', date: '20/03/2025', heures: 8  },
      { titre: 'Formation électricité — Vinci',   statut: 'planifie', date: '05/04/2025', heures: 36 }
    ],
    cv: {
      completude: 65,
      sections: [
        { label: 'Identité',            fait: true  },
        { label: 'Expériences',         fait: true  },
        { label: 'Compétences',         fait: true  },
        { label: 'Formations',          fait: false },
        { label: "Centres d'intérêt",   fait: false }
      ]
    },
    rdvPersonnels: [
      { titre: 'RDV accompagnatrice — Mme Dupont', date: '2025-04-02', heure: '10h00', lieu: 'Bureau 3',       statut: 'confirme' },
      { titre: 'Consultation médicale',            date: '2025-04-08', heure: '09h30', lieu: 'Salle santé',    statut: 'confirme' }
    ],
    evenementsInscrits: ['EVT002', 'EVT005'],
    messages: [
      { id: 'MSG01', de: 'Mme Dupont (accompagnatrice)', avatar: '👩‍💼', date: '28/03', heure: '14h30', texte: 'Bonjour Thomas, votre rendez-vous du 2 avril est confirmé. Pensez à apporter vos documents administratifs.', lu: false },
      { id: 'MSG02', de: 'Le HUB — Rappel automatique',  avatar: '🔔',   date: '27/03', heure: '09h00', texte: 'Rappel : Formation électricité avec Vinci Energies le 5 avril à 9h00. Inscription confirmée.',              lu: true  },
      { id: 'MSG03', de: 'M. Bernard (formateur)',        avatar: '👨‍🏫', date: '25/03', heure: '11h15', texte: 'Bravo pour vos progrès en français ! Vous êtes prêt pour passer au niveau B1.',                           lu: true  }
    ],
    candidatures: [
      { id: 'CAND01', entreprise: "McDonald's France", poste: 'Équipier polyvalent',       emoji: '🍔', dateCandidature: '20/03/2025', statut: 'entretien', prochainRdv: '3 avril à 14h00' },
      { id: 'CAND02', entreprise: 'Adecco',             poste: 'Mission intérim manutention', emoji: '🏢', dateCandidature: '15/03/2025', statut: 'vue',       prochainRdv: null }
    ]
  },
  {
    id: 'USR002', pin: '5678', prenom: 'Amina', nom: 'Diallo', avatar: '👩',
    etapeActuelle: 1, etapesCompletees: [],
    formations: [
      { titre: 'Cours de français — niveau débutant', statut: 'en_cours', date: '10/03/2025', heures: 12 }
    ],
    cv: {
      completude: 20,
      sections: [
        { label: 'Identité',            fait: true  },
        { label: 'Expériences',         fait: false },
        { label: 'Compétences',         fait: false },
        { label: 'Formations',          fait: false },
        { label: "Centres d'intérêt",   fait: false }
      ]
    },
    rdvPersonnels: [
      { titre: 'Accueil & bilan initial — M. Rosset', date: '2025-04-01', heure: '11h00', lieu: 'Accueil HUB', statut: 'confirme' }
    ],
    evenementsInscrits: ['EVT001'],
    messages: [
      { id: 'MSG04', de: 'M. Rosset (coordinateur)', avatar: '👨‍💼', date: '29/03', heure: '10h00', texte: "Bienvenue au HUB, Amina. Votre bilan initial est prévu le 1er avril. N'hésitez pas à poser des questions à l'accueil.", lu: false }
    ],
    candidatures: []
  },
  {
    id: 'USR003', pin: '9999', prenom: 'Karim', nom: 'Benali', avatar: '🧔',
    etapeActuelle: 3, etapesCompletees: [1, 2],
    formations: [
      { titre: 'Cours de français — niveau B1',  statut: 'termine',  date: '15/01/2025', heures: 40 },
      { titre: 'Formation plomberie',            statut: 'termine',  date: '28/02/2025', heures: 60 },
      { titre: "Atelier entretien d'embauche",   statut: 'termine',  date: '10/03/2025', heures: 6  },
      { titre: 'Certification électricité CAP',  statut: 'en_cours', date: '25/03/2025', heures: 80 }
    ],
    cv: {
      completude: 90,
      sections: [
        { label: 'Identité',            fait: true  },
        { label: 'Expériences',         fait: true  },
        { label: 'Compétences',         fait: true  },
        { label: 'Formations',          fait: true  },
        { label: "Centres d'intérêt",   fait: false }
      ]
    },
    rdvPersonnels: [
      { titre: 'Entretien Vinci Energies',   date: '2025-04-03', heure: '14h00', lieu: 'Salle entreprises', statut: 'confirme' },
      { titre: 'Jobdating La Poste',         date: '2025-04-10', heure: '10h30', lieu: 'Salle polyvalente', statut: 'confirme' }
    ],
    evenementsInscrits: ['EVT002', 'EVT003', 'EVT005'],
    messages: [
      { id: 'MSG05', de: 'Mme Bouet (conseillère emploi)', avatar: '👩‍💼', date: '30/03', heure: '16h45', texte: "Karim, Vinci Energies a confirmé votre entretien du 3 avril. Préparez bien votre présentation, vous êtes un excellent candidat !", lu: false },
      { id: 'MSG06', de: 'Le HUB — Rappel automatique',    avatar: '🔔',   date: '29/03', heure: '09h00', texte: "Rappel : Forum Emploi Inclusion demain à 9h00. Votre badge d'accès est prêt à l'accueil.", lu: false }
    ],
    candidatures: [
      { id: 'CAND03', entreprise: 'Vinci Energies',  poste: 'Électricien — contrat alternance', emoji: '⚡',  dateCandidature: '18/03/2025', statut: 'entretien', prochainRdv: '3 avril à 14h00' },
      { id: 'CAND04', entreprise: 'La Poste Groupe', poste: 'Agent de tri postal',               emoji: '📬', dateCandidature: '22/03/2025', statut: 'envoye',    prochainRdv: null },
      { id: 'CAND05', entreprise: 'Sodexo',          poste: 'Aide-cuisinier',                    emoji: '🍽️', dateCandidature: '10/03/2025', statut: 'accepte',   prochainRdv: null }
    ]
  },
  {
    id: 'USR004', pin: '0000', prenom: 'Isabelle', nom: 'Martin', avatar: '👩‍🦳',
    etapeActuelle: 2, etapesCompletees: [1],
    formations: [
      { titre: 'Cours de mathématiques — remise à niveau', statut: 'termine',  date: '20/02/2025', heures: 16 },
      { titre: 'Atelier cuisine professionnelle',           statut: 'en_cours', date: '15/03/2025', heures: 20 }
    ],
    cv: {
      completude: 45,
      sections: [
        { label: 'Identité',            fait: true  },
        { label: 'Expériences',         fait: true  },
        { label: 'Compétences',         fait: false },
        { label: 'Formations',          fait: false },
        { label: "Centres d'intérêt",   fait: false }
      ]
    },
    rdvPersonnels: [],
    evenementsInscrits: ['EVT004'],
    messages: [
      { id: 'MSG07', de: 'M. Riso (formateur cuisine)', avatar: '👨‍🍳', date: '28/03', heure: '12h30', texte: "Bravo Isabelle pour votre implication en atelier cuisine ! Sodexo cherche des aide-cuisinières, je vous ai recommandée.", lu: false }
    ],
    candidatures: [
      { id: 'CAND06', entreprise: 'Sodexo', poste: 'Aide-cuisinière', emoji: '🍽️', dateCandidature: '28/03/2025', statut: 'envoye', prochainRdv: null }
    ]
  }
];

const HUB_EVENTS = [
  { id: 'EVT001', titre: 'Forum Emploi Inclusion',    date: '2025-04-07', heure: '09h00–12h00', lieu: 'Grande salle',        cat: 'forum',     desc: 'Rencontrez directement des recruteurs engagés dans l\'inclusion.' },
  { id: 'EVT002', titre: 'Atelier CV & Compétences',  date: '2025-04-09', heure: '14h00–15h30', lieu: 'Salle formation',     cat: 'formation', desc: 'Rédaction accompagnée de CV et arbre de compétences.' },
  { id: 'EVT003', titre: 'Jobdating Express',         date: '2025-04-10', heure: '14h00–17h00', lieu: 'Salle entreprises',   cat: 'jobdate',   desc: "Sessions de 10 min avec Adecco, McDonald's, Sodexo." },
  { id: 'EVT004', titre: 'Atelier Cuisine collectif', date: '2025-04-02', heure: '10h30–12h00', lieu: 'Cuisine pédagogique', cat: 'atelier',   desc: "Préparation d'un repas ensemble. Ouvert à tous." },
  { id: 'EVT005', titre: 'Formation Électricité',     date: '2025-04-05', heure: '09h00–12h00', lieu: 'Atelier technique',   cat: 'formation', desc: 'Initiation métiers électriques avec Vinci Energies.' },
  { id: 'EVT006', titre: 'Santé Mentale & Soutien',   date: '2025-04-04', heure: '16h00–17h30', lieu: 'Salle bien-être',     cat: 'sante',     desc: 'Groupe de parole animé par un psychologue bénévole.' }
];

const JOB_OFFERS = [
  { id: 'JOB01', entreprise: "McDonald's France", emoji: '🍔', poste: 'Équipier polyvalent H/F',    secteur: 'Restauration',           contrat: 'CDI',          desc: "Sans condition de diplôme. Formation assurée en interne. Horaires flexibles adaptés à votre situation.",   skills: ['Relation client', 'Travail en équipe', 'Polyvalence'] },
  { id: 'JOB02', entreprise: 'Adecco',             emoji: '🏢', poste: 'Manutentionnaire',          secteur: 'Logistique',             contrat: 'Intérim',       desc: "Mission de 3 mois renouvelable. Démarrage rapide. Accompagnement Adecco tout au long de la mission.",        skills: ['Manutention', 'Ponctualité', 'Permis B souhaité'] },
  { id: 'JOB03', entreprise: 'Vinci Energies',     emoji: '⚡', poste: 'Électricien — alternance',  secteur: 'BTP',                    contrat: 'Alternance',    desc: "Formation CAP Électricité en alternance. Rémunération dès le premier mois. Perspectives d'emploi réelles.", skills: ['Curiosité technique', 'Rigueur', 'Manuel'] },
  { id: 'JOB04', entreprise: 'Sodexo',             emoji: '🍽️', poste: 'Agent de restauration',    secteur: 'Restauration collective', contrat: 'CDD 6 mois',   desc: "Service en restauration d'entreprise. Formation assurée. Poste accessible sans expérience préalable.",       skills: ['Service', 'Hygiène alimentaire', 'Dynamisme'] },
  { id: 'JOB05', entreprise: 'La Poste Groupe',    emoji: '📬', poste: 'Facteur / Agent de tri',    secteur: 'Services',               contrat: 'Contrat aidé',  desc: "Contrat aidé avec accompagnement vers CDI. Tournée à pied ou vélo. Horaires du matin.",                     skills: ['Autonomie', 'Orientation', 'Condition physique'] },
  { id: 'JOB06', entreprise: 'Leroy Merlin',       emoji: '🔨', poste: 'Conseiller de vente',       secteur: 'Commerce',               contrat: 'CDI',           desc: "Valorise les profils manuels. Formation interne complète. Accompagnement à la prise de poste.",               skills: ['Bricolage', 'Contact client', 'Organisation'] }
];

const EVENT_COLORS = {
  forum:     '#d4900a',
  formation: '#907a10',
  jobdate:   '#5070c0',
  atelier:   '#2d6a4f',
  sante:     '#b05090'
};

const STEP_DEFS = [
  { label: 'Besoins primaires',         desc: 'Hygiène, santé, logement' },
  { label: 'Socialisation & Formation', desc: 'Liens sociaux, formations' },
  { label: "Hub d'autonomie",           desc: 'Emploi, insertion durable' }
];

const STATUT_LABELS = {
  envoye:    'Envoyée',
  vue:       'Vue',
  entretien: 'Entretien',
  accepte:   'Acceptée',
  refuse:    'Refusée'
};

/* ═══════════════════════════════════════════════════════════════════════════
   ÉTAT GLOBAL
═══════════════════════════════════════════════════════════════════════════ */
const APP = {
  user:              null,
  screen:            'login',
  module:            null,
  pinBuffer:         '',
  autoLogoutTimer:   null,
  countdownTimer:    null,
  LOGOUT_DELAY:      5 * 60 * 1000,   // 5 min
  WARN_BEFORE:       30 * 1000,        // 30 s avant
  logoutAt:          0,
  barInterval:       null
};

/* ═══════════════════════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  APP.screen = id;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PIN / AUTH
═══════════════════════════════════════════════════════════════════════════ */
function updateDots() {
  document.querySelectorAll('.pin-dot').forEach((dot, i) => {
    dot.classList.toggle('filled', i < APP.pinBuffer.length);
  });
  document.getElementById('pin-submit').disabled = (APP.pinBuffer.length < 4);
}

function resetPin() {
  APP.pinBuffer = '';
  updateDots();
  document.getElementById('pin-error').textContent = '';
}

function tryLogin() {
  const user = USERS.find(u => u.pin === APP.pinBuffer);
  if (user) {
    APP.user = user;
    resetPin();
    initDashboard(user);
    showScreen('dashboard');
    startAutoLogout();
  } else {
    document.getElementById('pin-error').textContent = 'Code incorrect, réessayez.';
    const pad = document.getElementById('pin-pad');
    pad.classList.remove('shake');
    void pad.offsetWidth; // force reflow
    pad.classList.add('shake');
    setTimeout(resetPin, 600);
  }
}

// PIN pad events
document.querySelectorAll('.pin-key[data-digit]').forEach(btn => {
  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (APP.pinBuffer.length >= 4) return;
    APP.pinBuffer += btn.dataset.digit;
    updateDots();
    if (APP.pinBuffer.length === 4) {
      setTimeout(tryLogin, 120); // délai visuel
    }
  });
});

document.getElementById('pin-clear').addEventListener('pointerdown', e => {
  e.preventDefault();
  APP.pinBuffer = APP.pinBuffer.slice(0, -1);
  updateDots();
  document.getElementById('pin-error').textContent = '';
});

document.getElementById('pin-submit').addEventListener('pointerdown', e => {
  e.preventDefault();
  if (APP.pinBuffer.length === 4) tryLogin();
});

/* ═══════════════════════════════════════════════════════════════════════════
   AUTO-LOGOUT
═══════════════════════════════════════════════════════════════════════════ */
function startAutoLogout() {
  clearTimers();
  APP.logoutAt = Date.now() + APP.LOGOUT_DELAY;

  // Barre de progression
  const fill = document.getElementById('autologout-fill');
  fill.style.transition = 'none';
  fill.style.width = '100%';

  APP.barInterval = setInterval(() => {
    const remaining = APP.logoutAt - Date.now();
    const pct = Math.max(0, (remaining / APP.LOGOUT_DELAY) * 100);
    fill.style.transition = 'width 1s linear';
    fill.style.width = pct + '%';
    if (remaining <= APP.WARN_BEFORE) showWarning();
    if (remaining <= 0) logout();
  }, 1000);
}

function showWarning() {
  const modal = document.getElementById('inactivity-modal');
  if (!modal.hidden) return;
  modal.hidden = false;
  let secs = Math.ceil((APP.logoutAt - Date.now()) / 1000);
  document.getElementById('inactivity-countdown').textContent = secs;
  APP.countdownTimer = setInterval(() => {
    secs = Math.ceil((APP.logoutAt - Date.now()) / 1000);
    const el = document.getElementById('inactivity-countdown');
    if (el) el.textContent = Math.max(0, secs);
  }, 500);
}

function resetAutoLogout() {
  if (APP.screen === 'login') return;
  clearTimers();
  document.getElementById('inactivity-modal').hidden = true;
  startAutoLogout();
}

function clearTimers() {
  clearInterval(APP.barInterval);
  clearInterval(APP.countdownTimer);
  APP.barInterval = null;
  APP.countdownTimer = null;
}

function logout() {
  clearTimers();
  APP.user = null;
  APP.module = null;
  document.getElementById('inactivity-modal').hidden = true;
  const fill = document.getElementById('autologout-fill');
  fill.style.transition = 'none';
  fill.style.width = '0%';
  showScreen('login');
  resetPin();
}

// Reset sur toute interaction
['pointerdown', 'touchstart', 'keydown'].forEach(evt =>
  document.addEventListener(evt, resetAutoLogout, { passive: true })
);

document.getElementById('btn-stay').addEventListener('click', resetAutoLogout);
document.getElementById('btn-logout').addEventListener('click', logout);
document.getElementById('btn-logout-2').addEventListener('click', logout);

/* ═══════════════════════════════════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════════════════════════════════ */
function initDashboard(user) {
  // Greeting
  document.getElementById('dash-avatar').textContent = user.avatar;
  document.getElementById('dash-user-name').textContent = user.prenom;
  document.getElementById('dash-greeting').textContent = user.prenom + ' !';

  const now = new Date();
  const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const mois  = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  document.getElementById('dash-date').textContent =
    jours[now.getDay()] + ' ' + now.getDate() + ' ' + mois[now.getMonth()] + ' ' + now.getFullYear();

  // Parcours
  const stepsEl = document.getElementById('progress-steps');
  stepsEl.innerHTML = '';
  STEP_DEFS.forEach((s, i) => {
    const num = i + 1;
    let cls = 'progress-step';
    let icon = num.toString();
    if (user.etapesCompletees.includes(num)) { cls += ' completed'; icon = '✓'; }
    else if (user.etapeActuelle === num)      { cls += ' active'; }
    else                                      { cls += ' pending'; icon = '🔒'; }
    const div = document.createElement('div');
    div.className = cls;
    div.innerHTML = `<div class="progress-step-icon">${icon}</div>
      <div><div class="progress-step-label">${s.label}</div>
      <div class="progress-step-num">Étape ${num}</div></div>`;
    stepsEl.appendChild(div);
  });

  // Badges
  const unreadMsg = user.messages.filter(m => !m.lu).length;
  document.getElementById('badge-msg').textContent   = unreadMsg || '';
  document.getElementById('badge-profil').textContent = '';
  document.getElementById('badge-cal').textContent    = user.rdvPersonnels.length || '';
  const activeApp = user.candidatures.filter(c => c.statut === 'entretien').length;
  document.getElementById('badge-emploi').textContent = activeApp || '';

  // Prochain RDV
  const nextEl = document.getElementById('dash-next-rdv');
  const wrap   = document.getElementById('dash-next-rdv-wrap');
  if (user.rdvPersonnels.length) {
    const rdv = user.rdvPersonnels.sort((a, b) => a.date.localeCompare(b.date))[0];
    const d   = new Date(rdv.date);
    const m   = ['jan','fév','mars','avr','mai','juin','juil','août','sep','oct','nov','déc'][d.getMonth()];
    nextEl.innerHTML = `
      <div class="next-rdv-card">
        <div class="next-rdv-date">
          <div class="next-rdv-day">${d.getDate()}</div>
          <div class="next-rdv-month">${m}</div>
        </div>
        <div class="next-rdv-info">
          <h4>${rdv.titre}</h4>
          <p>${rdv.heure} · ${rdv.lieu}</p>
        </div>
      </div>`;
    wrap.style.display = '';
  } else {
    nextEl.innerHTML = '<div class="next-rdv-empty">Aucun rendez-vous prévu prochainement.</div>';
  }

  // Clic sur les modules
  document.querySelectorAll('.dash-card[data-module]').forEach(card => {
    const clone = card.cloneNode(true);
    card.parentNode.replaceChild(clone, card);
    clone.addEventListener('click', () => showModule(clone.dataset.module));
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   MODULES
═══════════════════════════════════════════════════════════════════════════ */
const MODULE_TITLES = {
  profil:     'Mon profil',
  calendrier: 'Calendrier',
  messages:   'Messagerie',
  emploi:     'Offres d\'emploi'
};

function showModule(name) {
  APP.module = name;
  document.getElementById('module-title').textContent = MODULE_TITLES[name];
  const content = document.getElementById('module-content');
  content.innerHTML = '';
  if (name === 'profil')     renderProfil(APP.user, content);
  if (name === 'calendrier') renderCalendrier(APP.user, content);
  if (name === 'messages')   renderMessages(APP.user, content);
  if (name === 'emploi')     renderEmploi(APP.user, content);
  showScreen('module');
}

document.getElementById('btn-back').addEventListener('click', () => {
  showScreen('dashboard');
  initDashboard(APP.user); // rafraîchir les badges
});

/* ─── MODULE PROFIL ─────────────────────────────────────────────────────── */
function renderProfil(user, container) {
  // Étapes parcours
  let stepsHtml = '<div class="profil-steps">';
  STEP_DEFS.forEach((s, i) => {
    const num = i + 1;
    let cls = 'profil-step', icon = '🔒';
    if (user.etapesCompletees.includes(num)) { cls += ' completed'; icon = '✅'; }
    else if (user.etapeActuelle === num)      { cls += ' active';    icon = '▶️'; }
    stepsHtml += `<div class="${cls}">
      <div class="profil-step-icon">${icon}</div>
      <div>
        <div class="profil-step-label">${s.label}</div>
        <div class="profil-step-desc">${s.desc}</div>
      </div>
    </div>`;
  });
  stepsHtml += '</div>';

  // Formations
  let formationsHtml = '';
  user.formations.forEach(f => {
    const icons = { termine: '✅', en_cours: '🔄', planifie: '📅' };
    formationsHtml += `
      <div class="formation-card ${f.statut}">
        <div class="formation-icon">${icons[f.statut] || '📚'}</div>
        <div class="formation-info">
          <div class="formation-title">${f.titre}</div>
          <div class="formation-meta">${f.heures}h · ${f.date}</div>
        </div>
        <span class="formation-statut statut-${f.statut}">${f.statut === 'termine' ? 'Terminé' : f.statut === 'en_cours' ? 'En cours' : 'Planifié'}</span>
      </div>`;
  });

  // CV
  const sectionsHtml = user.cv.sections.map(s =>
    `<div class="cv-check-item ${s.fait ? 'fait' : ''}">
      <span class="cv-check-icon">${s.fait ? '✅' : '⭕'}</span>
      ${s.label}
    </div>`
  ).join('');

  container.innerHTML = `
    <div class="module-section">
      <div class="module-section-title">Votre parcours</div>
      ${stepsHtml}
    </div>
    <div class="module-section">
      <div class="module-section-title">Formations</div>
      ${formationsHtml || '<p style="color:var(--txt-dim);font-size:.85rem">Aucune formation enregistrée.</p>'}
    </div>
    <div class="module-section">
      <div class="module-section-title">Mon CV</div>
      <div class="cv-completude">${user.cv.completude}<span>% complété</span></div>
      <div class="cv-progress-bar">
        <div class="cv-progress-fill" id="cv-fill" style="width:0%"></div>
      </div>
      <div class="cv-checklist">${sectionsHtml}</div>
    </div>`;

  // Animer la barre CV
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const fill = container.querySelector('#cv-fill');
    if (fill) fill.style.width = user.cv.completude + '%';
  }));
}

/* ─── MODULE CALENDRIER ─────────────────────────────────────────────────── */
function renderCalendrier(user, container) {
  // RDV personnels
  let rdvHtml = '';
  if (user.rdvPersonnels.length) {
    user.rdvPersonnels.sort((a, b) => a.date.localeCompare(b.date)).forEach(rdv => {
      const d = new Date(rdv.date);
      const m = ['jan','fév','mars','avr','mai','juin','juil','août','sep','oct','nov','déc'][d.getMonth()];
      rdvHtml += `
        <div class="rdv-card">
          <div class="rdv-date-block">
            <div class="rdv-date-day">${d.getDate()}</div>
            <div class="rdv-date-month">${m}</div>
          </div>
          <div class="rdv-info">
            <h4>${rdv.titre}</h4>
            <p>${rdv.heure} · ${rdv.lieu}</p>
          </div>
        </div>`;
    });
  } else {
    rdvHtml = '<p style="color:var(--txt-dim);font-size:.85rem">Aucun rendez-vous prévu.</p>';
  }

  // Événements HUB
  let eventsHtml = '';
  HUB_EVENTS.forEach(ev => {
    const inscrit = user.evenementsInscrits.includes(ev.id);
    const color   = EVENT_COLORS[ev.cat] || '#888';
    const d       = new Date(ev.date);
    const m       = ['jan','fév','mars','avr','mai','juin','juil','août','sep','oct','nov','déc'][d.getMonth()];
    eventsHtml += `
      <div class="event-signup-card">
        <div class="event-cat-dot" style="background:${color}"></div>
        <div class="event-signup-info">
          <h4>${ev.titre}</h4>
          <p>${d.getDate()} ${m} · ${ev.heure} · ${ev.lieu}</p>
        </div>
        <button class="btn-signup ${inscrit ? 'inscrit' : ''}"
          data-evid="${ev.id}" type="button">
          ${inscrit ? '✓ Inscrit·e' : "S'inscrire"}
        </button>
      </div>`;
  });

  container.innerHTML = `
    <div class="module-section">
      <div class="module-section-title">Mes rendez-vous</div>
      ${rdvHtml}
    </div>
    <div class="module-section">
      <div class="module-section-title">Événements du HUB</div>
      ${eventsHtml}
    </div>`;

  // Toggle inscription
  container.querySelectorAll('.btn-signup').forEach(btn => {
    btn.addEventListener('click', () => {
      const evid = btn.dataset.evid;
      const idx  = user.evenementsInscrits.indexOf(evid);
      if (idx === -1) {
        user.evenementsInscrits.push(evid);
        btn.textContent = '✓ Inscrit·e';
        btn.classList.add('inscrit');
      } else {
        user.evenementsInscrits.splice(idx, 1);
        btn.textContent = "S'inscrire";
        btn.classList.remove('inscrit');
      }
    });
  });
}

/* ─── MODULE MESSAGES ───────────────────────────────────────────────────── */
function renderMessages(user, container) {
  const sorted = [...user.messages].sort((a, b) => b.date.localeCompare(a.date));

  function buildList() {
    if (!sorted.length) return '<p class="messages-empty">Aucun message.</p>';
    return sorted.map((msg, idx) => `
      <div class="message-card ${msg.lu ? 'lu' : 'non-lu'}" data-idx="${idx}">
        <div class="message-avatar">${msg.avatar}</div>
        <div class="message-body">
          <div class="message-header">
            <span class="message-from">${msg.de}</span>
            <span class="message-date">${msg.date} ${msg.heure}</span>
          </div>
          <div class="message-text">${msg.texte}</div>
        </div>
        ${!msg.lu ? '<div class="message-dot"></div>' : ''}
      </div>`
    ).join('');
  }

  container.innerHTML = `
    <div class="module-section" id="msg-list-section">
      <div class="module-section-title">Messages</div>
      <div id="msg-list">${buildList()}</div>
    </div>`;

  container.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx, 10);
      sorted[idx].lu = true;
      // Mettre à jour aussi dans user.messages
      const orig = user.messages.find(m => m.id === sorted[idx].id);
      if (orig) orig.lu = true;
      card.classList.replace('non-lu', 'lu');
      const dot = card.querySelector('.message-dot');
      if (dot) dot.remove();
    });
  });
}

/* ─── MODULE EMPLOI ─────────────────────────────────────────────────────── */
function buildTunnel(statut) {
  const steps = ['envoye', 'vue', 'entretien', 'accepte'];
  const pos   = steps.indexOf(statut);
  if (statut === 'refuse') {
    return `<div style="font-family:var(--f-mono);font-size:.65rem;color:#7a1010;padding:.4rem 0">Candidature non retenue.</div>`;
  }
  let html = '<div class="statut-tunnel">';
  steps.forEach((s, i) => {
    const cls = i < pos ? 'done' : i === pos ? 'current' : '';
    html += `<div class="statut-tunnel-step ${cls}">
      <div class="statut-tunnel-dot"></div>
      <span>${STATUT_LABELS[s]}</span>
    </div>`;
    if (i < steps.length - 1) {
      html += `<div class="statut-tunnel-line ${i < pos ? 'done' : ''}"></div>`;
    }
  });
  html += '</div>';
  return html;
}

function renderEmploi(user, container) {
  // Candidatures
  let candHtml = '';
  if (user.candidatures.length) {
    user.candidatures.forEach(c => {
      const rdvNote = c.prochainRdv
        ? `<div class="candidature-rdv">🗓️ Entretien prévu le ${c.prochainRdv}</div>`
        : '';
      candHtml += `
        <div class="candidature-card">
          <div class="candidature-top">
            <div class="candidature-logo">${c.emoji}</div>
            <div class="candidature-meta">
              <div class="candidature-poste">${c.poste}</div>
              <div class="candidature-entreprise">${c.entreprise}</div>
            </div>
            <span class="statut-pill statut-${c.statut}">${STATUT_LABELS[c.statut] || c.statut}</span>
          </div>
          ${buildTunnel(c.statut)}
          ${rdvNote}
        </div>`;
    });
  } else {
    candHtml = '<p style="color:var(--txt-dim);font-size:.85rem">Aucune candidature en cours.</p>';
  }

  // Offres disponibles
  const candidateIds = new Set(user.candidatures.map(c => {
    const job = JOB_OFFERS.find(j => j.entreprise === c.entreprise && j.poste === c.poste);
    return job ? job.id : null;
  }));

  let offresHtml = '';
  JOB_OFFERS.forEach(job => {
    const dejaCand = candidateIds.has(job.id);
    offresHtml += `
      <div class="job-card">
        <div class="job-top">
          <div class="job-logo">${job.emoji}</div>
          <div class="job-meta">
            <div class="job-poste">${job.poste}</div>
            <div class="job-entreprise">${job.entreprise}</div>
          </div>
          <span class="job-contrat">${job.contrat}</span>
        </div>
        <p class="job-desc">${job.desc}</p>
        <div class="job-skills">${job.skills.map(s => `<span class="job-skill">${s}</span>`).join('')}</div>
        <button class="btn-postuler" data-jobid="${job.id}" type="button"
          ${dejaCand ? 'disabled' : ''}>
          ${dejaCand ? '✓ Candidature envoyée' : 'Postuler'}
        </button>
      </div>`;
  });

  container.innerHTML = `
    <div class="module-section">
      <div class="module-section-title">Mes candidatures</div>
      ${candHtml}
    </div>
    <div class="module-section">
      <div class="module-section-title">Offres disponibles</div>
      ${offresHtml}
    </div>`;

  // Postuler
  container.querySelectorAll('.btn-postuler:not(:disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      const job = JOB_OFFERS.find(j => j.id === btn.dataset.jobid);
      if (!job) return;
      user.candidatures.push({
        id:               'NEW_' + Date.now(),
        entreprise:       job.entreprise,
        poste:            job.poste,
        emoji:            job.emoji,
        dateCandidature:  new Date().toLocaleDateString('fr-FR'),
        statut:           'envoye',
        prochainRdv:      null
      });
      btn.disabled    = true;
      btn.textContent = '✓ Candidature envoyée';
    });
  });
}
