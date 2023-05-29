import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LevelSelectPage from "./pages/LevelSelectPage/LevelSelectPage";
import LandingPage from "./pages/LandingPage/landingpage";
import QuestionPage from "./pages/QuestionPage/QuestionPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute/index.tsx";
import { useState } from "react";
import { auth } from "./firebase/firebase.ts";
import { User as FirebaseUser } from "firebase/auth";
import { LevelContextProvider } from "./context/LevelContext.tsx";
import LevelContextLayout from "./components/LevelContextLayout.tsx";

function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setLoading] = useState(true);

  auth.onAuthStateChanged((firebaseUser) => {
    setUser(firebaseUser);
    setLoading(false);
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route element={<LevelContextLayout />}>
            <Route
              path="/home"
              element={
                <ProtectedRoute user={user}>
                  <LevelSelectPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/question"
              element={
                <ProtectedRoute user={user}>
                  <QuestionPage/>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
