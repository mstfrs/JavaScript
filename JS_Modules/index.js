console.log("index.js loaded");

import square, {
  WHW,
  WORKING_HOURS_WEEK as hrs,
  counter,
  dec,
  inc,
  sum,
} from "./mymodule.js";

console.log("WHW", WHW);
console.log("hrs", hrs);

inc(4);
inc(6);
dec();

console.log("counter :>>", counter);
console.log("sum", sum(4, 7));
console.log(square(4));
