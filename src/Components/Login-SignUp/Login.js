import React, { useState,useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, AlertTitle } from '@mui/material'

import { useNavigate } from 'react-router';

import {USER_LOGIN} from '../../Enum/Constants'

import {AuthContext} from '../../Contexts/AuthContext'
function Login(props) {

    const {distpatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const [messages, setMessages] = useState({
      visible: false,
      text: '',
      isError: false
    })

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const users = JSON.parse(localStorage.getItem('USERS'))
    const findUser  = users.filter(value => value.email === email && value.password === password?true : false);
    if(findUser.length>0){
      distpatch(USER_LOGIN,findUser[0])
      navigate('/Homepage')
    }else{
      setMessages({
        ...messages,
        text:'Email hoặc mật khẩu không đúng',
        visible:true,
        isError:true
      })
    }
      
  };

  return (
      <Container component="main" maxWidth="xs" >
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
            border: 1,
            borderRadius: '16px',
            borderColor: 'secondary.main'
          }}
        >
          <Typography component="h" variant="h2" color="secondary">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color='secondary'/>}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
              sx={{ mt: 3, mb: 2,}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  SignUp now
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default Login;