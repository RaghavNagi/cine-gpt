import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header />

      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
      */}
      
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
