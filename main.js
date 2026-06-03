const images = [
  { src: "assets/actividades.jpeg", alt: "Actividades" },
  { src: "assets/horarios.jpeg", alt: "Horarios" },
  { src: "assets/abonos.jpeg", alt: "Abonos" },
];
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");

function openLightbox(index) {
  lbImg.src = images[index].src;
  lbImg.alt = images[index].alt;
  lightbox.classList.add("lightbox--active");
}

function closeLightbox() {
  lightbox.classList.remove("lightbox--active");
}

document.querySelectorAll(".seccion__imagen").forEach((img) => {
  img.addEventListener("click", () =>
    openLightbox(Number(img.dataset.index)),
  );
});

document.getElementById("lb-close").addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("lightbox--active")) return;
  if (e.key === "Escape") closeLightbox();
});
