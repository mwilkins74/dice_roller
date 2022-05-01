function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var status = document.getElementById("status");
   
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    
    
    
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;

    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    
}


const classes = {
    '1' : 'Artificer',
    '2' : 'Barbarian',
    '3' : 'Bard',
    '4' : 'Cleric',
    '5' : 'Druid',
    '6' : 'Fighter',
    '7' : 'Monk',
    '8' : 'Paladin',
    '9' : 'Ranger',
    '10': 'Rogue',
    '11': 'Sorcerer',
    '12': 'Warlock',
    '13': 'Wizard',
}

function randomClass() {
    const num1 = Math.floor(Math.random()* (13) + 1);
 return `You will be playing a ${classes}`;
}
console.log(randomClass)