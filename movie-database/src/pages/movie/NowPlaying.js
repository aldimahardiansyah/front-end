import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){
    // membuat state movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS('now_playing'));
        
        // simpan data ke state movie
        setMovies(res.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title='Now Playing Movies'/>
        </div>
    );
}

export default NowPlaying;