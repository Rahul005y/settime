
let box = document.querySelector(".box");
let btn = document.querySelector("#btn");



let arr = ["raja", "rani" , "aasha", "jay" , "amit" , "rohit"]

// console.log(arr.length)

// let newarr =  Math.floor(Math.random()*arr.length);

// console.log(arr[newarr]);

 btn.addEventListener("click", function(){

let newarr =  Math.floor(Math.random()*arr.length);

 console.log(arr[newarr]);
 
 })






// btn.addEventListener("click", function(){
    
// let a = Math.floor(Math.random()*255);
// let b= Math.floor(Math.random()*255);
// let c = Math.floor(Math.random()*255);

// box.style.backgroundColor = `rgb(${a},${b},${c})`;

// box.textContent=`${a},${b},${c}`

// })