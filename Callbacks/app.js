/* let arr = [41, 2, 333, 4, 55, 48, 26, 88];

console.log(arr[0]);
console.log(arr[arr.length - 1]);

const [first, , third, ...others] = arr;
console.log('first: ', first);
console.log('third => ', third);
console.log(others);
const [last, ...other2] = arr.reverse();

console.log('last..', last); 

let studentData = ['name', 'lastname', [78, 68, 95]];
studentData[2][1];
let [, , grades] = studentData;
grades[1];

*/

// destructuring objects
const hotel = {
    name: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
  
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };