import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./QuestionEndModal.css";
import tick from "../../assets/green_check.png";

import { useNavigate } from "react-router-dom";

export default function QuestionEndModal() {
  const navigate = useNavigate();

  const handleGoToQuestions = () => {
    navigate("/home");
  };

  return (
    <Modal open={true} onClose={handleGoToQuestions}>
      <Box className="modal-container">
        <Typography variant="h4" className="modal-title">
          Level Complete!
        </Typography>
        <Typography variant="h4" className="modal-question-title">
          1. Commit and Push
        </Typography>
        <img className="green-tick" src={tick} />
        <Typography variant="body1" className="modal-text">
          Take a moment to reflect on the importance of these actions in version
          control and collaborative development. By committing and pushing
          changes regularly, you maintain a reliable and traceable history of
          your project, enabling seamless collaboration with other developers.
        </Typography>
        <Typography variant="body1" className="modal-text">
          For more information and to continue the discussion, please visit the
          discussion page for this question{" "}
          <a href="INSERT LINK to description" className="modal-link">
            here
          </a>
          .
        </Typography>
        <Button
          className="modal-close-button"
          variant="contained"
          onClick={handleGoToQuestions}
        >
          Return to Questions
        </Button>
      </Box>
    </Modal>
  );
}
