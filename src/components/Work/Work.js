import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'


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
    <>
      <Grid container justifyContent="center">
          <h1>My Work</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        {projects.map(project =>
          <Grid item>
            <Card title={project.title} github={project.github} image={project.image}></Card>
          </Grid>
          )}

      </Grid>
    </>
  )
}

export default Work