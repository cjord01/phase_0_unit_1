// I paired with Casey Ryan on this challenge.

// Pseudocode
// 1. Declare secret number as a number
// 2. Define secret number as 7
// 3. Declare a string password
// 4. Define password as "just open the door"
// 5. Declare a boolean allowedIn
// 6. Define allowedIn to false
// 7. Declare an array members
// 8. Put John in the first position of members array
// 9. Put Mary in the third position of members array
// ________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door"
var allowedIn = false;
var members = []
members[0] = "John"
members[3] = "Mary"
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
//
// This challenge turned out to be much easier than I had expected it to be. 
// I was surprised that we were able to finish in about 45 minutes. 
// I guess I have a tendancy to over think things so if I had been working on this alone, 
// it would have taken a while before it would accure to me that the assignment was as simple
// as it is. I had tried doing release 0 of the group assignment and was left scratching my
// head. After completing this, the group assignment made much more sense. 
// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

