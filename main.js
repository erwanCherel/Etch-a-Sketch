
const color1 = "#E8B75F";
const color2 = "#923655";
const white = "white";

//range slider
function setCurrentSize(newSize) {
  currentSize = newSize
}

const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
  resetGrid()
  populateGrid(currentSize)
}

function populateGrid(size){
  // determines the amount of rows and columns inside container
    let container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    // create enough divs to make a square grid
     for(i=0; i<size * size;i++){
        let div = document.createElement("div");
        container.insertAdjacentElement("beforeend", div);
    }

    // by default, when a div is hovered, color1 is applied
    container.addEventListener('mouseover', (div) => {
        div.target.style.backgroundColor = color1;
    })
}
populateGrid(16);


//clear the grid
function resetGrid(){
  let container = document.querySelector("#container");
  let divs = container.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = white));
}

//set the color used when button is clicked
function changeColor(choice){
  if(choice === 'choice1'){
    container.addEventListener('mouseover', (div) => {
      div.target.style.backgroundColor = color1;
  })
  } else if(choice === 'choice2'){
    container.addEventListener('mouseover', (div) => {
      div.target.style.backgroundColor = color2;
  })
  } else if(choice === 'choice3') {
    container.addEventListener('mouseover', (div) => {
      div.target.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 70%)`;
  })
  } else if(choice === 'choice4'){
    container.addEventListener('mouseover', (div) => {
      div.target.style.backgroundColor = white;
  })
  }
}
