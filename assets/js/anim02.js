window.onload = function(){

gsap.registerPlugin(ScrollTrigger);

const svgElement = document.querySelector("#anim02");

let scaleFactor = 1.03;
let growing = false;
let interval;

// Fonction pour augmenter la taille progressivement
const startGrowing = () => {
  if (!growing) {
    growing = true;
    interval = setInterval(() => {
      scaleFactor += 0.005; // Augmente la taille progressivement
      gsap.to(svgElement, {
        scale: scaleFactor,
        duration: 0.3,
        ease: "linear"
      });
    }, 20); // Augmente toutes les 20ms
  }
};

// Fonction pour réinitialiser la taille
const resetSize = () => {
  growing = false;
  clearInterval(interval); // Stoppe l'augmentation
  scaleFactor = 1; // Réinitialiser la taille de départ du growing
  gsap.to(svgElement, {
    scale: 1, // Retour à la taille normale
    duration: 1.5,
    ease: "power1.out"
  });
};


svgElement.addEventListener("mouseenter", () => {
  startGrowing();
});

svgElement.addEventListener("mouseleave", () => {
  resetSize();
});



// Animation au scroll
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top -20%",
    end: "bottom bottom",       
    scrub: 2,
    toggleActions: "play none none reverse"
  }
});

tl2.to("#anim02", {
  scale: 4,
  x: 300,
  y: 50,
  duration: 2,
  ease: "power1.inOut"
});

tl2.to("#anim02", {
  scale: 1, 
  x: -200,  
  y: 100,
  duration: 3,
  ease: "power1.inOut"
}, ">");

gsap.to("#anim02", {
  scrollTrigger: {
    trigger: ".section03",
    start: "bottom top",   
    end: "bottom top", 
    scrub: 0.1, 
  },
  opacity: 0,
});

};