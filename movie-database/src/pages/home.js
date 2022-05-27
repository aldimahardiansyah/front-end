import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";

function Home(){
    const [movies, setMovies] = useState(data);

    return(
        <div>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies} title='Latest Movies'/>
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </div>
    )
}

export default Home;