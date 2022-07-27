import React from 'react'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const contact = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3} padding={3}>

        <Grid item xs={12} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Email Address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <TextField
            label="Message"
            multiline
            minRows={4}
            maxRows={8}
            fullWidth
            variant='filled'
            />
        </Grid>

      </Grid>      
    </>
  )
}

export default contact