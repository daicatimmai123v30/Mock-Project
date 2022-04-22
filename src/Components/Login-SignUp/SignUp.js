import React, { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Alert, AlertTitle } from '@mui/material'

function SignUp (props) {
  const [messages, setMessages] = useState({
    visible: false,
    text: '',
    isError: false
  })
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password')
    }
    const users = JSON.parse(localStorage.getItem('USERS'))
    if (users == null || users.length == 0) {
      const newUsers = [{ ...user, id: 'user1' }]
      localStorage.setItem('USERS', JSON.stringify(newUsers))
      setMessages({
        ...messages,
        text: 'Thêm tài khoản thành công',
        visible: true
      })
    } else {
      const findUser = users.filter(value =>
        value.email == user.email ? true : false
      )
      if (findUser.length > 0) {
        setMessages({
          ...messages,
          text: 'Email đã tồn tại',
          visible: true,
          isError: true
        })
      } else {
        users.push({...user,id:'user'+(users.length+1)})
        setMessages({
          ...messages,
          text:'Thêm tài khoản thành công',
          visible:true
        })
        localStorage.setItem('USERS',JSON.stringify(users))
      }
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      {messages.visible ? (
        <Alert severity={messages.isError ? 'warning' : 'success'}>
          <AlertTitle>{messages.text}</AlertTitle>
        </Alert>
      ) : null}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 2,
          borderRadius: '16px',
          borderColor: 'secondary.main'
        }}
      >
        <Typography component='h1' variant='h2' color='secondary'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ m: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/Login' variant='body2'>
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp
