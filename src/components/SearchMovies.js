import {useState,useEffect} from 'react';

import Header from './Header'
import "./search.scss";
import Grids from './Grids';
import axios from 'axios';

const SearchMovies = () => {
    const [movies,setMovies] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onChangeSearch = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(res=>setMovies(res.data.results)).catch(err=>console.log(err))
    },[searchText])
    console.log(movies)
    return(
        <div>
            <Header title="Movies"/>
            <div className="searchBarContainer">
            <input onChange={(e)=>onChangeSearch(e)} className="searchBar" placeholder="Search Movies..." />
            </div>
            <Grids data={movies} type="movies" />
        </div>
    )
}

export default SearchMovies;