console.log("» index.js is running");

// const person = {
//   firstName: "John",
//   age: 30,
//   location: {
//     city: "New York",
//     temp: 92,
//   },
//   2021: "Clarusway",
// };

// console.log(person.firstName);
// console.log(person["age"]);
// console.log(person);
// console.log(person.lastName);

// person.lastName = "Smith";
// console.log(person["midName"]);

// console.log(person);
// console.log(person["2021"]);

// const field = "Name";
// console.log(person["first" + field]);

///////*******methods */

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 30,
//   citiesLived: ["New York", "Paris", "London"],
//   location: {
//     city: "New York",
//     temp: 92,
//   },
//   2021: "Clarusway",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getFullName2() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   aMethod: () => {
//     return "Hello";
//   },
//   printCitiesLived() {
//     this.citiesLived.forEach((city) => {
//       console.log(this.firstName + " has lived in " + city);
//     });
//   },
// };
// // console.log(person.getFullName2());

// person.printCitiesLived();

const human = {
  firstname: "Mustafa",
  lastname: "Örs",
  age: 30,
  citiesLived: ["Samsun", "Ankara", "Kayseri"],

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  },

  aMethod: () => {
    return "hello";
  },

  printCitiesLived() {
    this.citiesLived.forEach((city) => {
      console.log(this.firstname + " has lived in " + city);
    });
  },
};
console.log(human.printCitiesLived());
console.log(human.aMethod());
console.log(human.getFullName());
console.log(human.firstname);
console.log(human["lastname"]);

human.printCitiesLived();

const student1 = {
  name: "John",
  grade: 68,
  printGrade() {
    return `${this.name} has a grade of ${this.grade}`;
  },
  printGradeArrow: () => {
    return `${this.name} has a grade of ${this.grade}`;
  },
};

const student2 = {
  name: "Sam",
  grade: 85,
};
console.log(student1.printGrade());
console.log(student1.printGradeArrow.bind(student2)());
