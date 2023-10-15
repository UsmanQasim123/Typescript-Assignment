"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician names
const magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call make_great to modify the magicians
make_great(magicianNames);
// Call show_magicians to see the modified list
show_magicians(magicianNames);
