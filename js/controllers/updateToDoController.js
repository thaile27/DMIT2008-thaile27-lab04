import { getStore } from "../models/store";
import { updateMovie } from "../models/movieListModel";

let dialog;
let closeButton;
let exitButton;
let form;
let uid;

export function updateToDoController(itemUid) {
  uid = itemUid;
  const movie = getStore().find((item) => item.uid === uid);
  dialog = document.querySelector("#update-movie");
  exitButton = dialog.querySelector("#exit");
  closeButton = dialog.querySelector("#close");
  form = dialog.querySelector("#edit-form");
  configUi(movie);
  configureListeners();
  dialog.showModal();
}

function configUi(item) {
  dialog.querySelector("#title").value = item.title;
  dialog.querySelector("#director").value = item.director_name;
  dialog.querySelector("#releaseYear").value = item.release_year;
}

function configureListeners() {
  exitButton.addEventListener("click", onCloseDialog);
  closeButton.addEventListener("click", onCloseDialog);
  form.addEventListener("submit", onUpdateMovie);
}

function onUpdateMovie(event) {
  event.preventDefault();
  console.log("inside updateToDoController");
  const title = event.currentTarget.title.value.trim();
  const director_name = event.currentTarget.director.value.trim();
  const release_year = event.currentTarget.releaseYear.value.trim();

  const updatedMovie = {
    uid,
    title,
    director_name,
    release_year
  };

  console.log(updatedMovie);
  updateMovie(updatedMovie);
  dialog.close();
}

function onCloseDialog() {
  dialog.close();
}
