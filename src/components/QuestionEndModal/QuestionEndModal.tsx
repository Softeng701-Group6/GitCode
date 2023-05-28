import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./QuestionEndModal.module.css";
import tick from "../../assets/green_check.png";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";
import GreenButton from "../GreenButton/GreenButton";

export default function QuestionEndModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  const handleGoToQuestions = () => {
    navigate("/home");
  };

  const handleGoToDiscussion = () => {
    navigate("/home", { state: { tab: "discussion" } });
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal open={true} onClose={handleCloseModal}>
      <Box className={styles["modal-container"]}>
        <div
          className={styles["modal-close-button"]}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </div>
        <Typography variant="h4" className={styles["modal-title"]}>
          Level Complete!
        </Typography>
        <Typography variant="h4" className={styles["modal-question-title"]}>
          1. Commit and Push
        </Typography>
        <img className={styles["green-tick"]} src={tick} alt="Green Tick" />
        <Typography variant="body1" className={styles["modal-text"]}>
          Take a moment to reflect on the Lesson.
        </Typography>
        <Typography variant="body2" className={styles["modal-text"]}>
          Key Commands Used In this Lesson:
        </Typography>
        <ul className={styles["modal-key-commands"]}>
          <li>git commit -m "Message"</li>
          <li>git push</li>
        </ul>
        <Typography variant="body2" className={styles["modal-text"]}>
          By committing and pushing changes regularly, you maintain a reliable
          and traceable history of your project, enabling seamless collaboration
          with other developers.
        </Typography>

        <Typography></Typography>
        <Typography variant="body2" className={styles["modal-text"]}>
          You had a great answer to this question! To read more about the
          solution or post your answer in the discussion{" "}
          <a onClick={handleGoToDiscussion} className={styles["modal-link"]}>
            click here
          </a>
          .
        </Typography>
        <GreenButton onClick={handleGoToQuestions}>Go To Questions</GreenButton>
      </Box>
    </Modal>
  );
}
