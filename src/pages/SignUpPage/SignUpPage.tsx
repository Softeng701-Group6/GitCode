import { TextField, Typography, Button, Container, Grid, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';

const Signuppage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSignup = async (event: any) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
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
          }}> Create Your Account  
        </Typography>

        <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
          <Typography sx={{ color: 'white', textAlign: 'left'}}>EMAIL</Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
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
            className="textfield"
            placeholder="Enter your password..."
            variant="outlined"
            type="password"
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

          <Typography sx={{ color: 'white', textAlign: 'left'}}>CONFIRM PASSWORD</Typography>
          <TextField
            required
            fullWidth
            className="textfield"
            placeholder="Re-enter your password"
            variant="outlined"
            type="password"
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
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
            SIGN UP
          </Button>
          <Grid container direction="column">
            <span style={{ color: 'white' }}> OR </span>
            <Grid item xs>
              <Button onClick={handleGoogleSignup} sx={{borderRadius: '9px', color:'white'}}>
                <GoogleIcon sx={{color:'white'}} /> SIGN UP WITH GOOGLE
              </Button>
            </Grid>
            <Grid item xs>
              <Link to="/login" style={{color:'#FFB800', marginTop: '1%'}}>
                {"Already Have An Account?"} <b> <u>Log In </u></b>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signuppage;
