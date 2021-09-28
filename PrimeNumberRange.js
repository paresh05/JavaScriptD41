const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number: ", (answer) => {
  // TODO: Log the answer in a database
  number = answer;
  rl.close();
  console.log("2 is a Prime Number");
  primeNumberRange(number);
});

function primeNumberRange(number){
    for (let a = 3; a <= number; a++) {
        let count = 0;
        for (let i = 1; i <= a; i++) {
          if (a % i == 0) {
            count += 1;
          }
        }
        if (count == 2) {
          console.log(a + " is a Prime Number");
        }
      }
}
