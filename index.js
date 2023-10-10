let stranger = document.querySelector("h1");
let button = document.querySelector("button");
let flag = 0;
button.addEventListener("click", () => {
  if (flag == 0) {
    stranger.innerHTML = "Friend";
    stranger.style.color = "green";
    button.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    stranger.innerHTML = "Stranger";
    stranger.style.color = "darkred";
    button.innerHTML = "Add Friend";
    flag = 0;
  }
});
