const colors = [
  "green",
  "red",
  "rgba(113,122,200)",
  "#f15025",
  "pink",
  "yellow",
  "orange",
  "skyblue",
  "black",
  "#FF0000",
  "#00FF00",
  "#0000FF",
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getrandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getrandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
