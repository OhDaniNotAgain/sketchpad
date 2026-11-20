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

// ¿Que sigue? Que funciona el botón para ajustar la cuadricula.

resizeBtn.addEventListener("click", () => {
  const userInput = prompt("¿Cuántos cuadros por lado quieres? (1 a 100)");

  // Si el usuario presiona "Cancelar", prompt devuelve null
  if (userInput === null) return;

  const newSize = Number(userInput);

  // Validar que sea un número entero dentro del rango permitido
  if (!Number.isInteger(newSize) || newSize < 1 || newSize > 100) {
    alert("Por favor, ingresa un número entero válido entre 1 y 100.");
    return;
  }

  createGrid(newSize);
});


// Crear la cuadrícula inicial de 16x16
createGrid(16);