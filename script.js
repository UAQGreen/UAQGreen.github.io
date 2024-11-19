// Función para cambiar entre modo oscuro y claro
document.getElementById('modo-oscuro').addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    const icono = document.querySelector('.icono');
    if (document.body.classList.contains('modo-oscuro')) {
        icono.textContent = '🌞';  // Cambiar el ícono a sol cuando el modo oscuro está activo
    } else {
        icono.textContent = '🌙';  // Cambiar el ícono a luna cuando el modo oscuro está desactivado
    }
});

// Función para agregar productos al carrito
let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        let total = 0;
        let htmlCarrito = '<ul>';
        carrito.forEach((item, index) => {
            htmlCarrito += `
               
            <li>
                    ${item.producto} - $${item.precio}
<div class="acciones-carrito button">
                    <button class="quitar-btn" onclick="eliminarDelCarrito(${index})">Quitar</button>
                </li>
                </div>
            `;
            total += item.precio;
        });
        htmlCarrito += `</ul><p>Total: $${total}</p>`;
        contenedorCarrito.innerHTML = htmlCarrito;
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// Función para realizar la compra
function comprar() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
    } else {
        alert('Gracias por tu compra. ¡Volveremos a verte!');
        carrito = [];
        mostrarCarrito();
    }
}

// Función para mostrar un consejo aleatorio de sostenibilidad
const consejos = [
    "Reduce, reutiliza y recicla para ayudar a preservar los recursos naturales.",
    "Opta por productos de bajo consumo energético.",
    "Comienza a utilizar bolsas reutilizables para evitar plásticos de un solo uso.",
    "Compra productos locales y orgánicos para apoyar la agricultura sostenible.",
    "Apaga las luces y dispositivos electrónicos cuando no los uses para reducir el consumo de energía.",
    "Recicla correctamente y fomenta la economía circular en tu comunidad.",
    "Usa transporte público, camina o utiliza bicicleta para reducir las emisiones de carbono.",
    "Ahorra agua evitando el uso excesivo en tareas diarias."
];

function mostrarConsejos() {
    const consejoAleatorio = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById('consejo-aleatorio').innerText = consejoAleatorio;
}

// Función para mostrar más información sobre la empresa
function toggleInfoEmpresa() {
    const infoEmpresa = document.getElementById('informacion-empresa');
    if (infoEmpresa.style.display === "none") {
        infoEmpresa.style.display = "block";
    } else {
        infoEmpresa.style.display = "none";
    }
}

// Función para enviar el formulario de contacto
function enviarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    alert("Formulario enviado. ¡Gracias por contactarnos!");
    document.querySelector('.form-contacto').reset(); // Resetea los campos del formulario
}

// Función para abrir el modal y mostrar la información del producto
function abrirModal(productoId) {
    const modal = document.getElementById('modal-info');
    const titulo = document.getElementById('modal-titulo');
    const descripcion = document.getElementById('modal-descripcion');

    // Información para cada producto
    const productos = {
        'producto-1': {
            titulo: 'Estuche ecologico',
            descripcion: 'Este producto es 100% ecológico, hecho con materiales reciclados y amigables con el medio ambiente.',
        },
        'producto-2': {
            titulo: 'Cepillo de bambu',
            descripcion: 'Este producto es ideal para quienes buscan una opción sostenible para sus necesidades diarias y es 100% ecologico.'
        },
        'producto-3': {
            titulo: 'Pluma reutilizable',
            descripcion: 'Esta pluma te vendra perfecta para tus estudios estan echas de papel reciclado, pegamento, un poco de agua solamente se usa una cantidad minima y lo mejor de todo son tintas ecologicas ademas de que actualmente en nuestro apartado de contacto puedos escribirnos para sugerir mas diseños'
        },
        'producto-4': {
            titulo: 'Libreta ecologica',
            descripcion: 'Este producto es 100% ecológico, hecho con materiales reciclados. Ideal para hacer tus apuntes y darle un giro verde a tu vida ',
        },
        'producto-5': {
            titulo: 'Lapices ecologicos',
            descripcion: 'Bueno si lo tuyo no son las plumas tambien tenemos lapices, que estan hecho a base periódico reciclado,pegamento ,puntillas para lápiz recicladas, el kit incluye 3 lapices de los colores basicos',
        },
        'producto-6': {
            titulo: 'Botella reciclable',
            descripcion: 'Este producto es 100% ecológico, hecho con materiales reciclados y amigables con el medio ambiente. Ideal para que empices a tomar un poco mas de agua jajaja.',
        },
        'producto-7': {
            titulo: 'Cargador solar ecologico y casero',
            descripcion: 'Cuantas veces no te pasa que te quedas sin bateria en el campus o en la calle pero ntp por que con este cargador solar siempre tendras un cargador contigo y aprovechar estos tiempos con mucho sol ademas de que proximamente se esta trabajando en la idea dar curso para hacerlo tu mismo ',
        descripcion: 'Esta hecho a base de panel solar, cables reutilizables, una base reciclable(carton, pet,madera, etc...), cargadores que puedes reutilizar y algunos materiales que no dañan el medio ambiente y puedes conseguir hasta en una ferreteria',
        },
        'producto-8': {
            titulo: 'Limpiador multiusos natural',
            descripcion: 'Un producto ecologico a base de ingredientes naturales como vinagre, bicarbonato de sodio y aceites esenciales, ideal para limpiar diversas superficies sin químicos agresivos.',
        } 
    };

    // Asignamos los datos del producto seleccionado al modal
    titulo.textContent = productos[productoId].titulo;
    descripcion.textContent = productos[productoId].descripcion;

    // Mostramos el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal-info');
    modal.style.display = 'none';
}
// Detectar el scroll para mostrar los elementos
window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.elemento-scroll');
    elementos.forEach(function(elemento) {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            elemento.classList.add('visible');
        }
    });
});
// Abrir carrito
document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('show');
});

// Implementación de Parallax con JavaScript
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPosition = 'center ' + (offset * 0.5) + 'px';  // Cambia 0.5 para ajustar la velocidad del parallax
});

// Botón de modo oscuro
const botonModoOscuro = document.getElementById('modo-oscuro');
const logoImagen = document.getElementById('logo-imagen');

// Escucha el clic en el botón de modo oscuro
botonModoOscuro.addEventListener('click', () => {
    // Activa o desactiva la clase de modo oscuro
    document.body.classList.toggle('modo-oscuro');

    // Cambia el logo según el modo
    if (document.body.classList.contains('modo-oscuro')) {
        logoImagen.src = 'logosc.png'; // Cambia al logo oscuro
    } else {
        logoImagen.src = 'uaqgreen.jpg.png'; // Cambia al logo claro
    }
});
