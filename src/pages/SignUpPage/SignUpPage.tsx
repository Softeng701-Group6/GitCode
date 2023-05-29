import { Box, Button, Container, Grid, TextField, Typography, } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./SignUpPage.module.css";
import { User } from "../../models/types";
import { isDocumentExists, storeDocument } from "../../firebase/firestoreUtils";
import { Collection } from "../../firebase/firebaseEnums.ts";

const Signuppage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const newUser: User = {
        id: user.uid,
        name: "New User",
        email: email,
        expProgress: "0",
        level: "1",
        profileImg: "",
        completedQuestions: [],
        attemptedQuestions: [],
      };
      await storeDocument(Collection.USERS, newUser);

      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      if (await isDocumentExists(Collection.USERS, user.uid)) {
        navigate("/home");
      } else {
        const newUser: User = {
          id: user.uid,
          name: "New User",
          email: email,
          expProgress: "0",
          level: "1",
          profileImg: "",
          completedQuestions: [],
          attemptedQuestions: [],
        };
        await storeDocument(Collection.USERS, newUser);

        navigate("/home");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
      <Container component="main" maxWidth="xs" sx={{ textAlign: 'center' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={styles["input-container"]}
          spacing={2}
        >
          <Typography variant="h1" className={styles["heading"]}>
            {" "}
            Sign Up{" "}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignup}
            noValidate
            className={styles["form"]}
          >
            <Typography className={styles["sub-heading"]}>EMAIL</Typography>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
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
              id="password"
              name="password"
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              InputProps={{ className: styles["input-box"] }}
            />

            <Typography className={styles["sub-heading"]}>
              CONFIRM PASSWORD
            </Typography>
            <TextField
              required
              fullWidth
              id="confirm-password"
              name="confirm password"
              type="password"
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
              size="small"
              InputProps={{ className: styles["input-box"] }}
            />

            <Button
              className={styles["button"]}
              type="submit"
              variant="contained"
            >
              SIGN UP
            </Button>
            <Grid container direction="column">
              <span className={styles["or"]}> OR </span>
              <Grid item xs>
                <Button
                  onClick={handleGoogleSignup}
                  className={styles["button"]}
                >
                  <GoogleIcon className={styles["google-icon"]}/> SIGN UP WITH
                  GOOGLE
                </Button>
              </Grid>
              <Grid item xs>
                <Link to="/login" className={styles["link"]}>
                  {"Already Have An Account?"}{" "}
                  <b>
                    {" "}
                    <u>Log In </u>
                  </b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Signuppage;
