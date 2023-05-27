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
import { DUMMY_DATA_QUESTIONS } from "../../firebase/db/dummyData.ts";
import { useEffect, useState } from "react";
import { Question } from "../../models/types.ts";

const tags = [
  {
    name: "commit",
    color: purple[400],
  },
  {
    name: "push",
    color: green[600],
  },
];

export default function LevelSelectPage() {
  const [selected, setSelected] = React.useState<boolean | null>(true);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
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
      <NavigationBar />
      <Grid
        className={styles.mainGrid}
        container
        spacing={2}
        sx={{ height: 0.85 }}
      >
        <Grid item xs={4}>
          <Stack direction="column">
            <LevelCard
              level="1. Commit and Push"
              difficulty="Easy"
              tags={tags.map((tag, index) => {
                return (
                  <Tag key={index} color={tag.color}>
                    {tag.name}
                  </Tag>
                );
              })}
            />
            <LevelCard
              level="2. Checkout and Branch"
              difficulty="Easy"
              tags={tags.map((tag, index) => {
                return (
                  <Tag key={index} color={tag.color}>
                    {tag.name}
                  </Tag>
                );
              })}
            />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Frame
            sx={{
              height: 1,
            }}
          >
            <div>
              <span>
                <button
                  className={selected ? styles.selected : styles.unselected}
                  onClick={() => {
                    setSelected(true);
                  }}
                >
                  DESCRIPTION
                </button>
                <button
                  className={!selected ? styles.selected : styles.unselected}
                  onClick={() => {
                    setSelected(false);
                  }}
                >
                  DISCUSSION
                </button>
              </span>
              {/* Place description/ discussion component here */}
              {selected ? (
                <LevelDescription title="Description" content="Content" />
              ) : (
                <LevelDiscussion question={allQuestions[0]} />
              )}
            </div>
          </Frame>
        </Grid>
      </Grid>
    </div>
  );
}
