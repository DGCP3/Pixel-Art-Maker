const colorPicker = document.getElementById("colorPicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");

function makeGrid(e) {
  e.preventDefault();
  table.innerHTML = ""; 
  for (let column = 1; column <= inputHeight.value; column++) {
    const newRow = createElement("tr", "", column);
    table.appendChild(newRow);
    for (let row = 1; row <= inputWidth.value; row++) {
      const cell = createElement("td", row, "");
      cell.style.background = "white";
      cell.addEventListener("click", colorChanger);
      document.getElementsByClassName(column)[0].appendChild(cell);
    }
  }
}
const button = document.getElementById("submit");
button.addEventListener("click", makeGrid);
function colorChanger(e) {
  e.target.style.background === "white"
    ? (e.target.style.background = colorPicker.value)
    : (e.target.style.background = "white");
}

function createElement(elementType, elementId, elementClass) {
  const element = document.createElement(elementType);
  if (elementId) element.id = elementId;
  if (elementClass) element.className = elementClass;
  return element;
}
