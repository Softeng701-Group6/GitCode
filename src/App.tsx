import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/loginpage";
import "./App.css";
import TestPage from "./components/TestPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
