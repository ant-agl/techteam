document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(href).offsetTop,
      behavior: "smooth",
    });
  });
});
