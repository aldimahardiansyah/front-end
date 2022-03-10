/**
 * Membuat Component Hello
 * Componenet merender element-element HTML
 */

function Hello({nama, major}){
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {nama}, Frontend Engineer</p>
            <p>Jurusan { major }</p>
        </div>
    );
}

/**
 * Membuat component header
 */
function Header(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

/**
 * Membuat Component Main
 * Menampung element utama
 */
function Main(){
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

/**
 * Membuat Component Footer
 */
function Footer(){
    return(
        <footer>
            <p>Copyright @aldi.mds</p>
            <small>Created by React.js</small>
        </footer>
    )
}

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

// const nama = 'Aldi';
// const elementHeading = <h3>Hai, nama saya {nama}</h3>

/**
 * Render Element
 */

// ReactDOM.render(elementHeading, document.getElementById("root"));

/**
 * Render Component Hello ke HTML
 */
ReactDOM.render(<App />, document.getElementById("root"));