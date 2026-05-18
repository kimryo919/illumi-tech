const navToggle = document.querySelector("[data-nav-toggle]");
const sidePanel = document.querySelector("[data-side-panel]");
const altForm = document.querySelector("[data-alt-form]");
const altFormStatus = document.querySelector("[data-alt-form-status]");

if (navToggle && sidePanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = sidePanel.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  sidePanel.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement && target.hash) {
      sidePanel.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
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

if (altForm && altFormStatus) {
  altForm.addEventListener("submit", (event) => {
    event.preventDefault();
    altFormStatus.textContent = "フォームは現在準備中です。送信機能は後続工程で接続します。";
    altFormStatus.classList.add("is-success");
  });
}
