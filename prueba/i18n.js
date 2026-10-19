document.addEventListener("DOMContentLoaded", () => {
  // Inicializar idioma por defecto o recuperado de localStorage
  const savedLang = localStorage.getItem('siteLang') || 'es';
  applyLanguage(savedLang);
});

// Función global para cambiar el idioma desde el Switch
window.changeLang = function(lang) {
  localStorage.setItem('siteLang', lang);
  applyLanguage(lang);
};

function applyLanguage(lang) {
  // Actualizar atributo lang del documento
  document.documentElement.lang = lang;

  // Actualizar textos en el DOM
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Actualizar interfaz visual del Switch
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
}
