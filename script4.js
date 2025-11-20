let gameArea = document.querySelector("#gameArea");
let spawnBtn = document.querySelector("#spawnBtn");

spawnBtn.addEventListener("click", function () {

    // Remove old enemy
    let oldenemy = document.querySelector(".enemycolor");
    if (oldenemy) {
        oldenemy.remove();
    }

    // Create enemy
    let enemy = document.createElement("div");
    enemy.classList.add("enemycolor");

    // Random color
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    enemy.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    // Game area size
    let areaWidth = gameArea.clientWidth;
    let areaHeight = gameArea.clientHeight;

    // Enemy size
    let enemySize = 50;

    // Random position INSIDE box
    let randomX = Math.random() * (areaWidth - enemySize);
    let randomY = Math.random() * (areaHeight - enemySize);

    // Apply position
    enemy.style.left = randomX + "px";
    enemy.style.top = randomY + "px";

    // Add enemy inside game area
    gameArea.appendChild(enemy);
});
