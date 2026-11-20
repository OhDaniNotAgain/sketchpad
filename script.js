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

 cell.addEventListener("mouseenter", (e) => {
    const currentCell = e.currentTarget;

    if (!currentCell.dataset.color) {
      currentCell.dataset.color = getRandomRGB();
      currentCell.style.backgroundColor = currentCell.dataset.color;
    }

    let steps = Number(currentCell.dataset.steps) || 0;
    if (steps < 10) {
      steps += 1;
      currentCell.dataset.steps = steps;
      currentCell.style.opacity = steps / 10;
    }
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



//Hacia abajo son los eventos por corregir







function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

cell.addEventListener("mouseenter", (e) => {
  const currentCell = e.currentTarget;

  if (!currentCell.dataset.color) {
    currentCell.dataset.color = getRandomRGB();
    currentCell.style.backgroundColor = currentCell.dataset.color;
  }

  let steps = Number(currentCell.dataset.steps) || 0;
  if (steps < 10) {
    steps += 1;
    currentCell.dataset.steps = steps;
    currentCell.style.opacity = steps / 10;
  }
});






// Crear la cuadrícula inicial de 16x16
createGrid(16);