import {useState,useEffect} from 'react';

import Header from './Header'
import "./search.scss";
import Grids from './Grids';
import axios from 'axios';

const SearchShows = () => {
    const [Shows,setShows] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onChangeSearch = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(()=>{
        axios.get(`
        https://api.themoviedb.org/3/search/tv?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US&page=1&query=${searchText}&include_adult=false`)
        .then(res=>setShows(res.data.results)).catch(err=>console.log(err))
    },[searchText])
    console.log(Shows)
    return(
        <div>
            <Header title="Shows"/>
            <div className="searchBarContainer">
            <input onChange={(e)=>onChangeSearch(e)} className="searchBar" placeholder="Search Shows..." />
            </div>
            <Grids data={Shows} type="shows"/>
        </div>
    )
}

export default SearchShows;