const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

function createGrid(size = 16) {
    container.innerHTML = "";

    const cellSize = `calc(100% / ${size})`;    
    const totalCells = size * size;

for (let i = 0; i < totalCells; i++) {
 const cell = document.createElement("div");

 cell.classList.add("grid-cell");
 cell.style.flexBasis = cellSize;
 cell.style.height = cellSize;

 cell.addEventListener("mouseenter", () => {
 cell.classList.add("drawn");
 });

 container.appendChild(cell); //La palabra corresta es append, no appened 
}
}
// Ahora funciona, pinta sobre los cuadros.


// Crear la cuadrícula inicial de 16x16
createGrid(16);