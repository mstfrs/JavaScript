// let data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((veri) => console.log(veri));

let countryList = document.getElementById("countryList");
console.log(countryList);
let listele = document.getElementById("listele");

let data = fetch("https://restcountries.com/v3.1/all")
  .then((cevap) => cevap.json())
  .then((result) =>
    result.forEach((element) => {
      // console.log(element.name.common);
      // countryList.innerHTML += `<option value="1">${element.name.common}</option>`;
      // listele.innerHTML += `<li>${element.capital}</li>`;
    })
  );

countryList.addEventListener("change", (e) => {
  console.log(e.target.value);
});
