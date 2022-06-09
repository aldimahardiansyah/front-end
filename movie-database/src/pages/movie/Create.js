import AddMovieForm from "../../components/AddMovieForm/AddMovieForm"
import Hero from "../../components/Hero/Hero"

function CreateMovie({movies, setMovies}){
    return (
        <div>
            <Hero />
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </div>
    )
}

export default CreateMovie