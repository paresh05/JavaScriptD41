let arrayOfNumbers = [];
var i = 0;
//Code for generating random 10, 3 digit numbers and store it to array
while (i < 10) {
  var val = Math.floor(Math.random() * 1000);
  if (val > 99) {
    arrayOfNumbers[i] = val;
    i++;
  }
}
console.log("The array elements are: "+arrayOfNumbers);
//Code for sorting the elements in the array for maximum to minimum
for (let j = 0; j < arrayOfNumbers.length; j++) {
  for (let k = 0; k < arrayOfNumbers.length; k++) {
    if (arrayOfNumbers[j] > arrayOfNumbers[k]) {
      let temp = arrayOfNumbers[j];
      arrayOfNumbers[j] = arrayOfNumbers[k];
      arrayOfNumbers[k] = temp;
    }
  }
}
console.log("The array elements after sorting: "+arrayOfNumbers);
//Printing the second largest and smallest elements in the array
console.log(
  "The Second Smallest Number in the array is: " +
    arrayOfNumbers[arrayOfNumbers.length - 2]
);
console.log("The Second Largest Number in the array is: " + arrayOfNumbers[1]);
