import {useEffect, useState} from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    // membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS('popular'));
        
        // simpan data ke state movie
        setMovies(res.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title='Popular Movies'/>
        </div>
    );
}

export default PopularMovie;