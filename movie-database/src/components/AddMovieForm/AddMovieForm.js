import styles from "./AddMovieForm.module.css";
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";
import Button from "../ui/Button";

function AddMovieForm(props){
    const {movies, setMovies} = props;

    // membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

    // state untuk error input form
    // const [isTitleError, setIsTitleError] = useState(false);
    // const [isDateError, setIsDateError] = useState(false);
    // const [isLinkError, setIsLinkError] = useState(false);
    // const [isTypeError, setIsTypeError] = useState(false);
    const [formError, setFormError] = useState({
        isTitleError: false,
        isDateError: false,
        isLinkError: false,
        isTypeError: false
    });

    // membuat fungsi handleChange untuk handle semua input form
    function handleChange(e){
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // destruct fromData
    const {title, date, poster: link, type} = formData;

    // destruct formError
    const {isTitleError, isDateError, isLinkError, isTypeError} = formError;

    function validate(){
        // validasi - form harus diisi
        if(title === ''){
            setFormError({
                ...formError,
                isTitleError: true
            });
            return false;
        } else if(date === ''){
            setFormError({
                ...formError,
                isDateError: true
            });
            return false;
        } else if(link === ''){
            setFormError({
                ...formError,
                isLinkError: true
            });
            return false;
        } else if(type === ''){
            setFormError({
                ...formError,
                isTypeError: true
            });
            return false;
        } else{
            setFormError({
                isTitleError: false,
                isDateError: false,
                isLinkError: false,
                isTypeError: false
            })
            return true;
        }
    }

    function addMovie(){
        const movie = {
            id: nanoid(),
            year: date,
            poster: link,
            title: title,
            type: type
        }
        setMovies([...movies, movie]);
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && addMovie();
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
                        <input id="title" type="text" className={styles.form__input} value={title} onChange={handleChange} name="title"/>
                        
                        {/* jika isTitleError true, tampilkan teks*/}
                        {isTitleError && <Alert>Title Wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="number" className={styles.form__input} value={date} onChange={handleChange} name="date" />

                        {/* jika isDateError true, maka tampilkan error */}
                        {isDateError && <Alert>Year wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="link">Picture link</label>
                        <input id="link" type="url" className={styles.form__input} value={link} onChange={handleChange} name="poster" />

                        {/* jika link kosong, maka tampilkan error */}
                        {isLinkError && <Alert>Picture wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="type">Type</label>
                        <select name="type" id="type" className={styles.form__input} value={type} onChange={handleChange} >
                            <option value="">-- Choose movie type --</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isTypeError && <Alert>Type wajib diisi!</Alert>}
                    </div>
                    <Button full>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default AddMovieForm;