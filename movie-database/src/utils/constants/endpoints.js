const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.themoviedb.org/3";

// const ENDPOINTS = {
//     POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
//     NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
//     TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
//     // DETAIL: `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`,
//     RECOMMENDATION: `${BASE_URL}/movie/${CurrentId.id}/recommendations?api_key=${API_KEY}`,
//     TRENDING: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
// };

function ENDPOINTS(endpoint, movieId = ''){
    if(endpoint === 'popular'){
        return `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    } 
    
    else if(endpoint === 'now_playing'){
        return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
    } 
    
    else if(endpoint === 'top_rated'){
        return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
    } 
    
    else if(endpoint === 'recommendation'){
        return `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`;
    } 
    
    else if(endpoint === 'trending'){
        return `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    } 
    
    else if(endpoint === 'detail'){
        return `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    }
}

export default ENDPOINTS;