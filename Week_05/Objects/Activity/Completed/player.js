class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attackStrength = 10;
    }

    attack(enemy) {
        console.log(`${this.name} attacks ${enemy.name} for ${this.attackStrength} damage!`);
        enemy.takeDamage(this.attackStrength);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} has ${this.health} health remaining.`);
    }
}
