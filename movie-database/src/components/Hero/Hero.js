/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

function Hero(){
    // destruct movie state
    const [movie, setMovie] = useState("");

    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
    const genres = movie && movie.genres.map(genre=>genre.name).join(", ");

    const API_KEY = process.env.REACT_APP_API_KEY;

    async function getTrandingMovies(){
        const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
        const response = await axios(URL);
        return response.data.results[0];
    }

    // membuat function untuk mendapatkan detail movie
    async function getDetailMovie(){
        const trandingMovie = await getTrandingMovies();
        const id = trandingMovie.id;

        // fetch detail movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

        const response = await axios(URL);

        setMovie(response.data);

    }

    useEffect(getDetailMovie, []);

    return (
        <HeroStyled>
            <section>
                <div className="hero__left">
                    <h2>{movie.title}</h2>
                    <h3>Genre: {genres}</h3>
                    <p>{movie.overview}</p>
                    <Button as="a" href={trailer} target='_blank' variant="secondary" size="lg">Watch Movie</Button>
                </div>
                <div className="hero__right">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                </div>
            </section>
        </HeroStyled>
    );
}

export default Hero;