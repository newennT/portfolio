let light = document.createElement("div");
light.classList.add("light");
document.body.prepend(light);

document.addEventListener("mousemove", (e) => {
  gsap.to(light, {
    x: e.clientX - light.offsetWidth / 2,
    y: e.clientY - light.offsetHeight / 2,
    duration: 0.1,
    ease: "power2.out"
  });
});