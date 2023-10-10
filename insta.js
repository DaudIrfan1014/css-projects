let cardclick = document.querySelector(".cardclick");
let icon = document.querySelector("i");
cardclick.addEventListener("dblclick", () => {
  icon.style.transform = "scale(1)";
  setTimeout(() => {
    icon.style.transform = "scale(0)";
    icon.style.opacity = 0;
  }, 1000);
});
