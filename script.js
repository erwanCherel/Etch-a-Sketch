function grid(){
    for(let i=0; i<256; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'divs');
        const container = document.querySelector('#container');
        container.appendChild(div);
    }
}
grid();

const container = document.getElementById('container');
const divBlack = document.querySelector('.divs');
container.addEventListener('mouseover', (divs) => {
    divs.target.style.backgroundColor = 'black';
});
