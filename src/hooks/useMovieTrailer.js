import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const jsonData = await data.json();
        // console.log(jsonData.results);

        const filterVideoData = jsonData.results.filter(
            (vid) => vid.type === "Trailer"
        );
        const trailer = filterVideoData.length
            ? filterVideoData[0]
            : jsonData.results[0];

        // console.log(trailer);

        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        getMovieVideos();
    }, []);


}

export default useMovieTrailer;