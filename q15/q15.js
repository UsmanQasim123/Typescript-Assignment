"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Original guest list
const guestList = ["Akram", "Aslam", "Akbar"];
// Print the guest who can't make it
const guestWhoCantMakeIt = guestList[1]; // Assuming the second person can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
const newGuest = "Azhar";
guestList[1] = newGuest;
// Print a second set of invitation messages for the updated guest list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
