const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    hamburger.innerHTML = "X";
    hamburger.style.fontSize = "30px";
  } else {
    hamburger.innerHTML = "<span></span><span></span><span></span>";
  }
});
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
document.querySelectorAll('.lightbox-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightbox.style.display = 'flex';
    lightboxImg.src = link.href;
  });
  });
