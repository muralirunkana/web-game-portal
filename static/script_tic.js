let div=document.querySelectorAll(".box");
let reset=document.querySelector('#set');
let h=document.getElementById("message");
let pop=document.getElementById("pop")
eve=true;
let p;
let person=["Murali","sruthi"]
array=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
div.forEach((item)=>{
     item.addEventListener("click",()=>{
        if(eve){
            item.innerText="O";
            eve=false;
        }
        else{
            item.innerHTML="X";
            eve=true;
        }
        item.disabled=true;
        cheeck()
     });
});

let disableee = () => {
    div.forEach((val) => {
        val.disabled = true;
    });
};
const cheeck=()=>{
    for(let i of array){
        
        let a=div[i[0]].innerText;
        let b=div[i[1]].innerText;
        let c=div[i[2]].innerText;
        if(a!=""&& a===b && b===c ){
            p=i;
            

            console.log(`'${a}' you win`);
            div[i[0]].classList.add("winner");
            div[i[1]].classList.add("winner");
            div[i[2]].classList.add("winner");


            if(a==="O"){
                
                h.innerText=`${person[0]} you won the game`;
            }
            else{
                h.innerText=`${person[1]} you won the game`;
            }
            
            disableee();
            return;

        }

        
    }
}
reset.addEventListener("click",()=>{
    div.forEach((val)=>{
        val.innerText="";
        h.innerText="";
        val.disabled=false;
        for(let i of p){
            div[i].classList.remove("winner");
        }
        
    })
    eve=true
    console.clear()

})
pop.addEventListener("click",function(){
    let result=confirm("are you sure you want exit")
    if(result){
        window.location.replace("/back");
    }
})