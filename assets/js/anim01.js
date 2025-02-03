gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);

const rotationArc1 = gsap.to("#arc1", {
    rotation: 360,
    transformOrigin: "center",
    duration: 300,
    repeat: -1,
    ease: "linear"
  });
  
  const rotationArc2 = gsap.to("#arc2", {
    rotation: -360,
    transformOrigin: "center",
    duration: 500,
    repeat: -1,
    ease: "linear"
  });
  
  const rotationArc3 = gsap.to("#arc3", {
    rotation: -360,
    transformOrigin: "center",
    duration: 250,
    repeat: -1,
    ease: "linear"
  });
  
  // Animation au scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section02",
      start: "top bottom",
      end: "top 20%",       
      scrub: 1.5,
      toggleActions: "play none none reverse"
    }
  });
  
  tl.to("#anim01", {
    rotation: -25,
    scale: 0.6,
    x: 100,
    duration: 2,
    ease: "power1.inOut"
  });
  
  // Pause/reprise des rotations
  ScrollTrigger.create({
    trigger: ".section02",
    start: "top center",
    end: "top 10%",
    scrub: 2,
    onEnter: () => {
      rotationArc1.pause();
      rotationArc2.pause();
      rotationArc3.pause();
    },
    onLeaveBack: () => {
      rotationArc1.play();
      rotationArc2.play();
      rotationArc3.play();
    }
  });
  
  // Le faire disparaître pendant section02
  gsap.to("#anim01", {
    scrollTrigger: {
      trigger: ".section02",
      start: "top 20%",   
      end: "bottom bottom", 
      scrub: 0.1, 
    },
    opacity: 0,
  });