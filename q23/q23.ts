// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
//  your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length <= 6? I predict True.");
console.log(car.length <= 6);

console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));

console.log("Is car.includes('b')? I predict True.");
console.log(car.includes('b'));