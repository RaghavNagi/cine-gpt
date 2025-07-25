const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-5/6">{overview}</p>
        <div>
            <button className="bg-slate-100 text-black p-4 px-10 text-xl rounded-lg text-black hover:bg-opacity-80">&#9658; Play</button>
            <button className="mx-4 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">&#9432; More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle