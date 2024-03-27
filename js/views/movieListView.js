import { subscribe } from "../models/movieListModel";
import { movieTemplate } from "../templates/movieTemplate";
import { deleteMovieController } from "../controllers/deleteMovieController";
import { updateToDoController } from "../controllers/updateToDoController";
import { addMovieController } from "../controllers/addMovieController";

let view;

export function movieListView() {
  view = document.querySelector("#movie-list");
  view.addEventListener("click", onHandleClick);
}

subscribe(render);

function render(data) {
  const div = document.createElement("div");
  const movieList = document.querySelector("#item-container");
  movieList.replaceChildren();
  //   const testMovie = div.prepend(movieTemplate(testObject));

  data.forEach((movie) => {
    div.prepend(movieTemplate(movie));
  });

  movieList.append(div);
}

function onHandleClick(event) {
  switch (event.target.id) {
    case "delete":
      deleteMovieController(event.target.dataset.uid);
      break;
    case "edit":
      updateToDoController(event.target.dataset.uid);
      break;
    case "add":
      addMovieController();
      break;
  }
}
