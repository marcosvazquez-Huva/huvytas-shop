document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById('footer-container');

  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="bg-ink-black text-white pt-20 pb-12 border-t border-gray-800">
        <div class="max-w-[1240px] mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            <!-- Columna 1: Marca y descripción -->
            <div>
              <a href="index.html#home" class="flex items-center mb-4" data-i18n-title="navTitleBrands">
                <img src="https://via.placeholder.com/160x42/111315/88C24E?text=HUVYTAS" alt="Huvytas Footer" class="h-7 w-auto object-contain brightness-110"/>
              </a>
              <p class="text-gray-400 text-xs sm:text-sm leading-relaxed" data-i18n="ftDesc">
                Conectamos grandes marcas con audiencias estratégicas en México y LATAM mediante tecnología, datos y múltiples canales digitales.
              </p>
            </div>

            <!-- Columna 2: Navegación -->
            <div>
              <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-accent-green mb-4" data-i18n="ftNav">Navegación</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li><a href="index.html#brands" class="hover:text-accent-green transition-colors" data-i18n="navBrands" data-i18n-title="navTitleBrands">Brands</a></li>
                <li><a href="index.html#channels" class="hover:text-accent-green transition-colors" data-i18n="navChannels" data-i18n-title="navTitleChannels">Channels</a></li>
                <li><a href="index.html#about" class="hover:text-accent-green transition-colors" data-i18n="navAbout" data-i18n-title="navTitleAbout">About</a></li>
                <li><a href="contact.html" class="hover:text-accent-green transition-colors" data-i18n="navContact" data-i18n-title="navTitleContact">Contacto</a></li>
              </ul>
            </div>

            <!-- Columna 3: Legales -->
            <div>
              <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-accent-green mb-4" data-i18n="ftLegal">Legales</h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li><a href="#privacidad" class="hover:text-accent-green transition-colors" data-i18n="ftPriv">Política de privacidad</a></li>
                <li><a href="#terminos" class="hover:text-accent-green transition-colors" data-i18n="ftTerm">Términos y condiciones</a></li>
                <li><a href="#cookies" class="hover:text-accent-green transition-colors" data-i18n="ftCook">Política de cookies</a></li>
              </ul>
            </div>

            <!-- Columna 4: Redes Sociales (Exclusivamente Instagram y LinkedIn) -->
            <div>
              <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-accent-green mb-4">Social Media</h4>
              <div class="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-accent-green hover:text-ink-black hover:border-accent-green transition-all" aria-label="Instagram de Huvytas">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-accent-green hover:text-ink-black hover:border-accent-green transition-all" aria-label="LinkedIn de Huvytas">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <span data-i18n="ftCopy">© 2026 Huvytas Advertising. Todos los derechos reservados.</span>
            <span data-i18n="ftLoc">México · LATAM</span>
          </div>
        </div>
      </footer>
    `;

    // Aplica el idioma activo inmediatamente después de insertar el Footer en el DOM
    const currentLang = localStorage.getItem('siteLang') || 'es';
    if (typeof applyLanguage === 'function') {
      applyLanguage(currentLang);
    }
  }
});
