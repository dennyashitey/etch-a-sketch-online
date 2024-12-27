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
    // clear the drawing space
    drawingSpace.innerHTML = '';
    let gridboxes = parseInt(gridSize.value);
    // loop to check if value of gridsize is a mult of 4
    if (gridboxes % 4 == 0 ) {
        let gridCount = Math.pow(gridboxes, 2); 
    for (let i = 0; i < gridCount; i++) {
        //create a grid 
        let grids = document.createElement('div')
        grids.classList.add('gridbox')
        grids.style.width = `calc(100% / ${gridboxes})`
        grids.style.width = `calc(100% / ${gridboxes})`
        //append the grid to the drawing space
        drawingSpace.appendChild(grids);
        // change background color of grid to white with erase tool
        ERASER.addEventListener('click', ()=> {
            grids.addEventListener('mouseover', ()=> {
                grids.style.backgroundColor = 'white';
            })
        })
        //double click event to change all grids to white
        ERASER.addEventListener('dblclick', ()=> {
            const allGrids = document.querySelectorAll('.gridbox');
            allGrids.forEach(grid => {
                grid.style.backgroundColor = 'white'
            });
        })
        //activate the color change hover
        BRUSH.addEventListener('click', ()=> {
            grids.addEventListener('mouseover', ()=> {
                grids.style.backgroundColor = `${colorPicker.value}`;
            })
        })
        // toggle grid boxes on or off
        TOGGLEGRIDBTN.addEventListener('click', ()=> {
            grids.classList.toggle('gridbox-grids')
        })
    } 
    } else {
        alert('Grid size should be a multiple of 4')
    }
    
})