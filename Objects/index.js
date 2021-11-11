console.log('» index.js is running');

// const person = {
//   firstName: 'John',
//   age: 30,
//   location: {
//     city: 'New York',
//     temp: 92,
//   },
//   2021: 'Clarusway',
// };

// console.log(person.firstName);
// console.log(person['age']);
// console.log(person);
// console.log(person.lastName);

// person.lastName = 'Smith';
// console.log(person['midName']);

// console.log(person);
// console.log(person['2021']);

// const field = 'Name';
// console.log(person['first' + field]);

///////*******methods */

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  citiesLived: ['New York', 'Paris', 'London'],
  location: {
    city: 'New York',
    temp: 92,
  },
  2021: 'Clarusway',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullName2() {
    return `${this.firstName} ${this.lastName}`;
  },
  aMethod: () => {
    return 'Hello';
  },
  printCitiesLived() {
    this.citiesLived.forEach(city => {
      console.log(this.firstName + ' has lived in ' + city);
    });
  },
};
// console.log(person.getFullName2());

person.printCitiesLived();
