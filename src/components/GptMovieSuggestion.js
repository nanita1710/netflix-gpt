import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt)
  console.log(movieResults, movieNames)

  if (!movieNames) return null
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
