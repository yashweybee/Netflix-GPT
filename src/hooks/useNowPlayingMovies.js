import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    });

}

export default useNowPlayingMovies
