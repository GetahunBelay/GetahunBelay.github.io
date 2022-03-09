"use strict"

function funct(a,b,...c){
    
    console.log(c); 
}
funct("Get","Bel", "Adu", 54, 32);// ["Adu", 54, 32]