import {Link} from 'react-router-dom';
import './Header.scss'
const Header = ({title}) => {
    return(
            <div data-testid="header" class="Header">
                <h3>MovieSearch</h3>
                <h3>{title}</h3>
                <div className="dropdown">
                    <p>Search</p>
                    <div className="dropdown-menu">
                        <Link style={{textDecoration:"none",color:"black"}} to="/movieshar/searchmovies"><p>Movies</p></Link>
                        <Link style={{textDecoration:"none",color:"black"}} to="/searchshows"><p>Tv Shows</p></Link>
                    </div>
                </div>      
            </div>
    )
}

export default Header;