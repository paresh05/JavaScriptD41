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
  factorial(number);
});

function factorial(number){
    let fact = 1;
    for(let i=1;i<=number;i++){
        fact *=i;
    }
    console.log("Factorial of "+number+" is: "+fact);
}