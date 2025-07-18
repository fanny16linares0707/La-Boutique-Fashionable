// Mensaje emergente al cargar la página
window.onload = function () {
  alert("¡Bienvenida a Boutique Fashionable!");
};

// Efecto en productos al pasar el mouse
const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
  producto.addEventListener('mouseover', () => {
    producto.style.transform = 'scale(1.05)';
  });

  producto.addEventListener('mouseout', () => {
    producto.style.transform = 'scale(1)';
  });
});

// Obtener carrito del localStorage o crear uno nuevo
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar producto al carrito y guardarlo
function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("${producto.nombre} se ha agregado al carrito 🛒");
}

// Mostrar contenido del carrito (alerta rápida)
function verCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 🛍️");
  } else {
    const lista = carrito.map(p => "${p.nombre} - $${p.precio}").join("\n");
    alert("Productos en tu carrito:\n\n" + lista);
  }
}

// Filtrar productos por categoría
function filtrarCategoria(categoria) {
  const productos = document.querySelectorAll('.producto');

  productos.forEach(producto => {
    if (categoria === "todos") {
      producto.style.display = "block";
    } else if (producto.getAttribute("data-categoria") === categoria) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}

// Mostrar productos en contenedor de carrito
const verCarritoBtn = document.getElementById('ver-carrito');
const carritoContenedor = document.getElementById('carrito-contenedor');
const listaCarrito = document.getElementById('lista-carrito');
const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
const contadorCarrito = document.getElementById('contador-carrito');

// Mostrar el carrito al hacer clic en el botón
verCarritoBtn.addEventListener('click', () => {
  mostrarCarrito();
  carritoContenedor.style.display = 'block';
});

// Ocultar carrito
cerrarCarritoBtn.addEventListener('click', () => {
  carritoContenedor.style.display = 'none';
});

// Mostrar productos del carrito
function mostrarCarrito() {
  listaCarrito.innerHTML = '';
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = "${producto.nombre} - $${producto.precio}";
    listaCarrito.appendChild(li);

    function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("${producto.nombre} se ha agregado al carrito 🛒");
  mostrarCarrito(); // actualiza el contador
}
  });
  contadorCarrito.textContent = carrito.length;
}