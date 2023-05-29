import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import { Grid, Typography} from "@mui/material";
import QuestionDescription from "./QuestionDescription";
import styles from "./QuestionPage.module.css";
import GraphApplication from "../../components/GraphApplication";

import {
  initialEdges,
  initialNodes,
} from "../../components/GitGraph/initial-firebase-nodes-edges";
import HintToolTip from "../../components/HintToolTip/HintToolTip";

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
    <div>
      <NavigationBar />
      <Grid className={styles["main-grid"]} container spacing={2} sx={{}}>
        <Grid item xs={4}>
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
                  All changes have already been added and staged, now we need to
                  commit and push our changes onto main.s
                </li>
                <li>
                  Use git commit commands in the terminal to complete this task
                  and click submit to check!
                </li>
              </ul>
            </div>
          </QuestionDescription>
        </Grid>
        <Grid item xs={8}>
          <HintToolTip/>
          <GraphApplication
            initialGraph={{ nodes: initialNodes, edges: initialEdges }}
            goalGraph={{ nodes: [], edges: [] }}
            setComplete={setComplete}
          />
        </Grid>
      </Grid>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
    </div>
  );
};

export default QuestionPage;
