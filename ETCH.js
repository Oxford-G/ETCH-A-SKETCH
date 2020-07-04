const container = document.querySelector("#container")

const writeUpContainer = document.createElement("div")
writeUpContainer.className = "writeUpContainer"
container.appendChild(writeUpContainer)

const firstTitle = document.createElement("h1")
firstTitle.className = "firstTitle"
firstTitle.innerHTML = "<h4>ETCH A SKETCH</h4>"
writeUpContainer.appendChild(firstTitle)

const inputText = document.createElement("input")
inputText.type = "submit"
inputText.value = "CREATE NEW GRID HERE"
inputText.className = "inputText"
writeUpContainer.appendChild(inputText)

const secondTitle = document.createElement("h1")
secondTitle.className = "secondTitle"
secondTitle.innerHTML = "<h1>THIRD PROJECT</h1>"
writeUpContainer.appendChild(secondTitle)

const gridContainer = document.createElement("div")
gridContainer.className = "gridContainer"
container.appendChild(gridContainer)

const newKey = document.querySelector(".inputText")
const gridContainerTwo = document.querySelector(".gridContainer")
const secondTitleTwo = document.querySelector(".secondTitle")

creatGrid = () => {
    for(let i = 0; i < 256; i++) {
        const grid = document.createElement("div")
        grid.classList.add("sound")
        gridContainer.appendChild(grid)
    }
} 


function creating() {
    let gridSize = parseInt(prompt('pls put a number')) 
    gridContainer.innerHTML = ""
    gridContainer.style.setProperty(
        "grid-template-columns",
        `repeat(${gridSize}, 2fr)`
        );
    gridContainer.style.setProperty(
        "grid-template-rows",
        `repeat(${gridSize}, 2fr)`
        );

        for(let i = 0; i < gridSize * gridSize; i++) {
            let gridTwo = document.createElement("div")
            gridTwo.classList.add("sound")
            gridContainer.appendChild(gridTwo)
        }

    secondTitleTwo.innerHTML = "<h3>THIS IS YOUR GRID</h3>"
}


const square = document.querySelector(".gridContainer");
square.addEventListener("mouseover", function(event) {
event.target.classList.replace("sound", "color");
});

newKey.addEventListener("click", creating)
creatGrid()
