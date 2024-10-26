import axios from "axios";
import { useEffect, useState } from "react"
import MovieInfo from "../components/LSK/organism/MovieInfo";
import { useParams } from "react-router-dom";

type movieApi = {
    movieNM: string,
    movieIMG: string,
    movieCONTENT: string,
}

const MovieInfoPage = () => {
    const movieID = Number(useParams().id);
    if (isNaN(movieID)){
        console.log('id -> NaN');
    }

    return <div>
        <MovieInfo  movieID={movieID}/>
    </div>
}

export default MovieInfoPage;