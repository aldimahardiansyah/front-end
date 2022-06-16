import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail (){
    // buat dispatch: untk trigger action
    const dispatch = useDispatch();

    const { id } = useParams();
    
    useEffect(()=>{
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies(){
        const response = await axios(ENDPOINTS('recommendation', id));

        dispatch(updateMovies(response.data.results))
    }
    return (
        <div>
            <DetailMovie />
            <Movies title="Recommendation Movies"/>
        </div>
    )
}

export default Detail;