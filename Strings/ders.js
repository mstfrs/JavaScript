// var str1="Hello";
// var str2='"Hello" world\'s';
// var str3=`Hello world`
// var str4= new String("hello world")

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// console.log(typeof(str4));


// var a = 'primitive.\nlerin properti veya metodu olmaz'
// console.log(a);
// console.log(a.charAt()); //default olarak ilk elemanı alır
// console.log(a.charAt(a.length-1));
// console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// var n=str.includes("simply")
// console.log(n);


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// var n=str.indexOf("simply")
// var n1=str.indexOf("p")
// var n2=str.indexOf("P")
// console.log(n);
// console.log(n1);
// console.log(n2);


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// var x="p"
// for (let i = 0; i < str.length-1; i++) {
//     console.log(str.indexOf(x));
//     str.replace(str.indexOf(x)," ")
    
// }


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// var n=str.search("simply")
// var n1=str.search("P")
// var n2=str.search(/P/i)
// console.log(n);
// console.log(n1);
// console.log(n2);




// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// var n=str.slice(0,5)
// var n1=str.slice(-35,64)
// var n2=str.slice(6)
// console.log(n);
// console.log(n1);
// console.log(n2);

// var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// console.log(s.substr(22,10));
// console.log(s.substring(22,2));
// console.log(s.substring(52,-70));
// console.log(s.substring(22));




// var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// var pangram= "pijamalı hasta yağız şoföre çabucak güvendi"

// console.log(s.toUpperCase());
// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleUpperCase());
// var Pangram= pangram.toLocaleUpperCase();
// console.log(Pangram.toLowerCase());
// console.log(Pangram.toLocaleLowerCase());

var s = "           Lorem Ipsum              ";
console.log(s);
console.log(s.trim());
console.log(s.trimLeft());
console.log(s.trimRight());