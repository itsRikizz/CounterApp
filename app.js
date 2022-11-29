const display = document.querySelector(".display");
const decBtn = document.querySelector(".decrease");
const resBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".increase");


let count =0;
decBtn.addEventListener("click",()=>{
   
    display.innerHTML=--count;
    // console.log(count)
    if(count==0){
        display.style.color="black"
    }
    if(count<0){
        display.style.color="red";
    }
   
})

resBtn.addEventListener("click",()=>{
    count =0;
    // console.log(count);
    display.innerHTML=count;
    display.style.color="black"
})
incBtn.addEventListener("click",()=>{
    // console.log(count);
    display.innerHTML=++count;
    if(count<0){
        display.style.color="red";
    }else if(count==0){

        display.style.color="black"
    }
    else{
        display.style.color="green"
    }
})