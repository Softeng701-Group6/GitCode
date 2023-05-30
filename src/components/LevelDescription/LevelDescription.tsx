import { Box, Divider, Stack, Typography } from "@mui/material";
import styles from "./LevelDescription.module.css";
import { useNavigate } from "react-router-dom";
import GreenButton from "../GreenButton/GreenButton";
import { useContext } from "react";
import { LevelContext } from "../../context/LevelContext";

/*To go in the LevelSelectPage 
<LevelDescription title='1. Commit and Push' content = '1. Sed luctus venenatis massa. Nam sagittis neque nec purus aliquam, a tempus velit hendrerit. Pellentesque ac risus aliquet, egestas orci vitae, feugiat tellus. 2. Morbi id tortor id enim consectetur consectetur. Praesent orci erat, consectetur quis efficitur pretium, auctor blandit lorem. Donec lobortis arcu ac dui luctus tincidunt. 3. Proin scelerisque arcu sapien, eu tristique lorem dictum eget. Suspendisse mollis tempor ligula nec iaculis. Quisque maximus interdum nunc, ut convallis quam pretium vitae. Duis posuere neque urna, id auctor arcu consectetur id. Ut mollis lectus tortor, eu tempus quam vestibulum at. Integer in leo non nisi scelerisque molestie. Nullam ut volutpat ante. 4. Duis ultrices erat urna, eu semper augue euismod eget. Nulla ac elit nunc. Mauris non diam quam. Nullam consectetur ipsum non metus blandit bibendum'/> */
export default function LevelDescription() {
  const navigate = useNavigate();

  const { selectedQuestion } = useContext(LevelContext);

  function startProblem() {
    // Any logic before starting problem

    navigate("../question");
  }

  return (
    <Stack className={styles["container"]}>
      <Typography className={styles["title"]} variant="h2">
        {selectedQuestion.title}
      </Typography>
      <Typography className={styles["objectives-heading"]} variant="h3">
        Learning Objectives
      </Typography>
      <ul>
        {selectedQuestion.learningObjective.outcomeArray.map((outcome, index) => (
          <li key={index}>
            <Typography sx={{ textAlign: "left" }}>{outcome}</Typography>
          </li>
        ))}
      </ul>
      <Divider className={styles["divider"]} variant="middle" />
      <Box sx={{ flexGrow: 1 }}></Box>
      <GreenButton onClick={startProblem}>Start Problem</GreenButton>
    </Stack>
  );
}
