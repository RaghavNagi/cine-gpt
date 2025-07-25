import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
     // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
}


export default useUpcoming;