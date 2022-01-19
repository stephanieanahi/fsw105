const readlineSync = require('readline-sync');
const playerName = readlineSync.question('Whats your name warrior?');
readlineSync.question('hello ' + playerName + ', Welcome to CALL OF WARRIORS! Where you will risk your  life to protect the civiliens . Press enter to begin.' );


const badGuys= ['villen',  'beast' , 'assassin', 'crook'];
const treasure = ['first aid kit', 'armor plates', 'bandage', 'adrenaline'];
var prize = [];
let userHealth =30;
const options = ['walk', 'exit', 'print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game (){
    const attackPower = Math.floor(Math.random() * (5 - 4+ 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 30;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'what is your next move?');

    if(options[index] == 'exit'){
        return userHealth = 0;
    } else if (options[index] =='print'){
        console.log(playerName + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('walking....');
        } else if (key >= .3) {
            console.log(badGuy + ' showed up. ');
            while(badGuysHealth > 0 && userHealth > 0) {
                const user = readlineSync.question('whats your next move? "r" to run or "a" to attack: ');

                switch (user){
                    case 'r': //runaway
                        const run = Math.random();
                        if(run < .5) {
                            console.log('before you can run away ' + badGuy + 'attacks you with: ' + badGuysPower);

                        }else {
                            console.log('you can run away!!');
                            break;
                        }
                        case 'a':
                           
                            badGuysHealth -= attackPower;
                            console.log('you attacked ' + badGuy + ' with ' + attackPower + 'attack power' );

                            userHealth -= badGuysPower;
                            console.log('badGuys just attacked you with: ' + badGuysPower + ' attack power');

                            if(badGuysHealth <= 0){
                                console.log('you killed ' + badGuy + '.\n' + badGuy + 'left: ' + pickUp);
                                let loot = Math.random();
                                if (loot <= .3){
                                    prize.push( pickUp);
                                }
                       
                                } else if (userHealth <= 0){
                                    console.log(badGuy + ' oh no! you got killed!');
                                }
                            }
                }
            }
        }
    }

while (userHealth > 0){
   // userRestore = function(){
   //     userActive = true;
   //     userHealth = 30;
   // };
    //userRestore();
    game();

    }