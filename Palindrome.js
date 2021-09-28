let string;
function checkPalindrome(str) {
  // find the length of a string
  const length = str.length;

  // loop through half of the string
  for (let i = 0; i < length / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[length - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the String: ", (answer) => {
  // TODO: Log the answer in a database
  string = answer;
  rl.close();

  // call the function
  const value = checkPalindrome(string);

  console.log(value);
});
