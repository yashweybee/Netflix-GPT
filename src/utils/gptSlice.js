import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovieResults: null,
        gptMovieNames: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch

        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.gptMovieResults = movieResults
            state.gptMovieNames = movieNames
        }
    }
})

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions

export default gptSlice.reducer //gptReducer