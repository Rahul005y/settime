let main = document.querySelector("main");

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let randomX = Math.floor(Math.random() * 100);
  let randomY = Math.floor(Math.random() * 100);

  let rot = Math.floor(Math.random() * 360);


  let a = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);

  let c = Math.floor(Math.random() * 256);

//   console.log(randomX, randomY);

  let div = document.createElement("div");
  div.classList.add("new");

  div.style.left = randomX + "%";
  div.style.top = randomY + "%";

  div.style.background = `rgb(${a},${b} ,${c})`;
   div.style.transform = `rotate(${rot}deg)`; 

  main.appendChild(div);
});
