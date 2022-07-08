import Board from "./board.js";
let squareClicked = 0;
let divMain;
let board ; // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
// console.log(board.grid);

// Your code here
function createSquare(id){
    let div = document.createElement("div");
   
    div.setAttribute("id","square"+id);
    div.setAttribute("data-index-number",id);
    div.setAttribute("class","square");

    return div
}

const init = () => {
    let parentDiv = document.createElement("div")
    parentDiv.setAttribute("id","parentDiv")
    document.body.appendChild(parentDiv)
    divMain= document.createElement("div"); 
    divMain.setAttribute("id","mainGridId")
    divMain.setAttribute("class","mainGrid")
    parentDiv.append(createReset(parentDiv));
    parentDiv.appendChild(divMain)
    createBattleShip();
   
}
function createReset(pDiv){
    let resetButton = document.createElement("button")
    resetButton.setAttribute("class","reset")
    resetButton.value = "Reset"
    resetButton.innerText = "Reset"
    return resetButton

}
function createBattleShip (){
    board = new Board();
    for(let i=0; i<81; i++){
        let s = createSquare(i);
        divMain.appendChild(s);
        divMain.addEventListener("click",handleClick);
    }
}

const handleClick = (event) => {
    if(board.isGameOver()){ 
        let heading = document.querySelector("h3")
        heading.innerText = "YOU WIN!"
        divMain.removeEventListener("click",handleClick)        
    }
    let index = event.target.dataset.indexNumber;
    console.log(index);
    let row = Math.floor(index/9);
    let col = index%9;
    squareClicked++;
    let r = board.makeHit(row, col);
    console.log(r);
    if(r === null){
        event.target.classList.add("redBg");
    }else{
        event.target.classList.add("greenBg");
        event.target.innerText = r;
    }
    // console.log("remaining",board.isGameOver())    
}
// const createButton = ()=>{
//     let button = document.createAttribute("button")
//     button.setAttribute("class","submit")

// }

window.onload = init