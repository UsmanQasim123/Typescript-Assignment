"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
let name1 = 'Usman Qasim';
console.log(name1.toLowerCase()); // Output: nouman attique
console.log(name1.toUpperCase()); // Output: NOUMAN ATTIQUE	
let titleCaseName = name1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titleCaseName); //Output: Usman Qasim 
