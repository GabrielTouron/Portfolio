"use srict"; // obligé de déclaré ses variables

// PORTEE DES VARIABLES

let varLet; // portée de block

var varVar; // portée de fonction

const constante = "#valeur"; // ne peut pas etre déclarée sans valeur

// constante ='autre valeur'; on ne peut pas réassigner de valeurs, saud dans uns tableau...

const valArray = [];
valArray.push(1);
console.log(valArray);


// ex 1:
var readTest = 'autre chose';

if(constante ==='#valeur'){
    var readTest = constante;
    console.log(readTest);
}
console.log(readTest);

// ex 2:
var readTest2 = 'autre chose';

if(constante ==='#valeur'){
    let readTest2 = constante;
    console.log(readTest2);
}
console.log(readTest2);

function readVar(){
    var variable = "ma portée est function";
    console.log(variable)
}
readVar();