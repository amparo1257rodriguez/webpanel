  // Nombre del panel en nav
  var navPanelName = document.getElementById('nav-panel-name');
  if (navPanelName) {
    navPanelName.textContent = cfg.nombrePanel;
  }
// main.js: Aplica la configuración de config.js a la web
window.addEventListener('DOMContentLoaded', function() {
  const cfg = window.WEBPANEL_CONFIG;
  if (!cfg) return;

  // Colores
  document.documentElement.style.setProperty('--color-letra', cfg.colorLetra);
  document.documentElement.style.setProperty('--color-fondo', cfg.colorFondo);
  document.documentElement.style.setProperty('--color-detalle', cfg.colorDetalle);
    document.documentElement.style.setProperty('--color-titulo', cfg.colorTitulo);
    document.documentElement.style.setProperty('--color-subtitulo', cfg.colorSubtitulo);

  // Logo y nombre en nav
    // Asignar color a títulos y subtítulos
    var heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      heroTitle.style.color = cfg.colorTitulo;
    }
    var navTitle = document.getElementById('nav-title');
    if (navTitle) {
      navTitle.style.color = cfg.colorTitulo;
    }
    var footerTitle = document.getElementById('footer-title');
    if (footerTitle) {
      footerTitle.style.color = cfg.colorSubtitulo;
    }
    var heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) {
      heroDesc.style.color = cfg.colorSubtitulo;
    }
  var navLogo = document.getElementById('nav-logo');
  if (navLogo) {
    navLogo.src = cfg.logo;
    navLogo.alt = cfg.nombrePanel;
  }
  var navTitle = document.getElementById('nav-title');
  if (navTitle) {
    navTitle.textContent = cfg.nombrePanel;
    navTitle.classList.add('nav-title-lucky');
  }
  document.getElementById('panel-title').textContent = cfg.nombrePanel;
  document.getElementById('favicon').href = cfg.logo;
  // Hero logo
  var heroLogo = document.querySelector('.hero-logo');
  if (heroLogo) {
    heroLogo.src = cfg.logo;
    heroLogo.alt = cfg.nombrePanel;
  }
  // Footer logo y nombre (puede haber más de uno con la clase)
  var footerLogos = document.querySelectorAll('.footer-logo');
  footerLogos.forEach(function(logoEl) {
    logoEl.src = cfg.logo;
    logoEl.alt = cfg.nombrePanel;
  });
  var footerTitle = document.getElementById('footer-title');
  if (footerTitle) {
    footerTitle.textContent = cfg.nombrePanel;
  }

  // WhatsApp
  const waBtn = document.getElementById('whatsapp-btn');
  waBtn.href = `https://wa.me/${cfg.whatsapp}`;
});
