import StyledMovie from "./Movie.styled";

function Movie(props){
    // destructing object
    const {title, year, poster, release_date, poster_path} = props.movie;
    
    return (
        <StyledMovie>
            <img src={poster || `https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
            <h3>{props.iteration && props.iteration + '.'} {title}</h3>
            <p>{year || release_date}</p>
        </StyledMovie>
    );
}

export default Movie;