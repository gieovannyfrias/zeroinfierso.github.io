/* ==========================================
   SISTEMA DE COMPONENTES PREMIUM UNIFICADOS
   ========================================== */

(function() {
  // 1. INYECCIÓN DE ESTILOS CSS DE ALTA GAMA
  const estilosPremium = `
    :root {
      --bg-nav: rgba(10, 10, 12, 0.75);
      --oro-maison: #d4af37;
      --oro-luz: #f5e6a5;
      --txt-blanco: #ffffff;
      --txt-muted: #8e8e93;
      --fnt-editorial: 'Cinzel', serif;
      --fnt-ui: 'Montserrat', sans-serif;
      --borde-luxe: rgba(255, 255, 255, 0.03);
    }

    /* --- ESTILOS DEL HEADER --- */
    .navbar-premium {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 8%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      z-index: 9998;
      background: var(--bg-nav);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--borde-luxe);
      font-family: var(--fnt-ui);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .navbar-premium.scrolled {
      padding: 15px 8%;
      background: rgba(7, 7, 8, 0.95);
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .nav-logo-premium {
      font-family: var(--fnt-editorial);
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--txt-blanco);
      text-decoration: none;
      z-index: 10001; /* Queda visible por encima del menú móvil */
    }
    .nav-logo-premium span {
      color: var(--oro-maison);
      font-weight: 300;
    }
    .nav-enlaces-premium {
      display: flex;
      gap: 30px;
    }
    .nav-link-premium {
      color: var(--txt-muted);
      text-decoration: none;
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      padding-bottom: 4px;
      transition: color 0.3s ease;
    }
    .nav-link-premium:hover, .nav-link-premium.active {
      color: var(--txt-blanco);
    }
    .nav-link-premium::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 1px;
      background-color: var(--oro-maison);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .nav-link-premium:hover::after, .nav-link-premium.active::after {
      width: 100%;
      left: 0;
    }

    /* --- BOTÓN MENÚ HAMBURGUESA (MÓVIL) --- */
    .menu-toggle-premium {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 22px;
      height: 16px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10001; /* Queda encima de la cortina lateral */
    }
    .menu-toggle-premium span {
      width: 100%;
      height: 1px;
      background-color: var(--txt-blanco);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      transform-origin: left center;
    }

    /* Transformación animada a la "X" de cierre */
    .menu-toggle-premium.abierto span:nth-child(1) {
      transform: rotate(45deg) translate(2px, 0px);
      background-color: var(--oro-maison);
    }
    .menu-toggle-premium.abierto span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    .menu-toggle-premium.abierto span:nth-child(3) {
      transform: rotate(-45deg) translate(2px, 1px);
      background-color: var(--oro-maison);
    }

    /* --- ESTILOS DEL FOOTER --- */
    .footer-premium-maison {
      background-color: #050506;
      border-top: 1px solid var(--borde-luxe);
      padding: 80px 8% 40px 8%;
      font-family: var(--fnt-ui);
      margin-top: auto;
      box-sizing: border-box;
      width: 100%;
    }
    .footer-grid-luxe {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 60px;
      max-width: 1600px;
      margin: 0 auto;
    }
    .footer-slogan-luxe {
      color: var(--txt-muted);
      font-size: 13px;
      line-height: 1.8;
      margin-top: 20px;
      font-weight: 300;
      max-width: 320px;
    }
    .footer-col-luxe h4 {
      font-family: var(--fnt-editorial);
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 25px;
      color: var(--txt-blanco);
      font-weight: 400;
    }
    .footer-col-luxe a {
      display: block;
      color: var(--txt-muted);
      text-decoration: none;
      font-size: 13px;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
      font-weight: 300;
      transition: color 0.3s;
    }
    .footer-col-luxe a:hover {
      color: var(--oro-maison);
    }
    .footer-derechos-luxe {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.01);
      text-align: center;
    }
    .footer-derechos-luxe p {
      font-size: 11px;
      color: #444446;
      letter-spacing: 1px;
      text-transform: math-auto;
    }
    .footer-bottom {
                max-width: 1300px;
                margin: 50px auto 0 auto;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.03);
                display: flex;
                align-items: normal;
                color: white;
                font-size: 13px;
              justify-content: center;
            }
            .footer-bottom-right { text-align: right; display: flex; flex-direction: column; align-items: flex-end;  color: white;
                font-size: 13px;}

    /* ==========================================
       ADAPTACIÓN MÓVIL EXCLUSIVA (BREAKPOINT)
       ========================================== */
    @media (max-width: 900px) {
      .navbar-premium {
        padding: 20px 6%;
      }
      .navbar-premium.scrolled {
        padding: 15px 6%;
      }
      
      /* Activar botón hamburguesa */
      .menu-toggle-premium {
        display: flex;
      }

      /* Transformar barra de enlaces en un Sidebar Lateral */
      .nav-enlaces-premium {
        position: fixed;
        top: 0;
        right: -100%; /* Oculto completamente a la derecha */
        width: 300px;
        height: 100vh;
        background: rgba(10, 10, 12, 0.96);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border-left: 1px solid var(--borde-luxe);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 15% 0 15%;
        gap: 35px;
        z-index: 10000;
        transition: right 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Mostrar la barra lateral al activarse */
      .nav-enlaces-premium.activo {
        right: 0;
        box-shadow: -20px 0 60px rgba(0, 0, 0, 0.8);
      }

      .nav-link-premium {
        font-size: 16px; /* Tipografía más grande y cómoda para uso táctil */
        letter-spacing: 3px;
        width: 100%;
      }
      
      .nav-link-premium::after {
        bottom: -6px;
      }

      /* Reestructurar Grilla del Footer a 1 columna */
      .footer-grid-luxe {
        grid-template-columns: 1fr;
        gap: 45px;
      }
      .footer-bottom {
                    flex-direction: column;
                    gap: 15px;
                    text-align: center;
                }
.footer-bottom-right {
text-align: center !important; align-items: center; 
} 
    }
  `;

  // Insertar estilos en la sección head
  const elementoEstilo = document.createElement("style");
  elementoEstilo.textContent = estilosPremium;
  document.head.appendChild(elementoEstilo);

  // 2. LÓGICA DE INYECCIÓN DE COMPONENTES E INTERACCIONES
  document.addEventListener("DOMContentLoaded", function() {
    
    // INYECCIÓN DEL HEADER DE LUJO
    const contenedorHeader = document.getElementById("header-premium-target");
    if (contenedorHeader) {
      const paginaActual = window.location.pathname.split("/").pop() || "/index";
      
      contenedorHeader.innerHTML = `
        <header class="navbar-premium">
          <a href="https://zeroinfierso.gieovannyfrias.com" class="nav-logo-premium">Zeroinfierso <span>Tienda</span></a>
          
          <!-- Botón de 3 líneas vertical / Hamburguesa móvil -->
          <button class="menu-toggle-premium" id="btn-menu-luxe" aria-label="Abrir Menú">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="nav-enlaces-premium" id="sidebar-menu-luxe">
            <a href="https://zeroinfierso.gieovannyfrias.com" class="nav-link-premium ${paginaActual === 'https://zeroinfierso.gieovannyfrias.com' ? 'active' : ''}">Inicio</a>
            <a href="/Acerca_de" class="nav-link-premium ${paginaActual === '/Acerca_de' ? 'active' : ''}">Acerca de</a>
            <a href="/Catalogo" class="nav-link-premium ${paginaActual === '/Catalogo' ? 'active' : ''}">Catálogo</a>
            <a href="/Ofertas" class="nav-link-premium ${paginaActual === '/Ofertas' ? 'active' : ''}">Ofertas</a>
            <a href="/Estreno" class="nav-link-premium ${paginaActual === '/Estreno' ? 'active' : ''}">Estreno</a>
            <a href="/Contacto" class="nav-link-premium ${paginaActual === '/Contacto' ? 'active' : ''}">Contacto</a>
          </nav>
        </header>
      `;
      
      // Selectores del menú móvil
      const botonMenu = document.getElementById("btn-menu-luxe");
      const sidebarMenu = document.getElementById("sidebar-menu-luxe");

      // Control del disparo del Menú Lateral Táctil
      if (botonMenu && sidebarMenu) {
        botonMenu.addEventListener("click", function(e) {
          e.stopPropagation();
          botonMenu.classList.toggle("abierto");
          sidebarMenu.classList.toggle("activo");
        });

        // Cerrar el menú automáticamente si se hace clic afuera del área del cristal
        document.addEventListener("click", function(e) {
          if (!sidebarMenu.contains(e.target) && !botonMenu.contains(e.target)) {
            botonMenu.classList.remove("abierto");
            sidebarMenu.classList.remove("activo");
          }
        });
      }

      // Control interactivo del Scroll en el Header
      window.addEventListener("scroll", function() {
        const nav = document.querySelector(".navbar-premium");
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    }

    // INYECCIÓN DEL FOOTER EDITORIAL
    const contenedorFooter = document.getElementById("footer-premium-target");
    if (contenedorFooter) {
      contenedorFooter.innerHTML = `
        <footer class="footer-premium-maison">
          <div class="footer-grid-luxe">
            <div class="footer-col-luxe">
              <a href="https://zeroinfierso.gieovannyfrias.com" class="nav-logo-premium">Zeroinfierso <span>Tienda</span></a>
              <p class="footer-slogan-luxe">Plataforma digital que opera como tienda multilínea, ofreciendo artículos para el hogar, moda, deportes, electrónica, videojuegos y etc en linea.</p>
            </div>
            <div class="footer-col-luxe">
              <h4>Soporte tecnico</h4>
          <a href="/Centro_ayuda">Centro de Ayuda</a>
           <a href="/Estado_servicio">Estado del Servicio</a>
            <a href="/Preguntas_frecuentes">Preguntas Frecuentes (FAQ)</a>
            <a href="/Reportar_error">Reportar un Error</a>
            </div>
            <div class="footer-col-luxe">
              <h4>Legal y privacidad</h4>
              <a href="/Terminos_condiciones">Términos y Condiciones</a>
              <a href="/Politicas_privacidad">Política de Privacidad</a>
              <a href="/Aviso_cookies">Aviso de Cookies</a>
              <a href="/Derecho_consumidor">Derechos del Consumidor</a>
            </div>
          </div>
<!-- Bloque Inferior Extra: Redes, Métodos de Pago y Seguridad -->
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <p>Disponible todos los pagos linea.</p>
                        <!-- Redes Sociales con Iconos Originales -->
                   <div class="payment-gateways" style="display: flex; gap: 16px; align-items: center; margin-top: 15px;justify-content: center;">
    <!-- Visa Icon Premium -->
    <svg width="38" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg-payment-icon" title="Visa"><path d="M2 12h20"/><path d="M20 12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><circle cx="12" cy="12" r="2"/></svg>
    
    <!-- Mastercard Icon Premium -->
    <svg width="38" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg-payment-icon" title="Mastercard"><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/></svg>
    
    <!-- PayPal Icon Premium -->
    <svg width="38" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg-payment-icon" title="PayPal"><path d="M20 12c0-4.418-4.03-8-9-8s-9 3.582-9 8 4.03 8 9 8c1.472 0 2.854-.314 4.084-.865L20 20v-8z"/></svg>
    
    <!-- Apple Pay Icon Premium -->
    <svg width="38" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg-payment-icon" title="Apple Pay"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 10V6"/><path d="M12 14v4"/><path d="M10 12h4"/></svg>
</div>

                    </div>
                    
                    <div class="footer-bottom-right">
                        <!-- Texto Informativo de Seguridad -->
                        <div class="security-text">
                            <i class="fas fa-lock"></i> Conexión segura
                        </div>
                        <!-- Pasarelas de Pago con Iconos Oficiales -->
                    <div class="footer-socials" style="margin-top: 15px; display: flex; gap: 20px; justify-content: flex-start;">
    <!-- Instagram SVG Premium -->
    <a href="https://www.instagram.com/zeroinfierso/" aria-label="Instagram" target="_blank" rel="noopener" class="svg-social-link">
        <svg width="22" height="22" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
    
    <!-- TikTok SVG Premium -->
    <a href="https://www.tiktok.com/@zeroinfierso/" aria-label="TikTok" target="_blank" rel="noopener" class="svg-social-link">
        <svg width="22" height="22" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    </a>
    
    <!-- YouTube SVG Premium -->
    <a href="https://www.youtube.com/@zeroinfierso/" aria-label="YouTube" target="_blank" rel="noopener" class="svg-social-link">
        <svg width="22" height="22" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
    </a>
    
    <!-- X (Twitter) SVG Premium -->
    <a href="https://x.com/zeroinfierso/" aria-label="X (Twitter)" target="_blank" rel="noopener" class="svg-social-link">
        <svg width="20" height="20" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
    </a>
</div>       
          <div class="footer-derechos-luxe">
            <p>© 2026 Zeroinfierso. Todos los derechos reservados.</p>
          </div>
        </footer>
      `;
    }
  });
})();