import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Header from './Header';
import axios from 'axios';
import "./Overview.scss";
const MovieOverview = () => {
    const id = useParams().id;
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US`)
        .then(res=>setMovie(res.data)).catch(err=>console.log(err))
    },[])
    console.log(movie)
    return(
        <div>
        <Header title={movie.tagline} />
        <div className="OverviewContainer">
            <div className="ImageContainer">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{width:"50rem",height:"50rem"}} />
            </div>
            <div className="DetailsContainer">
                <div className="DetailsContainer--details">
                    <div className="DetailsText">
                        <p className="DetailsText--column">Title</p>
                        <p className="DetailsText--row">{movie.title}</p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Genres</p>
                        <p className="DetailsText--row">
                            {movie.length !== 0 ? movie.genres.map((gen)=>(<p>{gen.name}</p>)): null}
                        </p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Status</p>
                        <p className="DetailsText--row">{movie.status}</p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Duration</p>
                        <p className="DetailsText--row">{movie.runtime} mins</p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Website</p>
                        <a className="DetailsText--row" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>{`https://www.imdb.com/title/tt0348150/${movie.imdb_id}`}</a>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Collection:</p>
                        {movie.length !== 0 && movie.belongs_to_collection ?
                        <Link to={`/collections/${movie.belongs_to_collection.id}`}><p className="DetailsText--row">{movie.belongs_to_collection.name}</p></Link>        
                        : <p>N/A</p>      
                        }
                    </div>
                </div>
                <div className="companiesContainer">
                    {movie.length !== 0 ? 
                        movie.production_companies.map((com)=>(
                        <img style={{width:"10rem",height:"10rem",marginRight:"5rem"}} src={`https://image.tmdb.org/t/p/w500/${com.logo_path}`} />
                        )) : null
                    }

                </div>
            </div>
        </div>
        </div>
    )
}

export default MovieOverview;