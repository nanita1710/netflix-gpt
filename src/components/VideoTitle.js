import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-20 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 md:py-2 px-3 my-2 md:m-0 rounded-lg hover:bg-opacity-80 text-lg">
          {' '}
          ▶ Play
        </button>
        <button className="bg-gray-500 hidden md:inline-block mx-2 text-white px-4 py-2 rounded-lg bg-opacity-50 text-lg">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
