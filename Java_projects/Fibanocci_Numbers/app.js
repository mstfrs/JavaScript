
// let sum1=0;
// let sum2=1;
// let sum3=0;
// while (sum3<100) {
//     sum3=sum1+sum2;
//     sum1=sum2;
//     sum2=sum3;
//     console.log(sum3);
    
// }

function fibonacci(x) {
    

const fibNum = [0,1]
let sum1=0,sum2=1,total=0;
for (let i = 0; total < x; i++) {
    total =sum1+sum2;
    sum1=sum2;
    sum2=total;
    fibNum.push(total)   
    
}return fibNum
}

console.log(fibonacci(50));



