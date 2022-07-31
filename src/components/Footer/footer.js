import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css'

const footer = () => {
  return (
    <>
      <Grid className="footer" container justifyContent="center" spacing={2} padding={2}>
        <Grid item>
          <GitHubIcon></GitHubIcon>
        </Grid>
      </Grid>
    </>
  )
}

export default footer