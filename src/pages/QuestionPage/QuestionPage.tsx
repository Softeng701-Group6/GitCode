import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import { Grid, Typography } from "@mui/material";
import QuestionDescription from "./QuestionDescription";
import styles from "./QuestionPage.module.css";
import GraphApplication from "../../components/GraphApplication";

import {
  initialEdges,
  initialNodes,
} from "../../components/GitGraph/initial-firebase-nodes-edges";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavigationBar />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Grid className={styles["main-grid"]} container spacing={2}>
          <Grid item xs={4} sx={{height: '100%'}}>
            <QuestionDescription
              onSubmit={() => isComplete && handleModalOpen()}
              title={"Lesson 1: Introduction to Git Commit and Push"}
            >
              <div>
                <Typography variant="h3">
                  Activity: Committing and Pushing Changes
                </Typography>
                <ul>
                  <li>
                    All changes have already been added and staged, now we need
                    to commit and push our changes onto main.
                  </li>
                  <li>
                    Use git commit commands in the terminal to complete this
                    task and click submit to check!
                  </li>
                </ul>
              </div>
            </QuestionDescription>
          </Grid>
          <Grid item xs={8} sx={{height: '100%'}}>
            <GraphApplication
              initialGraph={{ nodes: initialNodes, edges: initialEdges }}
              goalGraph={{ nodes: [], edges: [] }}
              setComplete={setComplete}
            />
          </Grid>
        </Grid>
      </div>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
    </div>
  );
};

export default QuestionPage;
