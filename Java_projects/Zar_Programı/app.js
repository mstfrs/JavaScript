let randomnumber=0;
let counter=0;

while (randomnumber!==6) {
    randomnumber= Math.trunc(Math.random()*6 + 1)
    console.log(randomnumber);
    if (randomnumber==3) {
        counter+=1;        
    } 
    if (counter==3 ) {
        console.log("3 becomes third times, exting...");
        break;
    }         
}