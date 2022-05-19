import StyledMovie from "./Movie.styled";

function Movie(props){
    // destructing object
    const {title, year, poster} = props.movie;
    
    return (
        <StyledMovie>
            <img src={poster} alt="" />
            <h3>{title}</h3>
            <p>{year}</p>
        </StyledMovie>
    );
}

export default Movie;