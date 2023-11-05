let container=document.querySelector(".container");

for(let i=0;i<30;i++){
    let NewDiv=document.createElement("div");
    let color=randomColorGenerator();
    NewDiv.innerText=color;
    NewDiv.style.backgroundColor=color;
    container.appendChild(NewDiv);
}

function randomColorGenerator(){
    let hexcode="1234567890abcdef";
    let color="#";
    for(let i=0;i<6;i++){
         let randomIndex=Math.floor(Math.random()*16);
        color+=hexcode[randomIndex];
    }
    return color;
}


function hello(sum){
    console.log(sum);

}

goodmornig(3,4);
function goodmornig(a,b){
    let sum=setTimeout(()=>{
        console.log("a+b :")
       return a+b;
    },2000);

    hello(sum);
}

