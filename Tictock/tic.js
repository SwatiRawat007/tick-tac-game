let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0 = true;

const winPatterns=[[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("button was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;                                                                                                                                                                                                                                                                                                                                           
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false; 
        box.innerText="";                                                                                                                                                                                                                                                                                                                                          
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations , Winner is${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText);

 let Val1=boxes[pattern[0]].innerText;
 let Val2=boxes[pattern[1]].innerText;
 let Val3=boxes[pattern[2]].innerText;

 if(Val1 !=""&& Val2 !=""&& Val3 !=""){
    if(Val1=== Val2 && Val2===Val3 ){
        // console.log("winner", Val1);
        showWinner(Val1);
    }
 }

    }
};

const resetGame=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);