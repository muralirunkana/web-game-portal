let container=document.querySelectorAll(".box");
let countt=document.querySelectorAll(".count1")
let reset=document.getElementById("Reset")
let pop=document.getElementById("pop")

let boxes=["✊","✋","✌️"];
let choose;
let score1=0
let score2=0
const normalize = s => s.replace(/\uFE0F/g, "").trim();

// let choose=boxes[Math.floor(Math.random()*boxes.length)];
container.forEach((varr)=>{
    varr.addEventListener("click",()=>{
        // console.log(varr);
        choose=boxes[Math.floor(Math.random()*boxes.length)];
        checkk(varr,varr.innerText);

            
    })
    
})
const checkk=(varr,sym)=>{
let c = normalize(choose);
let p = normalize(sym);
 console.log("Player:", p);
console.log("Computer:", c);


if(p === c){
    console.log("draw");
}
else if(
    (c === "✊" && p === "✋") ||
    (c === "✋" && p === "✌") ||
    (c === "✌" && p === "✊")
){
    console.log("you won");
    score1 += 1;
    countt[0].innerText = score1;
}
else{
    console.log("you lose");
    score2 += 1;
    countt[1].innerText = score2;
}
    }

reset.addEventListener("click",()=>{
    countt.forEach((vall)=>{
            vall.innerText=0
            score1=0
            score2=0
    })

})
pop.addEventListener("click",function(){
    let result=confirm("are you sure you want exit")
    if(result){
        window.location.replace("/back");
    }
})
