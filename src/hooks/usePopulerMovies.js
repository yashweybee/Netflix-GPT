import { API_OPTIONS, POPULER_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopulerMovies = () => {

    const dispatch = useDispatch();
    const getPopulerMovies = async () => {
        const data = await fetch(POPULER_MOVIES_URL, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopulerMovies(jsonData.results));
    };

    useEffect(() => {
        getPopulerMovies();
    });

}

export default usePopulerMovies
