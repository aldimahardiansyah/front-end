// import createSlice
import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// buat slice: generate action dan reducers
// Params object: name, initial state, reducers
const movieSlice = createSlice({
    // nama slice
    name: "Movies Slice",

    // nilai awal state movies
    initialState: {
        movies: data
    },

    // membuat reducer: untuk update state
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        deleteMovie(){},
    },
});

// generate action dan reducers
const moviesReducer = movieSlice.reducer;
const {addMovie, deleteMovie} = movieSlice.actions;

// Export
export default moviesReducer;;
export {addMovie, deleteMovie};