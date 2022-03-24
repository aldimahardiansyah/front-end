import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.container}>
            <footer>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Created by Aldi</p>
            </footer>
        </div>
    );
}

export default Footer;