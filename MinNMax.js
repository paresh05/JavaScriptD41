let i = 0;
var number;
const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var arrayOfNumbers = [];
while(i<5){
  readInput();
  i++;
}
function readInput() {
  rl.question("Enter the number: ", (answer) => {
    // TODO: Log the answer in a database
    number = answer;
    console.log(`The number is: ${answer}`);
    rl.close();
    arrayOfNumbers[i] = number;
    getMinMax();
  });
}
function getMinMax() {
  let maxNumber = arrayOfNumbers[0];
  let minNumber = arrayOfNumbers[0];

  for (let j = 0; j < arrayOfNumbers.length; j++) {
    if (maxNumber < arrayOfNumbers[j]) {
      maxNumber = arrayOfNumbers[j];
    }
    if (minNumber > arrayOfNumbers[j]) {
      minNumber = arrayOfNumbers[j];
    }
  }
  console.log("Maximum number is: " + maxNumber);
  console.log("Minimum number is: " + minNumber);
}
