// random color = `hsl(${Math.random() * 360}, 100%, 50%)`


function populateGrid(size){
    let container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(i=0; i<amount;i++){
        let div = document.createElement("div");
        container.insertAdjacentElement("beforeend", div);
    }

    container.addEventListener('mouseover', (div) => {
        div.target.style.backgroundColor = "#06173A";
    })
}
populateGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
      document.querySelector(".error").style.display = "none";
      populateGrid(input);
      resetGrid()
    } else {
      document.querySelector(".error").style.display = "grid";
    }
  }


function resetGrid(){
  let container = document.querySelector("#container");
  let divs = container.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

function black(){
  container.addEventListener('mouseover', (div) => {
    div.target.style.backgroundColor = "#06173A";
})}

function grey(){
  container.addEventListener('mouseover', (div) => {
    div.target.style.backgroundColor = "#4F658F";
})}

function random(){
  container.addEventListener('mouseover', (div) => {
    div.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
})
}

function eraser(){
  container.addEventListener('mouseover', (div) => {
    div.target.style.backgroundColor = "white";
})
}