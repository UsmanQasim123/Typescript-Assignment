"use strict";
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
// Arrays
const mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Annapurna"
];
const rivers = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi",
    "Ganges"
];
const countries = [
    "United States",
    "China",
    "India",
    "Russia",
    "Brazil"
];
const cities = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Beijing"
];
const languages = [
    "English",
    "Spanish",
    "Mandarin",
    "Hindi",
    "Arabic"
];
// Print Lists
console.log("List of Famous Mountains:");
for (let i = 0; i < mountains.length; i++) {
    console.log(`${i + 1}. ${mountains[i]}`);
}
console.log("\nList of Famous Rivers:");
for (let i = 0; i < rivers.length; i++) {
    console.log(`${i + 1}. ${rivers[i]}`);
}
console.log("\nList of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1}. ${countries[i]}`);
}
console.log("\nList of Cities:");
for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i]}`);
}
console.log("\nList of Languages:");
for (let i = 0; i < languages.length; i++) {
    console.log(`${i + 1}. ${languages[i]}`);
}
