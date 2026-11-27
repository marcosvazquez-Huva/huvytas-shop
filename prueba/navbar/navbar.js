document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <header id="mainNavbar" class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-transparent nav-transparent">
        <div class="max-w-[1240px] w-full mx-auto px-6 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="index.html#home" class="flex items-center">
            <img id="navbarLogo" src="https://via.placeholder.com/160x42/111315/88C24E?text=HUVYTAS" alt="Logo Huvytas Advertising" class="h-8 sm:h-9 w-auto object-contain transition-opacity duration-300 hover:opacity-90"/>
          </a>

          <!-- Menú Central -->
          <nav class="hidden md:flex items-center gap-9">
            <a href="index.html#brands" class="nav-link text-sm font-medium transition-colors" title="Persuadir a marcas para contratar nuestros servicios">Brands</a>
            <a href="index.html#channels" class="nav-link text-sm font-medium transition-colors" title="Presentar nuestros canales y Media Kits">Channels</a>
            <a href="index.html#about" class="nav-link text-sm font-medium transition-colors" title="Contar nuestra historia y evolución">About</a>
          </nav>

          <!-- Zona Derecha: Botón Contacto Desktop + Botón Hamburguesa Minimalista -->
          <div class="flex items-center gap-4">
            <a href="contact.html" class="hidden md:inline-flex btn-huvytas text-xs uppercase tracking-wider px-5 py-2.5 items-center justify-center shadow-sm" title="Formulario ejecutivo de contacto">
              <span>Contacto</span>
            </a>

            <button onclick="toggleMobileNav()" class="mobile-burger md:hidden w-11 h-11 rounded-xl border flex items-center justify-center transition-all" aria-label="Abrir menú">
              <svg id="burgerIcon" class="w-5 h-5 transition-transform duration-500 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="6" y1="8" x2="18" y2="8" />
                <line x1="6" y1="12" x2="18" y2="12" />
                <line x1="13" y1="16" x2="18" y2="16" />
              </svg>
            </button>
          </div>

        </div>

        <!-- Menú desplegable Móvil -->
        <div id="mobileMenu" class="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border-tech px-6 py-6 flex flex-col items-start gap-4 shadow-xl">
          <a href="index.html#brands" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors">Brands</a>
          <a href="index.html#channels" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors">Channels</a>
          <a href="index.html#about" onclick="toggleMobileNav()" class="text-base font-semibold text-ink-black hover:text-accent-green transition-colors">About</a>
          
          <a href="contact.html" onclick="toggleMobileNav()" class="btn-huvytas text-base font-semibold px-5 py-2 mt-2 inline-flex items-center justify-center shadow-sm w-fit">
            <span>Contacto</span>
          </a>
        </div>
      </header>
    `;
    
    initNavbarLogic();
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
