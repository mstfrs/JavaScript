// let i=0;
// let sum=0;
// while (i<11) {
//     sum+=i;
//     i++;
//     console.log({i});
//     if (i==8) break ;
        
    
// }
// console.log({sum});




// for (let i = 0; i <= 100 ; i++) {
//     if (i % 5 == 0 && i % 3 == 0){
//         console.log(i,"fizzbuzz");
//     }
//     else if (i % 5 == 0){
//         console.log(i,"buzz");
//     }
//     else if (i % 3 == 0 ){
//         console.log(i,"fizz");
//     }
// }

let myword="M";
let lastword="";

for (i = myword.length-1; i >= 0; i--) {
    lastword +=myword[i];
    
}
console.log(lastword.toUpperCase());