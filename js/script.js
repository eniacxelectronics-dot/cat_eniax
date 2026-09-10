// Lista de productos

console.log("✅ Script cargado correctamente");


const productos = [
  { nombre: "Bocina Inteligente Alexa Azul", archivo: "alexaazul.jpg", precio: 1999, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi.", ubicaciones: ["Veracruz"] },
  { nombre: "Bocina Inteligente Alexa Negra", archivo: "alexaneg.webp", precio: 1999, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi. Color Negra", ubicaciones: ["Veracruz"] },
  { nombre: "Bocina Inteligente Alexa Blanca", archivo: "alexawhi.webp", precio: 1999, marca: "Amazon", descripcion: "Versión blanca de la bocina inteligente Alexa.", ubicaciones: ["Veracruz"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Xiaomi", archivo: "audifazulxia.webp", precio: 699, marca: "Xiaomi", descripcion: "Audífonos inalámbricos con bluetooth 5.0 y cancelación de ruido.", ubicaciones: ["Veracruz"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Audio Gen", archivo: "audifelect.webp", precio: 599, marca: "Audio Gen", descripcion: "Audífonos básicos con buena calidad de sonido.", ubicaciones: ["Acayucan"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Airpods", archivo: "airpods.webp", precio: 1499, marca: "Iphone", descripcion: "Audífonos básicos con buena calidad de sonido para iphone.", ubicaciones: ["Acayucan"] },
  { nombre: "Cable micro-USB", archivo: "microusb.webp", precio: 189, marca: "Oxford", descripcion: "Cable resistente de carga.", ubicaciones: ["Veracruz"] },
  { nombre: "Correas Para Reloj Smartwatch", archivo: "correas.avif", precio: 169, marca: "Oxford", descripcion: "Correas para Relojes smartwatch Inteligentes.", ubicaciones: ["Veracruz"] },
  { nombre: "Cabeza de carga rápida tipo C-C", archivo: "cabezac.avif", precio: 119, marca: "Oxford", descripcion: "Cargador USB-C carga rápida.", ubicaciones: ["Veracruz"] },
  { nombre: "Amplificador de sonido pieza única para sordera", archivo: "audadult.avif", precio: 2699, marca: "Hearing Aid", descripcion: "Amplificador de sonido para personas con sordera.", ubicaciones: ["Veracruz"] },
  { nombre: "Mouse Ergonomico RGB Vertical con cable para mano derecha", archivo: "ergo.avif", precio: 799, marca: "Oxford", descripcion: "Mouse ergonómico vertical con iluminación RGB y cable para mano derecha.", ubicaciones: ["Veracruz"] },
  { nombre: "Cámara para carros con grabación en bucle de visión nocturna", archivo: "dashcam.avif", precio: 3199, marca: "Nestern", descripcion: "Cámara de salpicadero con grabación en bucle de visión nocturna IR y pantalla IPS de 2", ubicaciones: ["Veracruz"] },
  { nombre: "Bandeja externa de alta velocidad USB 3,0 tipo C 7 en 1", archivo: "optidrive.avif", precio: 1199, marca: "Nestern", descripcion: "Bandeja externa de alta velocidad USB 3.0 tipo C con 7 puertos.", ubicaciones: ["Veracruz"] },


  { nombre: "Audífonos Inalámbricos Lenovo", archivo: "audlen.webp", precio: 799, marca: "Lenovo", descripcion: "Audífonos cómodos con buena duración de batería.", ubicaciones: ["Acayucan"] },
  { nombre: "Bocina De Colores", archivo: "bocinacol.webp", precio: 639, marca: "Audio Gen", descripcion: "Bocina portátil con luces LED de colores.", ubicaciones: ["Queretaro", "Veracruz"] },
  { nombre: "Cable Ethernet 15M", archivo: "cableteth.webp", precio: 299, marca: "Shawly", descripcion: "Cable de red Ethernet de 15 metros de longitud.", ubicaciones: ["Acayucan"] },
  { nombre: "Cámara De Seguridad HD", archivo: "camarapq.webp", precio: 1899, marca: "Shawly", descripcion: "4 Cámaras de seguridad HD para vigilancia.", ubicaciones: ["Acayucan"] },
  { nombre: "Adaptador Europeo", archivo: "enchufEUR.webp", precio: 89, marca: "Moda Gen", descripcion: "Adaptador de enchufe para tomas europeas.", ubicaciones: ["Acayucan"] },
  { nombre: "Impresora De Código De Barras", archivo: "imprcod.webp", precio: 2599, marca: "Holyhah", descripcion: "Impresora Térmica De Recibos Pos De 80 Mm.", ubicaciones: ["Queretaro", "Veracruz"] },
  { nombre: "Tarjeta DDR 1TB Kingston", archivo: "kingst.webp", precio: 3599, marca: "Kingston", descripcion: "Memoria RAM DDR de 1TB de alta velocidad.", ubicaciones: ["Queretaro", "Veracruz"] },
  { nombre: "Cargador y Lámpara Inteligente Diseño G", archivo: "lampar.webp", precio: 699, marca: "TechNova", descripcion: "Lámpara con control por app y cargador para iPhone.", ubicaciones: ["Queretaro"] },
  { nombre: "Laptop Gamer HP Victus 15.6", archivo: "lapamdryzen.webp", precio: 22899, marca: "HP", descripcion: "HP Victus Ryzen 7 16GB RAM 512SSD RTX4050.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código", archivo: "letcod.webp", precio: 999, marca: "Shawty", descripcion: "Lector de código de barras rápido y confiable.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código De Escritorio", archivo: "lectcodesc.webp", precio: 1899, marca: "Shawty", descripcion: "Lector Inalámbrico con Mini Receptor USB.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código Inalámbrico", archivo: "letcod2.webp", precio: 1499, marca: "Lozayi", descripcion: "Escáner 1D/2D inalámbrico.", ubicaciones: ["Queretaro"] },
  { nombre: "Lentes Inteligentes HD Transparentes", archivo: "lentesint.webp", precio: 3199, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Lentes Inteligentes HD Black", archivo: "lentesint.webp", precio: 3399, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Portátil 15.6", archivo: "mon15.webp", precio: 2999, marca: "GAMER", descripcion: "Monitor portátil Full HD 15.6 pulgadas.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer 21.5", archivo: "mon21.5.webp", precio: 6999, marca: "Xiaomi", descripcion: "Panel IPS sRGB 99% HDR10.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer G27i", archivo: "monitorxiao27.webp", precio: 6999, marca: "Xiaomi", descripcion: "Monitor 27'' Full HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer Curvo 24.5", archivo: "montisams24.webp", precio: 6999, marca: "GAMER", descripcion: "Monitor curvo gamer.", ubicaciones: ["Queretaro"] },
  { nombre: "Mouse Inalámbrico tactil", archivo: "mousein.webp", precio: 499, marca: "GAMER", descripcion: "Mouse inalámbrico ergonómico.", ubicaciones: ["Acayucan"] },
  { nombre: "Protector De Cámara", archivo: "protcam.webp", precio: 299, marca: "GAMER", descripcion: "Protector de cámara para móviles.", ubicaciones: ["Acayucan"] },
  { nombre: "Punto de Venta Digital", archivo: "puntdig.webp", precio: 13999, marca: "TechNova", descripcion: "Sistema digital para punto de venta.", ubicaciones: ["Queretaro"] },
  { nombre: "Wireless Repetidor", archivo: "rept.webp", precio: 1199, marca: "Wireless", descripcion: "Repetidor WiFi amplia cobertura.", ubicaciones: ["Acayucan"] },
  { nombre: "Soporte Para Celular", archivo: "soportcel.webp", precio: 289, marca: "TechNova", descripcion: "Soporte ajustable metálico.", ubicaciones: ["Acayucan"] },
  { nombre: "Tarjeta SSD 2TB", archivo: "SSD2TB.webp", precio: 4999, marca: "TechNova", descripcion: "SSD de 2TB para almacenamiento masivo.", ubicaciones: ["Queretaro"] },
  { nombre: "Teclado Mecánico", archivo: "tecl.webp", precio: 2899, marca: "TechNova", descripcion: "Teclado mecánico retroiluminado.", ubicaciones: ["Queretaro"] },
  { nombre: "Impresora Multifuncional Canon", archivo: "imprcan.webp", precio: 6599, marca: "Canon", descripcion: "Multifuncional Canon G3110.", ubicaciones: ["Queretaro"] },
  { nombre: "Impresora Multifuncional Epson", archivo: "impreps.webp", precio: 9999, marca: "Epson", descripcion: "Epson Ecotank L5590.", ubicaciones: ["Queretaro"] },
  { nombre: "Pc Gaming Computadora", archivo: "pcgam.webp", precio: 20999, marca: "Gamer", descripcion: "Intel Core I5 12400, 16gb, 500gb SSD.", ubicaciones: ["Queretaro"] },
  { nombre: "Turbo Cargador 67w", archivo: "cargrap.webp", precio: 399, marca: "Jeeyee", descripcion: "Turbo cargador rápido con cable Tipo C.", ubicaciones: ["Queretaro"] },
  { nombre: "Router Wifi 300Mbps", archivo: "routlink.webp", precio: 2199, marca: "Tp-Link", descripcion: "TP-Link TL-WR840N.", ubicaciones: ["Queretaro"] },
  { nombre: "Batería Portátil 38600mah", archivo: "PWRBAN.webp", precio: 1299, marca: "Hyboer", descripcion: "Cargador portátil de carga rapida.", ubicaciones: ["Veracruz"] },
  { nombre: "Monitor HP P24V G5", archivo: "monhp23.8.webp", precio: 3899, marca: "HP", descripcion: "Monitor 23.8 negro.", ubicaciones: ["Queretaro"] },
  { nombre: "Multicontacto 8 Tomas", archivo: "multi8.webp", precio: 399, marca: "Boparte", descripcion: "Multicontacto con USB 1.2m.", ubicaciones: ["Queretaro"] },
  { nombre: "Extensión Uso Rudo 15M", archivo: "extrud.webp", precio: 1499, marca: "Boparte", descripcion: "Extensión uso rudo 15m.", ubicaciones: ["Queretaro"] },
  { nombre: "Drone Con Dual Cámara 4K", archivo: "dronp.webp", precio: 2199, marca: "OEM", descripcion: "Drone plegable HD via app 2.4ghz.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos E7S", archivo: "audros.webp", precio: 599, marca: "OEM", descripcion: "Mini auriculares deportivos TWS.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos Gen", archivo: "audsen.jpg", precio: 499, marca: "OEM", descripcion: "Bluetooth sonido HIFI.", ubicaciones: ["Veracruz"] },
  { nombre: "Alfombrilla RGB Gamer Lujo", archivo: "alf.webp", precio: 899, marca: "Oxford", descripcion: "Alfombrilla LED para juegos.", ubicaciones: ["Queretaro"] },
  { nombre: "Alfombrilla RGB Gamer XL", archivo: "alf1.webp", precio: 899, marca: "Oxford", descripcion: "Alfombrilla LED tamaño ampliado.", ubicaciones: ["Queretaro"] },
  { nombre: "Audífonos Airdots 2", archivo: "xiacaj.webp", precio: 899, marca: "Xiaomi", descripcion: "Auriculares inalámbricos con micrófono.", ubicaciones: ["Queretaro"] },
  { nombre: "Cable para iPhone Lightning", archivo: "cabiph.jpg", precio: 189, marca: "Iphone", descripcion: "Cable USB a Lightning certificado.", ubicaciones: ["Veracruz"] },
  { nombre: "Cable USB-C", archivo: "cabc.webp", precio: 189, marca: "Oxford", descripcion: "Cargador con cable resistente.", ubicaciones: ["Veracruz"] },
  { nombre: "Cargador y Cable rápido USB-C", archivo: "cabipho.webp", precio: 289, marca: "Oxford", descripcion: "Cargador USB-C carga rápida.", ubicaciones: ["Veracruz"] },
  { nombre: "Foco LED RGB con Bocina", archivo: "boci.jpg", precio: 299, marca: "Oxford", descripcion: "Foco RGB con bocina Bluetooth.", ubicaciones: ["Veracruz"] },
  { nombre: "Smartwatch Gold Black", archivo: "relbl.jpg", precio: 2499, marca: "Smart", descripcion: "Reloj inteligente moderno.", ubicaciones: ["Queretaro"] },
{ 
  nombre: "Dron DJI Agrícola AGRAS T20", 
  archivo: "dronagric.webp", 
  precio: "Consultar precio por WhatsApp", 
  marca: "DJI", 
  descripcion: "Dron agrícola profesional DJI AGRAS T20 para fumigación y aplicación de productos en cultivos. Incluye cargador y 4 baterías.", 
  ubicaciones: ["Acayucan"] 
},
  {
    nombre: "Dron Agrícola",
    archivo: "agri.webp",
    precio: "Consultar precio por WhatsApp",
    marca: "DJI",
    descripcion: "Dron agrícola profesional para fumigación y aplicación de productos en cultivos.",
    ubicaciones: ["Acayucan"]
  },

  { nombre: "Bocina con luz para baño", archivo: "bocinaducha.jpg", precio: 499, marca: "TechNova", descripcion: "Bocina bluetooth con sujeción para baño, resistente al agua y con luces LED, Diametro 8-9cm", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver", archivo: "smartwatch.jpg", precio: 2499, marca: "TechNova", descripcion: "Reloj inteligente estilo premium con monitoreo de salud, notificaciones y correa metálica.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Foco Inteligente WiFi", archivo: "focowifi.jpg", precio: 189, marca: "TechNova", descripcion: "Foco inteligente controlado vía app, compatible con asistentes de voz y multicolor RGB.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Android TV Box MX10", archivo: "tvboxmx10.jpg", precio: 1999, marca: "TechNova", descripcion: "TV Box Android con 4K, acceso a aplicaciones, conectividad WiFi y almacenamiento ampliable.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Elegance Pink", archivo: "smartpink.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Reloj inteligente color rosa con pantalla HD táctil, registro de llamadas, monitoreo de salud y estilo moderno.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Dynamic Black", archivo: "smartblack.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Smartwatch color negro con diseño premium, monitoreo deportivo, llamadas Bluetooth y resistencia al agua IP67.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Duo Pack", archivo: "smartduo.jpg", precio: 3999, marca: "TechNova Smart", descripcion: "Combo de dos smartwatches (negro y rosa). Ideal para pareja, sincronización móvil, notificaciones y control fitness.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Vision White", archivo: "smartwhite.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Reloj inteligente color blanco con pantalla de alta resolución, control de ritmo cardíaco y múltiples modos deportivos.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver Edge", archivo: "smartsilver.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Smartwatch con acabado plateado, interfaz digital moderna, monitoreo del sueño y conectividad Bluetooth estable.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Consola Xbox 360 con Control", archivo: "3601.webp", precio: 4999, marca: "Xbox", descripcion: "Consola Xbox 360 negra con control inalámbrico para entretenimiento y videojuegos.", ubicaciones: ["Veracruz"] },
  { nombre: "Smartphone Android con Audífonos", archivo: "360 (2).webp", precio: 3999, marca: "One", descripcion: "Smartphone Android con pantalla de 6.56 pulgadas y audífonos inalámbricos incluidos.", ubicaciones: ["Veracruz"] },
  { nombre: "Smartphone Doogee 4G", archivo: "dodge.webp", precio: 2899, marca: "Doogee", descripcion: "Smartphone Android con conectividad 4G, cámara múltiple y batería de larga duración.", ubicaciones: ["Veracruz"] },
  { nombre: "iPhone 16e (128gb)", archivo: "iph.webp", precio: 12899, marca: "Apple", descripcion: "iPhone con diseño moderno, pantalla de alta resolución y cámara avanzada.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Micas Protectoras para Celular", archivo: "micas.png", precio: 399, marca: "Universal", descripcion: "Paquete de micas protectoras compatibles con diferentes modelos de celulares.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Motorola Moto G06", archivo: "mo.webp", precio: 3999, marca: "Motorola", descripcion: "Celular Motorola Moto G06 con pantalla amplia, cámara dual y batería de larga duración.", ubicaciones: ["Veracruz"] },
  { nombre: "Motorola Edge 60 Neo", archivo: "mott.webp", precio: 9899, marca: "Motorola", descripcion: "Smartphone Motorola Edge 60 Neo con cámara avanzada, diseño premium y conectividad 5G.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartphone Gamer W55", archivo: "w5.webp", precio: 2399, marca: "W55", descripcion: "Smartphone gamer con diseño resistente, pantalla inmersiva y funda protectora incluida.", ubicaciones: ["Veracruz"] },
  { nombre: "Xbox Series X", archivo: "xb.webp", precio: 18999, marca: "Xbox", descripcion: "Consola Xbox Series X de alto rendimiento con control inalámbrico.", ubicaciones: ["Queretaro"] },
  { nombre: "Xbox Series S 512GB", archivo: "xbo.webp", precio: 12999, marca: "Xbox", descripcion: "Consola Xbox Series S con almacenamiento SSD de 512GB y control inalámbrico.", ubicaciones: ["Queretaro"] },
  { nombre: "Xbox Series X con Caja", archivo: "xbox.webp", precio: 18999, marca: "Xbox", descripcion: "Consola Xbox Series X con acabado blanco, control inalámbrico y empaque original.", ubicaciones: ["Queretaro"] }
];

productos.forEach(producto => {
  if (producto.ubicaciones.includes("Queretaro") && !producto.ubicaciones.includes("Veracruz")) {
    producto.ubicaciones.push("Veracruz");
  }
});


// Número de WhatsApp de la tienda (ejemplo)
const numeroWhatsApp = "8343503231"; // Cambia este número por el de tu tienda
// Ubicación del usuario (puede contener múltiples tokens, ex: "Acayucan Veracruz")
const ubicacionUsuario = "Acayucan Veracruz";
const userLocations = ubicacionUsuario
  .toLowerCase()
  .split(/[\s,]+/)
  .map(s => s.replace(/[^a-záéíóúñ]/gi, '').trim())
  .filter(Boolean);

const descuentos = new Map([
  ['Audífonos Inalámbricos Bluetooth Xiaomi', 10],
  ['Correas Para Reloj Smartwatch', 15],
  ['Cabeza de carga rápida tipo C-C', 8],
  ['Mouse Ergonomico RGB Vertical con cable para mano derecha', 12],
  ['Bocina De Colores', 10],
  ['Cargador y Lámpara Inteligente Diseño G', 15],
  ['Turbo Cargador 67w', 8],
  ['Smartwatch Duo Pack', 12]
]);

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
const productCount = document.getElementById('product-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutWhatsapp = document.getElementById('checkout-whatsapp');
const cartClose = document.getElementById('cart-close');

// Carrito en memoria
let carrito = [];

// Añadir buscador y carrito flotante al header
const header = document.querySelector('.header-enx');
if(header){
  const topActions = document.createElement('div');
  topActions.className = 'top-actions';
  topActions.innerHTML = `<input class="search" id="search" placeholder="Buscar producto..."><span id="aiSearchIndicator" class="ai-indicator">🔍 IA</span>`;
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
  openCartModal();
});

// Función validar imagen
function validarImagen(nombreArchivo){
  return `imagenes/${nombreArchivo}`;
}

function getDiscount(producto){
  return descuentos.get(producto.nombre) || 0;
}

function getSalePrice(producto){
  const precio = getNumericPrice(producto.precio);
  return precio ? Math.round(precio * (1 - getDiscount(producto) / 100)) : 0;
}

function isQuotePrice(precio){
  return typeof precio === 'string';
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
  const descuento = getDiscount(producto);
  const precioFinal = getSalePrice(producto);
  const precioMarkup = isQuotePrice(producto.precio)
    ? '<div class="quote-price"><span class="quote-label">Precio personalizado</span><span class="quote-action">Solicitar cotización <b>↗</b></span></div>'
    : descuento
    ? `<div class="price-row"><span class="old-price">$${producto.precio.toLocaleString('es-MX')}</span><span class="discount-pill">-${descuento}%</span></div><strong class="sale-price">$${precioFinal.toLocaleString('es-MX')}</strong>`
    : `<strong class="sale-price regular-price">${formatPrice(producto.precio)}</strong>`;
  div.innerHTML = `
    <div class="ai-badge">SELECCIÓN ${aiScore}%</div>
    <div class="product-image"><img loading="lazy" src="${validarImagen(producto.archivo)}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/280x180?text=Sin+imagen'"></div>
    <h3>${producto.nombre}</h3>
    <p class="product-brand">${producto.marca}</p>
    <div class="card-price">${precioMarkup}</div>
    <button class="ver-btn"><span>Ver detalle</span><b>↗</b></button>
  `;
  catalogoDiv.appendChild(div);

  const btn = div.querySelector('.ver-btn');
  btn.addEventListener('click', ()=> openDetalle(producto));
});

if(productCount) productCount.textContent = productos.length;

function openDetalle(producto){
  modal.style.display = 'flex';
  const esCotizacion = isQuotePrice(producto.precio);
  btnCarrito.textContent = esCotizacion ? 'Solicitar cotización por WhatsApp' : '🛒 Agregar al carrito';
  modalImg.src = validarImagen(producto.archivo);
  modalImg.onerror = ()=> modalImg.src='https://via.placeholder.com/420x260?text=Sin+imagen';
  modalNombre.textContent = producto.nombre;
  modalMarca.textContent = `Marca: ${producto.marca}`;
  const descuento = getDiscount(producto);
  modalPrecio.innerHTML = esCotizacion
    ? '<span class="modal-quote-label">Precio personalizado</span><small class="modal-quote-note">Solicita una cotización directamente por WhatsApp</small>'
    : descuento
    ? `<span class="modal-old-price">$${producto.precio.toLocaleString('es-MX')}</span> $${getSalePrice(producto).toLocaleString('es-MX')} <small>-${descuento}%</small>`
    : `Precio: ${formatPrice(producto.precio)}`;
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
    if(esCotizacion){
      const mensaje = `Hola, me interesa solicitar cotización del producto: ${producto.nombre}.`;
      window.open(`https://wa.me/52${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank');
      return;
    }
    carrito.push(producto);
    updateCartUI();
    btnCarrito.textContent = 'Agregado al carrito';
    if(typeof gsap!=='undefined') gsap.fromTo(floatCart,{scale:1},{scale:1.06,duration:0.12,yoyo:true,repeat:1});
  };
}

function updateCartUI(){
  cartCountEl.textContent = carrito.length;
  if(!cartItems) return;

  if(carrito.length === 0){
    cartItems.innerHTML = '<p class="empty-cart">Todavía no has agregado productos.</p>';
    cartTotal.textContent = '$0';
    checkoutWhatsapp.disabled = true;
    return;
  }

  cartItems.innerHTML = carrito.map((producto, index) => `
    <article class="cart-item">
      <img src="${validarImagen(producto.archivo)}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/72x72?text=Sin+imagen'">
      <div class="cart-item-info">
        <h3>${producto.nombre}</h3>
        <span>${formatPrice(getSalePrice(producto) || producto.precio)}</span>
      </div>
      <button class="remove-item" data-index="${index}" aria-label="Eliminar ${producto.nombre}">Eliminar</button>
    </article>
  `).join('');

  const total = carrito.reduce((sum, producto) => sum + (getSalePrice(producto) || getNumericPrice(producto.precio)), 0);
  cartTotal.textContent = total ? formatPrice(total) : 'Consultar';
  checkoutWhatsapp.disabled = false;
  cartItems.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      carrito.splice(Number(button.dataset.index), 1);
      updateCartUI();
    });
  });
}

function getNumericPrice(precio){
  return typeof precio === 'number' ? precio : 0;
}

function formatPrice(precio){
  return typeof precio === 'number'
    ? `$${precio.toLocaleString('es-MX')}`
    : precio;
}

function openCartModal(){
  updateCartUI();
  cartModal.style.display = 'flex';
  cartModal.setAttribute('aria-hidden', 'false');
}

function closeCartModal(){
  cartModal.style.display = 'none';
  cartModal.setAttribute('aria-hidden', 'true');
}

checkoutWhatsapp && checkoutWhatsapp.addEventListener('click', () => {
  if(carrito.length === 0) return;
  const resumen = carrito.map((producto, index) =>
    `${index + 1}. ${producto.nombre} - ${formatPrice(producto.precio)}`
  ).join('\n');
  const total = carrito.reduce((sum, producto) => sum + (getSalePrice(producto) || getNumericPrice(producto.precio)), 0);
  const totalTexto = total ? formatPrice(total) : 'Consultar precio';
  const mensaje = `Hola, quiero realizar este pedido:\n${resumen}\nTotal estimado: ${totalTexto}`;
  window.open(`https://wa.me/5218343503231?text=${encodeURIComponent(mensaje)}`, '_blank');
});

cartClose && cartClose.addEventListener('click', closeCartModal);
cartModal && cartModal.addEventListener('click', event => {
  if(event.target === cartModal) closeCartModal();
});

// Cerrar modal
cerrar.addEventListener("click", ()=> closeModal());
window.addEventListener("click", e => { if(e.target==modal) closeModal(); });
window.addEventListener('keydown', e=>{
  if(e.key !== 'Escape') return;
  closeModal();
  if(cartModal && cartModal.style.display === 'flex') closeCartModal();
});

function closeModal(){
  if(typeof gsap!=='undefined') gsap.to('.modal-content',{scale:0.96,opacity:0,duration:0.18,onComplete:()=> modal.style.display='none'});
  else modal.style.display='none';
}

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
    let visibleProducts = 0;
    document.querySelectorAll('.producto').forEach(card=>{
      const title = card.querySelector('h3').textContent.toLowerCase();
      const isVisible = title.includes(q);
      card.style.display = isVisible ? 'block' : 'none';
      if(isVisible) visibleProducts += 1;
    });
    if(productCount) productCount.textContent = visibleProducts;
  });
}

