import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const contact = () => {

  const [formState, setFormState] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

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
            <Input 
            name="name"
            onChange={handleInputChange}
            aria-describedby="my-helper-text" />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Email Address</InputLabel>
            <Input 
            name="email"
            onChange={handleInputChange}
            aria-describedby="my-helper-text" />
          </FormControl>
        </Grid>
      
        <Grid item xs={12} md={6} lg={8}>
          <TextField
            label="Message"
            multiline
            minRows={4}
            maxRows={8}
            fullWidth
            name="message"
            onchange={handleInputChange}
            />
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            <Button>Submit</Button>
          </Grid>
        </Grid>

      </Grid>      
    </>
  )
}

export default contact