import styles from './Movies.module.css';
import Movie from '../Movie/Movie';

function Movies(props){
    // destructing props
    const {movies, setMovies, title, iteration = false} = props;

    function handleClick(){
        const movie = {
            id: "xyz",
            title: "Spiral Jigsaw",
            poster: "https://picsum.photos/300/400",
            year: 2018,
            type:"movie"
        }

        // jalanin fungsi setMovie
        setMovies([...movies, movie]);
    }
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>

                <div className={styles.movie__container}>
                    {/* looping: map */}
                    {
                        movies.map((movie, i) => <Movie movie={movie} iteration={iteration && i+1} key={movie.id}/>)
                    }
                </div>

                {/* membuat button */}
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;