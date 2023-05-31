import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./QuestionStartModal.module.css";
import GreenButton from "../GreenButton/GreenButton";

export default function QuestionStartModal({ onClose }: { onClose: () => void }) {

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal open={true} onClose={handleCloseModal}>
      <Box className={styles["modal-container"]}>
        <Typography variant="h4" className={styles["modal-question-title"]}>
          If you're stuck...
        </Typography>
        <br />
        <Typography variant="body1" className={styles["modal-text"]}>
          At the top right of the screen you will find a hint button and below it a switch that toggles correct commands only mode.
        </Typography>
        <br />
        <Typography variant="h4" className={styles["modal-subtitle"]}>
        When in correct commands only mode:
        </Typography>
        <ul className={styles["modal-key-commands"]}>
          <li>Incorrect commands will be printed red and will not update the graph</li>
          <li>Correct command will be printed green and will update the graph</li>
        </ul>
        <Typography></Typography>
        <Typography variant="h4" className={styles["modal-subtitle"]}>
        The hint button
        </Typography>
        <ul className={styles["modal-key-commands"]}>
          <li>Hover over to get a hint and press to cycle through hints</li>
        </ul>
        <GreenButton onClick={handleCloseModal}>Begin Question</GreenButton>
      </Box>
    </Modal>
  );
}
