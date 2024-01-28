class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 50;
        this.attackStrength = 5;
    }

    attack(player) {
        console.log(`${this.name} attacks ${player.name} for ${this.attackStrength} damage!`);
        player.takeDamage(this.attackStrength);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} has ${this.health} health remaining.`);
    }
}
