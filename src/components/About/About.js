import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photo from '../../Assets/photos/Parin1.jpeg'
import Avatar from '@mui/material/Avatar';


const About = () => {
  return (
    <Grid>
      <Grid justifyContent="center" container padding={2} spacing={2}>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={4}>
          <Avatar alt="Portrait" src={photo} sx={{ width: 1, height: 1}}></Avatar>
        </Grid>

        <Grid item md={1}></Grid>

        <Grid item xs={12} md={4}>
          <h1>Parin Thalangdee</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ab quam fuga voluptate quis id soluta delectus tenetur illum ea! Placeat incidunt nemo natus, maiores quidem itaque quas dolorem in.</p>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default About