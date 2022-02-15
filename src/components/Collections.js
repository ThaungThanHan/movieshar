import './HomePage.scss'
import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from './Header';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grids from './Grids';

const Collections = () => {
    const [collections,setCollections] = useState([])
    const collectionId = useParams().id;
    console.log(collectionId)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/collection/${collectionId}?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US`).then(response=>{
            setCollections(response.data)
        }).catch(err=>console.log(err))
    },[])   
    console.log(collections)
    return(
        <div>
            <Header title={collections.name}/>
            <Grids data={collections.parts} type="movies"/>
        </div>
    )
}

export default Collections;