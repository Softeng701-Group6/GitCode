import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import "./QuestionPage.module.css";
import { Grid } from "@mui/material";
import QuestionDescription from "./QuestionDescription";
import styles from "./QuestionPage.module.css";

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
          <QuestionDescription onSubmit={handleModalOpen} />
        </Grid>
        <Grid item xs={8}>
          {/* TODO: add Graph-Terminal parent component here */}
        </Grid>
      </Grid>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
    </div>
  );
};

export default QuestionPage;
