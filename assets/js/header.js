const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section02",
      start: "top 10%",
      end: "top 30%",       
      scrub: 2,
      toggleActions: "play none none reverse"
    }
  });
  
  tl3.to("header", {
    opacity: 1,
    duration: 2,
    ease: "power1.out"
  });