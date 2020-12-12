//var playerName = name entered
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// funtion to start a new game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney =10;
for(var i = 0; i < enemyNames.length; i++) {
// if player is still alive, keep fighting
  if (playerHealth > 0) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators! Round " + (i +1));

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //enemyhealth random from 0-59 
    enemyHealth = randomNumber(40, 60);

//use debugger to pause script from running and check what's going on at that moment in the code
// debugger;  
    
    // pass the pickedEnemyName varriable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  // if player is not alive, break out of the loop and let endGame function run
  } else {
      break;
  }
}




//after loops ends, we are either out of playerHealth or enemies to fight, so run the endgame function
endGame();
};

  //function to end the entire game 
  var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else { 
    window.alert("You have lost your robot in battle! Game over!");
  }
  
   //ask player if they'd like to play again
   var playAgainConfirm = window.confirm("Would you like to play again?");

   if (playAgainConfirm) {
     //restart the game
     startGame();
   } else {
     window.alert("Thank you for play Robot Gladiator! Come Back Soon!")
   }
};


// fight function
var fight = function(enemyName) {

  //repeat and excute as long as the enemy-robot is alive
  while(enemyHealth > 0 && playerHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      //if player choses to "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      
      // subtract money from playerMoney for skipping
      playerMoney = Math.max(0, playerMoney - 10);
      console.log("playerMoney", playerMoney);
      break;
      }  
    }
  
  //generate random damage value based on player's attack power
  var damage = randomNumber(playerAttack - 3, playerAttack);
  enemyHealth = Math.max(0, enemyHealth - damage);
  //Log a resulting message to the console so we know that it worked. 
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
  );

  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    //award player money for winning
    playerMoney = playerMoney +20;

  //ask if players wants to use the store before next round
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

  //if yes, take them to the store() function
  if (storeConfirm) { 
  shop();
  }

    // leave while() loop since enemy is dead
    break;
    } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable 
    var damage = randomNumber(enemyAttack - 3, enemyAttack)
    playerHealth = Math.max(0, playerHealth - damage);

    //Log a resulting message to the console so we know that it worked. 
    console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health 
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      //leave while() loop is player is dead
    break;
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// function to shop
var shop = function () {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to to REFILL your health, UPDGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice.");
  //use switch to carry out action 
  switch (shopOptionPrompt) {
    case "refill":
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      //increase health and decrease money 
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
  } else {
    window.alert("You don't have enough money!");
  }

      break;
    case "upgrade":
      if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7; 
    } else {
        window.alert("You don't have enought money!");
    }
    
      break;
    case "leave":
      window.alert("leaving the store.");

      // do nothing, so function will end
      break;
      default: 
        window.alert("You did not pick a valid option. Try again.");

        // call shop() again to force player to pick a valid option
        shop();
        break;
  }
};

 //function to generate a random numeric value 
 var randomNumber = function(min, max) {
   var valve = Math.floor(Math.random() * (max - min + 1) + min);

   return valve
        
}
     // start first game when page loads
     startGame();


