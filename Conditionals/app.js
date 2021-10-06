

// let score =81;
// if (score>=80) {
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }
// else if (score>=50) {
//     console.log(`Tebrikler notunuz ${score}, geçtiniz`);
// }
// else {
//     console.log(`Üzgünüm notunuz ${score}, kaldınız`);
// }


//Ternary İF ELSE
// let score=50;
// score>=50 ? console.log(`Tebrikler notunuz ${score}, geçtiniz`):
//             console.log(`Üzgünüm notunuz ${score}, kaldınız`);

// let username="Mustafa";
// username ? console.log(`Merhaba ${username}`) : 
//             console.log(`Please login`);




// let score = prompt('Sınav notunu gir:'); 
// score >=80 ? console.log(`Tebrikler notunuz ${score}, geçtiniz`):score >=50 ? console.log(`Tebrikler notunuz ${score}, geçtiniz`):
// console.log(`Üzgünüm notunuz ${score}, kaldınız`)

// if (score>=80) {
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }
// else if (score>=50) {
//     console.log(`Tebrikler notunuz ${score}, geçtiniz`);
// }
// else {
//     console.log(`Üzgünüm notunuz ${score}, kaldınız`);
// }


// var text;
// var fruits=prompt("Lütfen bir meyve giriniz :");

// switch(fruits.toLowerCase()) { 
//     case "banana":
//         text="Banan is good";
//         break;
//     case "lime":
//     case "lemon":
//     case "orange":
//         text="I'm not fan of Orange";
//         break;
//     case "apple":
//         text="How you like them apples?";
//         break;
//     default:
//         text=`I have never heard of ${fruits}`;       


// }
// console.log(text);

// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29





// var day=prompt("Lütfen bir gün giriniz :");
// var ders="monday";
// switch (day) {
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "saturday":
//         ders="In Class";
//         break;
//     case "tuesday":
//     case "friday":
//         ders="teamwok";
//         break;
//     case "sunday":
//         ders="tatil";
//         break;

//     default:
//         ders="error";
//         break;
    
// }
// console.log(ders);


let password = 'password@'

if (password.length >=5 && password.includes('@')) {
    console.log("that pasword is strong");    
} else {
    console.log("that pasword is not long enough");    

}
