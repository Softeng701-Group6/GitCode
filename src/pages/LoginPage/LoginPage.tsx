import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
      <div className="loginContainerv2">
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <div className="inputContainer">
            <Typography>EMAIL</Typography>
            <TextField
              className="textfield"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <Typography>PASSWORD</Typography>
            <TextField
              className="textfield"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="loginBTN">
            LOGIN
          </button>
        </form>

        <span className="or">or</span>

        <button onClick={handleGoogleSignin} className="googleBTN">
          <i className="fa-brands fa-google"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
