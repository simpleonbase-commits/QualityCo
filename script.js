const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');

navToggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const evidenceThreads = {
  complex: {
    tag: 'Mechanism anchor',
    title: 'ANXA2 appears to organize S100A10 at membranes.',
    body:
      'Reviews describe S100A10/p11 as commonly paired with annexin A2 in the AIIt heterotetramer, a setup that can place S100A10 at membrane surfaces where cancer-relevant protease biology may occur.',
    score: 64,
  },
  plasmin: {
    tag: 'Protease switch',
    title: 'The complex is framed as a localized plasmin-generation surface.',
    body:
      'The strongest mechanistic thread is S100A10 acting as a plasminogen receptor: it can bring plasminogen and activators near the cell surface, creating a focused protease pulse to investigate rather than a treatment claim.',
    score: 72,
  },
  invasion: {
    tag: 'Cancer behavior',
    title: 'Several papers connect S100A10 to migration, invasion, and matrix remodeling.',
    body:
      'RAS-transformation and colorectal cancer studies make invasion and migration the most practical first behavior to track across public datasets and future qualified validation partners.',
    score: 58,
  },
  immune: {
    tag: 'Microenvironment question',
    title: 'Tumor-associated macrophage movement may be part of the story.',
    body:
      'A Cancer Research study reported S100A10 dependence in tumor-promoting macrophage migration, so the module flags immune trafficking as a parallel hypothesis instead of treating the cancer cell as the whole system.',
    score: 46,
  },
  validation: {
    tag: 'Next public-data pass',
    title: 'Validate expression, localization, and outcome signals before proposing experiments.',
    body:
      'The website should now guide contributors toward TCGA, CPTAC, Human Protein Atlas, DepMap, cBioPortal, GEO, and PubMed checks that separate review-level plausibility from cancer-type-specific evidence.',
    score: 38,
  },
};

const signalButtons = document.querySelectorAll('[data-signal]');
const evidenceTag = document.querySelector('[data-evidence-tag]');
const evidenceTitle = document.querySelector('[data-evidence-title]');
const evidenceBody = document.querySelector('[data-evidence-body]');
const evidenceMeter = document.querySelector('[data-evidence-meter]');
const mapNodes = document.querySelectorAll('.map-node, .cell-shape, .membrane');

function setEvidenceThread(signal) {
  const thread = evidenceThreads[signal];

  if (!thread) return;

  signalButtons.forEach((button) => {
    const isActive = button.dataset.signal === signal;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  mapNodes.forEach((node) => {
    node.classList.toggle('is-highlighted', node.classList.contains(signal));
  });

  if (evidenceTag) evidenceTag.textContent = thread.tag;
  if (evidenceTitle) evidenceTitle.textContent = thread.title;
  if (evidenceBody) evidenceBody.textContent = thread.body;
  if (evidenceMeter) evidenceMeter.style.width = `${thread.score}%`;
}

signalButtons.forEach((button) => {
  button.addEventListener('click', () => setEvidenceThread(button.dataset.signal));
});

setEvidenceThread('complex');
