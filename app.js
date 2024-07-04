let points = localStorage.getItem("points") || 0;
const clickImage = document.getElementById("clickImg");
const scoreDisplay = document.getElementById("points");

scoreDisplay.textContent = points;

clickImage.addEventListener("click", () => {
  points++;
  scoreDisplay.textContent = points;
  localStorage.setItem("points", points);
});


