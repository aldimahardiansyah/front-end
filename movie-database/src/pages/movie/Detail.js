import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail (){
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    
    useEffect(()=>{
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies(){
        const response = await axios(ENDPOINTS('recommendation', id));

        setMovies(response.data.results);
    }
    return (
        <div>
            <DetailMovie />
            <Movies movies={movies} title="Recommendation Movies"/>
        </div>
    )
}

export default Detail;