// Import CSS Module
import { Link } from "react-router-dom";
import NavbarStyled from "./Navbar.styled";

// buat component navbar
function Navbar(){
    return(
        <NavbarStyled>
            <nav>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/create">Add Movie</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;