// Initializing the counter value
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let cL = e.currentTarget.classList;
    if (cL.contains("decrease")) {
      count--;
    } else if (cL.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
