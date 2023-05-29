import * as React from "react";
import { green, purple } from "@mui/material/colors";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";
import { Grid, Stack } from "@mui/material";
import Frame from "../../components/Frame";
import styles from "./LevelSelectPage.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LevelDescription from "../../components/LevelDescription/LevelDescription";
import LevelDiscussion from "../../components/LevelDiscussion/LevelDiscussion.tsx";
import { DUMMY_DATA_QUESTIONS } from "../../data/dummyData.ts";
import { useEffect, useState } from "react";
import { Question } from "../../models/types.ts";
import { useLocation } from "react-router-dom";
import LevelCardList from "./LevelCardList.tsx";
import LevelDetailsPanel from "./LevelDetailsPanel.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.tsx";

export default function LevelSelectPage() {

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setQuestionId] = useLocalStorage("selectedQuestionId");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function init() {
      // Linking to firebase

      // const allQs = await getCollection<Question>(Collection.QUESTIONS);
      // setAllQuestions(allQs);
      // setIsLoading(false);

      setAllQuestions(DUMMY_DATA_QUESTIONS);
      setQuestionId(DUMMY_DATA_QUESTIONS[0].id)
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
          <LevelDetailsPanel question={selectedQuestionId}/>
        </Grid>
      </Grid>
    </div>
  );
}
