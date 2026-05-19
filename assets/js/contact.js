const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

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

const form = document.querySelector("[data-contact-page-form]");
const message = document.querySelector("[data-contact-page-message]");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = form.checkValidity();

    if (!isValid) {
      form.reportValidity();
      return;
    }

    message.textContent =
      "フォームは現在準備中です。送信先メールアドレスが決まり次第、送信機能を接続します。";
    message.classList.add("is-success");

    const submitButton = form.querySelector("[type='submit']");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "送信完了（準備中）";
    }
  });
}
