import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="homeContainer">
      <div className="title">
        <h4>Git</h4> <h4 id="code">Code.</h4>
      </div>
      <p>Level up your Git skills with interactive coding challenges and master the art of version control.</p>
        <button onClick={handleRedirect} className="redirectButton">
        GET STARTED
      </button>
    </div>
  );
};

export default LandingPage;
