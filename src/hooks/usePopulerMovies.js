import { API_OPTIONS, POPULER_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopulerMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopulerMovies = () => {
    const populerMovies = useSelector((store) => store?.movies?.populerMovies);
    const dispatch = useDispatch();
    const getPopulerMovies = async () => {
        const data = await fetch(POPULER_MOVIES_URL, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopulerMovies(jsonData.results));
    };

    useEffect(() => {
        !populerMovies && getPopulerMovies();
    });

}

export default usePopulerMovies
