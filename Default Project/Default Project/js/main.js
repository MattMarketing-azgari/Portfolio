// ============================================================
// Portfolio — interactions
// ============================================================

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Mobile nav toggle ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ---- Scroll reveal ----
const revealTargets = document.querySelectorAll(
  ".section__head, .card, .skill-card, .about, .contact"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// ---- Lightbox ----
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const cards = Array.from(document.querySelectorAll("[data-lightbox]"));
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const card = cards[index];
  const img = card.querySelector("img");
  const title = card.querySelector("h3")?.textContent ?? "";
  const meta = card.querySelector("figcaption p")?.textContent ?? "";
  const videoSrc = card.dataset.videoSrc || null;

  if (videoSrc) {
    lightboxImg.hidden = true;
    lightboxVideo.hidden = false;
    lightboxVideo.src = videoSrc;
  } else {
    lightboxVideo.hidden = true;
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxImg.hidden = false;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  lightboxCaption.textContent = meta ? `${title} — ${meta}` : title;

  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  document.body.style.overflow = "";
}

function stepLightbox(delta) {
  const next = (currentIndex + delta + cards.length) % cards.length;
  openLightbox(next);
}

cards.forEach((card, i) => {
  card.addEventListener("click", () => openLightbox(i));
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(i);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));

lightbox.addEventListener("click", (e) => {
  // Click on the dark backdrop (not the image or buttons) closes it
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});
