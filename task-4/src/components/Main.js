import Hello from './Hello';

/**
 * Membuat Component Main
 * Menampung element utama
 */
 const Main = () => {
    return(
        <main>
            <Hello nama="Johan" major="Informatika"/>
            <Hello nama="Alif" major="Informatika"/>
            <Hello nama="Hanifa" major="Informatika"/>
            <Hello nama="Ari" major="Informatika"/>
            <Hello nama="Hendar" major="Informatika"/>
        </main>
    )
}

export default Main;