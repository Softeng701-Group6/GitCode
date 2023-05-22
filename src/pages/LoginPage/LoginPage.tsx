import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./loginpage.css";
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
    <div className="loginContainer">
      <NavigationBar />
      <div className="loginContainerv2">
        <Typography
          variant="h3"
          sx={{
            letterSpacing: 3.5,
            fontWeight: "bold",
            margin: "8%",
            padding: "8%",
          }}
        >
          {" "}
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <div className="inputContainer">
            <Typography>EMAIL</Typography>
            <TextField
              className="textfield"
              placeholder=""
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: "white" },
              }}
            />
          </div>

          <div className="inputContainer">
            <Typography>PASSWORD</Typography>
            <TextField
              className="textfield"
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: "white" },
              }}
            />
          </div>

          <button type="submit" className="loginBTN">
            LOGIN
          </button>
        </form>
        <div className="optionsContainer">
          <p>OR</p>
          <button onClick={handleGoogleSignin} className="googleBTN">
            <i className="fa-brands fa-google"></i> Sign in with Google
          </button>
          OR{" "}
          <Link to="/signup" style={{ color: "#FFB800" }}>
            <b>CREATE AN ACCOUNT </b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
