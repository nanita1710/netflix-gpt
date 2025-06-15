import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-20 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-opacity-80 text-lg">
          {' '}
          ▶ Play
        </button>
        <button className="bg-gray-500 mx-2 text-white px-4 py-2 rounded-lg bg-opacity-50 text-lg">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
