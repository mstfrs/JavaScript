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

//---------------------------------------------------------------
// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız
//----------------------------------------------------------------

//---------------------------------------------------------------
// tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Şartımız:  Fiyatı 100 TL den fazla olanlara %10 zam,
// 100 TL den az olanlara ise %15 zam yapılmak isteniyor.
// Ayrıca, zamlı olan yeni değerleri
// New Price of Product 1 : 110 TL şekilde diziye saklamak istiyoruz.
//----------------------------------------------------------------
