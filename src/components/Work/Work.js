import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'


const Work = () => {
  let projects = [{
    title: "example1",
    tech: "javascript",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
    image: ""
  },
  {
    title: "example2",
    tech: "",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
    image: ""
  },
  {
    title: "example3",
    tech: "",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
    image: ""
  },
  {
    title: "example4",
    tech: "",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
    image: ""
  },
  {
    title: "example5",
    tech: "",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
    image: ""
  },
  {
    title: "example6",
    tech: "",
    github: "https://github.com/ParinThalangdee",
    deployed: "",
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
            <Card title={project.title} github={project.github} image={project.image} tech={project.tech}></Card>
          </Grid>
          )}

      </Grid>
    </>
  )
}

export default Work