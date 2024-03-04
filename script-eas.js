function clearCanvas() {
    let parentDiv = document.querySelector('.canvas-container')
    let childDivs = parentDiv.querySelectorAll('div');
    childDivs.forEach(function(childDiv) {
        childDiv.remove();
    })
}

function createGroup(groupSize) {
    clearCanvas();
    let gSize = groupSize;
    for (let i = 0; i < gSize; i++) {
        createColumn(groupSize);
        console.log(i);
    }
}

function createColumn(columnSize) {
    let cSize = columnSize; 
    for (let i = 0; i < cSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = ("div-pixel");
        newDiv.textContent = (i + 1);
        let canvasContainer = document.querySelector(".canvas-container");
        canvasContainer.appendChild(newDiv);
}}

let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
});
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

function grayscaleEtch () {
let isGrayscale = true;
document.querySelector('.canvas-container').addEventListener('mousedown', (e) =>{
    if (e.target.classList.contains('div-pixel')) {
            e.target.style.backgroundColor = 'gray';
    }
});
document.querySelector('.canvas-container').addEventListener('mouseover', (e) =>{
    if (e.target.classList.contains('div-pixel')) {
            e.target.style.backgroundColor = 'gray';
    }
});

document.querySelectorAll('.div-pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = 'gray';
    });
});

document.querySelectorAll('.div-pixel').forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'gray';
    });
});
}
grayscaleEtch();

function rainbowEtch () {
    let isRainbow = true;

    document.querySelector('.canvas-container').addEventListener('mousedown', (e) =>{
        if (e.target.classList.contains('div-pixel')) {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
    });
    document.querySelector('.canvas-container').addEventListener('mouseover', (e) =>{
        if (e.target.classList.contains('div-pixel')) {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }
    });
    
    document.querySelectorAll('.div-pixel').forEach(pixel => {
        pixel.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    });
    
    document.querySelectorAll('.div-pixel').forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    });
    }

function eraserEtch () {
        let isEraser = true;
        document.querySelector('.canvas-container').addEventListener('mousedown', (e) =>{
            if (e.target.classList.contains('div-pixel')) {
                    e.target.style.backgroundColor = '';
            }
        });
        document.querySelector('.canvas-container').addEventListener('mouseover', (e) =>{
            if (e.target.classList.contains('div-pixel')) {
                    e.target.style.backgroundColor = '';
            }
        });
        
        document.querySelectorAll('.div-pixel').forEach(pixel => {
            pixel.addEventListener('mousedown', (e) => {
                    e.target.style.backgroundColor = '';
            });
        });
        
        document.querySelectorAll('.div-pixel').forEach(pixel => {
            pixel.addEventListener('mouseover', (e) => {
                    e.target.style.backgroundColor = '';
            });
        });
        }

function resetEtch() {
    createGrid(256);
    let slider = document.querySelector('.gridSlider');
    slider.value = 2;
    console.log('Canvas has been reset to default 16x16.');
}

document.querySelector('.grayscale').addEventListener('click', (e) => {
    grayscaleEtch();
});
document.querySelector('.rainbow').addEventListener('click', (e) => {
    rainbowEtch();
});
document.querySelector('.eraser').addEventListener('click', (e) => {
    eraserEtch();
});
document.querySelector('.resetAll').addEventListener('click', (e) => {
    resetEtch();
});

function createGrid(totalPixels) {
    const container = document.querySelector('.canvas-container');
    container.innerHTML = ''; // Clear any existing pixels

    const pixelsPerSide = Math.sqrt(totalPixels); // Calculate how many pixels fit on one side of the square grid
    const pixelSize = 960 / pixelsPerSide; // Calculate the size of each pixel to fit the container

    for (let i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('div-pixel');
        pixel.className = ("div-pixel");
        pixel.textContent = (i + 1);
        // Set the size of each pixel dynamically
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        container.appendChild(pixel);
    }
}

createGrid(256);
let slider = document.querySelector('.gridSlider');
slider.value = 2;

const sliderOptions = 
[9, 16, 25, 36, 49,
64, 81, 100, 121, 144,
169, 196, 225, 256, 289,
324, 361, 400, 441, 484,
529, 576, 625, 676, 729,
784, 841, 900, 961, 1024];

document.addEventListener('DOMContentLoaded', () => {
    let slider = document.querySelector('.gridSlider');
    let display = document.getElementById('sliderValue');

    slider.addEventListener('input', (e) => {
        const index = parseInt(e.target.value) - 1;
        const selectedValue = sliderOptions[index];
        display.textContent = selectedValue;
        let gridNum = selectedValue;
        console.log('Grid Size input is a perfect square. Done.', 'Pixel count:', gridNum);
        createGrid(gridNum);
    })});




/**function createDivGroup(group, gridNum) {
let group =  1;
let g = group;
let gridNum = 5;
let gN = gridNum;

for (let g = 0; g < g; g++) {
    for (let i = 0; i < gN; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = ("div-" + (i + 1));
    newDiv.textContent = (i + 1);
    let canvasContainer = document.querySelector(".canvas-container");
    canvasContainer.appendChild(newDiv);
    }
}
}
**/





/*
document.querySelector('#gridForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let gridNum = document.querySelector("#gridInput").value;
    let gridNumSqRt = Math.sqrt(gridNum);
    let isPerfectSquare = gridNumSqRt === parseInt(gridNumSqRt);
    if (isPerfectSquare) {
        console.log('Grid Size input is a square root. Done.', 'Pixel count:', gridNum);
        createGrid(gridNum);
    } else {
        console.log('Grid Size input is not a square root. Defaulting to 256 pixels / 16x16.');
        createGrid(256);
    }
}); */


/**let isDrawing = false;
document.addEventListener('mousedown', () => {
    isDrawing = true;
});
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

let pixels = document.querySelectorAll('.div.pixel');

pixels.forEach(pixel => {
    // Mouseover event
    pixel.addEventListener('mouseover', (e) => {
        if (isDrawing) { // Assuming isDrawing is defined and managed elsewhere
            e.target.style.backgroundColor = 'gray';
        }
    });

    // Mousedown event
    pixel.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = 'gray';
    });
});

/**function createGrid(cellCount) {
    const container = document.querySelector('.canvas-container');
    container.innerHTML = ''; // Clear any existing content
  
    let cellSquared= cellCount * cellCount; // Calculate the total number of cells for a square grid

    for (let i = 0; i < cellSquared; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}**/
/* 
function destroyGridContainer(divName) {
let canvasContainerRemove = document.querySelectorAll('div.' + divName);
canvasContainerRemove.forEach(function(element) {
    element.remove();
    restoreGridContainer(divName);
})}
function restoreGridContainer(divName) {
let restoreDiv = document.createElement("div");
restoreDiv.className = (divName);
document.body.appendChild(restoreDiv);
}
*/

/*

function createGroup(groupSize) {
    clearCanvas();
    let gSize = groupSize;
    for (let i = 0; i < gSize; i++) {
        let newDivGroup = document.createElement("div");
        newDivGroup.className = ("divGroup-" + (i + 1));
        let canvasContainer = document.querySelector(".canvas-container");
        canvasContainer.appendChild(newDivGroup);
        let newDiv = document.createElement("div");
        newDiv.className = ("div-box");
        newDiv.textContent = (i + 1);
        newDivGroup.appendChild(newDiv);
        console.log(i + 1);
    }
}

**/;