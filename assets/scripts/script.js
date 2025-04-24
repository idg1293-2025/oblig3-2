// Source: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const sceneElements = document.querySelectorAll(
    '.scene2, .scene3, .scene4'
);

const options = {
    threshold: 0.5 // When 50% of the viewport is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
        }
    });
}, options);
  
sceneElements.forEach(el => observer.observe(el));