// Sections
const { useState, useEffect, useRef } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
        <a href="#top" className="nav-brand" onClick={close}>
          <img src="assets/logo.png" alt="La Catana Quinta" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#eventos">Eventos</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </nav>

      <div className={'nav-overlay ' + (open ? 'open' : '')} onClick={close}></div>
      <aside className={'nav-drawer ' + (open ? 'open' : '')}>
        <button className="nav-drawer-close" onClick={close} aria-label="Cerrar menú">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <a href="#inicio" onClick={close}>Inicio</a>
        <a href="#eventos" onClick={close}>Eventos</a>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#galeria" onClick={close}>Galería</a>
        <a href="#contacto" onClick={close}>Contacto</a>
        <a href="https://wa.me/5491159384600" target="_blank" rel="noreferrer" className="nav-drawer-cta">
          <Icon.Whatsapp /> Consultar por WhatsApp
        </a>
      </aside>
    </>);

}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <img src="assets/hero-real.jpg" alt="La Catana Quinta" />
      </div>
      <div className="hero-inner">
        <div className="hero-headline-wrap">
          <div className="hero-eyebrow">González Catán · Buenos Aires</div>
          <h1 className="hero-title">
            La Catana<br /><em>Quinta.</em>
          </h1>
          <p className="hero-sub">
            Un entorno cálido y familiar a metros de tu ciudad, donde
            los momentos especiales se convierten en recuerdos
            imborrables.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/5491159384600" className="btn btn-wa" target="_blank" rel="noreferrer">
              <Icon.Whatsapp /> Consultar fechas
            </a>
            <a href="#galeria" className="btn btn-ghost">
              Conocer la quinta <Icon.Arrow />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h4>De un vistazo</h4>
          <div className="hero-card-sub">la quinta en números</div>
          <div className="hero-card-list">
            <div className="hero-card-row"><span>Pileta</span><span>12 × 4,5 m</span></div>
            <div className="hero-card-row"><span>Capacidad</span><span>45 inv.</span></div>
            <div className="hero-card-row"><span>Quincho cerrado</span><span>Sí</span></div>
            <div className="hero-card-row"><span>Modalidad</span><span>Por día</span></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Descubrí</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>);

}

function Intro() {
  return (
    <section className="intro" id="historia">
      <div className="intro-inner">
        <p className="intro-quote">
          Una quinta pensada para reunirse, celebrar y desconectar — con la pileta, el parque y el quincho que tu evento necesita, <em>sin sorpresas y sin apuros.</em>
        </p>
        <div className="intro-stats">
          <div className="intro-stat"><strong>12×4,5</strong><span>METROS DE PILETA</span></div>
          <div className="intro-stat"><strong>45</strong><span>INVITADOS MÁX.</span></div>
          <div className="intro-stat"><strong>16+</strong><span>COMODIDADES</span></div>
          <div className="intro-stat"><strong>1</strong><span>DÍA COMPLETO</span></div>
        </div>
      </div>
    </section>);

}

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Servicios y comodidades</div>
          <h2 className="section-title">Todo lo que tu<br />evento <em>necesita.</em></h2>
        </div>
        <p className="section-lede">
          Nuestro espacio cuenta con la infraestructura completa para que
          disfrutes el día sin preocupaciones — Llegás y organizas el espacio a tu gusto.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const I = Icon[s.icon];
          return (
            <div className="service-cell" key={i}>
              <div className="service-icon"><I /></div>
              <div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            </div>);

        })}
      </div>

      <div className="pool-feature">
        <div>
          <h3>Piscina de 12 × 4,5 metros</h3>
          <p>Profundidad de 0,50 m en la parte baja y 1,80 m en la parte honda. Ideal para que disfruten grandes y chicos durante todo el día.</p>
        </div>
        <div className="pool-stats-row">
          <div className="pool-stat">
            <strong>0.50</strong>
            <span>m · BAJA</span>
          </div>
          <div className="pool-stat">
            <strong>1.80</strong>
            <span>m · HONDA</span>
          </div>
        </div>
      </div>
    </section>);

}

function Gallery() {
  const [filter, setFilter] = useState('todos');
  const filters = [
  { id: 'todos', label: 'Todo' },
  { id: 'espacios', label: 'Espacios' },
  { id: 'quincho', label: 'Quincho' },
  { id: 'eventos', label: 'Eventos' }];

  const items = filter === 'todos' ? GALLERY : GALLERY.filter((g) => g.cat === filter);
  return (
    <section className="gallery" id="galeria">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Galería</div>
          <h2 className="section-title" style={{ fontFamily: "Fraunces" }}>Conocé <em>nuestro</em><br />espacio.</h2>
        </div>
        <p className="section-lede">
          Imágenes reales de la quinta y de los eventos que hemos tenido
          el placer de albergar - el lugar habla por sí solo.
        </p>
      </div>

      <div className="gallery-filters">
        {filters.map((f) =>
        <button
          key={f.id}
          className={'filter-btn ' + (filter === f.id ? 'active' : '')}
          onClick={() => setFilter(f.id)}>
          {f.label}</button>
        )}
      </div>

      <div className="gallery-grid">
        {items.map((g) =>
        <div className={'gallery-item ' + g.cls} key={g.id}>
            <img src={g.src} alt={g.label} />
            <span className="gi-tag">{g.cat}</span>
            <span className="gi-label">{g.label}</span>
          </div>
        )}
      </div>
    </section>);

}

