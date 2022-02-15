import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import SearchMovies from './SearchMovies';
import SearchShows from './SearchShows';
import MovieOverview from './MovieOverview';
import ShowOverview from './ShowOverview';
import Collections from './Collections'
const Main = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/movieshar" element={<HomePage/>}/>
                <Route path="/movieshar/searchmovies" element={<SearchMovies/>}/>
                <Route path="searchshows" element={<SearchShows/>}/>
                <Route path="movies/:id" element={<MovieOverview/>}/>
                <Route path="shows/:id" element={<ShowOverview/>}/>
                <Route path="collections/:id" element={<Collections/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;