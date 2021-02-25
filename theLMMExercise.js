// THE LITERAL MATH METHODS EXERCISE

// #1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
// #2a
console.log(warmHugs.toUpperCase());
// #1c
console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");

// #2a
let beenImpaled = "Oh look at that. I've been impaled."
// #2b
console.log(beenImpaled.slice(-18, 0));

// #3a
let dotDotDot = "..."
// #3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`

// #4
console.log(Math.PI);

// #5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber ++;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

// BONUS

// #6
console.log(" Let It Go!".repeat(2).trim().toUpperCase());

// #7a
let reindeers = "Reindeers are better than people.";

// #7b
console.log(reindeers.replace(/ /g, "_"))

// #8
console.log(Math.sqrt(2));

// #9
let newRandomNumber = Math.floor(17 * Math.random()) + 7;
console.log(newRandomNumber);


