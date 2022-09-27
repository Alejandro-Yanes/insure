const hamburgerEl = document.getElementById("hamburgerEl");
const nav = document.querySelector(".header-nav");

function test() {
  if (window.innerWidth > 900) {
    nav.style.display = "block";
    document.body.style.overflow = "auto";
  }
}

window.onresize = test;

console.log(nav);

hamburgerEl.addEventListener("click", () => {
  var aria = hamburgerEl.getAttribute("aria-expanded");

  console.log(aria);

  if (aria === "true") {
    nav.style.display = "none";
    nav.classList.remove("active");
    aria = "false";
    console.log("first statement");
    document.body.style.overflow = "auto";
    hamburgerEl.firstElementChild.setAttribute(
      "src",
      "./images/icon-hamburger.svg"
    );
  } else {
    document.body.style.overflow = "hidden";
    console.log("second statement");
    nav.style.display = "block";
    hamburgerEl.firstElementChild.setAttribute(
      "src",
      "./images/icon-close.svg"
    );

    setTimeout(() => {
      nav.classList.add("active");
    }, 100);

    aria = "true";
  }

  console.log(aria);

  hamburgerEl.setAttribute("aria-expanded", aria);
});
