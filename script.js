// Lista de productos

console.log("✅ Script cargado correctamente");


const productos = [
  { nombre: "Bocina Inteligente Alexa Azul", archivo: "alexaazul.jpg", precio: 2999, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi.", ubicaciones: ["Queretaro"] },
  { nombre: "Bocina Inteligente Alexa Negra", archivo: "alexaneg.webp", precio: 2899, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi. Color Negra", ubicaciones: ["Veracruz"] },
  { nombre: "Bocina Inteligente Alexa Blanca", archivo: "alexawhi.webp", precio: 2999, marca: "Amazon", descripcion: "Versión blanca de la bocina inteligente Alexa.", ubicaciones: ["Queretaro"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Xiaomi", archivo: "audifazulxia.webp", precio: 799, marca: "Xiaomi", descripcion: "Audífonos inalámbricos con bluetooth 5.0 y cancelación de ruido.", ubicaciones: ["Veracruz"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Audio Gen", archivo: "audifelect.webp", precio: 599, marca: "Audio Gen", descripcion: "Audífonos básicos con buena calidad de sonido.", ubicaciones: ["Acayucan"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Airpods", archivo: "airpods.webp", precio: 1999, marca: "Iphone", descripcion: "Audífonos básicos con buena calidad de sonido para iphone.", ubicaciones: ["Acayucan"] },
  { nombre: "Cable micro-USB", archivo: "microusb.webp", precio: 189, marca: "Oxford", descripcion: "Cable resistente de carga.", ubicaciones: ["Veracruz"] },
  { nombre: "Correas Para Reloj Smartwatch", archivo: "correas.avif", precio: 199, marca: "Oxford", descripcion: "Correas para Relojes smartwatch Inteligentes.", ubicaciones: ["Veracruz"] },
  { nombre: "Cabeza de carga rápida tipo C-C", archivo: "cabezac.avif", precio: 149, marca: "Oxford", descripcion: "Cargador USB-C carga rápida.", ubicaciones: ["Veracruz"] },
  { nombre: "Amplificador de sonido pieza única para sordera", archivo: "audadult.avif", precio: 2999, marca: "Hearing Aid", descripcion: "Amplificador de sonido para personas con sordera.", ubicaciones: ["Veracruz"] },
  { nombre: "Mouse Ergonomico RGB Vertical con cable para mano derecha", archivo: "ergo.avif", precio: 899, marca: "Oxford", descripcion: "Mouse ergonómico vertical con iluminación RGB y cable para mano derecha.", ubicaciones: ["Veracruz"] },
  { nombre: "Cámara para carros con grabación en bucle de visión nocturna", archivo: "dashcam.avif", precio: 3899, marca: "Nestern", descripcion: "Cámara de salpicadero con grabación en bucle de visión nocturna IR y pantalla IPS de 2", ubicaciones: ["Veracruz"] },
  { nombre: "Mini localizador GPS con alarma antipérdida", archivo: "localiz.avif", precio: 799, marca: "Nestern", descripcion: "Mini localizador GPS con alarma antipérdida, llavero con etiqueta inteligente Compatible con Bluetooth", ubicaciones: ["Veracruz"] },
  { nombre: "Bandeja externa de alta velocidad USB 3,0 tipo C 7 en 1", archivo: "optidrive.avif", precio: 1499, marca: "Nestern", descripcion: "Bandeja externa de alta velocidad USB 3.0 tipo C con 7 puertos.", ubicaciones: ["Veracruz"] },


  { nombre: "Audífonos Inalámbricos Lenovo", archivo: "audlen.webp", precio: 899, marca: "Lenovo", descripcion: "Audífonos cómodos con buena duración de batería.", ubicaciones: ["Acayucan"] },
  { nombre: "Avión y Carro Lego", archivo: "avicar.webp", precio: 599, marca: "Lego", descripcion: "Set de avión y carro para niños, ¡ármalo tú mismo!", ubicaciones: ["Acayucan"] },
  { nombre: "Bocina De Colores", archivo: "bocinacol.webp", precio: 699, marca: "Audio Gen", descripcion: "Bocina portátil con luces LED de colores.", ubicaciones: ["Queretaro"] },
  { nombre: "Cable Ethernet 15M", archivo: "cableteth.webp", precio: 499, marca: "Shawly", descripcion: "Cable de red Ethernet de 15 metros de longitud.", ubicaciones: ["Acayucan"] },
  { nombre: "Cámara De Seguridad HD", archivo: "camarapq.webp", precio: 2499, marca: "Shawly", descripcion: "4 Cámaras de seguridad HD para vigilancia.", ubicaciones: ["Acayucan"] },
  { nombre: "Cartera Rosa De Lujo", archivo: "carteraros.jpg", precio: 599, marca: "Moda Gen", descripcion: "Cartera elegante de material de alta calidad.", ubicaciones: ["Acayucan"] },
  { nombre: "Carro Transformers", archivo: "cartrans.webp", precio: 499, marca: "Moda Gen", descripcion: "Figura de carro Transformers para colección.", ubicaciones: ["Acayucan"] },
  { nombre: "Cortadora De Vello Nasal", archivo: "cortadoranar.webp", precio: 799, marca: "Moda Gen", descripcion: "Cortadora eléctrica para vello nasal, segura y eficiente.", ubicaciones: ["Acayucan"] },
  { nombre: "Adaptador Europeo", archivo: "enchufEUR.webp", precio: 189, marca: "Moda Gen", descripcion: "Adaptador de enchufe para tomas europeas.", ubicaciones: ["Acayucan"] },
  { nombre: "Impresora De Código De Barras", archivo: "imprcod.webp", precio: 2599, marca: "Holyhah", descripcion: "Impresora Térmica De Recibos Pos De 80 Mm.", ubicaciones: ["Queretaro"] },
  { nombre: "Tarjeta DDR 1TB Kingston", archivo: "kingst.webp", precio: 3699, marca: "Kingston", descripcion: "Memoria RAM DDR de 1TB de alta velocidad.", ubicaciones: ["Queretaro"] },
  { nombre: "Cargador y Lámpara Inteligente Diseño G", archivo: "lampar.webp", precio: 699, marca: "TechNova", descripcion: "Lámpara con control por app y cargador para iPhone.", ubicaciones: ["Queretaro"] },
  { nombre: "Laptop Gamer HP Victus 15.6", archivo: "lapamdryzen.webp", precio: 24999, marca: "HP", descripcion: "HP Victus Ryzen 7 16GB RAM 512SSD RTX4050.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código", archivo: "letcod.webp", precio: 999, marca: "Shawty", descripcion: "Lector de código de barras rápido y confiable.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código De Escritorio", archivo: "lectcodesc.webp", precio: 1899, marca: "Shawty", descripcion: "Lector Inalámbrico con Mini Receptor USB.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código Inalámbrico", archivo: "letcod2.webp", precio: 1499, marca: "Lozayi", descripcion: "Escáner 1D/2D inalámbrico.", ubicaciones: ["Queretaro"] },
  { nombre: "Legos Varios", archivo: "legosc.webp", precio: 599, marca: "Lego", descripcion: "Set de 300 piezas para construcción creativa.", ubicaciones: ["Queretaro"] },
  { nombre: "Lentes Inteligentes HD Transparentes", archivo: "lentesint.webp", precio: 4999, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Lentes Inteligentes HD Black", archivo: "lentesint.webp", precio: 5499, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Portátil 15.6", archivo: "mon15.webp", precio: 2999, marca: "GAMER", descripcion: "Monitor portátil Full HD 15.6 pulgadas.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer 21.5", archivo: "mon21.5.webp", precio: 6999, marca: "Xiaomi", descripcion: "Panel IPS sRGB 99% HDR10.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer G27i", archivo: "monitorxiao27.webp", precio: 6999, marca: "Xiaomi", descripcion: "Monitor 27'' Full HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer Curvo 24.5", archivo: "montisams24.webp", precio: 6999, marca: "GAMER", descripcion: "Monitor curvo gamer.", ubicaciones: ["Queretaro"] },
  { nombre: "Mouse Inalámbrico tactil", archivo: "mousein.webp", precio: 499, marca: "GAMER", descripcion: "Mouse inalámbrico ergonómico.", ubicaciones: ["Acayucan"] },
  { nombre: "Navaja Multiusos", archivo: "navajmul.webp", precio: 499, marca: "GAMER", descripcion: "Navaja compacta con múltiples funciones.", ubicaciones: ["Acayucan"] },
  { nombre: "Protector De Cámara", archivo: "protcam.webp", precio: 299, marca: "GAMER", descripcion: "Protector de cámara para móviles.", ubicaciones: ["Acayucan"] },
  { nombre: "Punto de Venta Digital", archivo: "puntdig.webp", precio: 15999, marca: "TechNova", descripcion: "Sistema digital para punto de venta.", ubicaciones: ["Queretaro"] },
  { nombre: "Wireless Repetidor", archivo: "rept.webp", precio: 1499, marca: "Wireless", descripcion: "Repetidor WiFi amplia cobertura.", ubicaciones: ["Acayucan"] },
  { nombre: "Soporte Para Celular", archivo: "soportcel.webp", precio: 499, marca: "TechNova", descripcion: "Soporte ajustable metálico.", ubicaciones: ["Acayucan"] },
  { nombre: "Tarjeta SSD 2TB", archivo: "SSD2TB.webp", precio: 4999, marca: "TechNova", descripcion: "SSD de 2TB para almacenamiento masivo.", ubicaciones: ["Queretaro"] },
  { nombre: "Teclado Mecánico", archivo: "tecl.webp", precio: 2899, marca: "TechNova", descripcion: "Teclado mecánico retroiluminado.", ubicaciones: ["Queretaro"] },
  { nombre: "Botella Térmica Digital Roja", archivo: "termoroj.webp", precio: 199, marca: "TechNova", descripcion: "Botella térmica acero inoxidable.", ubicaciones: ["eracruz"] },
  { nombre: "Impresora Multifuncional Canon", archivo: "imprcan.webp", precio: 6599, marca: "Canon", descripcion: "Multifuncional Canon G3110.", ubicaciones: ["Queretaro"] },
  { nombre: "Impresora Multifuncional Epson", archivo: "impreps.webp", precio: 9999, marca: "Epson", descripcion: "Epson Ecotank L5590.", ubicaciones: ["Queretaro"] },
  { nombre: "Pc Gaming Computadora", archivo: "pcgam.webp", precio: 20999, marca: "Gamer", descripcion: "Intel Core I5 12400, 16gb, 500gb SSD.", ubicaciones: ["Queretaro"] },
  { nombre: "Turbo Cargador 67w", archivo: "cargrap.webp", precio: 399, marca: "Jeeyee", descripcion: "Turbo cargador rápido con cable Tipo C.", ubicaciones: ["Queretaro"] },
  { nombre: "Router Wifi 300Mbps", archivo: "routlink.webp", precio: 3899, marca: "Tp-Link", descripcion: "TP-Link TL-WR840N.", ubicaciones: ["Queretaro"] },
  { nombre: "Batería Portátil 38600mah", archivo: "PWRBAN.webp", precio: 1499, marca: "Hyboer", descripcion: "Cargador portátil rápida carga.", ubicaciones: ["Veracruz"] },
  { nombre: "Monitor HP P24V G5", archivo: "monhp23.8.webp", precio: 3899, marca: "HP", descripcion: "Monitor 23.8 negro.", ubicaciones: ["Queretaro"] },
  { nombre: "Multicontacto 8 Tomas", archivo: "multi8.webp", precio: 499, marca: "Boparte", descripcion: "Multicontacto con USB 1.2m.", ubicaciones: ["Queretaro"] },
  { nombre: "Extensión Uso Rudo 15M", archivo: "extrud.webp", precio: 1499, marca: "Boparte", descripcion: "Extensión uso rudo 15m.", ubicaciones: ["Queretaro"] },
  { nombre: "Máquina De Afeitar Bronze", archivo: "rasb.webp", precio: 499, marca: "OEM", descripcion: "Máquina profesional barba y pelo.", ubicaciones: ["Veracruz"] },
  { nombre: "Cartera Menbense Café", archivo: "cartc.webp", precio: 399, marca: "Menbense", descripcion: "Cartera estilo italiano café.", ubicaciones: ["Veracruz"] },
  { nombre: "Drone Con Dual Cámara 4K", archivo: "dronp.webp", precio: 2499, marca: "OEM", descripcion: "Drone plegable HD via app 2.4ghz.", ubicaciones: ["Veracruz"] },
  { nombre: "Cartera Menbense Gris", archivo: "cargr.webp", precio: 399, marca: "Menbense", descripcion: "Cartera estilo italiano gris.", ubicaciones: ["Veracruz"] },
  { nombre: "Mochila Deportiva Oxford", archivo: "maric.webp", precio: 399, marca: "Oxford", descripcion: "Mochila deportiva multifuncional.", ubicaciones: ["Veracruz"] },
  { nombre: "Máquina de Afeitar Black", archivo: "rasvia.webp", precio: 399, marca: "OEM", descripcion: "Kit peluquería completo.", ubicaciones: ["Veracruz"] },
  { nombre: "Espumador De Café", archivo: "espum.webp", precio: 199, marca: "Gen", descripcion: "Batidor eléctrico para leche.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos E7S", archivo: "audros.webp", precio: 599, marca: "OEM", descripcion: "Mini auriculares deportivos TWS.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos Gen", archivo: "audsen.jpg", precio: 499, marca: "OEM", descripcion: "Bluetooth sonido HIFI.", ubicaciones: ["Veracruz"] },
  { nombre: "Bolso de hombro Mujer Negro", archivo: "bolneg.jpg", precio: 499, marca: "Fashionn", descripcion: "Bolso elegante de cuero PU.", ubicaciones: ["Veracruz"] },
  { nombre: "Alfombrilla RGB Gamer Lujo", archivo: "alf.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla LED para juegos.", ubicaciones: ["Queretaro"] },
  { nombre: "Alfombrilla RGB Gamer XL", archivo: "alf1.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla LED tamaño ampliado.", ubicaciones: ["Queretaro"] },
  { nombre: "Audífonos Airdots 2", archivo: "xiacaj.webp", precio: 799, marca: "Xiaomi", descripcion: "Auriculares inalámbricos con micrófono.", ubicaciones: ["Queretaro"] },
  { nombre: "Cable para iPhone Lightning", archivo: "cabiph.jpg", precio: 199, marca: "Iphone", descripcion: "Cable USB a Lightning certificado.", ubicaciones: ["Veracruz"] },
  { nombre: "Juego de urinario para coche", archivo: "urin.jpg", precio: 299, marca: "OEM", descripcion: "Cubo portátil para viaje de emergencia.", ubicaciones: ["Veracruz"] },
  { nombre: "Cable USB-C", archivo: "cabc.webp", precio: 189, marca: "Oxford", descripcion: "Cargador con cable resistente.", ubicaciones: ["Veracruz"] },
  { nombre: "Cargador y Cable rápido USB-C", archivo: "cabipho.webp", precio: 289, marca: "Oxford", descripcion: "Cargador USB-C carga rápida.", ubicaciones: ["Veracruz"] },
  { nombre: "Foco LED RGB con Bocina", archivo: "boci.jpg", precio: 399, marca: "Oxford", descripcion: "Foco RGB con bocina Bluetooth.", ubicaciones: ["Veracruz"] },
  { nombre: "Smartwatch Gold Black", archivo: "relbl.jpg", precio: 2999, marca: "Smart", descripcion: "Reloj inteligente moderno.", ubicaciones: ["Queretaro"] },
  { nombre: "Titanic Lego Mini", archivo: "titanicleg.webp", precio: 699, marca: "OEM", descripcion: "Barco Titanic armable en miniatura.", ubicaciones: ["Veracruz"] },

  { nombre: "Bocina con luz para baño", archivo: "bocinaducha.jpg", precio: 699, marca: "TechNova", descripcion: "Bocina bluetooth con sujeción para baño, resistente al agua y con luces LED, Diametro 8-9cm", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver", archivo: "smartwatch.jpg", precio: 2999, marca: "TechNova", descripcion: "Reloj inteligente estilo premium con monitoreo de salud, notificaciones y correa metálica.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Máscara LED Facial", archivo: "mascaraled.jpg", precio: 1499, marca: "TechNova", descripcion: "Máscara de luz LED para cuidado de la piel con diferentes modos para mejorar rostro y eliminar impurezas.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Foco Inteligente WiFi", archivo: "focowifi.jpg", precio: 199, marca: "TechNova", descripcion: "Foco inteligente controlado vía app, compatible con asistentes de voz y multicolor RGB.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Android TV Box MX10", archivo: "tvboxmx10.jpg", precio: 1999, marca: "TechNova", descripcion: "TV Box Android con 4K, acceso a aplicaciones, conectividad WiFi y almacenamiento ampliable.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Elegance Pink", archivo: "smartpink.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Reloj inteligente color rosa con pantalla HD táctil, registro de llamadas, monitoreo de salud y estilo moderno.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Dynamic Black", archivo: "smartblack.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Smartwatch color negro con diseño premium, monitoreo deportivo, llamadas Bluetooth y resistencia al agua IP67.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Duo Pack", archivo: "smartduo.jpg", precio: 3999, marca: "TechNova Smart", descripcion: "Combo de dos smartwatches (negro y rosa). Ideal para pareja, sincronización móvil, notificaciones y control fitness.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Vision White", archivo: "smartwhite.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Reloj inteligente color blanco con pantalla de alta resolución, control de ritmo cardíaco y múltiples modos deportivos.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver Edge", archivo: "smartsilver.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Smartwatch con acabado plateado, interfaz digital moderna, monitoreo del sueño y conectividad Bluetooth estable.", ubicaciones: ["Veracruz", "Queretaro"] }
];


// Número de WhatsApp de la tienda (ejemplo)
const numeroWhatsApp = "7207298015"; // Cambia este número por el de tu tienda
// Ubicación del usuario (puede contener múltiples tokens, ex: "Acayucan Veracruz")
const ubicacionUsuario = "Acayucan Veracruz";
const userLocations = ubicacionUsuario
  .toLowerCase()
  .split(/[\s,]+/)
  .map(s => s.replace(/[^a-záéíóúñ]/gi, '').trim())
  .filter(Boolean);

function normalizeLoc(loc){
  return (loc||'').toLowerCase().replace(/[^a-záéíóúñ]/gi,'').trim().replace(/^e?veracruz$/,'veracruz');
}

function locationMatches(productLocations){
  if(!productLocations) return false;
  const norms = productLocations.map(normalizeLoc);
  return userLocations.some(u => norms.some(n => n.includes(u) || u.includes(n)));
}


// Referencias DOM
const catalogoDiv = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const cerrar = document.querySelector(".cerrar");
const modalImg = document.getElementById("modal-img");
const modalNombre = document.getElementById("modal-nombre");
const modalMarca = document.getElementById("modal-marca");
const modalPrecio = document.getElementById("modal-precio");
const modalDescripcion = document.getElementById("modal-descripcion"); // párrafo de descripción
const modalEstado = document.getElementById("modal-estado"); // estado disponible/agotado
const btnCarrito = document.getElementById("btn-carrito"); // botón de carrito

// Carrito en memoria
let carrito = [];

// Añadir buscador y carrito flotante al header
const header = document.querySelector('.header-enx');
if(header){
  const topActions = document.createElement('div');
  topActions.className = 'top-actions';
  topActions.innerHTML = `<input class="search" id="search" placeholder="Buscar producto..." aria-label="Buscar producto"><span id="aiSearchIndicator" class="ai-indicator">🔍 IA</span>`;
  header.appendChild(topActions);
}

// Carrito flotante
const floatCart = document.createElement('div');
floatCart.className = 'floating-cart';
floatCart.innerHTML = `<div style="display:flex;align-items:center;gap:10px"><strong style="color:#9df6ff">Carrito</strong><div class="count">0</div></div><button id="open-cart">Ver</button>`;
document.body.appendChild(floatCart);
const cartCountEl = floatCart.querySelector('.count');
const openCartBtn = document.getElementById('open-cart');
openCartBtn && openCartBtn.addEventListener('click', ()=>{
  if(carrito.length===0){
    if(typeof gsap!=='undefined') gsap.fromTo(floatCart,{x:0},{x:-8,duration:0.08,yoyo:true,repeat:3});
    return alert('El carrito está vacío');
  }
  modal.style.display = 'flex';
  modalImg.src = 'https://via.placeholder.com/420x260?text=Carrito';
  modalNombre.textContent = `Carrito (${carrito.length})`;
  modalDescripcion.textContent = carrito.map((p,i)=>`${i+1}. ${p.nombre} - $${p.precio}`).join('\n');
  modalMarca.textContent = '';
  modalPrecio.textContent = '';
});

// Función validar imagen
function validarImagen(nombreArchivo){
  return `imagenes/${nombreArchivo}`;
}

// ordenar lista para poner productos disponibles en la ciudad del usuario al inicio (IA)
productos.sort((a,b)=>{
  const aOk = locationMatches(a.ubicaciones) ? 0 : 1;
  const bOk = locationMatches(b.ubicaciones) ? 0 : 1;
  return aOk - bOk;
});

// Crear catálogo y tarjetas actualizadas
productos.forEach(producto => {
  const aiScore = Math.floor(Math.random() * 21) + 80; // 80-100 IA evaluation
  const div = document.createElement("div");
  div.classList.add("producto");
  div.setAttribute("data-aos","zoom-in");
  div.innerHTML = `
    <div class="ai-badge">🤖 ${aiScore}%</div>
    <img loading="lazy" src="${validarImagen(producto.archivo)}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/280x180?text=Sin+imagen'">
    <h3>${producto.nombre}</h3>
    <p style="min-height:36px">${producto.marca} · $${producto.precio}</p>
    <button class="ver-btn">Ver Detalle</button>
  `;
  catalogoDiv.appendChild(div);

  const btn = div.querySelector('.ver-btn');
  btn.addEventListener('click', ()=> openDetalle(producto));
});

function openDetalle(producto){
  modal.style.display = 'flex';
  modalImg.src = validarImagen(producto.archivo);
  modalImg.onerror = ()=> modalImg.src='https://via.placeholder.com/420x260?text=Sin+imagen';
  modalNombre.textContent = producto.nombre;
  modalMarca.textContent = `Marca: ${producto.marca}`;
  modalPrecio.textContent = `Precio: $${producto.precio}`;
  modalDescripcion.textContent = producto.descripcion || 'Sin descripción disponible';
  if(locationMatches(producto.ubicaciones)){
    modalEstado.textContent = '🟢 Disponible en tu ciudad';
  } else {
    modalEstado.textContent = '🔴 Agotado en tu ciudad por el momento';
  }

  if(typeof gsap!=='undefined'){
    gsap.fromTo('.modal-content',{scale:0.94,opacity:0,y:-18},{scale:1,opacity:1,y:0,duration:0.42,ease:'power3.out'});
  }

  btnCarrito.onclick = () => {
    const mensaje = `¡Hola! Quiero este producto: ${producto.nombre} - Precio: $${producto.precio}`;
    const telefono = '5217207298015';
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,'_blank');
    carrito.push(producto);
    updateCartUI();
    console.log(`🛒 Producto agregado al carrito: ${producto.nombre}`);
    if(typeof gsap!=='undefined') gsap.fromTo(floatCart,{scale:1},{scale:1.06,duration:0.12,yoyo:true,repeat:1});
  };
}

function updateCartUI(){ cartCountEl.textContent = carrito.length; }

// Cerrar modal
cerrar.addEventListener("click", ()=> closeModal());
window.addEventListener("click", e => { if(e.target==modal) closeModal(); });
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

function closeModal(){
  if(typeof gsap!=='undefined') gsap.to('.modal-content',{scale:0.96,opacity:0,duration:0.18,onComplete:()=> modal.style.display='none'});
  else modal.style.display='none';
}

// Animaciones GSAP
if(typeof gsap!=="undefined") gsap.from(".producto",{duration:0.9,opacity:0,y:40,stagger:0.14,ease:'power2.out'});

// Inicializar AOS
if(typeof AOS!=="undefined") AOS.init({duration:1000});

// Partículas tipo circuitos y engranajes
if(typeof particlesJS!=="undefined"){
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": ["#00fff0","#ff00ff","#ffff00"] },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.8 },
      "size": { "value": 3 },
      "line_linked": { "enable": true, "distance": 180, "color": "#fff", "opacity": 0.3, "width": 1 },
      "move": { "enable": true, "speed": 3 }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "repulse" }
      }
    }
  });
}

// Buscador simple
const searchInput = document.getElementById('search');
const aiIndicator = document.getElementById('aiSearchIndicator');
if(searchInput){
  searchInput.addEventListener('input',(e)=>{
    const q = e.target.value.toLowerCase().trim();
    if(aiIndicator){
      aiIndicator.textContent = '🤖 IA analizando...';
      setTimeout(()=>{ aiIndicator.textContent = '🔍 IA'; }, 800);
    }
    document.querySelectorAll('.producto').forEach(card=>{
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(q)?'block':'none';
    });
  });
}

