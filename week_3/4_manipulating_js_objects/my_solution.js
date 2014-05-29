
// There is a section below where you will write your code.
// Do not alter this object here.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
// __________________________________________
// Write your code below.
terah.weight = 125;
var adam = {}
adam.name = "Adam";
terah.eyeColor = undefined;
adam.spouse = terah;
terah.spouse = adam; 
terah.children = {};
terah.children.carson = {};
terah.children.carson.name = "Carson";
terah.children.carter = {};
terah.children.carter.name = "Carter";
terah.children.colton = {};
terah.children.colton.name = "Colton";
adam.children = {};
adam.children = terah.children
// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I got through tests 1, 2, 4, & 5 very easily. #3 was a bit of a 
// challenge. I tinkered with it for a while and eventually figured
// it out through trial and error. I felt pretty accomplished once
// I got it. #8 on were also a challenge. More tinkering and eventually
// got it. A problem I keep coming back to is that I have the right 
// approach the whole time except I've mis-spelled something and 
// that's why my code isn't working. This is something I will need to
// continue to pay better attention to. 
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)