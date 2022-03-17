import styles from './Movies.module.css';

function Movies(){
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>

                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>

                    <div className={styles.movie}>
                        <img src="https://picsum.photos/300/400" alt="" className={styles.movie__image} />
                        <h3 className={styles.movie_title}>Title Movie</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Movies;