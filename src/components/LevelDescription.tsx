import { Box, Divider, Stack, Typography } from "@mui/material";
import styles from "./LevelDescription.module.css";
import { useNavigate } from "react-router-dom";
import GreenButton from "./GreenButton/GreenButton";

interface Props {
  title: string;
  content: string;
}
/*To go in the LevelSelectPage 
<LevelDescription title='1. Commit and Push' content = '1. Sed luctus venenatis massa. Nam sagittis neque nec purus aliquam, a tempus velit hendrerit. Pellentesque ac risus aliquet, egestas orci vitae, feugiat tellus. 2. Morbi id tortor id enim consectetur consectetur. Praesent orci erat, consectetur quis efficitur pretium, auctor blandit lorem. Donec lobortis arcu ac dui luctus tincidunt. 3. Proin scelerisque arcu sapien, eu tristique lorem dictum eget. Suspendisse mollis tempor ligula nec iaculis. Quisque maximus interdum nunc, ut convallis quam pretium vitae. Duis posuere neque urna, id auctor arcu consectetur id. Ut mollis lectus tortor, eu tempus quam vestibulum at. Integer in leo non nisi scelerisque molestie. Nullam ut volutpat ante. 4. Duis ultrices erat urna, eu semper augue euismod eget. Nulla ac elit nunc. Mauris non diam quam. Nullam consectetur ipsum non metus blandit bibendum'/> */
export default function LevelDescription({ title, content }: Props) {
  const navigate = useNavigate();

  function startProblem() {
    // Any logic before starting problem

    navigate("../question");
  }

  return (
    <div style={{ flex: 1 }} className={styles["container"]}>
      <Typography
        className={styles["title"]}
        sx={{ fontWeight: "bold", fontSize: 32 }}
      >
        {title}
      </Typography>
      <Typography
        className={styles["objectives-heading"]}
        sx={{ fontWeight: "bold", fontSize: 24 }}
      >
        Learning Objectives
      </Typography>
      <Typography className={styles["content"]} sx={{ py: 4 }}>
        {content}
      </Typography>
      <Divider className={styles["divider"]} variant="middle" />
      <Box sx={{ flexGrow: 1 }}></Box>
      <GreenButton onClick={startProblem} style={{ alignSelf: "bottom" }}>
        Start Problem
      </GreenButton>
      <Box sx={{ py: 1 }}></Box>
    </div>
  );
}
