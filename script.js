


/* 6) click on a single cell, changing its color to the currently selected color */
let currentColor = document.getElementById('color-select').value;

function initialCell(cell) {
  cell.addEventListener('click', changeColor);    //change color upon clicking
  cell.classList.add('uncolored');                //give cell the class 'uncolored'
};

// focuses on changing the color of the cell
function changeColor() {
  this.style.backgroundColor = currentColor;          
  this.classList.remove('uncolored');             //remove class 'uncolored' when cell is colored
};

// currentColor is the color selected from dropdown box
function setCurrentColor(color) {
  currentColor = color;
};


/* 7) fill all uncolored cells with the currently selected color */
function setUncolored() {
    // get all cells in the table
    let allCells = document.getElementsByTagName('td');
    let allCellsList = [...allCells];
  
    // change background color of uncolored cell an remove class 'uncolored'
    uncolored.forEach(cell => {
      cell.style.backgroundColor = currentColor;
      cell.classList.remove('uncolored');
    })
  };
  

/* 8) fill all cells with the currently selected color */
// this function is similar to # 7
function setAllCurrent() {
    // get all cells in the table
    let allCells = document.getElementsByTagName('td');
    let allCellsList = [...allCells];

    // change background color of uncolored cell an remove class 'uncolored'
    uncolored.forEach(cell => {
      cell.style.backgroundColor = currentColor;
      cell.classList.remove('uncolored');
    })
};


/* 9) clear all cells/restore all cells to their original/initial color */
function clearAll() {
    // clear all cells
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];
  
    // remove class 'uncolored' / change the background color to black
    allCellsList.forEach(cell => {
      cell.style.backgroundColor = 'black';
      cell.classList.add('uncolored');
      })
    };


/* 
10) click and hold (mouseover) from a single cell (start) to a 
different cell (end) such that all affected/hovered-over cells from 
start to end change to the currently selected color
*/

// when the mouse is pressed and hover over cells, it will color the cells 
cell.addEventListener('mousedown', n => {
    coloring = true;
    };

// if the mouse is not pressed, no coloring will occur
cell.addEventListener('mouseup', n => {
  if (coloring)
    { coloring = false; };

// when coloring, set background color to currentColor and remove class 'uncolor'
cell.addEventListener("mousemove", n => {
  if (coloring) {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
    }
  });


