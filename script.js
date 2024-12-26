const BRUSH = document.querySelector('.brush')
const BUCKET = document.querySelector('.bucket')
const ERASER = document.querySelector('.eraser')
const SIZEBTN = document.querySelector('.set-size-btn')
let gridSize = document.querySelector('.grid-size')
let drawingSpace = document.querySelector('.drawing-space')


SIZEBTN.addEventListener('click', () => {
    let gridboxes = gridSize.value;
    let gridCount = Math.pow(gridboxes, 2);
    let gridBoxSize = 100 / gridboxes;
    for (let i = 0; i < gridCount; i++) {
        let grids = document.createElement('div')
        grids.classList.add('gridbox')
        grids.style.width = `calc(100% / ${gridboxes})`
        grids.style.width = `calc(100% / ${gridboxes})`
        drawingSpace.appendChild(grids);
    } 
})