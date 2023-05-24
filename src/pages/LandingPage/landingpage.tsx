import { Button, Grid, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./landingpage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <Container component="main" className={styles["landing-container"]}>
      <Grid
        container
        spacing={6}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography
            variant="h1"
            className={styles["title"]}
            sx={{ color: "white" }}
          >
            Git
          </Typography>
          <Typography
            variant="h1"
            className={styles["title"]}
            sx={{ color: "#FFB800" }}
          >
            Code.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={styles["blurb"]}>
            Level up your Git skills with interactive coding <br />
            challenges and master the art of version control.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleRedirect} className={styles["button"]}>
            <Typography variant="button" sx={{ fontSize: "1.2rem" }}>
              GET STARTED
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;