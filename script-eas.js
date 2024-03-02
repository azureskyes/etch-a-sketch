

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


document.querySelector('#gridForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let gridNum = document.querySelector("#gridInput").value;
    console.log('Grid Size:', gridNum);
    createGroup(gridNum);
});


function createGroup(groupSize) {
    let gSize = groupSize;
    for (let i = 0; i < gSize; i++) {
        createColumn(groupSize);
        console.log(i)
    }
}

function createColumn(columnSize) {
    let cSize = columnSize; 
    for (let i = 0; i < cSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = ("div-" + (i + 1));
        newDiv.textContent = (i + 1);
        let canvasContainer = document.querySelector(".canvas-container");
        canvasContainer.appendChild(newDiv);
}}

function destroyGrid(className) {
let canvasContainerRemove = document.querySelectorAll('div.' + className);
canvasContainerRemove.forEach(function(element) {
    element.remove();
    let restoreDiv = document.createElement("div");
    restoreDiv.className = ("canvas-container");
    restoreDiv.appendChild(body);

})}

/****let newDivGroup = document.createElement("div");
        newDivGroup.className = ("divGroup-" + gridGroup ) */