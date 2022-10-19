const mobileBtn = document.getElementById("menu-bar");
const exitBtn = document.getElementById("close-menu");
const aboutBtn = document.getElementById("About");
const PortfolioBtn = document.getElementById("Portifolio");
const contactBtn = document.getElementById("Contact");
const nav = document.querySelector("nav");
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
function display() {
  nav.classList.remove("menu-btn");
}

exitBtn.addEventListener("click", display);
aboutBtn.addEventListener("click", display);
PortfolioBtn.addEventListener("click", display);
contactBtn.addEventListener("click", display);
