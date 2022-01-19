var readlineSync = require('readline-sync');
const playerName = readlineSync.question("What is your name player? ");
console.log(`${playerName}, Welcome to the Escape Room Simulation game!`);

var hasKey = false;
var isAlive = true;

while(isAlive == true){
    const menuID = readlineSync.keyIn('Enter 1 to put hand in hole, or, Enter 2 to find the key, or, Enter 3 to open the door: ', {limit: '$<1-3>'});
    if (menuID == 1){
        console.log(`oops, ${playerName}, you put your hand in the hole. Sorry, you are now DEAD. Game over!`)
        isAlive = false;
    }else if (menuID == 2 && hasKey ==false){
        console.log(`${playerName}, WOW, you found the key. please continue to option 3!`);
        hasKey = true;
    }else if (menuID == 2 && hasKey ==false){
        console.log(`${playerName}, please stop wasting your time. continue to option 3!!`);

    }else if (menuID == 3 && hasKey==false){
        console.log(`${playerName}, oh no! you have not found the key yet. Please continue to option 2 first then revisit this menu option later.`);
        
    }else if (menuID == 3 && hasKey == true){
        console.log(`${playerName}, Good job! you found the key! and you were able to open the exit door!! YOU WIN THIS SIMULATION!!`);
        isAlive=false;
    }
}