import {useEffect, useState} from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie(){
    // buat dispatch: untk trigger action
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS('popular'));
        
        // simpan data ke state movie
        dispatch(updateMovies(res.data.results))
    }

    return (
        <div>
            <Hero />
            <Movies title='Popular Movies'/>
        </div>
    );
}

export default PopularMovie;