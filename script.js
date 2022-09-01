let input = prompt('Grid size?');
let numberDivs = parseInt(input) * parseInt(input);


function gridSize(){
    document.querySelector('.container').style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    document.querySelector('.container').style.gridTemplateRows = `repeat(${input}, 1fr)`;
}
gridSize();

function grid(){
    // let gridSize = 
    for(let i=0; i<numberDivs; i++){
        const div = document.createElement('div');
        div.className = 'divs';
        const container = document.querySelector('.container');
        container.appendChild(div);
    }
}
grid();

const container = document.querySelector('.container');
const divHover = document.querySelector('.divs');
container.addEventListener('mouseover', (divs) => {
    divs.target.style.backgroundColor = "black";
})

