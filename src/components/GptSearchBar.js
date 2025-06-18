import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
import ai from '../utils/genAi'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const langKey = useSelector((store) => store.config.lang)

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    )
    const json = await data.json()
    return json.results
  }

  const handleGptSearch = async () => {
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query : ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya'

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: gptQuery,
    })
    console.log(response.text)

    // console.log(gptResults.choices?.[0]?.message?.content)

    const gptMovies = response.text.split(',')

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    )
    console.log(tmdbResults)
  }
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          className="p-2 md:p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className=" m-4 py-2 px-1 md:px-4 col-span-3 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
