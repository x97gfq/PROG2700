
function playGame() {

    let player = new Player("Hero");
    let enemy = new Enemy("Goblin");
    
    console.log("A wild enemy appears!");
    
    // Player attacks
    player.attack(enemy);
    
    // If you want to allow the enemy to counterattack
    // enemy.attack(player);
    
    // You can add more interactions, like checking if the enemy is defeated, 
    // adding more enemies, or creating a loop for multiple turns.
    
}

window.addEventListener("load", (event) => {
    const btn = document.getElementById("click_btn");
    btn.addEventListener("click", playGame);
});