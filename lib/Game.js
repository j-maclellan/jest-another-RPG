const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
    this.roundNumber = 0;
    this.isPLayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    // fills enemies array
    this.enemies.push(new Enemy("goblin", "sword"));
    this.enemies.push(new Enemy("orc", "Baseball bat"));
    this.enemies.push(new Enemy("skeleton", "axe"));
    // keeps track of which enemy is current
    this.currentEnemy = this.enemies[0];
    // inquirer prompt for Player Character
    inquirer
        .prompt({
            type: "text",
            name: "name",
            message: "What is your name, adventurer?"
        })
        // destructure name from the prompt object
        .then(({ name }) => {
            this.player = new Player(name);

            // test the object creation
            this.startNewBattle();
        });
};

module.exports = Game;