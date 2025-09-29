// Navbar con fondo dinámico al hacer scroll
/*window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar-custom");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});*/

document.addEventListener("DOMContentLoaded", function () {
  let empresasCarousel = document.querySelector("#empresasCarousel");
  let carousel = new bootstrap.Carousel(empresasCarousel, {
    interval: 6000, // 6 segundos
    ride: "carousel"
  });
});

/* ================================================= QUIENEES SOMOS- No utilizar codigo================================================
document.addEventListener("DOMContentLoaded", () => {
  const qsData = [
    { title: "Misión", description: `Ser una plataforma pedagógica...`, img: "img/mision.png" },
    { title: "Visión", description: `Posicionarnos como la principal...`, img: "img/vision.png" },
    { title: "Valores", description: `Compromiso: ...`, img: "img/valores.png" }
  ];

  let currentIndex = 0;

  const titleEl = document.getElementById("qs-title");
  const descEl = document.getElementById("qs-description");
  const imgEl = document.getElementById("qs-img");
  const textContainer = document.getElementById("qs-text");

  // Primera carga SIN fade
  function initContent(index) {
    const item = qsData[index];
    titleEl.textContent = item.title;
    descEl.textContent = item.description;
    imgEl.src = item.img;
  }

  // Cambios con fade
  function updateContent(index) {
    const item = qsData[index];
    titleEl.style.opacity = 0;
    descEl.style.opacity = 0;
    imgEl.style.opacity = 0;

    setTimeout(() => {
      titleEl.textContent = item.title;
      descEl.textContent = item.description;
      imgEl.src = item.img;

      titleEl.style.opacity = 1;
      descEl.style.opacity = 1;
      imgEl.style.opacity = 1;
    }, 300);
  }

  // Click en imagen o texto
  imgEl.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % qsData.length;
    updateContent(currentIndex);
  });
  textContainer.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % qsData.length;
    updateContent(currentIndex);
  });

  // Cambio automático cada 6s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % qsData.length;
    updateContent(currentIndex);
  }, 6000);

  // Inicializar
  initContent(currentIndex);
});
*/
/* ================= TESTIMONIOS ================= */
// Configurar cambio automático cada 7 segundos
const testimoniosCarousel = document.getElementById('testimoniosCarousel');
if (testimoniosCarousel) {
  const carousel = new bootstrap.Carousel(testimoniosCarousel, {
    interval: 7000,
    ride: "carousel"
  });
}
/* ================= ÚNETE A LA MANCHA AMARILLA ================= */
// Aquí podrías agregar un evento para el botón de registro
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#unete .btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Gracias por querer unirte a La Mancha Amarilla. Pronto te contactaremos.");
    });
  }
});