function Events() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cards = cardRefs.current;
      if (!cards.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      cards.forEach((card, i) => {
        if (!card) return;
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActive(closest);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (i) => {
    const el = trackRef.current;
    const card = cardRefs.current[i];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
  };

  return (
    <section className="events" id="eventos">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Tipos de eventos</div>
          <h2 className="section-title">Cada celebración<br /><em>tiene su lugar.</em></h2>
        </div>
        <p className="section-lede">
          Desde el cumpleaños íntimo hasta un casamiento, la quinta se adapta a la celebración que estás
          imaginando.
        </p>
      </div>

      <div className="events-track" ref={trackRef}>
        {EVENT_TYPES.map((e, i) =>
          <article className="event-card" key={i} ref={el => cardRefs.current[i] = el}>
            <div className="event-img"><img src={e.img} alt={e.name} /></div>
            <div className="event-body">
              <div className="event-name">{e.name}</div>
              <p className="event-desc">{e.desc}</p>
              <div className="event-foot">
                <span>{e.tag}</span>
                <div className="arrow"><Icon.Arrow /></div>
              </div>
            </div>
          </article>
        )}
      </div>

      <div className="events-dots">
        {EVENT_TYPES.map((_, i) =>
          <button
            key={i}
            className={'events-dot' + (active === i ? ' active' : '')}
            onClick={() => scrollTo(i)}
            aria-label={'Ver evento ' + (i + 1)}
          />
        )}
      </div>
    </section>);

}

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-inner">
        <div className="testimonial-mark">“</div>
        <p className="testimonial-text">
          Los chicos no salieron del agua y los grandes pudieron
          conversar tranquilos bajo la pérgola. Fue el cumple más relajado
          que organizamos en años, todo estaba perfecto.
        </p>
        <div className="testimonial-author">
          <strong>Mariana &amp; Diego</strong>
          Cumpleaños de 40 · febrero 2026
        </div>
      </div>
    </section>);

}

function InstaWall() {
  const photos = [
    'assets/insta01.jpg', 'assets/insta02.jpg', 'assets/insta03.jpg',
    'assets/insta04.jpg', 'assets/insta06.jpg', 'assets/insta07.jpg',
    'assets/insta10.jpg', 'assets/insta11.jpg', 'assets/insta12.jpg',
    'assets/insta13.jpg', 'assets/insta14.jpg', 'assets/insta16.jpg',
    'assets/insta17.jpg',
  ];
  return (
    <section className="insta-wall" id="comentarios">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Instagram</div>
          <h2 className="section-title">Lo que dicen<br /><em>de nosotros.</em></h2>
        </div>
        <p className="section-lede">
          Comentarios reales de familias que festejaron con nosotros —
          contado con sus propias palabras, directo desde Instagram.
        </p>
      </div>
      <div className="insta-collage">
        {photos.map((src, i) =>
          <div className="insta-card" key={i}>
            <img src={src} alt={'Comentario en Instagram ' + (i + 1)} />
          </div>
        )}
      </div>
      <div className="insta-cta">
        <a href="https://www.instagram.com/lacatanaquinta/" target="_blank" rel="noreferrer" className="btn btn-primary">
          <Icon.Insta /> Seguinos en Instagram
        </a>
      </div>
    </section>);

}

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">
        <div>
          <div className="section-eyebrow">Contacto</div>
          <h1 className="contact-headline">
            Hablemos de tu<br /><em>próximo evento.</em>
          </h1>
          <dl className="contact-meta">
            <div className="contact-row">
              <dt>WhatsApp</dt>
              <dd>+54 11 5938-4600<small>Respondemos a la brevedad</small></dd>
            </div>
            <div className="contact-row">
              <dt>Ubicación</dt>
              <dd>González Catán<small>Buenos Aires, Argentina</small></dd>
            </div>
            <div className="contact-row">
              <dt>Modalidad</dt>
              <dd>Alquiler por día<small>Coordinación de horarios a convenir</small></dd>
            </div>
          </dl>
        </div>

        <aside className="contact-card">
          <div className="contact-card-eyebrow">¿Listo para reservar?</div>
          <h2 className="contact-headline">Tu <em>fecha</em> te está esperando.</h2>
          <p>
            Escribinos por WhatsApp con la fecha tentativa y la cantidad
            estimada de invitados — coordinamos una visita y te
            confirmamos disponibilidad al instante.
          </p>
          <a href="https://wa.me/5491159384600" target="_blank" rel="noreferrer" className="btn btn-wa">
            <Icon.Whatsapp /> Escribir por WhatsApp
          </a>
          <div className="contact-card-socials">
            <a href="https://www.instagram.com/lacatanaquinta/" target="_blank" rel="noreferrer" className="contact-card-social">
              <Icon.Insta /> Instagram
            </a>
            <a href="https://www.tiktok.com/@lacatanaquinta" target="_blank" rel="noreferrer" className="contact-card-social">
              <Icon.TikTok /> TikTok
            </a>
            <a href="https://www.facebook.com/lacatanaquinta" target="_blank" rel="noreferrer" className="contact-card-social">
              <Icon.Facebook /> Facebook
            </a>
          </div>
          <div className="contact-card-feats">
            <span><Icon.Check /> Sin compromiso</span>
            <span><Icon.Check /> Visita con turno</span>
            <span><Icon.Check /> Respuesta rápida</span>
          </div>
        </aside>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="foot">
      <div><strong>La Catana Quinta</strong> · González Catán, BA</div>
      <div>© 2026 — Eventos por día. Hecho con cariño en Argentina.</div>
    </footer>);

}

function FloatingWA() {
  return (
    <a href="https://wa.me/5491159384600" target="_blank" rel="noreferrer" className="fab-wa" aria-label="WhatsApp">
      <Icon.Whatsapp />
      <span className="fab-wa-text">Consultar por WhatsApp</span>
    </a>);

}

Object.assign(window, { Nav, Hero, Intro, Services, Gallery, Events, Testimonial, InstaWall, Contact, Footer, FloatingWA });