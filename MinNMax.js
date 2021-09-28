arrayOfNumbers = [113, 555, 885, 211, 114];
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
