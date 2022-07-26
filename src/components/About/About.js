import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photo from '../../Assets/photos/Parin1.jpeg'
import Avatar from '@mui/material/Avatar';


const About = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Avatar alt="Portrait" src={photo}></Avatar>
        </Grid>
      </Grid>
    </>
  )
}

export default About