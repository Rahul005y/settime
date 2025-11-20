
let btn = document.querySelector("#btn");

let output = document.querySelector("#output");


btn.addEventListener("click",function(){
    
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
              "abcdefghijklmnopqrstuvwxyz" +
              "0123456789" +
              "!@#$%^&*()_-+=<>?/{}[]|";
    
      let length = Math.floor(Math.random() * 4) + 5; 

    
  let password = "";

     for(i=0 ; i<length; i++){
    let randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
     }

      output.textContent = password;  
        // Random color
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    output.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    

})




// let btn = document.querySelector("#btn");

// let output = document.querySelector("#output");


// btn.addEventListener("click",function(){
//     let random = Math.floor(Math.random()*900000)+100000;

    
//      console.log(random)

//       output.textContent = random;  

//         output.style.backgroundColor ="red"

// })