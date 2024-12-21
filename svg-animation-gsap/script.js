let initialPath = "M 10 290 Q 750 290 1490 290";

let newPath = "M 10 290 Q 750 0 1490 290";

const string = document.querySelector("#string");

string.addEventListener("mousemove", function (event) {
  newPath = `M 10 290 Q ${event.x} ${event.y} 1490 290`;
  gsap.to("svg path", {
    attr: { d: newPath },
    duration: "0.9",
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (event) {
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: "1.5",
    ease: "elastic.out(1,0.2)",
  });
});
