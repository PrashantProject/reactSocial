import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

 const Login=()=> {
  const navigat= useNavigate();
  const [loading, setLoading]=useState(false); 
  const [email, setEmail]=useState("");
  const [password, setPassword]= useState("");


  const loginSubmit = async(event) => {
    setLoading(true)
    event.preventDefault();
    if(!email){
    
      toast.warn("Email is requered", {
        position: "top-center",
    
      });
    }
    if(!password){
    
      toast.warn("Password is requred", {
        position: "top-center",
       
      });
    }

    try {
      if(email && password ){
        const respon= await axios.post("https://socialbackend-426x.onrender.com/user/login",{email,password})
        if(respon?.data){
          localStorage.setItem("token", respon?.data?.data?.token )
          toast.success(respon?.data?.message, {
            position: "top-center",
            onClose: () => navigat("/")
          });
        }
      }
     
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      });
      setLoading(false)
    }
   
    
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={loginSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
           
              { loading ?     <CircularProgress color="secondary" /> :   "Login"}
           
            </Button>
           
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
          </Box>
        </Box>
      
      <ToastContainer/>
      </Container>
    </ThemeProvider>
  );
}

export default Login;