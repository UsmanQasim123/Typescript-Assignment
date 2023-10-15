"use strict";
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model, options = {}) {
    const car = Object.assign({ manufacturer,
        model }, options);
    return car;
}
//Partial<Car> is a TypeScript utility type that makes all properties of the Car type optional.
//This means you can provide some, all, or none of the properties when calling the function.
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Leather Seats"] });
// Print the created car object
console.log(myCar);
