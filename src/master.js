const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const main = document.querySelector("main");
const overlay = document.querySelector("main>div");

let flag = 1;
openMenu.addEventListener("click", function () {
  if (flag % 2) {
    openMenu.classList.remove("minimized");
    closeMenu.classList.remove("hidden");
    overlay.classList.add("overlay");
  }
  flag++;
});
closeMenu.addEventListener("click", function () {
  if (!(flag % 2)) {
    openMenu.classList.add("minimized");
    closeMenu.classList.add("hidden");
    overlay.classList.remove("overlay");
  }
  flag++;
});
