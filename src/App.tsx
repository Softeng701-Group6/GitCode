import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/loginpage";
import "./App.css";
import TestPage from "./components/TestPage.tsx";
import LandingPage from "./components/LandingPage/landingpage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/home" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
