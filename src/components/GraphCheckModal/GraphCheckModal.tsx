import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./GraphCheckModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import motivationImg from "../../assets/keepgoing.png";

const GraphCheckModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    onClose();
  };

  const handleGoToDiscussion = () => {
    navigate("/home", { state: { tab: "discussion" } });
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={styles["modal-container"]}>
        <div
          className={styles["modal-close-button"]}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </div>
        <Typography variant="h3" className={styles["modal-title"]}>
          Almost There!
        </Typography>
        <Typography variant="h4" className={styles["modal-question-title"]}>
          Check that your graph matches the desired graph in this question!
        </Typography>

        <img className={styles["imgContainer"]} src={motivationImg} />

        <Typography variant="body1" className={styles["modal-text"]}>
          If you are still struggling try the following!{" "}
        </Typography>
        <ul className={styles["modal-key-commands"]}>
          <li>Get a hint from the top right hand corner</li>
          <li>
            Only allow correct commands by toggling the button in the top right
            hand corner
          </li>
        </ul>
        <Typography className={styles["modal-discussion"]}>
          Still stuck? View the discussion page after attempting the question!{" "}
          <a onClick={handleGoToDiscussion} className={styles["modal-link"]}>
            here
          </a>
          .
        </Typography>
      </Box>
    </Modal>
  );
};

export default GraphCheckModal;
