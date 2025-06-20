import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowpPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
  },
})

export const { addNowpPlayingMovies, addTrailerVideo, addPopularMovies } =
  movieSlice.actions

export default movieSlice.reducer
