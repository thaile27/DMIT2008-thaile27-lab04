import { ref, set, get, push, child, remove, update } from "firebase/database";
import { db } from "../lib//firebase/config/firebaseInit";
import { createStore, removeFromStore, updateStore, addToStore } from "./store";

let observers = [];

export function subscribe(fn) {
  observers.push(fn);
}

export function notify(data) {
  observers.forEach((observer) => observer(data));
}

export async function getMovieData() {
  const dbRef = ref(db, "movies");
  const response = await get(dbRef);
  let payload = await response.val();
  payload = Object.entries(payload);
  let movies = payload.map((movie) => {
    return { ...movie[1], uid: movie[0] };
  });

  if (await createStore(movies)) {
    notify(movies);
  }
}

export function deleteMovie(uid) {
  const dbRef = ref(db, `movies/${uid}`);
  remove(dbRef);
  const store = removeFromStore(uid);
  notify(store);
}

export function updateMovie(updatedMovie) {
  let payload = updatedMovie;
  const dbRef = ref(db, `movies/${payload.uid}`);
  update(dbRef, payload);
  const store = updateStore(payload);
  notify(store);
}

export function addMovie(newMovie) {
  const dbRef = ref(db, "movies");
  push(dbRef, newMovie);
  const store = addToStore(newMovie);
  notify(store);
}
