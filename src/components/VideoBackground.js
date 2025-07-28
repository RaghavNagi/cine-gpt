import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    
    
  return (
    <div className="shadow-[0_8px_20px_rgba(0,0,0,0.6)] overflow-visible">
      <iframe
      className="w-screen aspect-video shadow-[0_6px_12px_rgba(33,33,33,0.6)]"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div> 
  );
}
export default VideoBackground;
