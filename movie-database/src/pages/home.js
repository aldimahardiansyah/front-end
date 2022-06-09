import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home({movies}){
    return(
        <div>
            <Hero/>
            <Movies title='Latest Movies'/>
        </div>
    )
}

export default Home;