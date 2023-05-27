import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import { Grid, Typography } from "@mui/material";
import QuestionDescription from "./QuestionDescription";
import styles from "./QuestionPage.module.css";
import GraphApplicationTest from "../GraphApplicationTest/GraphApplicationTest";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            onSubmit={handleModalOpen}
            title={"Lesson 1: Introduction to Git Commit and Push"}
          >
            <div>
              <Typography variant="h3">
                Activity: Committing and Pushing Changes
              </Typography>
              <ul>
                <li>
                  In this activity, we will guide you through the process of
                  committing and pushing changes to a Git repository.
                </li>
                <li>
                  All changes have already been added and staged, now we need to
                  commit and push our changes onto main.
                </li>
                <li>
                  Use git commit commands in the terminal to complete this task
                  and click submit to check!
                </li>
                <li>
                  Feel free to use hints located on the right side of the screen
                  if you are require further guidance.
                </li>
              </ul>
            </div>
          </QuestionDescription>
        </Grid>
        <Grid item xs={8}>
          {/* TODO: replace with proper GraphApplication using fetched graph from database */}
          <GraphApplicationTest />
        </Grid>
      </Grid>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
    </div>
  );
};

export default QuestionPage;
