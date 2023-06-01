import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Frame from "../../components/Frame";
import LevelDescription from "../../components/LevelDescription/LevelDescription";
import LevelDiscussion from "../../components/LevelDiscussion/LevelDiscussion";
import styles from "./LevelDetailsPanel.module.css";
import { LevelContext } from "../../context/LevelContext";
import { Box } from "@mui/material";

export default function LevelDetailsPanel() {

  const { selectedQuestion } = useContext(LevelContext);

  const location = useLocation();
  const [selected, setSelected] = React.useState(
    location.state?.tab === "discussion" ? false : true
  );
  return (
    <Frame
      sx={{
        height: 1,
      }}
    >
      <Box sx={{
        height: 1,
      }}>
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

        {selected ? (
          <LevelDescription/>
        ) : selectedQuestion ? (
          <LevelDiscussion/>
        ) : (
          <div>Loading...</div>
        )}
      </Box>
    </Frame>
  );
}