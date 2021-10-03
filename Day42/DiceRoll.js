var i = 0;
const map = new Map();
map.set(1, 0);
map.set(2, 0);
map.set(3, 0);
map.set(4, 0);
map.set(5, 0);
map.set(6, 0);
//Code to roll the dice till any one number occurs 10 times
while (i == 0) {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  let diceValue = map.get(diceNumber);
  diceValue++;
  map.set(diceNumber, diceValue);
  if (map.get(diceNumber) == 10) {
    console.log(
      "The number " +
        diceNumber +
        " has occured " +
        map.get(diceNumber) +
        " times"
    );
    i = 1;
  }
}
//Code to find the number which has occured least number of times and print the key and value of map
var minimumValue = map.get(1);
map.forEach(function (value, key) {
  if (minimumValue > map.get(key)) {
    minimumValue = map.get(key);
  }
  console.log(key + " = " + value);
});
map.forEach(function (value, key) {
  if (minimumValue == map.get(key)) {
    console.log(
      "The number " + key + " has occured least number of times i.e. " + value
    );
  }
});
