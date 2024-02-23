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

document.querySelectorAll(".tel").forEach((tel) => {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  const mask = IMask(tel, maskOptions);
});

const form = document.querySelector(".feedback__form");
const formBtn = form.querySelector("button");
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", function () {
    if (isDisabled()) formBtn.setAttribute("disabled", "disabled");
    else formBtn.removeAttribute("disabled");
  });
});
function isDisabled() {
  let isDisabled = false;
  form.querySelectorAll("input, textarea").forEach((input) => {
    const name = input.getAttribute("name");
    if (input.value.trim() == "") isDisabled = true;
    if (name == "phone" && input.value.replace(/\D/g, "").length != 11)
      isDisabled = true;
  });
  return isDisabled;
}

const modal = document.getElementById("modal-thanks");
const checkmark = document.querySelector("[data-checkmark]");
const checkmarkСircle = document.querySelector("[data-checkmark-circle]");
const checkmarkСheck = document.querySelector("[data-checkmark-check]");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const df = new FormData(document.forms.form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://technoteam.ant-agl.ru/sendForm.php");
  xhr.send(df);

  modal.classList.add("open");
  checkmark.classList.add("checkmark");
  checkmarkСircle.classList.add("checkmark__circle");
  checkmarkСheck.classList.add("checkmark__check");

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.value = "";
  });
  formBtn.setAttribute("disabled", "disabled");
});

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    modal.classList.remove("open");
    checkmark.classList.remove("checkmark");
    checkmarkСircle.classList.remove("checkmark__circle");
    checkmarkСheck.classList.remove("checkmark__check");
  });
});
