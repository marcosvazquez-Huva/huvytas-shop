document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('siteLang') || 'es';
  applyLanguage(savedLang);
});

window.changeLang = function(lang) {
  localStorage.setItem('siteLang', lang);
  applyLanguage(lang);
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Actualizar textos preservando etiquetas HTML internas (spans, em, etc.)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Actualizar Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Actualizar Aria-Labels
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Actualizar Títulos (tooltips)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang] && translations[lang][key]) {
      el.title = translations[lang][key];
    }
  });

  // Actualizar estado visual del Switch ES/EN
  const btnEs = document.getElementById('btnEs');
  const btnEn = document.getElementById('btnEn');
  
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.className = "px-2.5 py-1 rounded-full bg-accent-green text-ink-black transition-all";
      btnEn.className = "lang-btn-inactive px-2.5 py-1 rounded-full transition-all text-slate-gray hover:text-ink-black";
    } else {
      btnEs.className = "lang-btn-inactive px-2.5 py-1 rounded-full transition-all text-slate-gray hover:text-ink-black";
      btnEn.className = "px-2.5 py-1 rounded-full bg-accent-green text-ink-black transition-all";
    }
  }

  // Notificar a otros scripts (como el del video) que el idioma cambió
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}
