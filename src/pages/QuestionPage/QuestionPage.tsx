import { useContext, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import { Grid, Typography } from "@mui/material";
import QuestionDescription from "./QuestionDescription";
import styles from "./QuestionPage.module.css";
import GraphApplication from "../../components/GraphApplication";
import GraphCheckModal from "../../components/GraphCheckModal/GraphCheckModal";

import {
  gitCommitPushNodes,
  gitCommitPushEdges,
  gitCommitPushNodesGoal,
  gitCommitPushEdgesGoal,
} from "../../components/GitGraph/git-commit-push-nodes-edges";
import { LevelContext } from "../../context/LevelContext";
import QuestionStartModal from "../../components/QuestionStartModal/QuestionStartModal";

const QuestionPage = () => {
  const { selectedQuestion } = useContext(LevelContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [isGraphCheckModalOpen, setGraphCheckModalOpen] = useState(false);
  const [isOpened, setOpened] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (isComplete) {
      handleModalOpen();
    } else {
      setGraphCheckModalOpen(true);
    }
  };

  const closeGraphCheckModal = () => {
    setGraphCheckModalOpen(false);
  };

  const handleFirstModalClose = () => {
    setOpened(false);
  };

  return(
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavigationBar />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Grid className={styles["main-grid"]} container spacing={2}>
          <Grid item xs={4} sx={{ height: "100%" }}>
            <QuestionDescription
              onSubmit={handleSubmit}
              title={selectedQuestion.description.title}
            >
              <div>
                <Typography variant="h3">
                  Activity: {selectedQuestion.description.activity}
                </Typography>
                <ul>
                  {selectedQuestion.description.plan.map((planItem, index) => (
                    <li key={index}>{planItem}</li>
                  ))}
                </ul>
              </div>
            </QuestionDescription>
          </Grid>
          <Grid item xs={8} sx={{ height: "100%" }}>
            <GraphApplication
              initialGraph={selectedQuestion.initialGraph || {
                nodes: gitCommitPushNodes,
                edges: gitCommitPushEdges,
              }}
              goalGraph={selectedQuestion.goalGraph || {
                nodes: gitCommitPushNodesGoal,
                edges: gitCommitPushEdgesGoal,
              }}
              answers={selectedQuestion.discussion.commands}
              setComplete={setComplete}
            />
          </Grid>
        </Grid>
      </div>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
      <GraphCheckModal
        isOpen={isGraphCheckModalOpen}
        onClose={closeGraphCheckModal}
      />
      {isOpened && <QuestionStartModal onClose={handleFirstModalClose} />}
    </div>
  );
};

export default QuestionPage;
