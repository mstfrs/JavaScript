const notOccupiedSeats = document.querySelectorAll(".row .seat:not(.occupied)");

// console.log(notOccupiedSeats);
const movieSelectBox = document.getElementById("movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const container = document.querySelector(".container");
let filmPrice;

window.addEventListener("load", () => {
  let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;

  updateMovieInfo(price);
});

movieSelectBox.addEventListener("change", (e) => {
  let price = e.target.value;
  updateMovieInfo(price);
  // console.log(e.target.value);
});

const updateMovieInfo = (filmPrice) => {
  let selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats.length);

  const seatsIndexArray = [...selectedSeats].map((seat) =>
    [...notOccupiedSeats].indexOf(seat)
  );
  localStorage.setItem("selectedSeats");

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  film.innerText =
    movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split(
      "("
    )[0];
  total.innerText = selectedSeatCount * parseFloat(filmPrice);
  console.log(film.innerText);
};

container.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;
  console.log(price);
  updateMovieInfo(price);
});
