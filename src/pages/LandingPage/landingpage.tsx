import { Button, Grid, Typography, Container } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
      <Container component="main">
        <Grid container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
            <Typography variant="h1" sx={{ 
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              position: 'relative',
              float: 'left',
              justifyContent: 'flex-start',
              color: 'white',
              fontSize: 64,
              fontStretch: 2
              }}>Git
            </Typography> 
            <Typography variant="h1" sx={{ 
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              position: 'relative',
              float: 'left',
              justifyContent: 'flex-start', 
              color:'#FFB800',
              fontSize: 64,
              fontStretch: 2
              }}>Code.
              </Typography>
            </Grid>
          <Typography variant="h4" sx={{color: 'white'}}>
            Level up your Git skills with interactive coding challenges and master the art of version control.
          </Typography>
          <Button onClick={handleRedirect} style={{ 
            backgroundColor: 'transparent', borderRadius: '9px', border: '0.5px solid white', color: 'white', marginTop: '20%' }} >
          <Typography variant="button">GET STARTED</Typography>
          </Button>
        </Grid>
      </Container>
  );
};

export default LandingPage;
