import React from 'react'
import Grid from '@mui/material/Grid';


const Work = () => {
  let projects = [{
    title: "example",
    github: "",
    heroku: "",
    image: ""
  },
  {
    title: "example",
    github: "",
    heroku: "",
    image: ""
  },
  {
    title: "example",
    github: "",
    heroku: "",
    image: ""
  },
  {
    title: "example",
    github: "",
    heroku: "",
    image: ""
  },
  {
    title: "example",
    github: "",
    heroku: "",
    image: ""
  },
  {
    title: "example",
    github: "",
    heroku: "",
    image: ""
  }]

  return (
    <Grid>
      <Grid justifyContent="center" container padding={2}>
          <h1>My Work</h1>
      </Grid>
    </Grid>
  )
}

export default Work