/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero(){
    // destruct movie state
    const [movie, setMovie] = useState("");

    useEffect(async() => {
        // melakukan effect: fetch data movie(api)
        const response = await fetch("https://www.omdbapi.com/?apikey=d7497266&i=tt3896198");

        const data = await response.json();
        setMovie(data);
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
                    <p className={styles.hero__description}>{movie.Plot}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={movie.Poster} alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;