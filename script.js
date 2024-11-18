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
            titulo: 'Producto Ecológico 1',
            descripcion: 'Este producto es 100% ecológico, hecho con materiales reciclados y amigables con el medio ambiente.'
        },
        'producto-2': {
            titulo: 'Producto Ecológico 2',
            descripcion: 'Este producto es ideal para quienes buscan una opción sostenible para sus necesidades diarias.'
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