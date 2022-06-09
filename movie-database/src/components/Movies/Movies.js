import styles from './Movies.module.css';
import Movie from '../Movie/Movie';
import { useSelector } from 'react-redux';

function Movies(props){
    // destructing props
    const {title, iteration = false} = props;

    // gunakan selector untuk akses state redux: movies
    const movies = useSelector(store => store.movies.movies);

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
            </section>
        </div>
    )
}

export default Movies;