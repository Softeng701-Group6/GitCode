import { Button, TextField, Typography, Container, Grid, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box m={2} pt={3}
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Typography variant="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'white',
            margin: '4%'
          }}> Login 
        </Typography>

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <Typography sx={{ color: 'white', textAlign: 'left'}}>EMAIL</Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Enter your email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            sx={{
              mt: 1, mb: 3,
              input: {color: 'white'},
              border: '1px solid white',
              borderRadius: '9px',
            }}
          /> 
          <Typography sx={{ color: 'white', textAlign: 'left'}}>PASSWORD</Typography>
          <TextField
            required
            fullWidth
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            sx={{
              mt: 1, mb: 3,
              input: {color: 'white'},
              border: '1px solid white',
              borderRadius: '9px'
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: 'transparent', border: '1px solid white', '&:hover': {
            backgroundColor: "#FFB800"}, borderRadius: '9px' }}
          >
            LOG IN
          </Button>
          <Grid container direction="column">
            <Grid item xs>
              <Button onClick={handleGoogleSignin} sx={{borderRadius: '9px', color:'white'}}>
                <GoogleIcon sx={{color:'white'}} /> SIGN IN WITH GOOGLE
              </Button>
            </Grid>
            <Grid item xs>
              <Link to="/signup" style={{color:'#FFB800', marginTop: '1%'}}>
                {"Don't have an account?"} <b> <u>Sign Up </u></b>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
