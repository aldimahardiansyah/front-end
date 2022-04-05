import styles from "./AddMovieForm.module.css";
import React, {useState} from 'react';
import { nanoid } from 'nanoid';

function AddMovieForm(props){
    const {movies, setMovies} = props;

    // buat variable state title
    const [title, setTitle] = useState("Spiderman");
    const [date, setDate] = useState(2013);

    // state untuk error title dan date
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    // buat  fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        // validasi form harus diisi
        if(title === ''){
            setIsTitleError(true);
        } else if(date === ''){
            setIsDateError(true);
        } else {
            const movie = {
                id: nanoid(),
                year: date,
                poster: "https://picsum.photos/300/400",
                title: title,
                type: "movie"
            }
    
            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsDateError(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.form__left}>
                <img src="https://picsum.photos/600/400" alt="" className={styles.form__image} />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Add Movie</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form__control}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.form__input} value={title} onChange={handleTitle}/>
                        
                        {/* jika isTitleError true, tampilkan teks*/}
                        {isTitleError && <span>Title wajib diisi!</span>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="number" className={styles.form__input} value={date} onChange={handleDate} />

                        {/* jika isDateError true, maka tampilkan error */}
                        {isDateError && <span>Tahun wajib diisi!</span>}
                    </div>
                    <button type="submit" className={styles.form__button}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddMovieForm;