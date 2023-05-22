import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import LevelSelectPage from "./pages/LevelSelectPage/LevelSelectPage";
import TestPage from "./components/TestPage.tsx";
import LandingPage from "./components/LandingPage/landingpage";
import "./App.css";
import QuestionPage from "./pages/QuestionPage/QuestionPage.tsx";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/home" element={<LevelSelectPage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
