// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each
//  magician’s name.

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magician names
  const magicianNames: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];
  
  // Call make_great with a copy of the original array and store the new array
  const greatMagicianNames: string[] = make_great([...magicianNames]); // making shallow copy using spread operator
  
  // Call show_magicians to display the original list
  show_magicians(magicianNames);
  
  // Call show_magicians again to display the new list with "the Great" added
  show_magicians(greatMagicianNames);
  