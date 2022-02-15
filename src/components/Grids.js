import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Grids = ({data,type}) => {
    return(
    <Box style={{padding:"5rem"}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { data && data.map((item,index)=>(
          <Grid style={{marginTop:"2rem"}} item xs={2} sm={4} md={2} key={index}>
            <Item style={{height:"20rem",padding:0}}>
                <Link to={type == "movies" ? `/movies/${item.id}` : `/shows/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{cursor:"pointer",width:"100%",height:"100%"}}/>
                </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    )
}

export default Grids;