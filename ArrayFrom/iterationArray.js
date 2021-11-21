// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = ["John", "Ali", "Can"];

students.forEach((x) => console.log(x));
students.forEach(print);

function print(x) {
  console.log(x);
}

const array1 = [5, 6, 7, 2, 3];
let sum = 0;
array1.forEach((x) => (sum = sum + x));
console.log(sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atmaya izin  vermektedir.

const numberArray = [3, 7, 17, 8, 9, 3, 0];
const doubled = numberArray.map((x) => x * 2);
console.log(doubled);

//---------------------------------------------------------------
// Beliritilen dizideki isimleri büyük harfe çevirerek bir dizide
// uygulamayı yazınızuygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------
const namesArr = ["mustafa", "ali", "mehmet", "veli", "mustafa"];
const uppered = namesArr.map((x) => x.toUpperCase());
console.log(uppered);
const upperedSet = new Set(uppered);
console.log(upperedSet);
//---------------------------------------------------------------
// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız
//----------------------------------------------------------------
const priceArr = [250, 320, 150, 180];
let euro = 13;
let dolar = 12;
const euroCon = priceArr.map((x) => (x / euro).toFixed(2));
const dolarCon = priceArr.map((x) => (x / dolar).toFixed(2));
console.log(euroCon);
console.log(dolarCon);

//---------------------------------------------------------------
// tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Şartımız:  Fiyatı 100 TL den fazla olanlara %10 zam,
// 100 TL den az olanlara ise %15 zam yapılmak isteniyor.
// Ayrıca, zamlı olan yeni değerleri
// New Price of Product 1 : 110 TL şekilde diziye saklamak istiyoruz.
//----------------------------------------------------------------

const prices = [120, 90, 70, 150, 200];

const tenPerc = prices.map((value, indis) => {
  if (value < 100) {
    // value + value * 0.15;
    return `New Price of Product ${indis + 1}: ${(value * 1.15).toFixed(2)}`;
  } else {
    // value + value * 0.1;
    return `New Price of Product ${indis + 1}: ${(value * 1.1).toFixed(2)}`;
  }
});

console.log(tenPerc);
