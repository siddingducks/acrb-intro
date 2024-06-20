document.addEventListener("DOMContentLoaded", (event) => {
  let elements = document.querySelectorAll(".fadeText");
  elements.forEach((el) => el.style.opacity="0");

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
    };

  function observerCallback(entries) {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = "1";
          }
      });
  }

  const observer = new IntersectionObserver(observerCallback, options);
  elements.forEach((el) => observer.observe(el));
}); 
