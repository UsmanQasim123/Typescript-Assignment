// Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
// a message that reads I love TypeScript. M
// ake a large shirt and a medium shirt with the default message, and a shirt of any size 
// with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
  }
  
  // Creating shirts with default values
  make_shirt(); // Large shirt with the default message
  make_shirt("Medium"); // Medium shirt with the default message
  
  // Creating a custom shirt
  make_shirt("Small", "TypeScript Rocks!"); // Small shirt with a custom message
  