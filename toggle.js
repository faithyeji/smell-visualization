var toggle = document.getElementById("big-tog-container");
var toggleContainer = document.getElementById("toggle-container");
var toggleNumber;

toggle.addEventListener("click", function () {
  toggleNumber = !toggleNumber;
  if (toggleNumber) {
    toggleContainer.style.clipPath = "inset(0 0 0 50%)";
    toggleContainer.style.backgroundColor = "grey";
  } else {
    toggleContainer.style.clipPath = "inset(0 50% 0 0)";
    toggleContainer.style.backgroundColor = "black";
  }
  console.log(toggleNumber);
});
