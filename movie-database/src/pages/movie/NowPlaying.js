import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){
    // buat dispatch: untk trigger action
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS('now_playing'));
        
        dispatch(updateMovies(res.data.results));
    }

    return (
        <div>
            <Hero />
            <Movies title='Now Playing Movies'/>
        </div>
    );
}

export default NowPlaying;