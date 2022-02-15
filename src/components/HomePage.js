import './HomePage.scss'
import {useState,useEffect} from 'react';
import axios from "axios";
import Header from './Header';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grids from './Grids';

const HomePage = () => {
    const [trendings,setTrendings] = useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=ce65fdc89d7b40c250cf269f97661585").then(response=>{
            setTrendings(response.data.results)
        }).catch(err=>console.log(err))
    },[])   
    console.log(trendings)
    return(
        <div>
            <Header title="Trendings"/>
            <Grids data={trendings} type="movies"/>
        </div>
    )
}

export default HomePage;