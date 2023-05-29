import { Grid } from "@mui/material";
import styles from "./LevelSelectPage.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { DUMMY_DATA_QUESTIONS } from "../../data/dummyData.ts";
import { useState } from "react";
import { Question } from "../../models/types.ts";
import LevelCardList from "./LevelCardList.tsx";
import LevelDetailsPanel from "./LevelDetailsPanel.tsx";

export default function LevelSelectPage() {

  const [allQuestions] = useState<Question[]>(DUMMY_DATA_QUESTIONS);

  return (
    <div>
      <NavigationBar/>
      <Grid
        className={styles.mainGrid}
        container
        spacing={2}
        sx={{ height: 0.85 }}
      >
        <Grid item xs={4}>
          <LevelCardList questions={allQuestions}/>
        </Grid>
        <Grid item xs={8}>
          <LevelDetailsPanel/>
        </Grid>
      </Grid>
    </div>
  );
}
