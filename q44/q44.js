"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function orderSandwich(items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
    }
}
// Call the function with different numbers of arguments
orderSandwich(["Ham", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Swiss"]);
orderSandwich([]);
