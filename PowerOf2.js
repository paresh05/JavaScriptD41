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
  for (let i = 0; i <= number; i++) {
    console.log(2 ** i);
  }
});
