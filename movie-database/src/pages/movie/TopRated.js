import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function ToptRatedMovie(){
    // membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTopRatedMovies = async () => {
        const res = await axios(ENDPOINTS('top_rated'));
        
        // simpan data ke state movie
        setMovies(res.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title='Top Rated Movies' iteration={true}/>
        </div>
    );
}

export default ToptRatedMovie;