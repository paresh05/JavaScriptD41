let number;
const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number: ", (answer) => {
  // TODO: Log the answer in a database
  number = answer;
  console.log(`The number is: ${answer}`);
  rl.close();
  if (number == 0) {
    console.log("Zero");
  } else if (number == 1) {
    console.log("ONE");
  } else if (number == 2) {
    console.log("TWO");
  } else if (number == 3) {
    console.log("THREE");
  } else if (number == 4) {
    console.log("FOUR");
  } else if (number == 5) {
    console.log("FIVE");
  } else if (number == 6) {
    console.log("SIX");
  } else if (number == 7) {
    console.log("SEVEN");
  } else if (number == 8) {
    console.log("EIGHT");
  } else if (number == 9) {
    console.log("NINE");
  }
});
