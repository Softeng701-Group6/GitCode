import { Grid } from "@mui/material";
import styles from "./LevelSelectPage.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { DUMMY_DATA_QUESTIONS } from "../../data/dummyData.ts";
import { useContext, useEffect, useState } from "react";
import { Question } from "../../models/types.ts";
import LevelCardList from "./LevelCardList.tsx";
import LevelDetailsPanel from "./LevelDetailsPanel.tsx";
import { LevelContext } from "../../context/LevelContext.tsx";

export default function LevelSelectPage() {

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const { selectedQuestion } = useContext(LevelContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function init() {
      // Linking to firebase

      // const allQs = await getCollection<Question>(Collection.QUESTIONS);
      // setAllQuestions(allQs);
      // setIsLoading(false);

      setAllQuestions(DUMMY_DATA_QUESTIONS);
    }

    init();
  }, []);

  return (
    <div>
      <NavigationBar/>
      <Grid
        className={styles.mainGrid}
        container
        spacing={2}
        sx={{height: 0.85}}
      >
        <Grid item xs={4}>
          <LevelCardList questions={allQuestions}/>
        </Grid>
        <Grid item xs={8}>
          <LevelDetailsPanel />
        </Grid>
      </Grid>
    </div>
  );
}
