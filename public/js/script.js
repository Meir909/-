/* ================================================================
   HAPPY HEARTS — Script (sad36sko-style design)
   ================================================================ */

/* ── Language dictionary ── */
const TRANSLATIONS = {
  kk: {
    'nav.home':      'Басты бет',
    'nav.news':      'Жаңалықтар',
    'nav.about':     'Балабақша туралы',
    'nav.director':  'Басшы туралы',
    'nav.documents': 'Құжаттар',
    'nav.gallery':   'Галерея',
    'nav.contacts':  'Байланыс',
    'nav.consult':   'Консультациялық орталық',
    'nav.attest':    'Аттестация',
  },
  ru: {
    'nav.home':      'Главная',
    'nav.news':      'Новости',
    'nav.about':     'О детском саде',
    'nav.director':  'О руководителе',
    'nav.documents': 'Документы',
    'nav.gallery':   'Галерея',
    'nav.contacts':  'Контакты',
    'nav.consult':   'Консультационный пункт',
    'nav.attest':    'Аттестация',
  }
};

let currentLang = localStorage.getItem('hh_lang') || 'ru';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.ru)[key] || key;
}

/* ── Apply translations ── */
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.documentElement.lang = currentLang;

  /* Update lang button highlights */
  const kkEl = document.getElementById('lang-kk');
  const ruEl = document.getElementById('lang-ru');
  if (kkEl) kkEl.classList.toggle('lang-active', currentLang === 'kk');
  if (ruEl) ruEl.classList.toggle('lang-active', currentLang === 'ru');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('hh_lang', lang);
  applyLang();
}

/* ── Mobile menu toggle ── */
function toggleMobileMenu() {
  const menu = document.getElementById('main-menu');
  if (!menu) return;
  menu.classList.toggle('open');
}

/* ── Auto-slider ── */
let slideIndex = 0;
let slideTimer = null;

function slideMove(dir) {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  if (!slides.length) return;
  slideIndex = (slideIndex + dir + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  slideTimer = setInterval(() => slideMove(1), 4000);
}

/* ── Gallery lightbox ── */
function openLightbox(cell) {
  const img = cell.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if (!lb || !lbImg) return;
  lbImg.src = img.dataset.full || img.src;
  lbImg.alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Contact form ── */
function submitContactForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const orig = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Отправка...';
  setTimeout(() => {
    btn.textContent = 'Отправлено!';
    btn.style.background = '#5aaa5a';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.background = '';
      e.target.reset();
    }, 2500);
  }, 1000);
}

/* ── Keyboard: close lightbox on Escape ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  startSlider();
});
