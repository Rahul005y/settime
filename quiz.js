

  
  let btn = document.querySelector(".btn");

let quote = document.querySelector("#quote");



  let quotes = [
    "Believe in yourself.",
    "Never give up.",
    "You are stronger than you think.",
    "Dream big and work hard.",
    "Every day is a new beginning.",
    "Stay positive, work hard, make it happen.",
    "Small steps every day.",
    "Focus on progress, not perfection.",
    "Do one thing today your future self will thank you for."
  ];


  btn.addEventListener("click" ,function(){
    let random = Math.floor(Math.random()*quotes.length)
   
    quote.textContent= quotes [random];
  })