let arr = [
  "Learning", "JavaScript", "Frontend", "Backend",
  "Developer", "HTML", "CSS", "React", "Node", "MongoDB", "Express",
  "Programming", "Coding", "Logic", "Function", "Variable", "Array",
  "Object", "String", "Random", "Website", "Project", "Practice",
  "Algorithm", "Data", "Structure", "Async", "Promise", "Fetch",
  "Event", "Listener", "Callback", "Browser", "DOM", "Element",
  "Styling", "Design", "Component", "Framework", "Library",
  "Animation", "Debugging", "Error", "Console", "Performance",
  "Frontend Engineer", "Backend Engineer", "Full Stack", 
  "Passion", "Hard Work", "Focus", "Success"
];

let main = document.querySelector("main");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {

  let randomWord = arr[Math.floor(Math.random() * arr.length)];
  let randomX = Math.floor(Math.random() * 100); // position
  let randomY = Math.floor(Math.random() * 100); // position

  let scale = Math.floor(Math.random() * 4   ); // position

  let rot = Math.floor(Math.random() * 360);

  let h2 = document.createElement("h2");
  h2.classList.add("text");

  h2.textContent = randomWord;  // the actual word

  h2.style.scale =  scale; 


  h2.style.left = randomX + "%"; 
  h2.style.top = randomY + "%";
  h2.style.transform = `rotate(${rot}deg)`; 

  main.appendChild(h2);

  console.log("Word:", randomWord);
});
