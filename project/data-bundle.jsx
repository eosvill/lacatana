// Data
const SERVICES = [
  { icon: 'Parking',  name: 'Estacionamiento', desc: 'Interno con espacio amplio' },
  { icon: 'Camera',   name: 'Seguridad',       desc: 'Cámaras 24/7' },
  { icon: 'Pergola',  name: 'Pérgola',         desc: 'Mesa extra larga' },
  { icon: 'Quincho',  name: 'Quincho cerrado', desc: 'Totalmente equipado' },
  { icon: 'Bath',     name: 'Baños completos', desc: 'Para invitados' },
  { icon: 'Flame',    name: 'Parrilla',        desc: 'Tradicional argentina' },
  { icon: 'Kitchen',  name: 'Cocina industrial', desc: 'Lista para tu chef' },
  { icon: 'Snow',     name: 'Freezer',         desc: 'Capacidad amplia' },
  { icon: 'Fridge',   name: 'Heladera',        desc: 'Doble puerta' },
  { icon: 'Kettle',   name: 'Pava eléctrica',  desc: 'Para el mate' },
  { icon: 'Fan',      name: 'Ventilación',     desc: 'En ambientes' },
  { icon: 'Speaker',  name: 'Bluetooth',       desc: 'Sonido para tu música' },
  { icon: 'Chair',    name: 'Mobiliario',      desc: 'Mesas, sillas y bancos' },
  { icon: 'Pool',     name: 'Piscina',         desc: '12 × 4,5 metros' },
  { icon: 'Umbrella', name: 'Livings',         desc: 'Con sombrillas' },
  { icon: 'Cake',     name: 'Candy bar',       desc: 'Espacio dedicado' },
];

const EVENT_TYPES = [
  { name: 'Cumpleaños adultos e infantiles', tag: 'Para todas las edades', desc: 'Desde infantiles hasta los 50 — la quinta se adapta a la energía que tu festejo necesita.', img: window.__resources.tileCandybar },
  { name: 'Casamientos', tag: 'Civil y celebración',   desc: 'Ceremonia al aire libre, recepción bajo la pérgola y fiesta hasta las últimas. Capacidad ideal hasta 120.', img: window.__resources.tileMesas },
  { name: 'Quince años', tag: 'Tu noche soñada', desc: 'Espacio amplio para vals, candy bar dedicado y rincones perfectos para las fotos del recuerdo.', img: window.__resources.tileQuince },
];

const GALLERY = [
  { id: 1, src: window.__resources.tilePiscina, label: 'La pileta principal',  cat: 'espacios', cls: 'gi-1' },
  { id: 2, src: window.__resources.tileMesas,   label: 'Pérgola y mesas',      cat: 'espacios', cls: 'gi-2' },
  { id: 3, src: window.__resources.tileJardin,  label: 'Parque y jardín',      cat: 'espacios', cls: 'gi-3' },
  { id: 4, src: window.__resources.tileQuincho, label: 'Quincho equipado',     cat: 'quincho',  cls: 'gi-4' },
  { id: 5, src: window.__resources.tileQuince,  label: 'Quinceaños',           cat: 'eventos',  cls: 'gi-5' },
  { id: 6, src: window.__resources.tilePiscina, label: 'Piscina 12 × 4,5 m',   cat: 'espacios', cls: 'gi-6' },
  { id: 7, src: window.__resources.tileCandybar,label: 'Candy bar de eventos', cat: 'eventos',  cls: 'gi-7' },
  { id: 8, src: window.__resources.heroFinal,   label: 'Atardecer en la quinta',cat: 'espacios', cls: 'gi-8' },
  { id: 9, src: window.__resources.tileQuincho, label: 'Parrilla del quincho', cat: 'quincho',  cls: 'gi-9' },
];

const HERO_TAGS = ['Cumpleaños', 'Casamientos', 'Aniversarios', 'Baby Shower', 'Quinceaños', 'Reuniones familiares'];

window.SERVICES = SERVICES;
window.EVENT_TYPES = EVENT_TYPES;
window.GALLERY = GALLERY;
window.HERO_TAGS = HERO_TAGS;
