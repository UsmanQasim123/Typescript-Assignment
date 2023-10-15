// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// Original guest list
const guestList = ["Akram", "Aslam", "Akbar", "Azhar", "Bilal", "Zafar", "Sana"];

// Print the number of guests
console.log(`Number of guests invited: ${guestList.length}`);

// Print the guests' names
for (let i = 0; i < guestList.length; i++) {
  console.log(`Guest ${i + 1}: ${guestList[i]}`);
}