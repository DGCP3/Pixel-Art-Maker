const colorPicker = document.getElementById("colorPicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const submit = document.getElementById("submit");
submit.addEventListener("click", makeGrid);

function makeGrid(e) {
  e.preventDefault();
  table.innerHTML = "";
  for (let column = 0; column < inputHeight.value; column++) {
    const newRow = table.insertRow();
    for (let row = 0; row < inputWidth.value; row++) {
      const cell = newRow.insertCell();
      cell.style.background = "white";
      cell.addEventListener("click", colorChanger);
    }
  }
}

function colorChanger(e) {
  e.target.style.background === "white"
    ? (e.target.style.background = colorPicker.value)
    : (e.target.style.background = "white");
}
