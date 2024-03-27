import { addMovie } from "../models/movieListModel.js";

let dialog;
let addButton;
let exitButton;
let form;

export function addMovieController() {
  dialog = document.querySelector("#create-movie");
  // TODO: the exit id button is being used in 3 places, need to have unique id name for each button (create, edit, delete)
  exitButton = dialog.querySelector("#exit");
  addButton = dialog.querySelector("#submit");
  form = dialog.querySelector("form");

  //   configUi(movie);
  configureListeners();
  dialog.showModal();
}

// function configUi(item) {
//   dialog.querySelector("#title").value = item.title;
//   dialog.querySelector("#director").value = item.director_name;
//   dialog.querySelector("#releaseYear").value = item.release_year;
// }

function configureListeners() {
  exitButton.addEventListener("click", onCloseDialog);
  form.addEventListener("submit", onAddMovie);
}

function onCloseDialog() {
  dialog.close();
}

function onAddMovie(e) {
  e.preventDefault();
  console.log("inside add controller method");

  const title = e.currentTarget.title.value.trim();
  const director_name = e.currentTarget.director.value.trim();
  const release_year = e.currentTarget.releaseYear.value.trim();
  const rating = 4.5;

  const newMovie = {
    title,
    director_name,
    release_year,
    rating
  };

  addMovie(newMovie);
  e.currentTarget.reset();
  onCloseDialog();
}
