// import configureStore: unutk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

// membuat store: unutk state global
// menerima param object: reducer
// menyimpan slice yang sudah dibuat
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

// export
export default store;