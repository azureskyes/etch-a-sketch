

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
    event.preventDefault(); // Corrected method call with parentheses
    let gridNum = document.querySelector("#gridInput").value; // Assuming you have an input with id="gridSize"
    console.log('Grid Size:', gridNum); // Corrected variable reference
});


function gridCreate(gridSize) {

}
let gridGroup = 5;
let gridNum = 5;
let g = gridNum;

for (let i = 0; i < g; i++) {
    let newDivGroup = document.createElement("div");
    newDivGroup.className = ("divGroup-" + gridGroup )
    let newDiv = document.createElement("div");
    newDiv.className = ("div-" + (i + 1));
    newDiv.textContent = (i + 1);
    let canvasContainer = document.querySelector(".canvas-container");
    canvasContainer.appendChild(newDiv);
}