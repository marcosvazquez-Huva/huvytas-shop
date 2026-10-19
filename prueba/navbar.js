document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <header id="mainNavbar" class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-transparent nav-transparent">
        <div class="max-w-[1240px] w-full mx-auto px-6 flex items-center justify-between">
          <a href="index.html#home" class="flex items-center">
            <img id="navbarLogo" src="https://via.placeholder.com/160x42/111315/88C24E?text=HUVYTAS" data-i18n-aria-label="navLogoAlt" alt="Logo Huvytas Advertising" class="h-8 sm:h-9 w-auto object-contain transition-opacity duration-300 hover:opacity-90"/>
          </a>
          <nav class="hidden md:flex items-center gap-9">
            <a href="index.html#brands" class="nav-link text-sm font-medium transition-colors" data-i18n="navBrands" data-i18n-title="navTitleBrands">Brands</a>
            <a href="index.html#channels" class="nav-link text-sm font-medium transition-colors" data-i18n="navChannels" data-i18n-title="navTitleChannels">Channels</a>
            <a href="index.html#about" class="nav-link text-sm font-medium transition-colors" data-i18n="navAbout" data-i18n-title="navTitleAbout">About</a>
          </nav>
          <div class="flex items-center gap-4">
            <div class="lang-wrapper inline-flex items-center border rounded-full p-1 text-xs font-heading font-bold transition-all">
              <button id="btnEs" onclick="changeLang('es')" class="px-2.5 py-1 rounded-full bg-accent-green text-ink-black transition-all">ES</button>
              <button id="btnEn" onclick="changeLang('en')" class="lang-btn-inactive px-2.5 py-1 rounded-full transition-all text-slate-gray hover:text-ink-black">EN</button>
            </div>
            <a href="contact.html" class="hidden md:inline-flex btn-huvytas text-xs uppercase tracking-wider px-5 py-2.5 items-center justify-center shadow-sm" data-i18n-title="navTitleContact">
              <span data-i18n="navContact">Contacto</span>
            </a>
            <button onclick="toggleMobileNav()" class="mobile-burger md:hidden p-2 rounded-lg border transition-colors" data-i18n-aria-label="navBurgerAria" aria-label="Abrir menú">
              <svg id="burgerIcon" class="w-6 h-6 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="mobileMenu" class="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border-tech px-6 py-6 flex flex-col items-start gap-4 shadow-xl">
          <a href="index.html#brands" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors" data-i18n="navBrands" data-i18n-title="navTitleBrands">Brands</a>
          <a href="index.html#channels" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors" data-i18n="navChannels" data-i18n-title="navTitleChannels">Channels</a>
          <a href="index.html#about" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors" data-i18n="navAbout" data-i18n-title="navTitleAbout">About</a>
          <a href="contact.html" onclick="toggleMobileNav()" class="btn-huvytas text-base font-semibold px-5 py-2 mt-2 inline-flex items-center justify-center shadow-sm w-fit" data-i18n-title="navTitleContact">
            <span data-i18n="navContact">Contacto</span>
          </a>
        </div>
      </header>
    `;
    
    initNavbarLogic();
    const savedLang = localStorage.getItem('siteLang') || 'es';
    if(typeof applyLanguage === 'function') applyLanguage(savedLang);
  }
});

function initNavbarLogic() {
  const navbar = document.getElementById('mainNavbar');
  const heroSection = document.getElementById('heroSection');

  function checkNavbarScroll() {
    if (heroSection) {
      const heroThreshold = heroSection.offsetHeight - 80;
      if (window.scrollY > heroThreshold) {
        navbar.classList.remove('nav-transparent');
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
        navbar.classList.add('nav-transparent');
      }
    } else {
      navbar.classList.remove('nav-transparent');
      navbar.classList.add('nav-scrolled');
    }
  }

  window.addEventListener('scroll', checkNavbarScroll);
  checkNavbarScroll();
}

window.toggleMobileNav = function() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('burgerIcon');
  if (menu && icon) {
    menu.classList.toggle('menu-active');
    icon.classList.toggle('rotate-90');
  }
};
