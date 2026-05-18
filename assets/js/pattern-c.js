const menuButton = document.querySelector("[data-menu-button]");
const globalNav = document.querySelector("[data-global-nav]");
const form = document.querySelector("[data-pattern-c-form]");
const formMessage = document.querySelector("[data-pattern-c-message]");

if (menuButton && globalNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "フォームは現在準備中です。送信先メールアドレスが決まり次第、送信機能を接続します。";
    formMessage.classList.add("is-success");
  });
}
