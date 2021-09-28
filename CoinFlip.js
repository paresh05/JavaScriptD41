function flip(){
    let flipCoin = (Math.floor(Math.random()*2)==0)
    if(flipCoin==1){
        return "Head";
    }
    else {
        return "Tail";
    }
}

console.log("Its a "+flip());

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});