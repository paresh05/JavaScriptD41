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
  rl.close();
  let count = 1;
  for (let i = 3; i < number / 2; i++) {
    if (number % i == 0) {
      console.log(number + " is not a Prime Number");
      count = 0;
      break;
    }
  }
  if (count == 1) {
    console.log(number + " is a Prime Number");
  }
});
