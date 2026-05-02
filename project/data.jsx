// Data
const SERVICES = [
  { icon: 'Parking',  name: 'Estacionamiento', desc: 'Interno con espacio amplio' },
  { icon: 'Camera',   name: 'Seguridad',       desc: 'Cámaras 24/7' },
  { icon: 'Pergola',  name: 'Pérgola',         desc: 'Mesa extra larga' },
  { icon: 'Quincho',  name: 'Quincho cerrado', desc: 'Totalmente equipado' },
  { icon: 'Bath',     name: 'Baños completos', desc: 'Dos baños completos' },
  { icon: 'Flame',    name: 'Parrilla',        desc: 'Tradicional argentina' },
  { icon: 'Kitchen',  name: 'Cocina industrial', desc: 'Lista para tu chef' },
  { icon: 'Snow',     name: 'Freezer',         desc: 'Capacidad amplia' },
  { icon: 'Fridge',   name: 'Heladera',        desc: 'Capacidad completa' },
  { icon: 'Kettle',   name: 'Pava eléctrica',  desc: 'Para el mate' },
  { icon: 'Fan',      name: 'Ventilación',     desc: 'En ambientes' },
  { icon: 'Speaker',  name: 'Bluetooth',       desc: 'Sonido para tu música' },
  { icon: 'Chair',    name: 'Livings',      desc: 'Mesas, sillas y bancos' },
  { icon: 'Pool',     name: 'Piscina',         desc: '12 × 4,5 metros' },
  { icon: 'Umbrella', name: 'Chinitos',         desc: 'Con sombrillas' },
  { icon: 'Cake',     name: 'Candy bar',       desc: 'Dos espacios dedicados' },
];

const EVENT_TYPES = [
  { name: 'Cumpleaños', tag: 'Para todas las edades', desc: 'Desde infantiles hasta adultos - la quinta se adapta a la energía que tu festejo necesita.', img: 'assets/tile-5-candybar.png' },
  { name: 'Casamientos', tag: 'Civil y celebración',   desc: 'Ceremonia al aire libre, recepción bajo la pérgola y fiesta hasta las últimas. Capacidad ideal hasta 45 personas.', img: 'assets/tile-2-mesas.png' },
  { name: 'Quinceaños', tag: 'Tu día soñado', desc: 'Espacio amplio para vals, candy bar dedicado y rincones perfectos para las fotos del recuerdo.', img: 'assets/tile-6-quince.png' },
  { name: 'Reuniones familiares', tag: 'Comparte momento unicos', desc: 'Un domingo en familia como los de antes. Parrilla, jardín, pileta y el espacio para que todos disfruten..', img: 'assets/tile-familia.png' },
  { name: 'Día de quinta', tag: 'Ideal para grupos', desc: 'Una jornada completa de 9 horas para que tu grupo se relaje. Pileta, asado y buena compañía sin apuros..', img: 'assets/tile-amigos.png' },
  { name: 'Eventos a medida', tag: 'La imaginación como límite', desc: '¿Tenés algo especial en mente? Consultanos. Trabajamos para que tu celebración sea exactamente como la imaginaste..', img: 'assets/tile-evento.png' },
];

const GALLERY = [
  // Espacios
  { id: 1,  src: 'assets/espacios-01.jpg', label: 'Vista panoramica de la pileta',      cat: 'espacios', cls: 'gi-feat' },
  { id: 2,  src: 'assets/espacios-02.jpg', label: 'Bancos exteriores',         cat: 'espacios', cls: 'gi-std'  },
  { id: 3,  src: 'assets/espacios-03.jpg', label: 'Mesas con sombrillas',         cat: 'espacios', cls: 'gi-std'  },
  { id: 4,  src: 'assets/espacios-04.jpg', label: 'Hermoso estilo colonial',        cat: 'espacios', cls: 'gi-std'  },
  { id: 5,  src: 'assets/espacios-05.jpg', label: 'Vista del parque y pileta',  cat: 'espacios', cls: 'gi-std'  },
  { id: 6,  src: 'assets/espacios-06.jpg', label: 'Vista de sombrillas y pileta',         cat: 'espacios', cls: 'gi-std'  },
  { id: 7,  src: 'assets/espacios-07.jpg', label: 'Pileta con catarata',        cat: 'espacios', cls: 'gi-std'  },
  // Quincho
  { id: 8,  src: 'assets/quincho-01.jpg',  label: 'Parrilla y horno pizzero',       cat: 'quincho',  cls: 'gi-feat' },
  { id: 9,  src: 'assets/quincho-02.jpg',  label: 'Vista de la parrilla',      cat: 'quincho',  cls: 'gi-std'  },
  { id: 10, src: 'assets/quincho-03.jpg',  label: 'Mesas y bancos',          cat: 'quincho',  cls: 'gi-std'  },
  { id: 11, src: 'assets/quincho-04.jpg',  label: 'Living interior',       cat: 'quincho',  cls: 'gi-std'  },
  { id: 12, src: 'assets/quincho-05.jpg',  label: 'Cocina industrial',       cat: 'quincho',  cls: 'gi-std'  },
  { id: 13, src: 'assets/quincho-06.jpg',  label: 'Espacio para decoración',        cat: 'quincho',  cls: 'gi-std'  },
  // Eventos
  { id: 14, src: 'assets/eventos-01.jpg',  label: 'Celebración especial',    cat: 'eventos',  cls: 'gi-feat' },
  { id: 15, src: 'assets/eventos-02.jpg',  label: 'Cumpleaños de adolescentes',              cat: 'eventos',  cls: 'gi-std'  },
  { id: 16, src: 'assets/eventos-03.jpg',  label: 'Casamientos',              cat: 'eventos',  cls: 'gi-std'  },
  { id: 17, src: 'assets/eventos-04.jpg',  label: 'Espacio para Deco exterior',              cat: 'eventos',  cls: 'gi-std'  },
  { id: 18, src: 'assets/eventos-05.jpg',  label: 'Candy bar de cumple infantil',               cat: 'eventos',  cls: 'gi-std'  },
  { id: 19, src: 'assets/eventos-06.jpg',  label: 'Cumpleaños de 15',         cat: 'eventos',  cls: 'gi-std'  },
  { id: 20, src: 'assets/eventos-07.jpg',  label: 'Momento del festejo',     cat: 'eventos',  cls: 'gi-std'  },
];

const HERO_TAGS = ['Cumpleaños', 'Casamientos', 'Aniversarios', 'Baby Shower', 'Quinceaños', 'Reuniones familiares'];

window.SERVICES = SERVICES;
window.EVENT_TYPES = EVENT_TYPES;
window.GALLERY = GALLERY;
window.HERO_TAGS = HERO_TAGS;
