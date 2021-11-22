// console.log("Hello");
// setTimeout(() => {
//   console.log("World");
// }, 1500);
// // console.log("World");

// console.log("1. merhaba");
// setTimeout(() => {
//   console.log("2. nasılsın");
// }, 1000);
// console.log("3. görüşmek üzere");

// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log("merhaba");
//   counter++;
//   if (counter == 10) {
//     clearInterval(intervalId);
//   }
// }, 1500);

//***-------------Promises -----------------*/

// const myPromise = new Promise((resolve, reject) => {
//   resolve("task completed");
// });

// myPromise.then((result) => console.log(result));

// const myPromise2 = new Promise((resolve, result) => {
//   console.log("myPrmise2 started");
//   let condition = !Math.floor(Math.random() * 2);
//   if (condition) {
//     resolve("success");
//   } else {
//     reject(new Error("failed"));
//   }
// });
// myPromise2
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//****-------------------ÇAY DEMLEME------------------- */

function caydemle() {
  suyuKaynat()
    .then((status1) => {
      console.log(status1);
      return demEkle();
    })
    .then((status2) => {
      console.log(status2);
      return "Çay hazır Afiyet olsun";
    })
    .then((status3) => {
      console.log(status3);
    })
    .catch((err) => console.log(err));
}
// caydemle();S

function suyuKaynat() {
  return new Promise((resolve, reject) => {
    const suKaynadi = !Math.floor(Math.random() * 2);
    if (suKaynadi) {
      resolve("su kaynadi");
    } else {
      reject(new Error("Kettle arizalı"));
    }
  });
}

function demEkle() {
  return new Promise((resolve, reject) => {
    const cayMevcut = !Math.floor(Math.random() * 2);
    if (cayMevcut) {
      resolve("çay eklendi");
    } else {
      reject(new Error("Çay bitmiş"));
    }
  });
}

async function cayDemle2() {
  try {
    const status1 = await suyuKaynat();
    console.log(status1);
    const status2 = await demEkle();
    console.log(status2);
    const status3 = await "Çay hazır afiyet olsun";
    console.log(status3);
  } catch (error) {
    console.log(error);
  }
}
cayDemle2();
