/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
// document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
let firstName = prompt("Enter first name:");
let lastName = prompt("Enter a last name:");
let kangarooName = prompt("Enter a name for a kangaroo:");
let place = prompt("Enter a place:");
let drinkName = prompt("Enter the name of a drink:");
let fightingAction = prompt("Enter a fighting action eg(kicking, punching):");
let bodyPart = prompt("Enter a body part:(of the kangaroo)");
let auraQuote = prompt("Enter an aura quote:");
//number prompts//
let fightMinutes = Number(prompt("Enter minutes spent fighting:"));
let drinkCount = Number(prompt("Enter numbers of drinks consumed:"));
//concatenation//
let fullName = firstName + " " + lastName;
//math operators//
let totalDrinks = drinkCount + 2;
let minutesRemaining = fightMinutes -1;
let fightSeconds = fightMinutes * 60;
let fightHours = fightMinutes / 60;
let secondsLeftover = fightSeconds % 45;
//changing let variable//
let storyEnding = "They lost the battle and ran away..."
storyEnding = "Then " + firstName + " lived happily ever after. The end";
//console logs//
console.log("String check:", typeof fullName);
console.log("Number check (fightMinutes):", typeof fightMinutes, fightMinutes);
console.log("Number check (calculated seconds):", typeof fightSeconds, fightSeconds);
//story time!//
let story = `Once upon a time, ${fullName} fought a kangaroo whose name was ${kangarooName}. You see, ${firstName} was stranded in ${place} and tried to look for ${drinkName} because they were thirsty. ${firstName} walked around and found ${drinkCount} cans of ${drinkName} with 2 cans nearby, making it ${totalDrinks} cans! However ${fullName} saw that there was a kangaroo, whose name was ${kangarooName}, was there too. ${kangarooName} was also very thirsty and saw ${fullName} as a threat, leading ${kangarooName} and ${firstName} to fight! ${firstName} fought the kangaroo for the ${drinkName} by ${fightingAction} the kangaroo's ${bodyPart} for ${fightMinutes} minutes, which is ${fightSeconds} seconds, or ${fightHours} hours with ${secondsLeftover} seconds leftover. Finally, ${kangarooName} got tired of fighting and ran away, meaning ${fullName} won the fight! ${fullName} aura farmed and said ${auraQuote}, ${storyEnding}!`;
document.getElementById("madlib-output").innerHTML = story;

