//var playerName = name entered
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName);
console.log(playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//Game States 
// "WIN" - Plater robot has defeated all enemy-robots
//  * Fight all enemy-robots

// fight funcation
var fight = function(enemyName) {
  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, then fight 
  if (promptFight === "FIGHT" || promptFight === "fight") {
  //remove enemy's health by subtracting the amount set in the playerAttack variable 
  enemyHealth = enemyHealth - playerAttack;
  //Log a resulting message to the console so we know that it worked. 
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
  );

  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  

  //remove player's health by subtracting the amount set in the enemyAttack variable 
  playerHealth = playerHealth - enemyAttack;
  //Log a resulting message to the console so we know that it worked. 
  console.log (
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  //check player's health 
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // check to see if the value of the playerHealth variable is greater than 0
  if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }

  //if player choses to skip 
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again 
  else {
    fight();
  }
} else {
  window.alert("You need to choose a valid option. Try again!");
}
};

// run fight funcation to start game
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}