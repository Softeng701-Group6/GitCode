import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
    <div className="loginContainer">
      <div className="loginContainerv2">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSignup}>
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
              placeholder="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <Typography>CONFIRM PASSWORD</Typography>
            <TextField
              className="textfield"
              placeholder="Confirm Password"
              variant="outlined"
              type="password"
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
            />
          </div>

          <button className="loginBTN">REGISTER</button>
        </form>

        <span className="or">or</span>

        <button onClick={handleGoogleSignup} className="googleBTN">
          <i className="fa-brands fa-google"></i> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signuppage;
