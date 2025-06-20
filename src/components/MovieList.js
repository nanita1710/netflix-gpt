import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  text-white">
      <div>
        <h1 className="text-lg md:text-3xl py-6">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex space-x-3">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList
