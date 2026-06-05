const images = [
  { src: "assets/actividades.jpeg", alt: "Actividades" },
  { src: "assets/horarios.jpeg", alt: "Horarios" },
  { src: "assets/abonos.jpeg", alt: "Abonos" },
];

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lbImg.src = images[currentIndex].src;
  lbImg.alt = images[currentIndex].alt;
  lbPrev.disabled = currentIndex === 0;
  lbNext.disabled = currentIndex === images.length - 1;
  lightbox.classList.add("lightbox--active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("lightbox--active");
  document.body.style.overflow = "";
}

document.querySelectorAll(".seccion__imagen").forEach((img) => {
  img.addEventListener("click", () =>
    openLightbox(Number(img.dataset.index)),
  );
});

document.getElementById("lb-close").addEventListener("click", closeLightbox);

lbPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentIndex > 0) openLightbox(currentIndex - 1);
});

lbNext.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentIndex < images.length - 1) openLightbox(currentIndex + 1);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("lightbox--active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbPrev.click();
  if (e.key === "ArrowRight") lbNext.click();
});
