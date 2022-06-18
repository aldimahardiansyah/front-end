import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function ToptRatedMovie(){
    // buat dispatch: untk trigger action
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTopRatedMovies = async () => {
        const res = await axios(ENDPOINTS.TOP_RATED);
        
        dispatch(updateMovies(res.data.results));
    }

    return (
        <div>
            <Hero />
            <Movies title='Top Rated Movies' iteration={true}/>
        </div>
    );
}

export default ToptRatedMovie;