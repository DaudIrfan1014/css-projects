var a = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function (dets) {
  a.style.top = dets.y - 40 + "px";
  a.style.left = dets.x - 20 + "px";
});
