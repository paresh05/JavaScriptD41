var arrayOfNumbers=[];
let j =0;
for(let i = 0;i<100;i++){
    let rem = i%10;
    let div = Math.floor(i/10);
    if(rem==div && (i!=0)){
        arrayOfNumbers[j]=i;
        j++;
    }
}
console.log("The numbers in which the digits are repeated are: "+arrayOfNumbers);