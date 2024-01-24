import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            populerMovies: null,
            tailerVideo: null,

        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload
            },
            addPopulerMovies: (state, action) => {
                state.populerMovies = action.payload
            },
            addTrailerVideo: (state, action) => {
                state.tailerVideo = action.payload
            }

        }

    })

export const { addNowPlayingMovies, addTrailerVideo, addPopulerMovies } = moviesSlice.actions
export default moviesSlice.reducer; //movieReducer