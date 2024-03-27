import { deleteMovie } from "../models/movieListModel.js";

let dialog;
let deleteButton;
let exitButton;
let uid;

export function deleteMovieController(movieUid) {
  uid = movieUid;
  dialog = document.querySelector("#delete-movie");
  // TODO: the exit id button is being used in 3 places, need to have unique id name for each button (create, edit, delete)
  exitButton = dialog.querySelector("#exit");
  deleteButton = dialog.querySelector("#delete");

  // troubleshooting
  console.log(exitButton);
  console.log(deleteButton);

  configureListeners();
  dialog.showModal();
}

function configureListeners() {
  exitButton.addEventListener("click", onCloseDialog);
  deleteButton.addEventListener("click", onDeleteMovie);
}

function onCloseDialog() {
  console.log("close button clicked");
  dialog.close();
}

function onDeleteMovie() {
  console.log("delete button clicked " + uid);
  deleteMovie(uid);
  onCloseDialog();
}
