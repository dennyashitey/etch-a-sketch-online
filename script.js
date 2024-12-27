const BRUSH = document.querySelector('.brush')
const BUCKET = document.querySelector('.bucket')
const ERASER = document.querySelector('.eraser')
const SIZEBTN = document.querySelector('.set-size-btn')
const TOGGLEGRIDBTN = document.querySelector('.grid-btn')
const HELPBTN = document.querySelector('.help-btn');
const HELPCONTAINER = document.querySelector('.help-container')
let colorPicker = document.querySelector('.color-picker')
let gridSize = document.querySelector('.grid-size')
let drawingSpace = document.querySelector('.drawing-space');

HELPBTN.addEventListener('click', () => {
    HELPCONTAINER.classList.toggle('help-container-visibility');
});

SIZEBTN.addEventListener('click', () => {
    drawingSpace.innerHTML = '';
    let gridboxes = gridSize.value;
    let gridCount = Math.pow(gridboxes, 2);
    for (let i = 0; i < gridCount; i++) {
        let grids = document.createElement('div')
        grids.classList.add('gridbox')
        grids.style.width = `calc(100% / ${gridboxes})`
        grids.style.width = `calc(100% / ${gridboxes})`
        drawingSpace.appendChild(grids);
        ERASER.addEventListener('click', ()=> {
            grids.addEventListener('mouseover', ()=> {
                grids.style.backgroundColor = 'white';
            })
        })
        ERASER.addEventListener('dblclick', ()=> {
            const allGrids = document.querySelectorAll('.gridbox');
            allGrids.forEach(grid => {
                grid.style.backgroundColor = 'white'
            });
        })
        BRUSH.addEventListener('click', ()=> {
            grids.addEventListener('mouseover', ()=> {
                grids.style.backgroundColor = `${colorPicker.value}`;
            })
        })
        TOGGLEGRIDBTN.addEventListener('click', ()=> {
            grids.classList.toggle('gridbox-grids')
        })
    } 
})