const btnPortfolio = document.querySelector("#btn-portfolio");
const btnEtsy = document.querySelector("#btn-etsy");
const btnContact = document.querySelector("#btn-contact")
let growing = false;
let scaleFactor = 1.03;

// Augmenter la taille progressivement
const startGrowing2 = (element) => {
  if (!growing) {
    growing = true;
    interval = setInterval(() => {
      scaleFactor += 0.01;
      gsap.to(element, {
        scale: scaleFactor,
        duration: 0.1,
        ease: "linear"
      });
    }, 20); // Augmente toutes les 20ms
  }
};

// Réinitialiser la taille
const resetSize2 = (element) => {
  growing = false;
  clearInterval(interval);
  scaleFactor = 1;
  gsap.to(element, {
    scale: 1,
    duration: 1,
    ease: "power3.out"
  });
};


[btnPortfolio, btnEtsy, btnContact].forEach((btn) => {
  btn.addEventListener("mouseenter", () => startGrowing2(btn));
  btn.addEventListener("mouseleave", () => resetSize2(btn));
});