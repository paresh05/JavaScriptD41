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