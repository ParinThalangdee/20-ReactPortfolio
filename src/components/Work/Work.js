import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'


const Work = () => {
  let projects = [{
    title: "PokeStats",
    tech: "Javascript, HTML, CSS, Express",
    github: "https://github.com/Godoflaugh/OG-Pokemon-Cards",
    deployed: "https://damp-meadow-22664.herokuapp.com/",
    image: "../../Assets/photos/pokestats.png"
  },
  {
    title: "Dinner For Schmucks",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/DesertCow/DinnerWithSchmucks",
    deployed: "https://desertcow.github.io/DinnerWithSchmucks/index.html",
    image: "../Assets/DinnerForSchucks.png"
  },
  {
    title: "Weather Dashboard",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/06-WeatherDashboard",
    deployed: "https://parinthalangdee.github.io/06-WeatherDashboard/",
    image: ""
  },
  {
    title: "Work Day Scheduler",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/05-WorkDayScheduler",
    deployed: "https://parinthalangdee.github.io/05-WorkDayScheduler/",
    image: ""
  },
  {
    title: "Javascript Quiz",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/04-JavascriptQuiz",
    deployed: "https://parinthalangdee.github.io/04-JavascriptQuiz/",
    image: ""
  },
  {
    title: "Send Foodz",
    tech: "React, MongoDB, Javascript",
    github: "https://github.com/Godoflaugh/Project-3",
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