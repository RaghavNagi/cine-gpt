import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-5/6">{overview}</p>
        <div>
            <button>Play</button>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle