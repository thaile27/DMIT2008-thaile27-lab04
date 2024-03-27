import { getMovieData } from "./models/movieListModel";
import { movieListView } from "./views/movieListView";

async function appInit() {
  getMovieData();
  movieListView();
}

appInit();
