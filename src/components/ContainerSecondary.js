import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const ContainerSecondary = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  )
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
  return (
    nowPlayingMovies &&
    popularMovies && (
      <div className="bg-black">
        <div className="relative mt-0 md:-mt-52 pl-4 md:p-12 z-20">
          <MovieList title={'Now Playing'} movies={nowPlayingMovies} />
          {/* <MovieList title={'Trending'} movies={movies} /> */}
          <MovieList title={'Popular'} movies={popularMovies} />
          {/* <MovieList title={'Upcoming'} movies={movies} /> */}
        </div>
      </div>
    )
  )
}

export default ContainerSecondary
