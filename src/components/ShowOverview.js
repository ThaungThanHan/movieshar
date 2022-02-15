import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import "./Overview.scss";
const ShowOverview = () => {
    const id = useParams().id;
    const [show,setShow] = useState([])
    const episode_count = 0;
    useEffect(()=>{
        axios.get(`
            https://api.themoviedb.org/3/tv/${id}?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US`)
        .then(res=>setShow(res.data)).catch(err=>console.log(err));
    },[])
    console.log(show)
    return(
        <div>
        <Header title={show.name} />
        <div className="OverviewContainer">
            <div className="ImageContainer">
                <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} style={{width:"50rem",height:"50rem"}} />
            </div>
            <div className="DetailsContainer">
                <div className="DetailsContainer--details">
                    <div className="DetailsText">
                        <p className="DetailsText--column">Title</p>
                        <p className="DetailsText--row">{show.name}</p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Genres</p>
                        <p className="DetailsText--row">
                            {show.length !== 0 ? show.genres.map((gen)=>(<p>{gen.name}</p>)): null}
                        </p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Status</p>
                        <p className="DetailsText--row">{show.status}</p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">No. of Seasons</p>
                        <p className="DetailsText--row">
                            {show.length !== 0 ? show.seasons.map((season)=>(<p>{season.name} - {season.episode_count} episodes</p>)): null}
                        </p>
                    </div>
                    <div className="DetailsText">
                        <p className="DetailsText--column">Status</p>
                        <p className="DetailsText--row">{episode_count}</p>
                    </div>
                </div>
                <div className="companiesContainer">
                    {show.length !== 0 ? 
                        show.production_companies.map((com)=>(
                        <img style={{width:"10rem",height:"10rem"}} src={`https://image.tmdb.org/t/p/w500/${com.logo_path}`} />
                        )) : null
                    }
                </div>
            </div>
            </div>
            <div style={{border:"1px solid red",height:"20rem",backgroundColor:"white",padding:5}}>
                <p style={{fontSize:"2rem"}}>{show.overview}</p>
            </div>
        </div>
    )
}

export default ShowOverview;