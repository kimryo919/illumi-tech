const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const formMessage = document.querySelector("[data-form-message]");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("is-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
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

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "フォームは現在準備中です。送信先メールアドレスが決まり次第、送信機能を接続します。";
    formMessage.classList.add("is-success");
  });
}
