const navButton = document.querySelector("[data-nav-button]");
const simpleNav = document.querySelector("[data-simple-nav]");

if (navButton && simpleNav) {
  navButton.addEventListener("click", () => {
    const isOpen = simpleNav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navButton.setAttribute("aria-expanded", String(isOpen));
  });

  simpleNav.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement) {
      simpleNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      event.preventDefault();
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
