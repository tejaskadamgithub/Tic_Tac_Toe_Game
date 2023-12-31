let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new_btn");
let msgContainer =document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turnO = true;
let count  = 0;

let scoreO = 0;
let scoreX = 0;


const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach ((box ) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gameDraw();
        }

    })

})   

const gameDraw = () =>{
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const  enableBoxes = () => {
    for (let box of boxes ){
        box.disabled = false;
        box.innerText = ""

    }
}

const  disableBoxes = () => {
    for (let box of boxes ){
        box.disabled = true;

    }   
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    if (winner === 'O') {
        scoreO++;
        document.getElementById('score-o').innerText = `Player O: ${scoreO}`;
    } else {
        scoreX++;
        document.getElementById('score-x').innerText = `Player X: ${scoreX}`;
    }

};
const checkWinner = () =>{
    for (let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

            let pos1val =  boxes[pattern[0]].innerText;
            let pos2val =  boxes[pattern[1]].innerText;
            let pos3val =  boxes[pattern[2]].innerText;

            
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val ===pos3val){
                    showWinner(pos1val);
                    return true;
                }

            }
    }

};

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame);
