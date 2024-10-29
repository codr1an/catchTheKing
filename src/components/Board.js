function fillBoard() {
  // Create a 5x5 board filled with null values initially
  let board = Array(5)
    .fill(null)
    .map(() => Array(5).fill(null));

  // Define the numbers and their frequencies
  const values = {
    1: 7,
    2: 4,
    3: 5,
    4: 5,
    5: 3,
    k: 1,
  };

  // Get all the positions in the 5x5 grid
  let positions = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      positions.push([i, j]);
    }
  }

  // Shuffle the positions board randomly
  positions.sort(() => Math.random() - 0.5);

  // Fill the board according to the value frequencies
  for (let [value, count] of Object.entries(values)) {
    for (let i = 0; i < count; i++) {
      const [row, col] = positions.pop();
      board[row][col] = value;
    }
  }

  return board;
}

function displayBoard(board) {
  const boardContainer = document.getElementById("boardContainer");
  boardContainer.innerHTML = ""; // Clear previous board if any

  const table = document.createElement("table");

  for (let row of board) {
    const tr = document.createElement("tr");
    for (let cell of row) {
      const td = document.createElement("td");
      td.textContent = ""; // Initially empty
      td.onclick = () => handleCellClick(td, cell); // Pass cell reference to the handler
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  boardContainer.appendChild(table);
}

function handleCellClick(td, value) {
  td.textContent = value; // Reveal the value
  td.classList.add("revealed"); // Add class for styling
  alert(`You clicked on: ${value}`); // Optional alert
}

// Generate the board and display it
let board = fillBoard();
displayBoard(board);

fillSelectMenu();
let selectedCard = 0;
