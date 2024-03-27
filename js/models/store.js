let store = [];
let instance;

const createStore = async (movies) => {
  if (instance) {
    throw new Error("New instance cannot be created!!");
  }
  instance = 1;

  store = movies;

  if (store.length) {
    return true;
  }
};

const getStore = () => {
  return store;
};

const removeFromStore = (uid) => {
  store = store.filter((movie) => movie.uid !== uid);
  return store; // return the new store
};

const updateStore = (updatedMovie) => {
  const index = store.findIndex((movie) => movie.uid === updatedMovie.uid);
  store = [...store.splice(0, index), updatedMovie, ...store.splice(index + 1)];
  return store;
};

const addToStore = (newMovie) => {
  store = [...store, newMovie];
  return store;
};

export { getStore, createStore, removeFromStore, updateStore, addToStore };
