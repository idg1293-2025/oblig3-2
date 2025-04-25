// Sources: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://github.com/aliakseix/IDG1293_15-observers/blob/master/infinite.scroll.js

const sceneElements = document.querySelectorAll(
    '.acts, .background, .beach, .changing, .corals, .cta, .ecosystems, .introduction, .plastic, .pollution, .readmore, .scroll, .sky'
); //selecting all parts

const options = {
    threshold: 0.5 
}; // the threshold for when elements are going to be visible (50% of viewport)

// the observer 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
        }
    });
}, options);
  
sceneElements.forEach(el => observer.observe(el));

// GSAP animations

// activate scrolltrigger - enables scrollbased animation
gsap.registerPlugin(ScrollTrigger);

// corals.scss - seaweed rotating back and forth
gsap.to(".corals__svg--seaweed1, .corals__svg--seaweed2, .corals__svg--seabottom", {
    rotate: 5,
    duration: 2,
    yoyo: true, //reverse the animation after complete - creates bouncing
    repeat: -1,
    ease: "sine.inOut" // the pacing, smooth movement
});

// ecosystems.scss - dolphin swimming
gsap.fromTo(".ecosystems__svg--dolphin",
    { x: -300, opacity: 0 }, // starting state, off the screen
    {
      scrollTrigger: {
        trigger: ".ecosystems",
        start: "top center",
        toggleActions: "play none none none"
      },
      x: 0, // where it moves to
      opacity: 1,
      duration: 1.8,
      ease: "power2.out" //speeds up
    }
);

// ecosystems.scss - jellfish and fishes moving up and down
gsap.to(".ecosystems__svg--jellyfish, .ecosystems__svg--green-fish, .ecosystems__svg--fishes", {
    scrollTrigger: {
      trigger: ".ecosystems",
      start: "top center"
    },
    y: "+=10", //moves element 1px up and down
    repeat: -1, //infinite
    yoyo: true, 
    duration: 2,
    ease: "sine.inOut"
});

// .scroll.scss - arrow bouncing up and down
gsap.to(".scroll__svg--arrow", {
    y: 15,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});