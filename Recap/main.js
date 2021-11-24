// const { UI } = require("winjs");

const _name = document.getElementById("name");
const _path = document.getElementById("path");
const _url = document.querySelector("#url");
const addButton = document.getElementById("registration-form").lastElementChild;

const clearStudentsBtn = document.querySelector("#clear-students");
const tbody = document.querySelector("#students");
const loading = document.querySelector("#loading");
const table = document.querySelector(".table");
const ui = new UI();
const showLoading = () => {
  loading.style.display = "block";
};

const removeLoading = () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("onclick", addNewStudent);
  clearStudentsBtn.addEventListener("click", clearAllStudents);
});

const addNewStudent = (e) => {
  e.preventDefault();
  showLoading();
  const imageUrl = _url.value.trim();
  const studentName = _name.value.trim();
  const studentPath = _path.value.trim();

  if (imageUrl === "" || studentName === "" || studentPath === "") {
    confirm("please enter students' info!");
  } else {
    const student = new Student(imageUrl, studentName, studentPath);

    //Add StudenttoUI func.

    UI.addStudentToUI(studentObj);

    //infoMessage func.
    UI.clearInputs([_url, _name, _path]);
  }
  removeLoading();
};

const clearAllStudents = () => {};
