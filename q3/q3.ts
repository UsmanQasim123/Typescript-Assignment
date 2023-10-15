// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.

let name1:string = 'Usman Qasim'; 
console.log(name1.toLowerCase()); // Output: nouman attique
console.log(name1.toUpperCase()); // Output: NOUMAN ATTIQUE	
let titleCaseName: string = name1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titleCaseName); //Output: Usman Qasim 