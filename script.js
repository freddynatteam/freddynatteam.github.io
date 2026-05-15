/* =========================
   PARTICLE GENERATOR
========================= */

const particlesContainer = document.getElementById("particles");

// Tạo particle background
for(let i = 0; i < 50; i++){

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";

  particle.style.animationDuration =
    5 + Math.random() * 10 + "s";

  particle.style.opacity = Math.random();

  particle.style.width =
    particle.style.height =
    Math.random() * 4 + "px";

  particlesContainer.appendChild(particle);
}

/* =========================
   FADE-IN SCROLL ANIMATION
========================= */

const fadeElements =
document.querySelectorAll(".fade-section");

function checkFade(){

  fadeElements.forEach(el => {

    const top =
    el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }

  });
}

window.addEventListener("scroll", checkFade);

checkFade();

/* =========================
   EASTER EGG
========================= */

const logo = document.getElementById("logo");

const secretMessage =
document.getElementById("secret-message");

let clickCount = 0;

// Khi bấm logo 5 lần
logo.addEventListener("click", () => {

  clickCount++;

  if(clickCount >= 5){

    secretMessage.classList.add("show");

    // Reset sau 3 giây
    setTimeout(() => {

      secretMessage.classList.remove("show");

    }, 3000);

    clickCount = 0;
  }
});

/* =========================
   RANDOM GLITCH FLASH
========================= */

// Tạo hiệu ứng nháy glitch ngẫu nhiên
setInterval(() => {

  document.body.style.filter =
  "brightness(1.15)";

  setTimeout(() => {

    document.body.style.filter =
    "brightness(1)";

  }, 100);

}, 6000);
