import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import PageLayout from "./components/PageLayout";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import LevelSelectPage from "./pages/LevelSelectPage/LevelSelectPage";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="levels" element={<LevelSelectPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
