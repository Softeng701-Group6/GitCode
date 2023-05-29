import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, firestore, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "../../pages/SignUpPage/SignUpPage.module.css";
import { doc, getDoc, setDoc } from "firebase/firestore";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user) {
        throw new Error("Failed to authenticate user");
      }

      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        const newUser = {
          email: user.email,
          name: "",
          expProgress: "0",
          level: "1",
          profileImg: "",
          completedQuestions: [],
          attemptedQuestions: [],
        };

        await setDoc(userDocRef, newUser);
      }

      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);

      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        const newUser = {
          email: user.email,
          name: "",
          expProgress: "0",
          level: "1",
          profileImg: "",
          completedQuestions: [],
          attemptedQuestions: [],
        };

        await setDoc(userDocRef, newUser);
      }

      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh'}}>
      <Container component="main" maxWidth="xs" sx={{textAlign: 'center'}}>
        <Box className={styles["input-container"]}>
          <Typography variant="h1" className={styles["heading"]}>
            {" "}
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            className={styles["form"]}
          >
            <Typography className={styles["sub-heading"]}>EMAIL</Typography>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              InputProps={{ className: styles["input-box"] }}
            />
            <Typography className={styles["sub-heading"]}>PASSWORD</Typography>
            <TextField
              required
              fullWidth
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              InputProps={{ className: styles["input-box"] }}
            />
            <Button
              type="submit"
              variant="contained"
              className={styles["button"]}
            >
              LOG IN
            </Button>
            <Grid container direction="column">
              <span className={styles["or"]}> OR </span>
              <Grid item xs>
                <Button
                  onClick={handleGoogleSignin}
                  className={styles["button"]}
                >
                  <GoogleIcon className={styles["google-icon"]} /> SIGN IN WITH
                  GOOGLE
                </Button>
              </Grid>
              <Grid item xs>
                <Link to="/signup" className={styles["link"]}>
                  {"Don't have an account?"}{" "}
                  <b>
                    {" "}
                    <u>Sign Up </u>
                  </b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
